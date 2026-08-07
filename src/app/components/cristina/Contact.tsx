import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Mail, Instagram, MapPin } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";
import { sendContactEmail } from "../../../lib/emailjs";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const fieldClass =
  "w-full border-b border-stone-200 py-2 text-stone-900 placeholder-stone-300 focus:outline-none focus:border-amber-600 transition-colors bg-transparent disabled:opacity-50";

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      await sendContactEmail(data);
      toast.success(t.contact.successToast);
      reset();
    } catch (error) {
      const message =
        error instanceof Error && error.message === "MISSING_CONFIG"
          ? t.contact.configErrorToast
          : t.contact.errorToast;
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-36 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <span className="section-eyebrow">{t.contact.eyebrow}</span>
            <h2 className="section-title mt-4 mb-6">{t.contact.title}</h2>
            <div className="w-12 h-0.5 bg-amber-600 mb-8" />
            <p className="section-lead">{t.contact.description}</p>
          </div>

          <div className="space-y-5 border-t border-stone-100 pt-10">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <a
                href="mailto:cristina.carvalho@ethosprogram.com"
                className="section-body hover:text-amber-600 transition-colors"
              >
                cristina.carvalho@ethosprogram.com
              </a>
            </div>
            <div className="flex items-start gap-4">
              <Instagram className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <a
                href="https://www.instagram.com/cristinavc_ethos/"
                target="_blank"
                rel="noopener noreferrer"
                className="section-body hover:text-amber-600 transition-colors"
              >
                @cristinavc_ethos
              </a>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span className="section-body">{t.contact.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 lg:border-l lg:border-stone-100 lg:pl-24"
        >
          <div>
            <label className="block form-label mb-2">{t.contact.name}</label>
            <input
              {...register("name", { required: true })}
              disabled={isSubmitting}
              className={fieldClass}
              placeholder={t.contact.namePlaceholder}
            />
            <div className="h-5 mt-1">
              {errors.name && (
                <p className="text-red-400 text-xs leading-4">{t.contact.required}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block form-label mb-2">{t.contact.email}</label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              disabled={isSubmitting}
              className={fieldClass}
              placeholder={t.contact.emailPlaceholder}
            />
            <div className="h-5 mt-1">
              {errors.email && (
                <p className="text-red-400 text-xs leading-4">
                  {errors.email.type === "pattern"
                    ? t.contact.validEmailRequired
                    : t.contact.required}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block form-label mb-2">{t.contact.message}</label>
            <textarea
              {...register("message", { required: true })}
              rows={6}
              disabled={isSubmitting}
              className={`${fieldClass} resize-none`}
              placeholder={t.contact.messagePlaceholder}
            />
            <div className="h-5 mt-1">
              {errors.message && (
                <p className="text-red-400 text-xs leading-4">{t.contact.required}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-10 py-3.5 bg-amber-600 text-white hover:bg-amber-500 transition-colors duration-300 btn-label disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.contact.sending : t.contact.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
