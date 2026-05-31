/**
 * Voundism Shield: Content Script
 * Injected into Google Search results to annotate numbers.
 */
console.log("🛡️ CoVound: Content Script Injected");

import { createRoot } from "react-dom/client";
import { BadgeWithModal } from "./components/BadgeWithModal";

const PHONE_REGEX = /(\+62|08)[0-9]{8,12}/g;

let whitelist: any[] = [];
let blacklist: any[] = [];

/**
 * Phase 6: Local Storage Hardening [FR3.2]
 * Synchronizes the registry via Background Worker.
 */
async function syncRegistry() {
  try {
    const response = await chrome.runtime.sendMessage({
      type: "FETCH_REGISTRY",
    });
    if (!response.success) throw new Error(response.error || "Sync failed");

    whitelist = response.whitelist || [];
    blacklist = response.blacklist || [];

    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      await chrome.storage.local.set({
        vounder_whitelist: whitelist,
        vounder_blacklist: blacklist,
        last_sync: Date.now(),
      });
      console.log(
        `Voundism: Sync success. W: ${whitelist.length}, B: ${blacklist.length}.`,
      );
    }
  } catch (e) {
    console.warn("Voundism: Background sync failed, using cache.", e);

    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      const data = (await chrome.storage.local.get([
        "vounder_whitelist",
        "vounder_blacklist",
      ])) as any;
      whitelist = data.vounder_whitelist || [];
      blacklist = data.vounder_blacklist || [];
    }
  }
}

/**
 * Scans the DOM for potential scammer numbers and annotates them.
 */
async function scanAndRedact() {
  if (whitelist.length === 0 && blacklist.length === 0) {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      const data = (await chrome.storage.local.get([
        "vounder_whitelist",
        "vounder_blacklist",
      ])) as any;
      whitelist = data.vounder_whitelist || [];
      blacklist = data.vounder_blacklist || [];
    }
    await syncRegistry();
  }

  const textNodes: Text[] = [];
  const walk = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
  );

  let node;
  while ((node = walk.nextNode())) {
    if (node.parentElement?.closest("[data-voundism-processed]")) continue;

    if (node.textContent?.match(PHONE_REGEX)) {
      textNodes.push(node as Text);
    }
  }

  for (const node of textNodes) {
    processTextNode(node);
  }
}

/**
 * Processes a single text node, identifying status and injecting badge.
 */
function processTextNode(node: Text) {
  const content = node.textContent || "";
  const matches = Array.from(content.matchAll(PHONE_REGEX));
  if (matches.length === 0) return;

  for (let i = matches.length - 1; i >= 0; i--) {
    const match = matches[i];
    const number = match[0];
    const index = match.index!;

    let entry = whitelist.find((c) => c.value === number);
    let level: "verified" | "pending" | "scam" = "verified";

    if (!entry) {
      entry = blacklist.find((c) => c.value === number);
      level = entry ? "scam" : "pending";
    }

    const institution = entry?.institution || "Unverified Entity";

    injectBadge(node, number, index, institution, level);
  }
}

/**
 * Task 1: Inline Injection [FR2.4]
 * Injects a React portal after the detected number.
 */
function injectBadge(
  node: Text,
  number: string,
  index: number,
  institution: string,
  level: "verified" | "pending" | "scam",
) {
  const parent = node.parentNode;
  if (!parent) return;

  const numberNode = node.splitText(index);
  numberNode.splitText(number.length);

  const highlight = document.createElement("span");
  highlight.setAttribute("data-voundism-processed", "true");

  // Style based on level
  if (level !== "verified") {
    highlight.style.textDecoration = "line-through";
    highlight.style.opacity = "0.7";
  }
  highlight.style.color =
    level === "scam" ? "#991b1b" : level === "pending" ? "#92400e" : "#065f46";

  parent.replaceChild(highlight, numberNode);
  highlight.appendChild(numberNode);

  const badgeContainer = document.createElement("span");
  badgeContainer.setAttribute("data-voundism-processed", "true");
  badgeContainer.style.display = "inline-flex";
  badgeContainer.style.alignItems = "center";
  badgeContainer.style.marginLeft = "4px";

  parent.insertBefore(badgeContainer, highlight.nextSibling);

  const root = createRoot(badgeContainer);
  root.render(
    <BadgeWithModal
      number={number}
      institution={institution}
      level={level}
      sourceUrl={window.location.href}
    />,
  );
}

scanAndRedact();
setInterval(syncRegistry, 1000 * 60 * 5);
setInterval(scanAndRedact, 3000);

if (typeof chrome !== "undefined" && chrome.runtime?.onMessage) {
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type === "FORCE_SYNC") {
      syncRegistry().then(() => {
        scanAndRedact();
        sendResponse({ success: true });
      });
      return true;
    }
  });
}
