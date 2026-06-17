"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, HeartHandshake, Home } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Sparkles,
    title: "Elige tu Servicio",
    description: "Explora nuestra carta de tratamientos. Contamos con 4 técnicas especializadas (Relajante, Descontracturante, Deportivo, Drenaje Linfático) y especialidades premium adaptadas a cada necesidad.",
  },
  {
    num: "02",
    icon: Calendar,
    title: "Define Fecha y Hora",
    description: "Selecciona el día y la hora que mejor se ajusten a tu agenda. Ofrecemos una amplia disponibilidad de horarios, los 7 días de la semana, de 8:00 AM a 10:00 PM.",
  },
  {
    num: "03",
    icon: HeartHandshake,
    title: "El Terapeuta Llega",
    description: "Olvídate de preparar algo. Nuestro terapeuta certificado se traslada hasta tu ubicación llevando la mesa spa, sábanas premium, aceites esenciales, toallas y música ambiental.",
  },
  {
    num: "04",
    icon: Home,
    title: "Relájate en Casa",
    description: "Disfruta de la sesión de masaje con la mayor comodidad. Una vez finalizado el tratamiento, puedes continuar descansando en tu propio espacio sin la interrupción del tráfico de regreso.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-28 bg-charcoal-light border-b border-white/[0.02] z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-20">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
            El Proceso
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-tight leading-tight">
            Bienestar a Domicilio en Cuatro Sencillos Pasos
          </h2>
        </div>

        {/* Stepper Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-8 rounded-3xl bg-charcoal/40 border border-white/[0.03] hover:border-gold/15 transition-colors duration-500 flex flex-col justify-between overflow-hidden shadow-luxury-sm"
              >
                {/* Asymmetrical background watermark step number */}
                <span className="absolute -top-4 -right-2 text-7xl md:text-8xl font-serif font-bold text-white/[0.01] select-none">
                  {step.num}
                </span>

                <div>
                  {/* Step Icon */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gold/5 border border-gold/15 text-gold mb-8">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="font-serif text-2xl text-ivory tracking-wider mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-sm text-ivory-muted leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                {/* Footer connector line */}
                <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gold/60 font-semibold">
                    Paso {step.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gold/30 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
