import sharp from "sharp";

export interface RedactionBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * Redacts PII from an image buffer using provided coordinates.
 * Coordinates are assumed to be normalized to a 1000x1000 grid.
 */
export async function redactImage(
  inputBuffer: Buffer,
  boxes: RedactionBox[],
): Promise<Buffer> {
  const startTime = performance.now();
  if (boxes.length === 0) return inputBuffer;

  const image = sharp(inputBuffer);
  const metadata = await image.metadata();
  const width = metadata.width || 0;
  const height = metadata.height || 0;

  const compositeOperations = [];

  for (const box of boxes) {
    // Convert normalized coordinates to absolute pixels
    const absX = Math.floor((box.x / 1000) * width);
    const absY = Math.floor((box.y / 1000) * height);
    const absW = Math.floor((box.w / 1000) * width);
    const absH = Math.floor((box.h / 1000) * height);

    // Extract, blur, and prepare for composite
    const redactionOverlay = await sharp({
      create: {
        width: absW,
        height: absH,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 },
      },
    })
      .png()
      .toBuffer();

    compositeOperations.push({
      input: redactionOverlay,
      left: absX,
      top: absY,
    });
  }

  const result = await image.composite(compositeOperations).toBuffer();
  const duration = (performance.now() - startTime).toFixed(2);
  console.log(
    `🏥 Redaction Engine: Surgery complete in ${duration}ms (${boxes.length} masks applied).`,
  );
  return result;
}
