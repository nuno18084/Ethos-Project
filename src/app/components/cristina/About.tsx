import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-stone-50 text-stone-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image with text overlap */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[3/4] overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1080&auto=format&fit=crop"
              alt="Books and nature"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-xl max-w-xs hidden md:block">
            <p className="font-serif italic text-lg text-stone-600">
              &ldquo;{t.about.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="space-y-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400"
          >
            {t.about.eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif leading-tight"
          >
            {t.about.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-600 leading-relaxed text-lg"
          >
            {t.about.paragraph1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-stone-600 leading-relaxed"
          >
            {t.about.paragraph2}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <button className="px-8 py-3 border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium">
              {t.about.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
