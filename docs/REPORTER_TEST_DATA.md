# CoVound Reporter Test Data Bank

This document contains a bank of standardized testing scenarios to be used when evaluating the **Reporter Triage Flow** (/report). 

These scenarios are designed to test the AI's ability to extract the correct threat vectors (phone number and spoofed entity) from the chronology text.

> **Note:** All institution names and phone numbers in these scenarios have been deliberately undisclosed and anonymized for confidentiality and safety.

---

## Scenario 1: SEO Poisoning & Fake Banking Customer Service (Real Incident)
**Context:** SEO/AI Overview poisoning leading to a fake Bank Jago hotline and unauthorized "dana keluar" approval.

*   **Story / Chronology (Copy & Paste):**
    > "I lost my money to social engineering. Scammers manipulated search algorithms—poisoning SEO and AI Overviews with fake Bank Jago hotlines. When my account got blocked and I panicked, I blindly trusted the top search result. The 'customer service' agent asked me to approve a 'dana keluar' (fund-out) notification in my app to unblock my account, and my savings were instantly drained. The fake hotline number I called was +6282137380468."
*   **Expected AI Extraction:**
    *   **Detected Scammer:** +6282137380468
    *   **Spoofed Institution:** Bank Jago
*   **Evidence to Upload:** Use `.private-incident/1_scam_scammer_phone_no_annotated.png` or `.private-incident/2_after_scam_happened_annotated.jpeg`.

---

## Scenario 2: Fake Package Courier (APK Sniffing)
**Context:** The malicious APK installation scam disguised as a package photo.

*   **Story / Chronology (Copy & Paste):**
    > "Tiba-tiba ada pesan masuk dari +6280000000002 yang mengaku sebagai kurir Layanan Ekspedisi Lokal. Dia bilang ada paket nyasar atas nama saya dan mengirimkan file dengan nama 'FOTO_PAKET.apk'. Dia mendesak saya untuk segera membuka file tersebut untuk memastikan apakah itu barang saya."
*   **Expected AI Extraction:**
    *   **Detected Scammer:** +6280000000002
    *   **Spoofed Institution:** Layanan Ekspedisi Lokal
*   **Evidence to Upload:** Any mock screenshot showing a file transfer with a courier logo.

---

## Scenario 3: Fake E-Commerce Affiliate/Job Offer
**Context:** Task scam / Ponzi scheme disguised as freelance work.

*   **Story / Chronology (Copy & Paste):**
    > "Saya dihubungi oleh nomor +6280000000003 yang menawarkan pekerjaan freelance paruh waktu dari Platform E-Commerce Terkenal. Tugasnya hanya memberikan like dan rating pada produk tertentu, tapi saya diminta mentransfer uang deposit awal sebesar Rp 500.000 ke rekening pribadi mereka untuk membuka kunci tugas VIP."
*   **Expected AI Extraction:**
    *   **Detected Scammer:** +6280000000003
    *   **Spoofed Institution:** Platform E-Commerce Terkenal
*   **Evidence to Upload:** Any mock chat screenshot showing job offers and bank transfer requests.

---

## Scenario 4: The "Salah Transfer" (Wrong Transfer) Extortion
**Context:** Exploiting the victim's honesty to act as a money mule or steal funds.

*   **Story / Chronology (Copy & Paste):**
    > "A person from +6280000000004 contacted me saying they accidentally transferred Rp 2.000.000 into my Generic Bank account. They sent a fake transfer receipt as proof and aggressively demanded that I transfer the money back to a different account number immediately, threatening to report me to the police."
*   **Expected AI Extraction:**
    *   **Detected Scammer:** +6280000000004
    *   **Spoofed Institution:** Generic Bank
*   **Evidence to Upload:** A mock screenshot of a fake transfer receipt.
