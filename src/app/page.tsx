import { HeaderSection } from "./components/header-section";
import { ContactSection } from "./components/contact-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { AboutSection } from "./components/about-section";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="w-full flex flex-col row-start-2 items-center justify-center">
        <HeaderSection />
        <AboutSection /> 
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-10 bg-[#1d2527] w-full">
        <p className="text-sm text-white">© 2025 Thalles Azevedo - Psicanalista. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
