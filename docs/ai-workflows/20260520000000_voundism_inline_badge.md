# Workflow: Voundism Shield - Inline Badge Injection

**Target Date:** Wednesday, May 20, 2026

## Objective
Enhance the Voundism extension's DOM manipulation logic. Instead of completely replacing the suspicious text (which alters the original content layout drastically), the extension should inject the interactive warning/verification badge **immediately adjacent** (beside) to the detected number, leaving the original text visible but clearly marked.

## Architecture Context
The logic resides in `apps/voundism/src/content.tsx` and the React component `apps/voundism/src/components/BadgeWithModal.tsx`.

## Implementation Steps

### Task 1: Update the DOM Observer (`content.tsx`)
- **Objective:** Modify the `redactNode` function to append the React portal container *after* the text node, rather than replacing the text node entirely.
- **Action:** 
    - Keep the original text node intact.
    - Create a small inline wrapper (`<span>`) to act as the React root.
    - Insert this wrapper immediately after the detected phone number in the DOM tree using `node.parentNode.insertBefore(wrapper, node.nextSibling)`.

### Task 2: Refine the React Component (`BadgeWithModal.tsx`)
- **Objective:** Adjust the styling of the injected badge so it looks like an inlinY "tag" rather than a block-level redaction box.
- **Action:**
    - Change the container styling to be highly compact (e.g., smaller padding, inline-flex, scaled down icon).
    - Ensure the hover modal (`<ReportModal />`) still positions itself correctly (absolute positioning relative to the inline badge) without breaking the host page's layout.
    - Add a subtle strike-through or highlight effect to the *original* text if possible, though appending the badge is the priority.

## Verification
- Load the `demo-scam.html` page.
- Verify that the text `+6281234567890` remains visible on the page.
- Verify that the yellow "Pending" badge appears immediately to the right of the number.
- Verify the hover modal still opens and functions correctly without causing the surrounding text to jump.