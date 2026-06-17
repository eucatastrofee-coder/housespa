import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, ShieldCheck, ShieldAlert, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { getServiceBySlug, getServices } from "@/lib/woocommerce";
import { formatPrice } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static parameters for static site generation (optional, but good for performance)
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Safety notices based on specific service types
  const isPrenatal = service.slug.includes("prenatal");
  const isHotStone = service.slug.includes("piedras-calientes");

  return (
    <div className="relative w-full min-h-screen bg-charcoal-deep text-ivory pt-32 pb-24 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors duration-300 mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Servicios</span>
        </Link>

        {/* Asymmetrical Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Image Banner */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/5 shadow-luxury-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            
            {/* Vetting Vow badge */}
            <div className="p-6 rounded-2xl bg-charcoal border border-white/[0.02] flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold block text-ivory mb-1">Garantía HouseSpa</span>
                <p className="text-ivory-muted leading-relaxed">
                  Todos los terapeutas están rigurosamente examinados con pruebas psicológicas y de confianza antes de ingresar a nuestro equipo.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Details Content */}
          <div className="lg:col-span-6">
            {/* Category tag */}
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
              {service.categories.join(" • ")}
            </span>
            
            {/* Main title */}
            <h1 className="text-4xl md:text-5xl font-serif text-ivory tracking-tight leading-tight mb-6">
              {service.title}
            </h1>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-8 mb-8 border-y border-white/[0.04] py-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                <div>
                  <span className="block text-[10px] uppercase text-ivory-muted/40 tracking-wider">
                    Duraciones
                  </span>
                  <span className="text-sm font-medium">{service.duration} minutos</span>
                </div>
              </div>

              <div>
                <span className="block text-[10px] uppercase text-ivory-muted/40 tracking-wider mb-0.5">
                  Inversión
                </span>
                {service.price ? (
                  <span className="text-xl font-serif text-gold font-semibold">
                    {formatPrice(service.price)}
                  </span>
                ) : (
                  <span className="text-xs uppercase tracking-wider text-ivory-muted/60">
                    Consulte precios al reservar
                  </span>
                )}
              </div>
            </div>

            {/* Long Description */}
            <div className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed mb-8 flex flex-col gap-4">
              <p>{service.description}</p>
            </div>

            {/* Safety Alerts */}
            {isPrenatal && (
              <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/10 flex items-start gap-4 mb-8">
                <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold block text-red-300 mb-1">Nota Crítica Prenatal</span>
                  <p className="text-red-300/80 leading-relaxed">
                    El masaje prenatal está contraindicado durante los primeros tres meses del embarazo. Se requiere validación médica o aprobación antes de iniciar el servicio.
                  </p>
                </div>
              </div>
            )}

            {isHotStone && (
              <div className="p-6 rounded-2xl bg-charcoal border border-white/[0.02] flex items-start gap-4 mb-8">
                <Sparkles className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold block text-ivory mb-1">Duración Fija</span>
                  <p className="text-ivory-muted leading-relaxed">
                    Este tratamiento de piedras calientes cuenta con una duración estricta de 90 minutos para permitir el correcto calentamiento y aplicación térmica de las piedras volcánicas.
                  </p>
                </div>
              </div>
            )}

            {/* Benefits Title */}
            <h3 className="font-serif text-lg tracking-wider text-ivory mb-4">
              Beneficios Incluidos
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2.5 text-xs md:text-sm text-ivory-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/70 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Checkout Link Action */}
            <a
              href={service.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gold hover:bg-gold-dark px-10 py-4 text-xs uppercase tracking-[0.25em] font-bold text-charcoal-deep shadow-luxury-md transition-all duration-300"
            >
              <span>Reservar Servicio</span>
              <ArrowRight className="w-4 h-4 text-charcoal-deep group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
