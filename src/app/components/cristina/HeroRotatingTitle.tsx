import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type HeroRotatingTitleProps = {
  prefix: string;
  words: readonly string[];
  intervalMs?: number;
};

export function HeroRotatingTitle({
  prefix,
  words,
  intervalMs = 3200,
}: HeroRotatingTitleProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || words.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, prefersReducedMotion, words.length]);

  if (prefersReducedMotion) {
    return (
      <span className="italic text-amber-600">
        {prefix} {words.join(" ")}
      </span>
    );
  }

  return (
    <span className="italic text-amber-600 block">
      <span className="block not-italic text-stone-900">{prefix}</span>
      <span className="relative mt-1 block h-[1.15em] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-x-0 top-0 block"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
