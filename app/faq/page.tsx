import FAQAccordion from "@/components/FAQAccordion";
import { ShieldCheck } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="relative w-full min-h-screen bg-charcoal-deep text-ivory pt-32 pb-24 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
            Centro de Ayuda
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-ivory tracking-tight leading-tight mb-6">
            Preguntas Frecuentes <span className="block mt-2 italic font-normal text-gold/90 font-serif">Y Contraindicaciones</span>
          </h1>
          <p className="text-sm md:text-base text-ivory-muted leading-relaxed font-sans max-w-xl">
            Aquí encontrarás respuestas detalladas sobre cómo reservar un masaje, nuestro filtro de seguridad y de confianza para terapeutas, y las restricciones de salud que debes revisar antes de agendar.
          </p>
        </div>

        {/* FAQs Accordion Component */}
        <FAQAccordion />

        {/* Health Disclaimer Vow */}
        <div className="mt-24 p-8 rounded-3xl bg-charcoal-light border border-white/[0.03] max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gold/5 text-gold border border-gold/15 mb-6">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="font-serif text-xl text-ivory tracking-wider mb-3">
            Compromiso Ético y de Salud
          </h4>
          <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed max-w-lg mb-4">
            Nuestros masajes son puramente relajantes y terapéuticos no invasivos. Si presentas dudas sobre alguna condición física, recomendamos siempre consultar a tu médico general antes de programar tu sesión. Nuestros terapeutas tienen la facultad de declinar el servicio en el sitio si detectan contraindicaciones de riesgo.
          </p>
        </div>

      </div>
    </div>
  );
}
