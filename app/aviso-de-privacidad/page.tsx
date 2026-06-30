import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Aviso de Privacidad | HouseSpa",
  description: "Aviso de Privacidad de HouseSpa Ciudad de México. Conoce cómo protegemos y tratamos tus datos personales de acuerdo con la LFPDPPP.",
};

interface PrivacySection {
  num: string;
  title: string;
  content: string;
  bullets?: string[];
  extra?: string;
}

export default function PrivacyPolicyPage() {
  const sections: PrivacySection[] = [
    {
      num: "1",
      title: "Datos personales que recabamos",
      content: "Para prestarte nuestros servicios de spa a domicilio recabamos los siguientes datos:",
      bullets: [
        "Datos de identificación y contacto: Nombre y apellidos, correo electrónico y dirección de servicio (donde se realizará la visita).",
        "Datos de la reserva: Fecha, hora y tipo de servicio solicitado, así como el historial de reservas, cancelaciones y reagendamientos.",
        "Datos de pago: Monto del servicio y método de pago utilizado."
      ],
      extra: "El procesamiento de pagos se realiza a través de pasarelas externas (Stripe, Mercado Pago, PayPal). HouseSpa no almacena números de tarjeta ni datos bancarios completos; esa información es gestionada directamente por la pasarela correspondiente conforme a sus propias políticas de seguridad."
    },
    {
      num: "2",
      title: "Finalidades del tratamiento",
      content: "Tus datos personales se utilizan únicamente para:",
      bullets: [
        "Crear y gestionar tu cuenta en la plataforma.",
        "Procesar, confirmar y administrar tus reservas.",
        "Asignar un terapeuta disponible para tu servicio.",
        "Enviarte notificaciones relacionadas con tu reserva (confirmación, cancelación, reasignación).",
        "Calcular y procesar cargos por cancelación y reembolsos.",
        "Atender solicitudes, aclaraciones o quejas.",
        "Cumplir con obligaciones legales aplicables."
      ]
    },
    {
      num: "3",
      title: "Datos personales sensibles",
      content: "HouseSpa no recaba datos personales considerados sensibles conforme a la LFPDPPP (datos de salud, biométricos, genéticos, religiosos, ideológicos, etc.)."
    },
    {
      num: "4",
      title: "Transferencia de datos a terceros",
      content: "HouseSpa no vende, renta ni comparte tus datos personales con terceros para fines propios de esos terceros. El único supuesto en que tus datos se transmiten a otros es la ejecución del propio servicio:",
      bullets: [
        "Al terapeuta asignado a tu reserva, quien recibe únicamente la información necesaria para presentarse en el domicilio indicado y prestar el servicio.",
        "A las pasarelas de pago, para procesar las transacciones que autorices."
      ],
      extra: "Estas transmisiones son necesarias para cumplir la relación contractual contigo y no constituyen una transferencia en términos de la LFPDPPP."
    },
    {
      num: "5",
      title: "Derechos ARCO",
      content: "Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales (derechos ARCO). También tienes derecho a revocar el consentimiento que nos hayas otorgado y a la portabilidad de tus datos en los términos que establece la ley. Para ejercer cualquiera de estos derechos envía un correo a:",
      extra: "arco@reserva.housespa.mx\n\nTu solicitud debe incluir: tu nombre completo, el correo electrónico registrado en la plataforma, una descripción clara del derecho que deseas ejercer y una copia de una identificación oficial. Daremos respuesta en un plazo máximo de 20 días hábiles a partir de la recepción de tu solicitud. Si la respuesta resulta procedente, la haremos efectiva dentro de los 15 días hábiles siguientes."
    },
    {
      num: "6",
      title: "Conservación de los datos",
      content: "Conservamos tus datos personales durante el tiempo que mantengas una cuenta activa en la plataforma y por el período adicional que exijan las obligaciones legales y fiscales aplicables. Una vez cumplido ese plazo, los datos se eliminan o disocian de forma segura.",
      extra: "Los registros de reservas, cargos y cancelaciones se conservan por un mínimo de 5 años en cumplimiento de la normativa fiscal mexicana."
    },
    {
      num: "7",
      title: "Medidas de seguridad",
      content: "HouseSpa implementa medidas técnicas y organizativas para proteger tus datos frente a acceso no autorizado, alteración, pérdida o divulgación. El acceso a la información está restringido al personal y a los terapeutas que lo necesiten para prestar el servicio."
    },
    {
      num: "8",
      title: "Cookies y tecnologías de rastreo",
      content: "La plataforma puede utilizar cookies y tecnologías similares para el funcionamiento técnico del sitio y la sesión de usuario. No utilizamos estas tecnologías para crear perfiles publicitarios ni para rastrear tu comportamiento fuera de la plataforma."
    },
    {
      num: "9",
      title: "Modificaciones a este aviso",
      content: "HouseSpa puede actualizar este aviso de privacidad cuando sea necesario. Cualquier cambio relevante se notificará a través del correo registrado en tu cuenta o mediante un aviso en la plataforma. La versión vigente siempre estará disponible en el sitio."
    },
    {
      num: "10",
      title: "Autoridad competente",
      content: "Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes presentar una queja ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI), en www.inai.org.mx."
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
            Aviso de Privacidad
          </h1>
          <p className="text-xs uppercase tracking-widest text-ivory-muted/60 font-sans">
            HouseSpa Ciudad de México — Vigente a partir de julio 2026
          </p>
        </div>

        {/* Policy Body */}
        <div className="p-8 md:p-12 rounded-[32px] glassmorphism border border-white/5 shadow-luxury-md">
          
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-rose/5 border border-rose/15 mb-10">
            <Shield className="w-5 h-5 text-rose shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-serif text-ivory tracking-wider mb-1">
                Responsable del tratamiento de datos personales
              </h4>
              <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
                HouseSpa, con domicilio en Ciudad de México, es responsable del uso y protección de tus datos personales. Este aviso se emite en cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
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
            Última actualización: julio 2026. Ciudad de México, México.
          </div>
        </div>

      </div>
    </div>
  );
}
