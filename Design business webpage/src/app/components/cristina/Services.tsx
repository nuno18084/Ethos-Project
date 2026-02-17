import React from "react";
import { motion } from "motion/react";
import { Palette, Compass, PenTool } from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    description: "Defining the authentic voice of your vision. We build narratives that resonate deeply and endure.",
    icon: <PenTool className="w-8 h-8 text-stone-500" />,
  },
  {
    title: "Holistic Coaching",
    description: "Aligning inner values with outer expression. A guided journey towards clarity, purpose, and balance.",
    icon: <Compass className="w-8 h-8 text-stone-500" />,
  },
  {
    title: "Creative Direction",
    description: "Curating visuals that speak to the soul. From art direction to interior styling, we create cohesive aesthetics.",
    icon: <Palette className="w-8 h-8 text-stone-500" />,
  },
];

export function Services() {
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
            Our Offerings
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 border border-stone-200 bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-6"
            >
              <div className="p-4 bg-stone-50 rounded-full group-hover:bg-stone-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-stone-800">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <button className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-800 transition-colors border-b border-transparent group-hover:border-stone-800 pb-1">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
