import { AlertTriangle, Loader2, RefreshCw, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import "./App.css";

/**
 * Task 4: Extension Dashboard [FR3.3]
 * Presentational component for the "Shield Status" popup.
 */
function App() {
  const [stats, setStats] = useState({
    contactsCount: 0,
    lastSync: null as number | null,
    isActive: true,
  });
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);

  const fetchStats = () => {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      chrome.storage.local.get(
        ["vounder_registry", "last_sync"],
        (data: any) => {
          setStats({
            contactsCount: data.vounder_registry?.length || 0,
            lastSync: data.last_sync || null,
            isActive: true,
          });
        },
      );
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const forceSync = () => {
    if (typeof chrome !== "undefined" && chrome.tabs) {
      setIsSyncing(true);
      setSyncError(null);
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab?.id) {
          chrome.tabs.sendMessage(activeTab.id, { type: "FORCE_SYNC" }, () => {
            if (chrome.runtime.lastError) {
              setSyncError(
                "Content script not loaded. Please refresh the page or open a supported site.",
              );
              setIsSyncing(false);
              return;
            }

            // Give it a moment to finish the fetch before updating local state
            setTimeout(() => {
              fetchStats();
              setIsSyncing(false);
            }, 1200);
          });
        } else {
          setIsSyncing(false);
        }
      });
    }
  };

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#fff",
        color: "#0f172a",
        fontFamily: "'Inter', system-ui, sans-serif",
        width: "100%",
        minHeight: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            backgroundColor: "#0f172a",
            color: "#fff",
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Shield className="w-5 h-5 fill-white" />
        </div>
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: 900,
              color: "#0f172a",
            }}
          >
            CoVound Shield
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              color: "#64748b",
              fontWeight: 600,
            }}
          >
            Truth & Trust Companion
          </p>
        </div>
      </div>

      {/* Status Card */}
      <div
        style={{
          backgroundColor: stats.isActive ? "#f0fdf4" : "#fef2f2",
          border: `1px solid ${stats.isActive ? "#bbf7d0" : "#fecaca"}`,
          borderRadius: "16px",
          padding: "16px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: stats.isActive ? "#166534" : "#991b1b",
            }}
          >
            SHIELD STATUS
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: stats.isActive ? "#22c55e" : "#ef4444",
                boxShadow: stats.isActive ? "0 0 8px #22c55e" : "none",
              }}
            />
            <span style={{ fontSize: "12px", fontWeight: 800 }}>
              {stats.isActive ? "ACTIVE" : "INACTIVE"}
            </span>
          </div>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: stats.isActive ? "#14532d" : "#7f1d1d",
            fontWeight: 500,
            fontStyle: "italic",
          }}
        >
          "CoVound Shield is monitoring for digital anomalies in your searches."
        </p>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}
        >
          <p
            style={{
              margin: "0 0 4px 0",
              fontSize: "10px",
              color: "#64748b",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            Immunized
          </p>
          <p style={{ margin: 0, fontSize: "20px", fontWeight: 900 }}>
            {stats.contactsCount}
          </p>
          <p style={{ margin: 0, fontSize: "10px", color: "#94a3b8" }}>
            Contacts
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}
        >
          <p
            style={{
              margin: "0 0 4px 0",
              fontSize: "10px",
              color: "#64748b",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            Last Sync
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: 700,
              padding: "4px 0",
            }}
          >
            {stats.lastSync
              ? new Date(stats.lastSync).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "Pending"}
          </p>
          <p style={{ margin: 0, fontSize: "10px", color: "#94a3b8" }}>
            Registry Snapshot
          </p>
        </div>
      </div>

      {syncError && (
        <div
          style={{
            backgroundColor: "#fef2f2",
            color: "#991b1b",
            padding: "12px",
            borderRadius: "12px",
            marginBottom: "16px",
            fontSize: "12px",
            fontWeight: 600,
            border: "1px solid #fecaca",
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{syncError}</span>
        </div>
      )}

      <button
        onClick={forceSync}
        disabled={isSyncing}
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "#0f172a",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontWeight: 800,
          fontSize: "13px",
          cursor: isSyncing ? "wait" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          transition: "all 0.2s",
          opacity: isSyncing ? 0.7 : 1,
        }}
      >
        {isSyncing ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <RefreshCw className="w-4 h-4" />
        )}
        {isSyncing ? "Syncing Registry..." : "Refresh Registry Snapshot"}
      </button>

      {/* Footer */}
      <div
        style={{
          marginTop: "24px",
          textAlign: "center",
          borderTop: "1px solid #f1f5f9",
          paddingTop: "16px",
        }}
      >
        <a
          href="http://localhost:5173"
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#2563eb",
            textDecoration: "none",
          }}
        >
          Open Triage Center →
        </a>
      </div>
    </div>
  );
}

export default App;
