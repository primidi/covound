export const PERSONA = {
  NAME: "CoVound",
  ROLE: "Digital ER Doctor",
  TONE: "Calm, Empathetic, Authoritative, Educational",
  MISSION: {
    en: "Turn Your Trauma Into Their Takedown.",
    id: "Ubah Kepanikan Menjadi Keadilan.",
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
};

export function getDiagnosis(
  entityName: string,
  type: "anomaly" | "unverified" = "anomaly",
  lang: "en" | "id" = "id",
) {
  const intros = DIAGNOSIS_TEMPLATES.INTRO[lang];
  const intro = intros[Math.floor(Math.random() * intros.length)];

  const warning =
    type === "anomaly"
      ? DIAGNOSIS_TEMPLATES.ANOMALY_DETECTED[lang].replace(
          "{entityName}",
          entityName,
        )
      : DIAGNOSIS_TEMPLATES.UNVERIFIED_WARNING[lang];

  return {
    intro,
    diagnosis: warning,
    prescription: DIAGNOSIS_TEMPLATES.PRESCRIBED_ACTION[lang],
    footer: DIAGNOSIS_TEMPLATES.EDUCATIONAL_FOOTER[lang],
    fullText: `${intro}. ${warning}. ${DIAGNOSIS_TEMPLATES.PRESCRIBED_ACTION[lang]}`,
  };
}
