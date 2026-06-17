import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import HowItWorks from "@/components/HowItWorks";
import FeaturedServices from "@/components/FeaturedServices";
import Benefits from "@/components/Benefits";
import Experience from "@/components/Experience";
import EditorialTestimonials from "@/components/EditorialTestimonials";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-charcoal-deep text-ivory">
      
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Trust Section (Certifications & Vetting) */}
      <Trust />

      {/* 3. Immersive Scroll Storytelling Section (GSAP Clip-path revealing) */}
      <Experience />

      {/* 4. Asymmetrical Featured Services Showcase */}
      <FeaturedServices />

      {/* 5. Stepper Section */}
      <HowItWorks />

      {/* 6. Benefits comparison Grid */}
      <Benefits />

      {/* 7. Luxury Editorial Testimonial Narrative */}
      <EditorialTestimonials />

      {/* 8. FAQ Section */}
      <section className="relative w-full py-28 bg-charcoal-light border-b border-white/[0.02] z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-20">
            <span className="text-rose uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-tight leading-tight mb-4">
              Dudas Comunes
            </h2>
            <p className="text-sm text-ivory-muted leading-relaxed font-sans">
              Todo lo que necesitas saber sobre nuestras técnicas, seguridad y cómo preparamos tu espacio.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* 9. Contact Section */}
      <section className="relative w-full py-28 bg-charcoal-deep border-b border-white/[0.02] z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-20">
            <span className="text-rose uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
              Contacto
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-tight leading-tight mb-4">
              Inicia Tu Experiencia
            </h2>
            <p className="text-sm text-ivory-muted leading-relaxed font-sans">
              Escríbenos si tienes solicitudes particulares o deseas organizar eventos corporativos de bienestar.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* 10. High-Impact Final CTA */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-charcoal-deep z-20">
        
        {/* Background Image Parallax */}
        <div className="absolute inset-0 w-full h-full select-none">
          <div className="absolute inset-0 bg-black/75 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/imagenes/descarga (23).jpg')" }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto w-full px-6 md:px-12 z-20 text-center flex flex-col items-center">
          <span className="text-rose uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
            Bienestar a tu Alcance
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-ivory tracking-tight leading-tight mb-8">
            Transforma Tu Hogar en un
            <span className="block italic font-normal text-rose/90 mt-2 font-serif">Santuario de Relajación</span>
          </h2>
          <p className="text-sm sm:text-base text-ivory-warm/80 max-w-lg mb-12">
            Permítete pausar. Agenda hoy y recibe a un terapeuta certificado en la tranquilidad de tu espacio privado.
          </p>
          <Link
            href="/services"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-rose hover:bg-rose-dark px-10 py-4 text-xs uppercase tracking-[0.25em] font-bold text-charcoal-deep shadow-luxury-lg transition-all duration-300"
          >
            <span>Reservar Ahora</span>
            <ArrowRight className="w-4 h-4 text-charcoal-deep group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </section>

    </div>
  );
}
