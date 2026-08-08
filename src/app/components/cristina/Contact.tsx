import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "motion/react";
import { ArrowRight, Mail, Instagram, MapPin } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";
import { sendContactEmail, EmailJsError } from "../../../lib/emailjs";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const fieldClass =
  "w-full border-0 border-b border-stone-300 py-3 text-base text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 transition-colors bg-transparent disabled:opacity-50";

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
      if (error instanceof Error && error.message === "MISSING_CONFIG") {
        toast.error(t.contact.configErrorToast);
      } else if (error instanceof EmailJsError && error.status === 412) {
        console.error("EmailJS 412:", error.message);
        toast.error(t.contact.serviceErrorToast);
      } else {
        console.error(error);
        toast.error(t.contact.errorToast);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:col-start-1 lg:row-start-1"
        >
          <span className="section-eyebrow">{t.contact.eyebrow}</span>
          <h2 className="section-title mt-4 mb-6">{t.contact.title}</h2>
          <div className="w-12 h-0.5 bg-amber-600 mb-8" />
          <p className="section-lead max-w-md">{t.contact.description}</p>

          <div className="hidden lg:block space-y-5 border-t border-stone-100 pt-10 mt-10">
            <a
              href="mailto:cristina.carvalho@ethosprogram.com"
              className="flex items-center gap-3 section-body hover:text-amber-600 transition-colors group"
            >
              <Mail className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="break-all border-b border-transparent group-hover:border-amber-600/40 transition-colors">
                cristina.carvalho@ethosprogram.com
              </span>
            </a>
            <a
              href="https://www.instagram.com/cristinavc_ethos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 section-body hover:text-amber-600 transition-colors group"
            >
              <Instagram className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="border-b border-transparent group-hover:border-amber-600/40 transition-colors">
                @cristinavc_ethos
              </span>
            </a>
            <div className="flex items-center gap-3 section-body">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{t.contact.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit(onSubmit)}
          className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 space-y-8 lg:border-l lg:border-stone-100 lg:pl-20"
        >
          <p className="font-serif text-xl md:text-2xl text-stone-900 leading-snug">
            {t.contact.formPrompt}
          </p>

          <div className="space-y-7">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
              <div>
                <label htmlFor="contact-name" className="block form-label mb-3">
                  {t.contact.name}
                </label>
                <input
                  id="contact-name"
                  {...register("name", { required: true })}
                  disabled={isSubmitting}
                  className={fieldClass}
                  placeholder={t.contact.namePlaceholder}
                  autoComplete="name"
                />
                <div className="h-5 mt-1">
                  {errors.name && (
                    <p className="text-red-400 text-xs leading-4">
                      {t.contact.required}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block form-label mb-3">
                  {t.contact.email}
                </label>
                <input
                  id="contact-email"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  disabled={isSubmitting}
                  className={fieldClass}
                  placeholder={t.contact.emailPlaceholder}
                  autoComplete="email"
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
            </div>

            <div>
              <label htmlFor="contact-message" className="block form-label mb-3">
                {t.contact.message}
              </label>
              <textarea
                id="contact-message"
                {...register("message", { required: true })}
                rows={6}
                disabled={isSubmitting}
                className={`${fieldClass} min-h-[9rem] resize-y`}
                placeholder={t.contact.messagePlaceholder}
              />
              <div className="h-5 mt-1">
                {errors.message && (
                  <p className="text-red-400 text-xs leading-4">
                    {t.contact.required}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 px-12 py-4 bg-amber-600 text-white hover:bg-amber-500 transition-colors duration-300 btn-label disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.contact.sending : t.contact.submit}
            {!isSubmitting && (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="order-3 lg:hidden space-y-5 border-t border-stone-100 pt-10"
        >
          <a
            href="mailto:cristina.carvalho@ethosprogram.com"
            className="flex items-center gap-3 section-body hover:text-amber-600 transition-colors"
          >
            <Mail className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="break-all">cristina.carvalho@ethosprogram.com</span>
          </a>
          <a
            href="https://www.instagram.com/cristinavc_ethos/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 section-body hover:text-amber-600 transition-colors"
          >
            <Instagram className="w-4 h-4 text-amber-600 shrink-0" />
            <span>@cristinavc_ethos</span>
          </a>
          <div className="flex items-center gap-3 section-body">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{t.contact.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
