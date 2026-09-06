import { motion } from "motion/react";
import { useLanguage } from "../../../i18n/LanguageContext";

function keepLastWords(text: string, maxLength = 24) {
  const leadingSpace = /^\s/.test(text) ? " " : "";
  const value = text.replace(/^\s+|\s+$/g, "");
  const parts = value.split(/\s+/).filter(Boolean);
  let keep = 1;

  for (let n = Math.min(4, parts.length); n >= 1; n -= 1) {
    if (parts.slice(-n).join(" ").length <= maxLength) {
      keep = n;
      break;
    }
  }

  const head =
    parts.length > keep
      ? `${leadingSpace}${parts.slice(0, -keep).join(" ")} `
      : leadingSpace;
  const tail = parts.slice(-keep).join(" ");

  return { head, tail };
}

function withClosingQuote(text: string) {
  const { head, tail } = keepLastWords(text);

  return (
    <>
      {head}
      <span className="review-quote-close-group">
        {tail}
        <span className="review-quote-mark review-quote-mark--close">
          &rdquo;
        </span>
      </span>
    </>
  );
}

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
            {t.reviews.title}
            <br />
            <span className="text-ethos">{t.reviews.titleAccent}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {t.reviews.items.map((review, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white p-6 md:p-8 border border-stone-100 shadow-sm hover:shadow-lg hover:border-ethos/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex-1 mb-12 md:mb-14">
                <p className="quote-text text-[1.05rem] md:text-lg leading-relaxed">
                  <span className="review-quote-mark review-quote-mark--open">&ldquo;</span>
                  {review.quotePrefix}
                  <br />
                  {review.quoteLead}
                  <span className="font-bold not-italic text-stone-900">
                    {(() => {
                      const { head, tail } = keepLastWords(
                        review.quoteHighlight ?? "",
                        18,
                      );
                      return (
                        <>
                          {head}
                          <span className="review-quote-close-group">
                            {tail}
                          </span>
                        </>
                      );
                    })()}
                  </span>
                  {review.quoteBreakAfterHighlight && review.quoteSuffix && (
                    <br />
                  )}
                  {withClosingQuote(review.quoteSuffix ?? "")}
                </p>
              </div>

              <footer className="mt-auto pt-5 border-t border-stone-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-ethos/15 flex items-center justify-center shrink-0">
                  <span className="text-sm font-serif text-ethos">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <cite className="not-italic block text-sm font-medium text-stone-900">
                    {review.author}
                  </cite>
                  {review.role.includes(" · ") ? (
                    <>
                      <span className="mt-1 block text-xs tracking-widest text-stone-900 italic">
                        {review.role.split(" · ")[0]}
                      </span>
                      <span className="block text-xs tracking-widest text-stone-900">
                        {review.role.split(" · ")[1]}
                      </span>
                    </>
                  ) : (
                    <span className="mt-1 block text-xs tracking-widest text-stone-900">
                      {review.role}
                    </span>
                  )}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
