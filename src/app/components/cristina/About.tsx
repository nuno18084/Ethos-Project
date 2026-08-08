import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const [photoInColor, setPhotoInColor] = useState(false);

  const togglePhotoColor = () => {
    if (window.matchMedia("(hover: none)").matches) {
      setPhotoInColor((prev) => !prev);
    }
  };

  return (
    <section id="about" className="py-20 md:py-36 bg-stone-50 text-stone-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-8 lg:gap-10 items-center">
        {/* Left: Image with text overlap */}
        <div className="relative max-w-sm md:max-w-md mx-auto md:mx-0 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[4/5] overflow-hidden max-md:cursor-pointer"
            onClick={togglePhotoColor}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                togglePhotoColor();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Toggle photo color"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1080&auto=format&fit=crop"
              alt="Books and nature"
              className={`w-full h-full object-cover transition-all duration-700 grayscale md:hover:grayscale-0${
                photoInColor ? " max-md:grayscale-0" : ""
              }`}
            />
          </motion.div>
          <div className="absolute -bottom-8 -right-6 bg-white p-6 shadow-xl max-w-[220px] hidden md:block">
            <p className="quote-text">
              &ldquo;{t.about.quote}&rdquo;
            </p>
          </div>
          <p className="quote-text mt-6 text-center md:hidden">
            &ldquo;{t.about.quote}&rdquo;
          </p>
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            {t.about.eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-title"
          >
            {t.about.title}{" "}
            <span className="text-amber-600">{t.about.titleAccent}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="section-body"
          >
            {t.about.paragraph1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="section-body"
          >
            {t.about.paragraph2Prefix}
            <span className="text-amber-600 font-medium">{t.about.paragraph2Highlight}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300 btn-label"
            >
              {t.about.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
