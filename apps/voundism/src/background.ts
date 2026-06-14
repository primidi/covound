/**
 * CoVound Shield: Background Service Worker
 * Handles network requests to bypass host-page CORS and CSP restrictions.
 */

const COVOUND_API_URL =
  (import.meta as any).env?.VITE_COVOUND_API_URL || "http://localhost:5173";

const VOUNDISM_SECRET = (import.meta as any).env.VITE_VOUNDISM_SECRET;

const SNAPSHOT_API = `${COVOUND_API_URL}/api/snapshot`;
const REPORT_API = `${COVOUND_API_URL}/api/report-anomaly`;
const REPORT_LEGIT_API = `${COVOUND_API_URL}/api/report-legit`;

chrome.runtime.onMessage.addListener(
  (
    message: any,
    _sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void,
  ) => {
    console.log("Voundism: Background received message:", message.type);

  if (message.type === "FETCH_REGISTRY") {
    fetch(SNAPSHOT_API)
      .then((response) => {
        if (!response.ok) throw new Error("Registry fetch failed");
        return response.json();
      })
      .then((data) => {
        sendResponse({
          success: true,
          whitelist: data.whitelist,
          blacklist: data.blacklist,
        });
      })
      .catch((error) => {
        console.error("Background Sync Failure:", error);
        sendResponse({ success: false, error: error.message });
      });
    return true;
  }

  if (message.type === "REPORT_ANOMALY") {
    fetch(REPORT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CoVound-Secret": VOUNDISM_SECRET,
      },
      body: JSON.stringify(message.payload),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Anomaly report failed");
        return response.json();
      })
      .then((data) => {
        sendResponse({ success: true, data });
      })
      .catch((error) => {
        console.error("Background Report Failure:", error);
        sendResponse({ success: false, error: error.message });
      });
    return true;
  }

  if (message.type === "REPORT_LEGIT") {
    fetch(REPORT_LEGIT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CoVound-Secret": VOUNDISM_SECRET,
      },
      body: JSON.stringify(message.payload),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Legit report failed");
        return response.json();
      })
      .then((data) => {
        sendResponse({ success: true, data });
      })
      .catch((error) => {
        console.error("Background Report Legit Failure:", error);
        sendResponse({ success: false, error: error.message });
      });
    return true;
  }

  // Explicitly return false for unhandled messages to avoid "asynchronous response indicated" issues
  return false;
});
