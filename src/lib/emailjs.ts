import emailjs from "@emailjs/browser";

export type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

function getEmailJsConfig() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("MISSING_CONFIG");
  }

  if (
    serviceId.startsWith("your_") ||
    templateId.startsWith("your_") ||
    publicKey.startsWith("your_")
  ) {
    throw new Error("MISSING_CONFIG");
  }

  return { serviceId, templateId, publicKey };
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: payload.name,
      from_email: payload.email,
      reply_to: payload.email,
      message: payload.message,
    },
    publicKey,
  );
}
