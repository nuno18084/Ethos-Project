import { motion, useAnimationFrame } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLanguage } from "../../../i18n/LanguageContext";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const MARQUEE_DURATION_MS = 35_000;
const VELOCITY_EASE_MS = 600;

export function Partners() {
  const { t } = useLanguage();
  const marqueeItems = [...t.partners.items, ...t.partners.items];

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(1);
  const targetVelocityRef = useRef(1);
  const halfWidthRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    targetVelocityRef.current = isHovered ? 0 : 1;
  }, [isHovered]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateHalfWidth = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };

    updateHalfWidth();

    const observer = new ResizeObserver(updateHalfWidth);
    observer.observe(track);

    return () => observer.disconnect();
  }, [marqueeItems.length]);

  useAnimationFrame((_, delta) => {
    const track = trackRef.current;
    const halfWidth = halfWidthRef.current;
    if (!track || halfWidth === 0) return;

    const ease = Math.min(1, delta / VELOCITY_EASE_MS);
    velocityRef.current +=
      (targetVelocityRef.current - velocityRef.current) * ease;

    const pxPerMs = halfWidth / MARQUEE_DURATION_MS;
    offsetRef.current -= pxPerMs * velocityRef.current * delta;

    if (offsetRef.current <= -halfWidth) {
      offsetRef.current += halfWidth;
    }

    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  });

  return (
    <section id="partners" className="py-20 md:py-32 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-eyebrow">
            {t.partners.eyebrow}
          </span>
          <h2 className="section-title mt-4">
            {t.partners.title}
          </h2>
          <p className="section-lead mt-4 max-w-2xl mx-auto">
            {t.partners.description}
          </p>
        </motion.div>
      </div>

      <div
        className="partners-marquee-track relative mt-4 py-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-stone-100 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-stone-100 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        <div ref={trackRef} className="flex w-max will-change-transform">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center px-12 md:px-20 shrink-0"
            >
              <ImageWithFallback
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto max-w-[140px] object-contain opacity-50 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
