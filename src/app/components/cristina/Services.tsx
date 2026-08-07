import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Heart, Lightbulb, X } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";

const icons = [
  <Compass className="w-8 h-8 text-amber-600" />,
  <Heart className="w-8 h-8 text-amber-600" />,
  <Lightbulb className="w-8 h-8 text-amber-600" />,
];

export function Services() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selected =
    selectedIndex !== null ? t.services.items[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedIndex]);

  const closeModal = () => setSelectedIndex(null);

  return (
    <>
      <section id="services" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-stone-900 mb-4"
            >
              {t.services.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-16 h-0.5 bg-amber-600 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {t.services.items.map((service, index) => (
              <motion.button
                key={index}
                type="button"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => setSelectedIndex(index)}
                className="group p-8 border border-stone-200 bg-white hover:shadow-lg hover:border-amber-600/20 transition-all duration-300 flex flex-col items-center text-center space-y-6 cursor-pointer text-left w-full"
              >
                <div className="p-4 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-serif text-stone-800 w-full text-center">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm w-full text-center">
                  {service.description}
                </p>
                <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-amber-600 transition-colors border-b border-transparent group-hover:border-amber-600 pb-1">
                  {t.services.learnMore}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
              onClick={closeModal}
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 md:p-10 shadow-xl"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="p-4 bg-amber-50 rounded-full w-fit mb-6">
                {icons[selectedIndex]}
              </div>

              <h3
                id="service-modal-title"
                className="text-2xl md:text-3xl font-serif text-stone-900 mb-4 pr-8"
              >
                {selected.title}
              </h3>

              <p className="text-stone-600 leading-relaxed mb-6">
                {selected.details}
              </p>

              <ul className="space-y-2 mb-8">
                {selected.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-stone-600"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={closeModal}
                className="inline-block px-8 py-3 bg-amber-600 text-white hover:bg-amber-500 transition-colors duration-300 uppercase tracking-widest text-xs font-medium"
              >
                {t.services.modalCta}
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
