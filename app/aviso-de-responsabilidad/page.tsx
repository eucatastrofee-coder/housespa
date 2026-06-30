import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Aviso de Responsabilidad Limitada | HouseSpa",
  description: "Aviso de Responsabilidad Limitada de HouseSpa.mx. Conoce las condiciones preexistentes, contraindicaciones y límites de responsabilidad.",
};

interface PolicySection {
  num: string;
  title: string;
  content: string;
  bullets?: string[];
  extra?: string;
}

export default function LiabilityDisclaimerPage() {
  const sections: PolicySection[] = [
    {
      num: "1",
      title: "Naturaleza de la plataforma",
      content: "HouseSpa.mx es una plataforma de intermediación tecnológica. Su función es conectar a clientes con terapeutas independientes para la prestación de servicios de spa a domicilio. HouseSpa no es una clínica, centro médico ni establecimiento de salud, y los servicios ofrecidos no constituyen tratamiento médico de ningún tipo."
    },
    {
      num: "2",
      title: "Proceso de selección de terapeutas",
      content: "HouseSpa aplica un proceso de verificación y selección de terapeutas que incluye filtros de seguridad antes de incorporar a cualquier profesional a la plataforma. Este proceso está diseñado para reducir riesgos y brindar mayor seguridad a los clientes.",
      extra: "Sin embargo, la existencia de dicho proceso no garantiza de forma absoluta la ausencia de incidentes, y no convierte a HouseSpa en responsable directo de las acciones u omisiones del terapeuta durante la prestación del servicio."
    },
    {
      num: "3",
      title: "Relación entre cliente y terapeuta",
      content: "El servicio es prestado directamente por el terapeuta asignado, quien actúa como profesional independiente. Una vez iniciado el servicio en el domicilio del cliente, la responsabilidad sobre su correcta ejecución recae en el terapeuta.",
      extra: "HouseSpa no se encuentra físicamente presente durante el servicio y no puede supervisar en tiempo real las condiciones en que este se desarrolla."
    },
    {
      num: "4",
      title: "Renuncia de responsabilidad por daños durante el servicio",
      content: "Al contratar un servicio a través de HouseSpa.mx, el cliente reconoce y acepta que:",
      bullets: [
        "Los servicios de masaje y tratamientos corporales implican contacto físico que, en determinadas circunstancias, puede causar molestias, reacciones cutáneas, dolores musculares u otras respuestas físicas.",
        "Es responsabilidad del cliente informar al terapeuta, antes de iniciar el servicio, sobre cualquier condición médica, lesión, alergia, embarazo o situación de salud relevante que pudiera contraindicar algún tratamiento.",
        "HouseSpa no será responsable por lesiones, reacciones adversas, daños físicos o cualquier perjuicio derivado de la omisión de esta información por parte del cliente.",
        "HouseSpa no será responsable por daños o perjuicios ocasionados por el terapeuta que sean resultado de conductas fuera del alcance del servicio contratado o contrarias a las políticas de la plataforma."
      ]
    },
    {
      num: "5",
      title: "Condiciones preexistentes y contraindicaciones",
      content: "El cliente es el único responsable de determinar si su estado de salud es compatible con los servicios solicitados. Se recomienda consultar a un médico antes de contratar cualquier servicio si el cliente presenta alguna de las siguientes condiciones, de forma enunciativa y no limitativa:",
      bullets: [
        "Enfermedades cardiovasculares",
        "Trombosis o problemas de circulación",
        "Embarazo",
        "Heridas abiertas, infecciones cutáneas o quemaduras",
        "Osteoporosis u otras condiciones óseas",
        "Tratamientos oncológicos activos",
        "Cualquier condición que haya sido calificada por un médico como contraindicación para el masaje"
      ],
      extra: "HouseSpa no cuenta con la información médica del cliente y no está en posición de evaluar la idoneidad del servicio para cada caso particular."
    },
    {
      num: "6",
      title: "Límite de responsabilidad",
      content: "En el supuesto de que HouseSpa fuera declarada responsable por un tribunal competente de algún daño relacionado con la prestación de un servicio, su responsabilidad económica máxima se limitará al monto pagado por el cliente por la reserva específica en la que ocurrió el incidente.",
      extra: "HouseSpa no será responsable por daños indirectos, lucro cesante, daño moral derivado del servicio en sí, ni por ningún concepto que exceda dicho límite, en la medida en que la legislación aplicable lo permita."
    },
    {
      num: "7",
      title: "Incidentes durante el servicio",
      content: "Si durante el servicio ocurre cualquier situación que el cliente considere inapropiada, peligrosa o constitutiva de un delito, debe:",
      bullets: [
        "Interrumpir el servicio de inmediato.",
        "En caso de emergencia, llamar al 911.",
        "Notificar a HouseSpa a la brevedad posible a través de los canales de contacto disponibles en el sitio."
      ],
      extra: "HouseSpa tomará las medidas internas que correspondan, incluyendo la suspensión del terapeuta involucrado mientras se investiga el incidente."
    },
    {
      num: "8",
      title: "Aceptación",
      content: "Al realizar una reserva en HouseSpa.mx, el cliente declara haber leído, entendido y aceptado esta renuncia de responsabilidad en su totalidad, la cual forma parte integral de los Términos y Condiciones de uso de la plataforma."
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-charcoal-deep text-ivory pt-32 pb-24 z-10">
      {/* Background soft glow highlights */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-rose/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-xs uppercase tracking-widest text-rose hover:text-rose-light mb-8 w-fit transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Volver al inicio</span>
        </Link>

        {/* Page Header */}
        <div className="mb-16">
          <span className="text-rose uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
            Políticas de Servicio
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-ivory tracking-tight leading-tight mb-4">
            Aviso de Responsabilidad Limitada
          </h1>
          <p className="text-xs uppercase tracking-widest text-ivory-muted/60 font-sans">
            HouseSpa.mx — Vigente a partir de julio 2026
          </p>
        </div>

        {/* Policy Body */}
        <div className="p-8 md:p-12 rounded-[32px] glassmorphism border border-white/5 shadow-luxury-md">
          
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-rose/5 border border-rose/15 mb-10">
            <ShieldAlert className="w-5 h-5 text-rose shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-serif text-ivory tracking-wider mb-1">
                Límite y deslinde de responsabilidad
              </h4>
              <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
                Este aviso determina los alcances de la responsabilidad de la plataforma y de los terapeutas independientes en la prestación del servicio a domicilio en Ciudad de México.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {sections.map((item) => (
              <div key={item.num} className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-rose/10 border border-rose/25 text-rose text-xs font-semibold flex items-center justify-center shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ivory tracking-wide mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ivory-muted leading-relaxed font-sans mb-3">
                    {item.content}
                  </p>
                  {item.bullets && (
                    <ul className="list-disc pl-5 mb-4 text-sm text-ivory-muted/80 flex flex-col gap-1.5">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {item.extra && (
                    <p className="text-sm text-ivory-muted leading-relaxed font-sans whitespace-pre-line border-l-2 border-rose/25 pl-4 py-1 mt-2">
                      {item.extra}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 text-[11px] text-ivory-muted/40 text-center leading-relaxed">
            HouseSpa.mx — Ciudad de México, México. Última actualización: julio 2026.
          </div>
        </div>

      </div>
    </div>
  );
}
