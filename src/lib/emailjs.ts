import emailjs from "@emailjs/browser";

export type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

export class EmailJsError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "EmailJsError";
    this.status = status;
  }
}

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

  emailjs.init({ publicKey });

  try {
    await emailjs.send(serviceId, templateId, {
      from_name: payload.name.trim(),
      from_email: payload.email.trim().toLowerCase(),
      reply_to: payload.email.trim().toLowerCase(),
      message: payload.message.trim(),
    });
  } catch (error) {
    const emailJsError = error as { status?: number; text?: string };
    throw new EmailJsError(
      emailJsError.text ?? "EmailJS request failed",
      emailJsError.status,
    );
  }
}
