import { Button } from "@covound/ui/components/ui/button";
import { Eraser, ImageIcon, Save, ShieldX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface RedactionBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface EvidenceCanvasProps {
  file: File;
  onConfirm: (boxes: RedactionBox[], sanitizedBlob: Blob) => void;
  onCancel: () => void;
}

/**
 * EvidenceCanvas - Clinical Browser-Side Redaction Tool
 * Part of the "Two-Stage Triage" Protocol.
 * Allows reporters to manually mask PII before it ever hits the server.
 */
export function EvidenceCanvas({ file, onConfirm, onCancel }: EvidenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [boxes, setBoxes] = useState<RedactionBox[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

  // Load image and set canvas size
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxWidth = 800;
        const scale = Math.min(1, maxWidth / img.width);
        
        const canvas = canvasRef.current;
        if (canvas) {
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
        }
        
        setImage(img);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, [file]);

  // Redraw on interaction
  useEffect(() => {
    draw();
  }, [image, boxes, currentPos, isDrawing]);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear and draw image
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Draw existing boxes
    ctx.fillStyle = "rgba(15, 23, 42, 0.95)"; // Slate-900 clinical mask
    ctx.strokeStyle = "#4f46e5"; // Indigo-600 border
    ctx.lineWidth = 2;

    for (const box of boxes) {
      ctx.fillRect(box.x, box.y, box.width, box.height);
      ctx.strokeRect(box.x, box.y, box.width, box.height);
      
      // Add a "Redacted" label inside
      if (box.width > 60 && box.height > 20) {
        ctx.fillStyle = "white";
        ctx.font = "bold 10px Inter, sans-serif";
        ctx.fillText("REDACTED", box.x + 5, box.y + 15);
        ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
      }
    }

    // Draw current box if drawing
    if (isDrawing) {
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(
        startPos.x,
        startPos.y,
        currentPos.x - startPos.x,
        currentPos.y - startPos.y
      );
      ctx.setLineDash([]);
    }
  };

  const getMousePos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    
    let clientX, clientY;
    if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const pos = getMousePos(e);
    setIsDrawing(true);
    setStartPos(pos);
    setCurrentPos(pos);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    setCurrentPos(getMousePos(e));
  };

  const handleMouseUp = () => {
    if (!isDrawing) return;
    
    const width = currentPos.x - startPos.x;
    const height = currentPos.y - startPos.y;

    // Only add if it's a valid box
    if (Math.abs(width) > 5 && Math.abs(height) > 5) {
      setBoxes([
        ...boxes,
        {
          x: width > 0 ? startPos.x : currentPos.x,
          y: height > 0 ? startPos.y : currentPos.y,
          width: Math.abs(width),
          height: Math.abs(height),
        },
      ]);
    }

    setIsDrawing(false);
  };

  const clearLast = () => setBoxes(boxes.slice(0, -1));
  const clearAll = () => setBoxes([]);

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (blob) {
        // We also pass the relative coordinates for server-side verification if needed
        onConfirm(boxes, blob);
      }
    }, "image/png");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="p-4 bg-indigo-50 border-2 border-indigo-100 rounded-2xl flex items-start gap-4">
        <ShieldX className="h-6 w-6 text-indigo-600 mt-1 shrink-0" />
        <div>
          <p className="text-sm font-black text-indigo-950 uppercase tracking-tighter">
            Surgical Redaction Mode
          </p>
          <p className="text-xs text-indigo-700 font-medium">
            Drag to draw masks over faces, names, or account numbers. 
            This happens locally on your device.
          </p>
        </div>
      </div>

      <div className="relative border-4 border-slate-900 rounded-[2rem] overflow-hidden bg-slate-200 shadow-2xl mx-auto max-w-full">
        {!image && (
          <div className="h-64 flex flex-col items-center justify-center text-slate-400 gap-3">
            <ImageIcon className="h-12 w-12 animate-pulse" />
            <p className="font-bold">Loading Evidence...</p>
          </div>
        )}
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="block cursor-crosshair mx-auto touch-none"
        />
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          type="button"
          variant="outline"
          onClick={clearLast}
          disabled={boxes.length === 0}
          className="rounded-xl font-bold border-2 border-slate-200"
        >
          <Eraser className="h-4 w-4 mr-2" /> Undo Last
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={clearAll}
          disabled={boxes.length === 0}
          className="rounded-xl font-bold border-2 border-slate-200 text-red-600 hover:text-red-700"
        >
          Clear All
        </Button>
        <div className="flex-1" />
        <Button
          type="button"
          variant="ghost"
          onClick={onCancel}
          className="rounded-xl font-bold"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={handleSave}
          className="rounded-xl font-black bg-slate-900 hover:bg-slate-800 text-white px-8"
        >
          <Save className="h-4 w-4 mr-2" /> Confirm Redaction
        </Button>
      </div>
    </div>
  );
}
