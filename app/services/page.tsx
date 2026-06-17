import { getServices } from "@/lib/woocommerce";
import AllServices from "@/components/AllServices";
import { ShieldAlert } from "lucide-react";

export const revalidate = 3600; // Revalidate every hour (ISR)

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="relative w-full min-h-screen bg-charcoal-deep text-ivory pt-32 pb-24 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-rose uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
            Carta de Servicios
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-ivory tracking-tight leading-tight mb-6">
            Masajes Profesionales <span className="block mt-2 italic font-normal text-rose/90 font-serif">En Tu Ubicación</span>
          </h1>
          <p className="text-sm md:text-base text-ivory-muted leading-relaxed font-sans max-w-xl">
            Todos los servicios son realizados por terapeutas certificados y rigurosamente seleccionados. Llevamos todo el equipo necesario (mesa de masaje, sábanas premium, música de relajación y aceites esenciales) para recrear un ambiente de spa de lujo.
          </p>
        </div>

        {/* Services List and Category Filter Component */}
        <AllServices services={services} />

        {/* Dynamic Booking/Safety Note */}
        <div className="mt-24 p-8 rounded-3xl bg-charcoal-light border border-white/[0.03] max-w-4xl mx-auto flex flex-col sm:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-rose/5 text-rose border border-rose/15 shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ivory tracking-wider mb-2">
              Nota de Seguridad y Salud
            </h4>
            <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
              Existen ciertas condiciones médicas que contraindican la realización de masajes (por ejemplo: primer trimestre de embarazo, cirugías recientes menores a 6 meses, enfermedades infecciosas de la piel o fiebre). Por favor consulta nuestra sección de <a href="/faq" className="text-rose underline hover:text-rose-light">Preguntas Frecuentes</a> o habla con tu terapeuta antes de iniciar la sesión.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
