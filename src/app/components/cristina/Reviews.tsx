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
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-eyebrow">
            {t.reviews.eyebrow}
          </span>
          <h2 className="section-title mt-4">
            {t.reviews.title}{" "}
            <span className="text-amber-600">{t.reviews.titleAccent}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.reviews.items.map((review, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-6 md:p-8 border border-stone-200 flex flex-col justify-between space-y-6"
            >
              <p className="quote-text">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="border-t border-stone-100 pt-6">
                <cite className="not-italic block text-base font-medium text-stone-900">
                  {review.author}
                </cite>
                <span className="meta-text mt-1 block">
                  {review.role}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
