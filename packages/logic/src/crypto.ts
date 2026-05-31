/**
 * Cryptographic utilities for CoVound Domain-Anchored PKI.
 * Roots trust in the Entity's domain via /.well-known/covound-key.json
 */

/**
 * Verifies a signature using a PEM-formatted public key.
 * Uses Web Crypto API (SubtleCrypto) for cross-platform support.
 */
export async function verifyContactSignature(
  publicKeyPem: string,
  signatureBase64: string,
  data: string,
): Promise<boolean> {
  try {
    const crypto =
      typeof window !== "undefined"
        ? window.crypto
        : (await import("node:crypto")).webcrypto;

    // Import the PEM key (assuming RSASSA-PKCS1-v1_5 or PSS for broad support)
    // For MVP, we'll use a simplified check or a robust Ed25519 implementation if needed.
    // Here is a generic RSA-PSS verification structure:

    const binaryDer = pemToBinary(publicKeyPem);
    const publicKey = await (crypto.subtle as any).importKey(
      "spki",
      binaryDer,
      {
        name: "RSA-PSS",
        hash: "SHA-256",
      },
      false,
      ["verify"],
    );

    const signature = base64ToBinary(signatureBase64);
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(data);

    return await crypto.subtle.verify(
      {
        name: "RSA-PSS",
        saltLength: 32,
      },
      publicKey as any,
      signature,
      encodedData,
    );
  } catch (error) {
    console.error("Signature verification failed:", error);
    return false;
  }
}

export function formatContactDataToSign(
  entityId: string,
  type: string,
  value: string,
): string {
  return `${entityId}:${type}:${value}`;
}

export async function fetchEntityPublicKey(
  domain: string,
): Promise<string | null> {
  try {
    const response = await fetch(
      `https://${domain}/.well-known/covound-key.json`,
    );
    if (!response.ok) return null;
    const data = await response.json();
    return data.publicKey;
  } catch (error) {
    console.error(`Failed to fetch public key for ${domain}:`, error);
    return null;
  }
}

// Helper: Convert PEM to Binary DER
function pemToBinary(pem: string): ArrayBuffer {
  const b64 = pem
    .replace(/-----BEGIN PUBLIC KEY-----/, "")
    .replace(/-----END PUBLIC KEY-----/, "")
    .replace(/\s/g, "");
  return base64ToBinary(b64);
}

// Helper: Convert Base64 to Binary
function base64ToBinary(base64: string): ArrayBuffer {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * AES-256-CBC Encryption for sensitive PII (like NIK)
 * Requires a 32-byte ENCRYPTION_KEY environment variable.
 */
import * as nodeCrypto from "node:crypto";

const ALGORITHM = "aes-256-cbc";

export function encryptData(text: string, secretKey: string): string {
  if (!secretKey || secretKey.length !== 32) {
    throw new Error("Invalid ENCRYPTION_KEY: Must be 32 bytes for AES-256.");
  }
  const iv = nodeCrypto.randomBytes(16);
  const cipher = nodeCrypto.createCipheriv(
    ALGORITHM,
    Buffer.from(secretKey),
    iv,
  );
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

export function decryptData(text: string, secretKey: string): string {
  if (!secretKey || secretKey.length !== 32) {
    throw new Error("Invalid ENCRYPTION_KEY: Must be 32 bytes for AES-256.");
  }
  const textParts = text.split(":");
  const iv = Buffer.from(textParts.shift()!, "hex");
  const encryptedText = Buffer.from(textParts.join(":"), "hex");
  const decipher = nodeCrypto.createDecipheriv(
    ALGORITHM,
    Buffer.from(secretKey),
    iv,
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}
