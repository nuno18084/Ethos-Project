import { motion } from "motion/react";
import { Palette, Compass, PenTool } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";

const icons = [
  <PenTool className="w-8 h-8 text-stone-500" />,
  <Compass className="w-8 h-8 text-stone-500" />,
  <Palette className="w-8 h-8 text-stone-500" />,
];

export function Services() {
  const { t } = useLanguage();

  return (
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
            className="w-16 h-0.5 bg-stone-400 mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 border border-stone-200 bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-6"
            >
              <div className="p-4 bg-stone-50 rounded-full group-hover:bg-stone-100 transition-colors">
                {icons[index]}
              </div>
              <h3 className="text-xl font-serif text-stone-800">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <button className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-800 transition-colors border-b border-transparent group-hover:border-stone-800 pb-1">
                {t.services.learnMore}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
