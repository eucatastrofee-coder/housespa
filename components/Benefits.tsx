"use client";

import { motion } from "framer-motion";
import { Coffee, Shield, Clock, Heart } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "V vetting de Confianza",
    description: "Evaluamos a fondo a cada terapeuta con filtros psicológicos y toxicológicos. Solo integramos profesionales certificados con más de 5 años de trayectoria.",
  },
  {
    icon: Coffee,
    title: "Sin Tránsito Post-Masaje",
    description: "El mayor beneficio del spa en casa es no tener que manejar de regreso. Al terminar tu masaje, te quedas descansando en la comodidad de tu hogar.",
  },
  {
    icon: Clock,
    title: "Programación a Tu Medida",
    description: "Disponibilidad de 8:00 AM a 10:00 PM, de lunes a domingo. Reservas directas desde la comodidad de tu dispositivo.",
  },
  {
    icon: Heart,
    title: "Bienestar Personalizado",
    description: "El terapeuta adapta la presión, la técnica y los puntos de tensión. Llevamos aceites y sábanas de alta calidad para consentirte.",
  },
];

export default function Benefits() {
  return (
    <section className="relative w-full py-28 bg-charcoal-deep border-b border-white/[0.02] z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
              ¿Por qué HouseSpa?
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-tight leading-tight mb-8">
              La Evolución del Bienestar y el Autocuidado
            </h2>
            <p className="text-sm md:text-base text-ivory-muted leading-relaxed font-sans mb-8">
              El tiempo es nuestro recurso más valioso. Por ello, eliminamos las fricciones del spa convencional. Sin salas de espera ruidosas, sin necesidad de salir de casa y sin perder el estado de relajación manejando de vuelta.
            </p>
            <div className="h-[1px] w-24 bg-gold-shimmer" />
          </div>

          {/* Right Benefits Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                  className="flex gap-5"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/5 text-gold border border-gold/10 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-ivory tracking-wider mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
