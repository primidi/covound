# CoVound Reporter Test Data Bank

This document contains a bank of standardized testing scenarios to be used when evaluating the **Reporter Triage Flow** (/report). 

These scenarios are designed to test the AI's ability to extract the correct threat vectors (phone number and spoofed entity) from the chronology text, supporting both English and Indonesian linguistic slang and contexts.

> **Note:** All institution names and phone numbers in these scenarios have been deliberately undisclosed and anonymized for confidentiality and safety.

---

## 📂 Sample Evidence Files
When testing Step 2 (Evidence upload), you can select any of these real-world sample screenshots located in the `.private-incident/` directory:
*   `.private-incident/1_scam_scammer_phone_no_annotated.png` (Fake hotline search results)
*   `.private-incident/2_after_scam_happened_annotated.jpeg` (Bank transfer/blocking status screen)
*   `.private-incident/8_google_search_whatsapp_bank_jago_1_annotated.png` (SEO-poisoned search results)

---

## 🇮🇩 Indonesian Test Scenarios (Skenario Uji Bahasa Indonesia)

### Scenario 1: SEO Poisoning & Fake Hotline (Skenario Iklan Palsu & SEO)
*   **Story / Chronology (Copy & Paste):**
    > "Saya terkena penipuan karena mencari nomor call center Bank Jago di Google. Ternyata hasil pencarian teratas adalah iklan palsu yang mengarahkan ke WhatsApp. Saya menghubungi nomor +6282137380468 dan diminta untuk menyetujui transfer keluar dengan alasan verifikasi akun. Tabungan saya langsung habis terkuras."
*   **Expected AI Extraction:**
    *   **Detected Scammer:** `+6282137380468`
    *   **Spoofed Institution:** `Bank Jago`

### Scenario 2: Kurir Paket Palsu (Malicious APK)
*   **Story / Chronology (Copy & Paste):**
    > "Tiba-tiba ada pesan masuk dari +6280000000002 yang mengaku sebagai kurir Layanan Ekspedisi Lokal. Dia bilang ada paket nyasar atas nama saya dan mengirimkan file dengan nama 'FOTO_PAKET.apk'. Dia mendesak saya untuk segera membuka file tersebut untuk memastikan apakah itu barang saya."
*   **Expected AI Extraction:**
    *   **Detected Scammer:** `+6280000000002`
    *   **Spoofed Institution:** `Layanan Ekspedisi Lokal`

### Scenario 3: Modus Lowongan Kerja Freelance (Task Scam)
*   **Story / Chronology (Copy & Paste):**
    > "Saya dihubungi via WA oleh nomor +6285711223344 yang menawarkan kerja sampingan paruh waktu dari Platform E-Commerce Terkenal. Tugasnya gampang cuma like barang, tapi disuruh depo dulu Rp 500.000 ke rekening mereka buat naik level VIP."
*   **Expected AI Extraction:**
    *   **Detected Scammer:** `+6285711223344`
    *   **Spoofed Institution:** `Platform E-Commerce Terkenal`

---

## 🇬🇧 English Test Scenarios

### Scenario 4: Phishing & Account Block Panic
*   **Story / Chronology (Copy & Paste):**
    > "I lost my money to social engineering. Scammers manipulated search algorithms—poisoning SEO and AI Overviews with fake Bank Jago hotlines. When my account got blocked and I panicked, I blindly trusted the top search result. The 'customer service' agent asked me to approve a 'dana keluar' (fund-out) notification in my app to unblock my account, and my savings were instantly drained. The fake hotline number I called was +6282137380468."
*   **Expected AI Extraction:**
    *   **Detected Scammer:** `+6282137380468`
    *   **Spoofed Institution:** `Bank Jago`

### Scenario 5: E-Commerce Task Scam (Ponzi)
*   **Story / Chronology (Copy & Paste):**
    > "I was contacted by +6280000000003 offering a work-from-home job representing Platform E-Commerce Terkenal. They promised commissions for completing online product rating tasks, but demanded an upfront deposit of Rp 500.000 to activate my VIP account."
*   **Expected AI Extraction:**
    *   **Detected Scammer:** `+6280000000003`
    *   **Spoofed Institution:** `Platform E-Commerce Terkenal`

### Scenario 6: "Salah Transfer" (Wrong Transfer) Extortion
*   **Story / Chronology (Copy & Paste):**
    > "A person from +6280000000004 contacted me saying they accidentally transferred Rp 2.000.000 into my Generic Bank account. They sent a fake transfer receipt as proof and aggressively demanded that I transfer the money back to a different account number immediately, threatening to report me to the police."
*   **Expected AI Extraction:**
    *   **Detected Scammer:** `+6280000000004`
    *   **Spoofed Institution:** `Generic Bank`
