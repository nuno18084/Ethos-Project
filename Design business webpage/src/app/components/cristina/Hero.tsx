import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center bg-[#F5F5F0] overflow-hidden">
      {/* Text Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-4"
        >
          Cristina VC | Ethos
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight mb-8"
        >
          Curating Life, <br />
          <span className="italic text-stone-600">Elevating Spirit.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-stone-600 mb-10 max-w-md leading-relaxed"
        >
          A boutique consultancy for those seeking alignment, aesthetic living, and mindful business practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center text-sm uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-all"
          >
            Begin the Journey
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
          className="w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761001311910-7b29541488f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwYXJ0aXN0aWMlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcxMzUzMzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cristina VC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply md:hidden" />
        </motion.div>
      </div>
    </section>
  );
}
