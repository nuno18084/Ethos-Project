import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../../i18n/LanguageContext";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center bg-[#F5F5F0] overflow-hidden">
      {/* Text Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center site-align-left pr-6 md:pr-12 z-10">
        {/* <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-4"
        >
          {t.hero.eyebrow}
        </motion.span> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight mb-8"
        >
          {t.hero.titleLine1} <br />
          <span
            className={`italic text-amber-600${language === "pt" ? " whitespace-nowrap" : ""}`}
          >
            {t.hero.titleLine2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm text-stone-600 mb-10 max-w-md leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-3 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white uppercase tracking-widest text-xs font-medium transition-colors duration-300"
          >
            {t.hero.cta}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1746021451691-4385f318ec13?q=80&w=1200&auto=format&fit=crop&crop=entropy&cs=tinysrgb"
            alt="Bright modern workspace with natural light"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-x-0 top-0 h-28 md:h-32 pointer-events-none bg-gradient-to-b from-[#F5F5F0] via-[#F5F5F0]/55 to-transparent"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
