import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../../i18n/LanguageContext";

const COLLAPSED_EXTRA_HEIGHT = 168;

export function Founder() {
  const { language, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [language]);

  const previewParagraphs = t.founder.paragraphs.slice(0, 2);
  const extraParagraphs = t.founder.paragraphs.slice(2);

  return (
    <section id="founder" className="py-20 md:py-36 bg-[#FAF9F6] text-stone-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[53fr_47fr] gap-10 md:gap-10 lg:gap-14 items-start">
        <div className="order-1 md:col-start-1 space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            {t.founder.eyebrow}
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h2 className="section-title">{t.founder.name}</h2>
            <p className="mt-2 text-ethos text-sm uppercase tracking-widest font-medium">
              {t.founder.role}
            </p>
          </motion.div>
        </div>

        <div className="w-full max-w-sm md:max-w-md mx-auto md:mx-0 md:justify-self-end order-2 md:row-span-2 md:col-start-2 md:sticky md:top-28 md:self-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full aspect-[4/5] overflow-hidden">
              <ImageWithFallback
                src="/images/cristina-720.jpg"
                webpSrcSet="/images/cristina-720.webp"
                alt={t.founder.photoAlt}
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </motion.div>
        </div>

        <div className="order-3 md:col-start-1 space-y-6">
          <div className="relative [overflow-anchor:none]">
            <div className="space-y-6">
              {previewParagraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.06 }}
                  className="section-body"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="relative">
              <motion.div
                initial={false}
                animate={{ height: expanded ? "auto" : COLLAPSED_EXTRA_HEIGHT }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-6 pt-6">
                  {extraParagraphs.map((paragraph) => (
                    <p key={paragraph} className="section-body">
                      {paragraph}
                    </p>
                  ))}
                  <p className="section-body text-ethos font-medium">
                    {t.founder.highlight}
                  </p>
                  <p className="section-body">{t.founder.closing}</p>
                </div>
              </motion.div>

              <motion.div
                aria-hidden
                initial={false}
                animate={{ opacity: expanded ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent"
              />
            </div>

            <div className="flex justify-center pt-3">
              <button
                type="button"
                onClick={() => setExpanded((open) => !open)}
                className="inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-ethos btn-label hover:opacity-70 transition-opacity duration-200"
                aria-expanded={expanded}
              >
                {expanded ? t.founder.showLess : t.founder.showMore}
                <ChevronDown
                  size={14}
                  strokeWidth={1.75}
                  className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-ethos text-white hover:bg-ethos-hover transition-colors duration-300 btn-label"
            >
              {t.founder.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
