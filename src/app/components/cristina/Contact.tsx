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
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">
              {t.contact.eyebrow}
            </span>
            <h2 className="section-title mt-4 mb-6">
              {t.contact.title}
            </h2>
            <p className="section-lead mb-8">
              {t.contact.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 section-body">
                <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                <a
                  href="mailto:cristina.carvalho@ethosprogram.com"
                  className="hover:text-amber-600 transition-colors"
                >
                  cristina.carvalho@ethosprogram.com
                </a>
              </div>
              <div className="flex items-center space-x-4 section-body">
                <Instagram className="w-5 h-5 text-amber-600 shrink-0" />
                <a
                  href="https://www.instagram.com/cristinavc_ethos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors"
                >
                  @cristinavc_ethos
                </a>
              </div>
              <div className="flex items-center space-x-4 section-body">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                <span>{t.contact.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div>
            <label className="block form-label mb-2">
              {t.contact.name}
            </label>
            <input
              {...register("name", { required: true })}
              disabled={isSubmitting}
              className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent placeholder-stone-300 disabled:opacity-50"
              placeholder={t.contact.namePlaceholder}
            />
            {errors.name && (
              <span className="text-red-400 text-xs">{t.contact.required}</span>
            )}
          </div>

          <div>
            <label className="block form-label mb-2">
              {t.contact.email}
            </label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              disabled={isSubmitting}
              className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent placeholder-stone-300 disabled:opacity-50"
              placeholder={t.contact.emailPlaceholder}
            />
            {errors.email && (
              <span className="text-red-400 text-xs">{t.contact.validEmailRequired}</span>
            )}
          </div>

          <div>
            <label className="block form-label mb-2">
              {t.contact.message}
            </label>
            <textarea
              {...register("message", { required: true })}
              rows={4}
              disabled={isSubmitting}
              className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-600 transition-colors bg-transparent placeholder-stone-300 resize-none disabled:opacity-50"
              placeholder={t.contact.messagePlaceholder}
            />
            {errors.message && (
              <span className="text-red-400 text-xs">{t.contact.required}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-amber-600 text-white hover:bg-amber-500 transition-colors duration-300 btn-label w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.contact.sending : t.contact.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
