import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import type { Language } from "./translations";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
];

export function LanguageSelector({ scrolled = true }: { scrolled?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === language)!;

  const triggerClass = scrolled
    ? "text-stone-900 hover:text-stone-600"
    : "text-amber-600 hover:text-amber-500";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const select = (code: Language) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 text-xs uppercase tracking-widest transition-colors ${triggerClass}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        {current.code.toUpperCase()}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 mt-2 min-w-[140px] bg-white border border-stone-200 shadow-lg py-1 z-50"
        >
          {languages.map(({ code, label }) => (
            <li key={code} role="option" aria-selected={language === code}>
              <button
                onClick={() => select(code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors ${
                  language === code
                    ? "text-stone-900 bg-stone-50"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                }`}
              >
                {label}
                {language === code && (
                  <Check size={14} className="text-stone-400 ml-3 shrink-0" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
