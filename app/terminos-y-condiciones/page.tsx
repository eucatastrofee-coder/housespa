import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Términos y Condiciones | HouseSpa",
  description: "Términos y Condiciones de uso de HouseSpa.mx. Conoce las reglas y condiciones de uso de nuestros servicios de spa a domicilio.",
};

interface TermSection {
  num: string;
  title: string;
  content: string;
  bullets?: string[];
  extra?: string;
}

export default function TermsAndConditionsPage() {
  const sections: TermSection[] = [
    {
      num: "1",
      title: "Acerca de HouseSpa",
      content: "HouseSpa es una plataforma digital que conecta a clientes con terapeutas independientes para la prestación de servicios de spa a domicilio en Ciudad de México. Al crear una cuenta o realizar una reserva aceptas estos términos en su totalidad."
    },
    {
      num: "2",
      title: "Capacidad legal",
      content: "Para usar la plataforma debes ser mayor de 18 años y tener capacidad legal para celebrar contratos conforme a la legislación mexicana. Al aceptar estos términos declaras que cumples con esa condición."
    },
    {
      num: "3",
      title: "Registro y cuenta",
      content: "Para realizar reservas debes crear una cuenta con información verídica, completa y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de toda actividad que ocurra bajo tu cuenta. Si detectas un uso no autorizado debes notificarnos de inmediato a través de los canales de contacto disponibles en el sitio.",
      extra: "HouseSpa se reserva el derecho de suspender o cancelar cuentas que incumplan estos términos, proporcionen información falsa o realicen un uso indebido de la plataforma."
    },
    {
      num: "4",
      title: "Naturaleza del servicio",
      content: "HouseSpa actúa como intermediario entre el cliente y los terapeutas. Los terapeutas son profesionales independientes y no empleados de HouseSpa. HouseSpa selecciona, verifica y asigna a los terapeutas disponibles, pero la relación de prestación de servicio ocurre directamente entre el cliente y el terapeuta asignado."
    },
    {
      num: "5",
      title: "Reservas",
      content: "Las reservas están sujetas a disponibilidad. Una reserva se considera confirmada una vez que el pago ha sido procesado y el sistema ha asignado un terapeuta. Recibirás una confirmación por correo electrónico con los detalles del servicio.",
      extra: "El sistema permite reservar servicios dentro del horario de operación de la plataforma, que es de 9:00 a 22:00 horas, hora de Ciudad de México."
    },
    {
      num: "6",
      title: "Precios y pagos",
      content: "Los precios publicados en la plataforma incluyen el costo del servicio e IVA cuando aplique. El cobro se realiza en el momento de la reserva a través de las pasarelas de pago disponibles (Stripe, Mercado Pago, PayPal u otras habilitadas). HouseSpa no almacena datos completos de tarjetas bancarias.",
      extra: "Los precios pueden actualizarse sin previo aviso; el precio aplicable es el vigente al momento de completar la reserva."
    },
    {
      num: "7",
      title: "Cancelaciones y reembolsos",
      content: "Las cancelaciones se rigen por la Política de Cancelaciones publicada en el sitio, la cual forma parte integral de estos términos. En resumen:",
      bullets: [
        "Con 2 horas o más de anticipación: sin cargo, reembolso completo.",
        "Entre 1 y 2 horas de anticipación: cargo del 50%, reembolso del 50%.",
        "Con menos de 1 hora de anticipación o durante el servicio: cargo del 100%, sin reembolso."
      ],
      extra: "Los reembolsos se procesan en la misma forma de pago utilizada en la reserva. El tiempo de acreditación depende del banco o pasarela y puede tomar entre 3 y 10 días hábiles."
    },
    {
      num: "8",
      title: "Obligaciones del cliente",
      content: "Para garantizar la correcta prestación del servicio, el cliente se compromete a:",
      bullets: [
        "Proporcionar un domicilio accesible, seguro y en condiciones adecuadas para la realización del servicio.",
        "Estar presente o designar a un mayor de edad para recibir al terapeuta.",
        "Tratar al terapeuta con respeto y dignidad en todo momento.",
        "No solicitar al terapeuta servicios distintos a los contratados a través de la plataforma."
      ],
      extra: "HouseSpa se reserva el derecho de cancelar el servicio sin reembolso si el domicilio presenta condiciones de inseguridad para el terapeuta o si el cliente incumple las obligaciones anteriores."
    },
    {
      num: "9",
      title: "Reagendamiento",
      content: "Puedes solicitar un cambio de fecha u hora desde tu cuenta. El reagendamiento está sujeto a disponibilidad y se aplican las mismas ventanas de cargo que en las cancelaciones, calculadas sobre la hora original del servicio."
    },
    {
      num: "10",
      title: "Comportamiento prohibido",
      content: "Queda prohibido utilizar la plataforma para:",
      bullets: [
        "Proporcionar información falsa o suplantación de identidad.",
        "Contratar servicios para ofrecerlos a terceros sin autorización de HouseSpa.",
        "Contactar a los terapeutas fuera de la plataforma para acordar servicios directos.",
        "Realizar conductas de acoso, discriminación o violencia hacia los terapeutas.",
        "Intentar vulnerar la seguridad técnica de la plataforma."
      ],
      extra: "El incumplimiento puede resultar en la cancelación inmediata de la cuenta y, en su caso, en las acciones legales correspondientes."
    },
    {
      num: "11",
      title: "Propiedad intelectual",
      content: "El nombre, logotipo, diseño, contenidos y software de HouseSpa.mx son propiedad de HouseSpa o de sus licenciantes y están protegidos por la legislación mexicana en materia de propiedad intelectual. Queda prohibida su reproducción, distribución o uso comercial sin autorización previa por escrito."
    },
    {
      num: "12",
      title: "Limitación de responsabilidad",
      content: "HouseSpa actúa como intermediario y no es responsable por:",
      bullets: [
        "Daños, lesiones o pérdidas derivadas directamente de la conducta del terapeuta durante el servicio.",
        "Fallas en servicios de terceros (pasarelas de pago, proveedores de correo, etc.).",
        "Interrupciones del servicio por causas de fuerza mayor o caso fortuito."
      ],
      extra: "La responsabilidad máxima de HouseSpa frente al cliente, en cualquier supuesto, se limita al monto pagado por la reserva en cuestión."
    },
    {
      num: "13",
      title: "Modificaciones a la plataforma y a estos términos",
      content: "HouseSpa puede modificar estos términos en cualquier momento. Los cambios se notificarán por correo electrónico o mediante un aviso en la plataforma con al menos 10 días de anticipación. El uso continuado de la plataforma después de esa fecha implica la aceptación de los nuevos términos. Si no estás de acuerdo, puedes cancelar tu cuenta antes de que los cambios entren en vigor."
    },
    {
      num: "14",
      title: "Privacidad",
      content: "El tratamiento de tus datos personales se rige por el Aviso de Privacidad publicado en HouseSpa.mx, el cual forma parte integral de estos términos."
    },
    {
      num: "15",
      title: "Legislación aplicable y jurisdicción",
      content: "Estos términos se rigen por las leyes vigentes en los Estados Unidos Mexicanos. Para cualquier controversia derivada de la interpretación o cumplimiento de los presentes términos, las partes se someten a la jurisdicción de los tribunales competentes de Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros."
    },
    {
      num: "16",
      title: "Contacto",
      content: "Para cualquier duda, aclaración o queja relacionada con estos términos o con un servicio prestado, comunícate con nosotros a través de los canales de contacto disponibles en HouseSpa.mx."
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
            Términos y Condiciones de Uso
          </h1>
          <p className="text-xs uppercase tracking-widest text-ivory-muted/60 font-sans">
            HouseSpa.mx — Vigentes a partir de julio 2026
          </p>
        </div>

        {/* Policy Body */}
        <div className="p-8 md:p-12 rounded-[32px] glassmorphism border border-white/5 shadow-luxury-md">
          
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-rose/5 border border-rose/15 mb-10">
            <FileText className="w-5 h-5 text-rose shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-serif text-ivory tracking-wider mb-1">
                Contrato de términos y condiciones
              </h4>
              <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
                Por favor, lee detalladamente este documento. Al crear una cuenta o realizar una reserva en HouseSpa.mx, aceptas estos términos y condiciones en su totalidad de acuerdo con la legislación mexicana.
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
