/**
 * Standardizes phone numbers for consistent storage and lookup.
 * - Removes non-digit characters (except leading +).
 * - Converts "08..." to "+628..." (Indonesian format).
 * - Ensures leading + for international format.
 */
export function normalizePhone(input: string): string {
  if (!input) return "";

  // 1. Remove all non-numeric characters except +
  let cleaned = input.replace(/[^\d+]/g, "");

  // 2. Handle 08 -> +628 conversion
  if (cleaned.startsWith("08")) {
    cleaned = `+628${cleaned.slice(2)}`;
  }

  // 3. Ensure + prefix for digits-only numbers starting with 62
  if (cleaned.startsWith("62") && !cleaned.startsWith("+")) {
    cleaned = `+${cleaned}`;
  }

  // 4. Default to + for other numbers that look like international format
  if (!cleaned.startsWith("+") && cleaned.length > 9) {
    cleaned = `+${cleaned}`;
  }

  return cleaned;
}
