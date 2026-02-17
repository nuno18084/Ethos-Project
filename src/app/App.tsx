import { Toaster } from "sonner";
import { Navbar } from "./components/cristina/Navbar";
import { Hero } from "./components/cristina/Hero";
import { About } from "./components/cristina/About";
import { Services } from "./components/cristina/Services";
import { Gallery } from "./components/cristina/Gallery";
import { Contact } from "./components/cristina/Contact";
import { Footer } from "./components/cristina/Footer";

export default function App() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans">
      <Toaster position="top-center" richColors />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
