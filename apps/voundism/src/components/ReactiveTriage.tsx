import type React from "react";
import { useState } from "react";

interface ReactiveTriageProps {
  institution?: string;
  detectedNumber: string;
}

export const ReactiveTriage: React.FC<ReactiveTriageProps> = ({
  institution,
  detectedNumber,
}) => {
  const [steps, setSteps] = useState({
    locked: false,
    purged: false,
    police: false,
    dispute: false,
  });

  const toggleStep = (step: keyof typeof steps) => {
    setSteps((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#fff",
        border: "2px solid #ef4444",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "10px 0",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px 0",
          color: "#991b1b",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "24px", marginRight: "8px" }}>🚑</span>
        Pertolongan Pertama (Triage)
      </h3>
      <p style={{ fontSize: "14px", color: "#4b5563", marginBottom: "15px" }}>
        Jika Anda sudah terlanjur menghubungi nomor{" "}
        <strong>{detectedNumber}</strong> atau mentransfer dana, silakan ikuti
        langkah darurat ini segera:
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label style={itemStyle(steps.locked)}>
          <input
            type="checkbox"
            checked={steps.locked}
            onChange={() => toggleStep("locked")}
          />
          <span>Blokir Akun {institution || "Bank"} Segera</span>
        </label>

        <label style={itemStyle(steps.purged)}>
          <input
            type="checkbox"
            checked={steps.purged}
            onChange={() => toggleStep("purged")}
          />
          <span>Putuskan Sesi/Ganti Password Email & Bank</span>
        </label>

        <label style={itemStyle(steps.police)}>
          <input
            type="checkbox"
            checked={steps.police}
            onChange={() => toggleStep("police")}
          />
          <span>Buat Laporan Polisi (STPL)</span>
        </label>

        <label style={itemStyle(steps.dispute)}>
          <input
            type="checkbox"
            checked={steps.dispute}
            onChange={() => toggleStep("dispute")}
          />
          <span>Ajukan Sanggahan Transaksi ke Bank</span>
        </label>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#fef2f2",
          borderRadius: "8px",
          fontSize: "12px",
          color: "#991b1b",
        }}
      >
        <strong>Saran CoVound Shield:</strong> "Tarik napas dalam. Kecepatan
        tindakan Anda sangat menentukan peluang pemulihan dana. Jangan panik,
        lakukan satu per satu."
      </div>
    </div>
  );
};

const itemStyle = (done: boolean) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "8px",
  borderRadius: "6px",
  backgroundColor: done ? "#f0fdf4" : "#f9fafb",
  color: done ? "#166534" : "#1f2937",
  cursor: "pointer",
  textDecoration: done ? "line-through" : "none",
  fontSize: "14px",
  border: "1px solid",
  borderColor: done ? "#bbf7d0" : "#e5e7eb",
});
