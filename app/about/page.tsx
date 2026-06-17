import Image from "next/image";
import { ShieldCheck, Award, Smile, Home } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-charcoal-deep text-ivory pt-32 pb-24 z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Layout Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-rose uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
            Nuestra Historia & Valores
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-ivory tracking-tight leading-tight mb-6">
            Bienestar de Resort Exclusivo <span className="block mt-2 italic font-normal text-rose/90 font-serif">A la Puerta de tu Hogar</span>
          </h1>
          <p className="text-sm md:text-base text-ivory-muted leading-relaxed font-sans max-w-xl">
            HouseSpa nace con la visión de liberar a las personas de las fricciones asociadas con el cuidado personal tradicional. Creemos que la relajación no debería ir acompañada del estrés de manejar bajo el tráfico, buscar estacionamiento o compartir salas de espera.
          </p>
        </div>

        {/* Cinematic Parallax Section */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl mb-24 border border-white/5 shadow-luxury-md">
          <Image
            src="/imagenes/descarga (10).jpg"
            alt="Relaxing spa setting"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal-deep/30" />
        </div>

        {/* Vetting Detail & Security Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-5">
            <span className="text-rose uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
              Estándar de Confianza
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-ivory tracking-tight leading-tight mb-6">
              El Filtro de Seguridad más Riguroso de la Industria
            </h2>
            <p className="text-sm md:text-base text-ivory-muted leading-relaxed font-sans">
              Para garantizar tu tranquilidad, implementamos una rigurosa selección de nuestro personal. Cada terapeuta es sometido a un minucioso proceso de reclutamiento que incluye:
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-charcoal-light border border-white/[0.02] shadow-luxury-sm">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose/5 text-rose border border-rose/10 mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-ivory tracking-wider mb-2">5+ Años de Experiencia</h3>
              <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
                Únicamente contratamos terapeutas con certificaciones válidas y más de 5 años de práctica clínica en masajes relajantes, descontracturantes y deportivos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-charcoal-light border border-white/[0.02] shadow-luxury-sm">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose/5 text-rose border border-rose/10 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-ivory tracking-wider mb-2">Pruebas Psicológicas</h3>
              <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
                Evaluaciones conductuales profundas aplicadas por expertos en recursos humanos para validar la integridad emocional de cada candidato.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-charcoal-light border border-white/[0.02] shadow-luxury-sm">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose/5 text-rose border border-rose/10 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-ivory tracking-wider mb-2">Exámenes Toxicológicos</h3>
              <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
                Pruebas de laboratorio periódicas para asegurar el cumplimiento estricto de nuestros altos estándares de profesionalismo y ética.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-charcoal-light border border-white/[0.02] shadow-luxury-sm">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose/5 text-rose border border-rose/10 mb-4">
                <Smile className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-ivory tracking-wider mb-2">Cuidado Humano</h3>
              <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
                Capacitación continua en servicio al cliente y hospitalidad para recrear con exactitud la calidez de un conserje de spa de hotel de lujo.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Philosophy Section */}
        <div className="p-8 md:p-12 rounded-3xl bg-charcoal border border-white/[0.03] shadow-luxury-md flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full md:w-[40%] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-white/5">
            <Image
              src="/imagenes/descarga (14).jpg"
              alt="Egypt cotton sheets and oils"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-rose uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
              Por Qué No Tenemos Locales Físicos
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-ivory tracking-tight leading-tight mb-4">
              El Spa Físico Quedó en el Pasado
            </h2>
            <p className="text-xs md:text-sm text-ivory-muted leading-relaxed font-sans mb-6">
              Nuestra propuesta es clara: reubicar la inversión de grandes locales comerciales de lujo hacia la selección de los mejores terapeutas del país y en insumos de la más alta gama. Al eliminar el espacio físico, podemos entregar un servicio personalizado de primer nivel directamente en tu cama o recámara, brindándote paz sin prisas.
            </p>
            <div className="flex items-center gap-3 text-xs text-rose uppercase tracking-widest font-semibold">
              <Home className="w-4 h-4" />
              <span>Llevamos la Experiencia de Lujo a Ti</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
