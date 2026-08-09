import { motion } from "motion/react";
import { useLanguage } from "../../../i18n/LanguageContext";

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="section-eyebrow">{t.reviews.eyebrow}</span>
          <h2 className="section-title mt-4 mb-4">
            {t.reviews.title}{" "}
            <span className="text-amber-600">{t.reviews.titleAccent}</span>
          </h2>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {t.reviews.items.map((review, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white p-7 md:p-9 border border-stone-100 shadow-sm hover:shadow-lg hover:border-amber-600/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex-1">
                <span
                  className="text-5xl font-serif text-amber-600/25 leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <p className="quote-text text-[1.05rem] md:text-lg -mt-3">
                  {review.quote}
                </p>

                <span
                  className="text-5xl font-serif text-amber-600/25 leading-none select-none block text-right -mt-4"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
              </div>

              <footer className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-600/15 flex items-center justify-center shrink-0">
                  <span className="text-sm font-serif text-amber-700">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <cite className="not-italic block text-sm font-medium text-stone-900">
                    {review.author}
                  </cite>
                  <span className="meta-text mt-1 block">{review.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
