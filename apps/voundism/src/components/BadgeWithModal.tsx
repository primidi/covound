import { CircleHelp, ShieldAlert, ShieldCheck } from "lucide-react";
import type React from "react";
import { useCallback, useState } from "react";
import { ReportModal } from "./ReportModal";

interface BadgeWithModalProps {
  number: string;
  institution: string;
  level: "verified" | "pending" | "scam";
  sourceUrl: string;
}

/**
 * Task 3.3: Portal Injection Component [FR2.4]
 * Wraps the redaction badge with the interactive hover/click modal.
 */
export const BadgeWithModal: React.FC<BadgeWithModalProps> = ({
  number,
  institution,
  level,
  sourceUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isVerified = level === "verified";
  const isScam = level === "scam";

  const bgColor = isVerified ? "#dcfce7" : isScam ? "#fee2e2" : "#fef3c7";
  const textColor = isVerified ? "#065f46" : isScam ? "#991b1b" : "#92400e";
  const borderColor = isVerified ? "#4ade80" : isScam ? "#f87171" : "#fbbf24";
  const label = isVerified ? "Verified" : isScam ? "Scam" : "Pending";

  const tooltip = isVerified
    ? "Trusted: Verified Official Contact."
    : isScam
      ? "Confirmed Scam: Dangerous contact."
      : "Community review pending for this contact.";

  const toggleModal = useCallback(() => {
    if (!isVerified) {
      setIsOpen((prev) => !prev);
    }
  }, [isVerified]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleModal();
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        position: "relative",
        verticalAlign: "middle",
        outline: "none",
      }}
    >
      <div
        role="button"
        title={tooltip}
        aria-expanded={isOpen}
        aria-haspopup="true"
        tabIndex={0}
        onClick={toggleModal}
        onKeyDown={handleKeyDown}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          padding: "2px 6px",
          borderRadius: "6px",
          border: `1px solid ${borderColor}`,
          fontWeight: "bold",
          cursor: !isVerified ? "pointer" : "default",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: "11px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          lineHeight: "1",
          transition: "all 0.2s ease",
          boxShadow: isOpen ? "0 0 0 2px rgba(0,0,0,0.1)" : "none",
          userSelect: "none",
        }}
      >
        {isVerified ? (
          <ShieldCheck size={12} strokeWidth={3} />
        ) : isScam ? (
          <ShieldAlert size={12} strokeWidth={3} />
        ) : (
          <CircleHelp size={12} strokeWidth={3} />
        )}
        {label}
      </div>

      {isOpen && (
        <div
          style={{ position: "absolute", top: "100%", left: 0, zIndex: 10001 }}
        >
          <ReportModal
            detectedNumber={number}
            institutionName={institution}
            sourceUrl={sourceUrl}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};
