import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../../../i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#F5F5F0] min-h-[100dvh] md:h-screen md:overflow-hidden">
      <div className="flex flex-col min-h-[100dvh] md:min-h-0 md:flex-row md:h-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 pt-36 pb-10 md:py-0 md:pl-0 md:pr-12 md:h-full site-align-left z-10 shrink-0">
          <h1 className="hero-fade-up hero-fade-up--delay-200 font-serif text-stone-900 leading-[1.1] mb-6 md:mb-8">
            <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl whitespace-nowrap">
              {t.hero.titleLine1}
            </span>
            {t.hero.titleLine1Line2 && (
              <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl whitespace-nowrap">
                {t.hero.titleLine1Line2}
              </span>
            )}
            <span className="block mt-2 md:mt-3 italic text-amber-600 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {t.hero.titleLine2}
            </span>
          </h1>

          <div className="hero-fade-up hero-fade-up--delay-400 text-[0.9375rem] md:text-base text-stone-600 mb-8 md:mb-10 max-w-md leading-relaxed space-y-4">
            <p>{t.hero.description}</p>
            {t.hero.descriptionContinued && <p>{t.hero.descriptionContinued}</p>}
            {t.hero.descriptionHighlights &&
              t.hero.descriptionHighlights.length > 0 && (
                <div className="space-y-0 leading-tight">
                  {t.hero.descriptionHighlights.map((line) => (
                    <p key={line} className="font-bold text-stone-900 leading-tight">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            {!t.hero.descriptionHighlights?.length && t.hero.descriptionHighlight && (
              <p className="font-bold text-stone-900">{t.hero.descriptionHighlight}</p>
            )}
          </div>

          <div className="hero-fade-up hero-fade-up--delay-600">
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-3 border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white uppercase tracking-widest text-xs font-medium transition-colors duration-300"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="w-full flex-1 min-h-56 sm:min-h-64 md:flex-none md:w-1/2 md:h-full relative">
          <div className="hero-scale-in relative w-full h-full">
            <ImageWithFallback
              src="/images/hero-960.jpg"
              srcSet="/images/hero-640.jpg 640w, /images/hero-960.jpg 960w"
              webpSrcSet="/images/hero-640.webp 640w, /images/hero-960.webp 960w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Classical marble columns in a bright architectural space"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={960}
              height={639}
            />
            <div
              className="absolute inset-x-0 top-0 h-20 md:h-32 pointer-events-none bg-gradient-to-b from-[#F5F5F0] via-[#F5F5F0]/55 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
