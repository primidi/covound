export const PERSONA = {
  NAME: "CoVound",
  ROLE: "Digital ER Doctor",
  TONE: "Calm, Empathetic, Authoritative, Educational",
  MISSION: {
    en: "Turn Your Trauma Into Their Takedown.",
    id: "Ubah Kepanikan Menjadi Keadilan.",
    TARGET_ZERO: {
      en: "Target: 0 Scam Users",
      id: "Target: 0 Pengguna Tertipu",
    },
  },
};

export const HERO_COPY = {
  title: {
    en: "Turn Trauma Into Takedown. Active Search Immunization.",
    id: "Ubah Kepanikan Menjadi Keadilan. Imunisasi Pencarian Aktif.",
  },
  subtitle: {
    en: "Achieving our target of 0 scam users by neutralizing digital threat vectors in real-time. Install the Voundism firewall or enter the Triage Room.",
    id: "Mencapai target 0 pengguna tertipu dengan menetralkan vektor ancaman digital secara real-time. Pasang firewall Voundism atau masuk Ruang Triase.",
  },
};

export const GREETINGS = {
  reporter: {
    en: "Take a breath. You're safe here. Let's document what happened.",
    id: "Tarik napas sebentar. Kamu aman di sini. Mari kita catat apa yang terjadi.",
  },
  investigator: {
    en: "A new anomaly needs diagnosis. Use AI Assist to extract the threat vector.",
    id: "Ada anomali baru yang butuh diagnosis. Gunakan AI Assist untuk mengekstrak vektor ancaman.",
  },
};

export const DIAGNOSIS_TEMPLATES = {
  INTRO: {
    en: [
      "Wait a moment, let us perform a diagnosis.",
      "We will try to help with the diagnosis for your safety.",
      "Stay calm, we are examining the data.",
    ],
    id: [
      "Sebentar ya, coba kami diagnosis",
      "Kami akan coba bantu untuk diagnosis demi keselamatan kamu",
      "Tetap tenang, kami sedang memeriksa datanya",
    ],
  },
  ANOMALY_DETECTED: {
    en: "Anomaly Symptom: This number is not registered in the official medical record of {entityName}.",
    id: "Gejala Anomali: Nomor ini tidak terdaftar di rekam medis resmi {entityName}.",
  },
  UNVERIFIED_WARNING: {
    en: "Warning: This contact has not yet passed our cryptographic verification.",
    id: "Peringatan: Kontak ini belum melalui verifikasi kriptografi kami.",
  },
  PRESCRIBED_ACTION: {
    en: "Action: Use the officially verified contact below.",
    id: "Tindakan: Gunakan kontak resmi yang sudah kami verifikasi di bawah ini.",
  },
  EDUCATIONAL_FOOTER: {
    en: "Remember, scammers often spoof numbers in search results. Always check the verification badge.",
    id: "Ingat, penipu sering memalsukan nomor di hasil pencarian. Selalu periksa tanda verifikasi.",
  },
  SCAM_CONFIRMED: {
    en: "Board Decision: This specimen is a confirmed threat. Immediate isolation is required.",
    id: "Keputusan Dewan: Spesimen ini terkonfirmasi sebagai ancaman. Diperlukan isolasi segera.",
  },
  VERIFIED_OFFICIAL: {
    en: "Clinical Result: This contact matches our cryptographically signed registry for {entityName}.",
    id: "Hasil Klinis: Kontak ini cocok dengan registri kami yang ditandatangani secara kriptografi untuk {entityName}.",
  },
};

export const CLINICAL_STATUS = {
  PRE_DIAGNOSIS: {
    LEGIT: {
      en: "Legit Claimed",
      id: "Klaim Sah",
    },
    SCAM: {
      en: "Scam Suspected",
      id: "Terduga Penipuan",
    },
  },
  DIAGNOSIS: {
    AWAITING_QUORUM: {
      en: "Awaiting Quorum",
      id: "Menunggu Kuorum",
    },
    VERIFIED: {
      en: "Verified Official",
      id: "Resmi Terverifikasi",
    },
    SCAM_CONFIRMED: {
      en: "Board Confirmed Scam",
      id: "Dewan Konfirmasi Penipuan",
    },
    AWAITING_BOARD: {
      en: "Awaiting Board",
      id: "Menunggu Dewan",
    },
  },
};

export function getDiagnosis(
  entityName: string,
  type: "anomaly" | "unverified" | "scam" | "verified" = "anomaly",
  lang: "en" | "id" = "id",
) {
  const intros = DIAGNOSIS_TEMPLATES.INTRO[lang];
  const intro = intros[Math.floor(Math.random() * intros.length)];

  let warning = "";
  if (type === "anomaly") {
    warning = DIAGNOSIS_TEMPLATES.ANOMALY_DETECTED[lang].replace(
      "{entityName}",
      entityName,
    );
  } else if (type === "unverified") {
    warning = DIAGNOSIS_TEMPLATES.UNVERIFIED_WARNING[lang];
  } else if (type === "scam") {
    warning = DIAGNOSIS_TEMPLATES.SCAM_CONFIRMED[lang];
  } else if (type === "verified") {
    warning = DIAGNOSIS_TEMPLATES.VERIFIED_OFFICIAL[lang].replace(
      "{entityName}",
      entityName,
    );
  }

  return {
    intro,
    diagnosis: warning,
    prescription: DIAGNOSIS_TEMPLATES.PRESCRIBED_ACTION[lang],
    footer: DIAGNOSIS_TEMPLATES.EDUCATIONAL_FOOTER[lang],
    fullText: `${intro}. ${warning}. ${DIAGNOSIS_TEMPLATES.PRESCRIBED_ACTION[lang]}`,
  };
}
