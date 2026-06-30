import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";

export const metadata = {
  title: "Política de Cancelación | HouseSpa",
  description: "Política de cancelaciones y reembolsos de HouseSpa Ciudad de México. Información sobre cancelación gratuita, tardía y reembolsos.",
};

export default function CancellationPolicyPage() {
  const policyItems = [
    {
      num: "1",
      title: "Cancelación gratuita",
      content: "Puedes cancelar tu reserva sin ningún costo siempre que lo hagas con 2 horas o más de anticipación a la hora programada de tu servicio. En ese caso recibirás un reembolso completo del monto pagado."
    },
    {
      num: "2",
      title: "Cancelación tardía",
      content: "Si cancelas con entre 1 y 2 horas de anticipación, se retiene el 50% del valor del servicio como cargo por cancelación. El 50% restante se reembolsa."
    },
    {
      num: "3",
      title: "Cancelación de última hora",
      content: "Si cancelas con menos de 1 hora de anticipación o una vez que el servicio ya ha iniciado, se aplica un cargo del 100% del valor del servicio. No hay reembolso en este caso."
    },
    {
      num: "4",
      title: "Cómo cancelar",
      content: "Ingresa a tu cuenta en la plataforma y selecciona la reserva que deseas cancelar. El sistema te mostrará el cargo aplicable antes de que confirmes la cancelación. Una vez confirmada, recibirás un correo electrónico con el resumen."
    },
    {
      num: "5",
      title: "Reembolsos",
      content: "Los reembolsos se procesan en la misma forma de pago con la que realizaste tu reserva (tarjeta de crédito/débito, Mercado Pago, PayPal u otro). El tiempo de acreditación depende de tu banco o pasarela de pago; en general tarda entre 3 y 10 días hábiles a partir de la cancelación."
    },
    {
      num: "6",
      title: "Cancelación por parte del terapeuta",
      content: "Si por alguna razón el terapeuta asignado no puede presentarse, no se aplica ningún cargo. La plataforma buscará automáticamente un reemplazo disponible y te notificará por correo. Si no es posible reasignar un terapeuta, recibirás un reembolso completo."
    },
    {
      num: "7",
      title: "Reagendamiento",
      content: "Si prefieres cambiar la fecha u hora de tu servicio en lugar de cancelarlo, puedes solicitarlo desde tu cuenta. Las mismas ventanas de cargo aplican: sin costo con 2 horas o más de anticipación, 50% entre 1 y 2 horas, y 100% con menos de 1 hora."
    },
    {
      num: "8",
      title: "Servicios completados",
      content: "Una vez que el servicio ha concluido no es posible realizar cancelaciones ni reclamaciones por ese concepto."
    },
    {
      num: "9",
      title: "Zona horaria",
      content: "Todos los horarios se calculan con base en la zona horaria de Ciudad de México (CST/CDT). La plataforma aplica la hora local automáticamente al momento de la cancelación."
    },
    {
      num: "10",
      title: "Contacto",
      content: "Si tienes dudas sobre una cancelación o un reembolso, comunícate con nuestro equipo de atención al cliente. Incluye tu número de reserva para agilizar la atención."
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
            Política de Cancelación
          </h1>
          <p className="text-xs uppercase tracking-widest text-ivory-muted/60 font-sans">
            HouseSpa Ciudad de México — Vigente a partir de julio 2026
          </p>
        </div>

        {/* Policy Body */}
        <div className="p-8 md:p-12 rounded-[32px] glassmorphism border border-white/5 shadow-luxury-md">
          
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-rose/5 border border-rose/15 mb-10">
            <Info className="w-5 h-5 text-rose shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
              En HouseSpa valoramos el tiempo de nuestros clientes y de nuestros terapeutas certificados. Esta política está diseñada para garantizar un servicio justo, confiable y de alta calidad para todos.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {policyItems.map((item) => (
              <div key={item.num} className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-rose/10 border border-rose/25 text-rose text-xs font-semibold flex items-center justify-center shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ivory tracking-wide mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ivory-muted leading-relaxed font-sans">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 text-[11px] text-ivory-muted/40 text-center leading-relaxed">
            HouseSpa se reserva el derecho de modificar esta política con aviso previo a los usuarios registrados.
          </div>
        </div>

      </div>
    </div>
  );
}
