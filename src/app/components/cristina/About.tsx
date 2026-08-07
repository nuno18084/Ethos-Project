import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-36 bg-stone-50 text-stone-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Left: Image with text overlap */}
        <div className="relative max-w-sm md:max-w-md mx-auto md:mx-0 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[4/5] overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1080&auto=format&fit=crop"
              alt="Books and nature"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <div className="absolute -bottom-8 -right-6 bg-white p-6 shadow-xl max-w-[220px] hidden md:block">
            <p className="font-serif italic text-base text-stone-600">
              &ldquo;{t.about.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-amber-600"
          >
            {t.about.eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif leading-tight"
          >
            {t.about.title}{" "}
            <span className="text-amber-600">{t.about.titleAccent}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-600 leading-relaxed text-base"
          >
            {t.about.paragraph1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-stone-600 leading-relaxed text-sm"
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
              className="inline-block px-8 py-3 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium"
            >
              {t.about.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
