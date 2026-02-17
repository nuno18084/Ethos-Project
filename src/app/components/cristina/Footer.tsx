import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-stone-100 tracking-widest uppercase">
            Cristina VC | Ethos
          </h3>
          <p className="text-xs text-stone-500 mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-stone-100 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-stone-100 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-stone-100 transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <div className="text-xs text-stone-600 flex space-x-4 uppercase tracking-widest">
          <a href="#" className="hover:text-stone-400">Privacy</a>
          <a href="#" className="hover:text-stone-400">Terms</a>
        </div>
      </div>
    </footer>
  );
}
