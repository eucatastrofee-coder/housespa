import Link from "next/link";
import { getServices } from "@/lib/woocommerce";
import FeaturedServicesSlider from "./FeaturedServicesSlider";

export default async function FeaturedServices() {
  const allServices = await getServices();
  // Show all 6 services by default to keep the carousel rich and interactive
  const displayServices = allServices.slice(0, 6);

  return (
    <section className="relative w-full py-28 bg-charcoal-deep border-b border-white/[0.02] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-rose uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
              Colección Destacada
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-tight leading-tight">
              Experiencias de Relajación Diseñadas para Ti
            </h2>
          </div>
          <Link
            href="/services"
            className="text-xs uppercase tracking-[0.2em] font-semibold text-rose hover:text-rose-light border-b border-rose/30 hover:border-rose pb-1.5 transition-all duration-300"
          >
            Ver Todos los Masajes
          </Link>
        </div>
      </div>

      {/* Render the 3D Arc Glass slider client component */}
      <FeaturedServicesSlider services={displayServices} />
    </section>
  );
}
