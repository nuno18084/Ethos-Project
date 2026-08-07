import { Toaster } from "sonner";
import { Navbar } from "./components/cristina/Navbar";
import { Hero } from "./components/cristina/Hero";
import { About } from "./components/cristina/About";
import { Services } from "./components/cristina/Services";
import { Reviews } from "./components/cristina/Reviews";
import { Partners } from "./components/cristina/Partners";
import { Contact } from "./components/cristina/Contact";
import { Footer } from "./components/cristina/Footer";

export function HomePage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans overflow-x-hidden">
      <Toaster position="top-center" richColors />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
