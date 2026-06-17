import ContactForm from "@/components/ContactForm";
import { MapPin } from "lucide-react";

export default function ContactPage() {
  const serviceAreas = [
    "Lomas de Chapultepec",
    "Polanco",
    "Santa Fe",
    "Bosques de las Lomas",
    "Condesa & Roma",
    "San Ángel & Pedregal",
    "Interlomas",
    "Zonas Residenciales CDMX",
  ];

  return (
    <div className="relative w-full min-h-screen bg-charcoal-deep text-ivory pt-32 pb-24 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
            Atención Directa
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-ivory tracking-tight leading-tight mb-6">
            Inicia Tu Ritual de Bienestar
          </h1>
          <p className="text-sm md:text-base text-ivory-muted leading-relaxed font-sans max-w-xl">
            Si tienes solicitudes especiales, deseas contratar servicios corporativos para oficinas, organizar un spa day residencial, o tienes dudas específicas sobre contraindicaciones de salud, envíanos un mensaje y te atenderemos de inmediato.
          </p>
        </div>

        {/* Form Grid */}
        <div className="mb-24">
          <ContactForm />
        </div>

        {/* Service Areas Coverage */}
        <div className="p-8 md:p-12 rounded-3xl bg-charcoal border border-white/[0.03] shadow-luxury-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/5 text-gold border border-gold/15 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl text-ivory tracking-wider">
              Zonas de Cobertura de Servicios
            </h2>
          </div>
          <p className="text-xs md:text-sm text-ivory-muted leading-relaxed font-sans max-w-2xl mb-8">
            Nuestros terapeutas se trasladan directamente a tu casa, departamento u hotel de estancia. Actualmente brindamos cobertura completa en las siguientes áreas residenciales y corporativas de la Ciudad de México y zona metropolitana:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <div key={area} className="p-4 rounded-xl bg-charcoal-light border border-white/[0.02] flex items-center gap-2.5 text-xs tracking-wider text-ivory-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
