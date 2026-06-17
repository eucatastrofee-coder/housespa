import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { getServices } from "@/lib/woocommerce";
import { formatPrice } from "@/lib/utils";

export default async function FeaturedServices() {
  const allServices = await getServices();
  const featured = allServices.filter(s => s.featured).slice(0, 3);

  // If there are no featured products, default to first 3
  const displayServices = featured.length > 0 ? featured : allServices.slice(0, 3);

  return (
    <section className="relative w-full py-28 bg-charcoal-deep border-b border-white/[0.02] z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
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

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Large Card (60% width on large screens) */}
          {displayServices[0] && (
            <div className="lg:col-span-7 flex flex-col justify-between group">
              <Link href={`/services/${displayServices[0].slug}`} className="block relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/[0.05] shadow-luxury-md">
                <Image
                  src={displayServices[0].image}
                  alt={displayServices[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/20 to-transparent z-10" />
                
                {/* Hover Quick Booking Label */}
                <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-ivory border border-white/10 group-hover:bg-rose group-hover:text-charcoal-deep transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                {/* Details absolute overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex items-center gap-4 text-xs text-rose uppercase tracking-[0.2em] font-semibold mb-3">
                    <span>{displayServices[0].categories[0]}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose/50" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {displayServices[0].duration} Min
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-ivory tracking-wider mb-2">
                    {displayServices[0].title}
                  </h3>
                </div>
              </Link>
              
              <div className="mt-6 pl-4 max-w-xl">
                <p className="text-sm text-ivory-muted leading-relaxed font-sans mb-6">
                  {displayServices[0].shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  {displayServices[0].price ? (
                    <span className="text-xl font-serif text-rose">
                      {formatPrice(displayServices[0].price)}
                    </span>
                  ) : (
                    <span className="text-xs uppercase tracking-wider text-ivory-muted/60">
                      Consulte precios al reservar
                    </span>
                  )}
                  
                  <a
                    href={displayServices[0].bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.2em] font-semibold text-ivory group-hover:text-rose transition-colors duration-300"
                  >
                    Agendar Experiencia
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Stack Cards (40% width on large screens) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            
            {/* Card 2 */}
            {displayServices[1] && (
              <div className="group flex flex-col justify-between h-full">
                <Link href={`/services/${displayServices[1].slug}`} className="block relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/[0.05] shadow-luxury-md">
                  <Image
                    src={displayServices[1].image}
                    alt={displayServices[1].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/10 to-transparent z-10" />
                  
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="flex items-center gap-3 text-xs text-rose uppercase tracking-[0.2em] font-semibold mb-2">
                      <Clock className="w-3 h-3" />
                      {displayServices[1].duration} Min
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-ivory tracking-wider">
                      {displayServices[1].title}
                    </h3>
                  </div>
                </Link>
                <div className="mt-4 px-2 flex justify-between items-center">
                  <p className="text-xs text-ivory-muted leading-relaxed font-sans max-w-[70%] line-clamp-1">
                    {displayServices[1].shortDescription}
                  </p>
                  {displayServices[1].price ? (
                    <span className="text-sm font-serif text-rose font-semibold">
                      {formatPrice(displayServices[1].price)}
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted/40">
                      Consulte precios
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Card 3 */}
            {displayServices[2] && (
              <div className="group flex flex-col justify-between h-full">
                <Link href={`/services/${displayServices[2].slug}`} className="block relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/[0.05] shadow-luxury-md">
                  <Image
                    src={displayServices[2].image}
                    alt={displayServices[2].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/10 to-transparent z-10" />
                  
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="flex items-center gap-3 text-xs text-rose uppercase tracking-[0.2em] font-semibold mb-2">
                      <Clock className="w-3 h-3" />
                      {displayServices[2].duration} Min
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-ivory tracking-wider">
                      {displayServices[2].title}
                    </h3>
                  </div>
                </Link>
                <div className="mt-4 px-2 flex justify-between items-center">
                  <p className="text-xs text-ivory-muted leading-relaxed font-sans max-w-[70%] line-clamp-1">
                    {displayServices[2].shortDescription}
                  </p>
                  {displayServices[2].price ? (
                    <span className="text-sm font-serif text-rose font-semibold">
                      {formatPrice(displayServices[2].price)}
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted/40">
                      Consulte precios
                    </span>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
