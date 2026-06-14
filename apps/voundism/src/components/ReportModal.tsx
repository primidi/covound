import { CheckCircle2, Loader2, ShieldAlert, XCircle } from "lucide-react";
import type React from "react";
import { useState, useEffect } from "react";

const translations = {
  en: {
    title: "Voundism: CoVound - Quick Triage",
    question: "Is <strong>{number}</strong> claiming to be an official contact for <strong>{entity}</strong>?",
    reportScam: "Report Scam",
    reporting: "Reporting...",
    isLegit: "It Is Legit",
    submitting: "Submitting...",
    successTitle: "Submission Successful",
    successMsg: "Thank you for helping immunize the community.",
    failedTitle: "Submission Failed",
    tryAgain: "Try again",
    quote: "Every report immunizes the whole community.",
  },
  id: {
    title: "Voundism: CoVound - Triase Cepat",
    question: "Apakah <strong>{number}</strong> mengaku sebagai kontak resmi untuk <strong>{entity}</strong>?",
    reportScam: "Laporkan Penipuan",
    reporting: "Melaporkan...",
    isLegit: "Ini Resmi",
    submitting: "Mengirim...",
    successTitle: "Pengiriman Berhasil",
    successMsg: "Terima kasih telah membantu mengimunisasi komunitas.",
    failedTitle: "Pengiriman Gagal",
    tryAgain: "Coba lagi",
    quote: "Setiap laporan mengimunisasi seluruh komunitas.",
  },
};

interface ReportModalProps {
  detectedNumber: string;
  institutionName: string;
  sourceUrl: string;
  onClose: () => void;
}

/**
 * Task 3.1: Component Architecture [FR2.4]
 * Standalone React component for the community flagging modal.
 */
export const ReportModal: React.FC<ReportModalProps> = ({
  detectedNumber,
  institutionName,
  sourceUrl,
  onClose,
}) => {
  const [lang, setLang] = useState<"en" | "id">("id");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      chrome.storage.local.get(["vound_lang"], (data) => {
        if (data.vound_lang === "en" || data.vound_lang === "id") {
          setLang(data.vound_lang);
        }
      });
    }
  }, []);

  const t = translations[lang];

  const reportScam = async () => {
    setStatus("submitting");
    try {
      const response = await chrome.runtime.sendMessage({
        type: "REPORT_ANOMALY",
        payload: {
          detectedNumber,
          institutionName,
          sourceUrl,
        },
      });

      if (response.success) {
        setStatus("success");
        setTimeout(onClose, 2000);
      } else {
        throw new Error(response.error || "Failed to report");
      }
    } catch (e) {
      console.error("Voundism: Background report failed.", e);
      setStatus("error");
    }
  };

  const reportLegit = async () => {
    setStatus("submitting");
    try {
      const response = await chrome.runtime.sendMessage({
        type: "REPORT_LEGIT",
        payload: {
          detectedNumber,
          institutionName,
          sourceUrl,
        },
      });

      if (response.success) {
        setStatus("success");
        setTimeout(onClose, 2000);
      } else {
        throw new Error(response.error || "Failed to report");
      }
    } catch (e) {
      console.error("Voundism: Background report legit failed.", e);
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2147483647,
        backgroundColor: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: "24px",
        padding: "24px",
        width: "320px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#0f172a",
        textAlign: "left",
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: "-100vh",
          left: "-100vw",
          width: "300vw",
          height: "300vh",
          backgroundColor: "rgba(15, 23, 42, 0.1)",
          backdropFilter: "blur(4px)",
          zIndex: -1,
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fee2e2",
            color: "#dc2626",
            padding: "8px",
            borderRadius: "12px",
          }}
        >
          <ShieldAlert size={20} />
        </div>
        <h4
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 800,
            letterSpacing: "-0.025em",
          }}
        >
          {t.title}
        </h4>
      </div>

      {(status === "idle" || status === "submitting") && (
        <>
          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.6,
              margin: "0 0 16px 0",
              color: "#475569",
            }}
            dangerouslySetInnerHTML={{
              __html: t.question
                .replace("{number}", detectedNumber)
                .replace("{entity}", institutionName),
            }}
          />
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              disabled={isSubmitting}
              onClick={reportScam}
              style={{
                flex: 2,
                backgroundColor: "#dc2626",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "12px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                opacity: isSubmitting ? 0.7 : 1,
                transition: "background-color 0.2s",
              }}
            >
              {isSubmitting && <Loader2 size={14} className="animate-spin" />}
              {isSubmitting ? t.reporting : t.reportScam}
            </button>
            <button
              disabled={isSubmitting}
              onClick={reportLegit}
              style={{
                flex: 1.5,
                backgroundColor: "#f1f5f9",
                color: "#475569",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "12px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "background-color 0.2s",
              }}
            >
              {isSubmitting ? t.submitting : t.isLegit}
            </button>
          </div>
        </>
      )}

      {status === "success" && (
        <div style={{ textAlign: "center", padding: "12px 0" }}>
          <CheckCircle2
            size={32}
            color="#059669"
            style={{ margin: "0 auto 8px" }}
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#059669",
              margin: "0 0 4px 0",
            }}
          >
            {t.successTitle}
          </p>
          <p style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>
            {t.successMsg}
          </p>
        </div>
      )}

      {status === "error" && (
        <div style={{ textAlign: "center", padding: "12px 0" }}>
          <XCircle size={32} color="#dc2626" style={{ margin: "0 auto 8px" }} />
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#dc2626",
              margin: "0 0 4px 0",
            }}
          >
            {t.failedTitle}
          </p>
          <button
            onClick={() => setStatus("idle")}
            style={{
              fontSize: "11px",
              color: "#2563eb",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            {t.tryAgain}
          </button>
        </div>
      )}

      <div
        style={{
          marginTop: "16px",
          paddingTop: "12px",
          borderTop: "1px solid #f1f5f9",
          fontSize: "10px",
          color: "#94a3b8",
          fontStyle: "italic",
          lineHeight: 1.4,
        }}
      >
        "{t.quote}"
      </div>
    </div>
  );
};
