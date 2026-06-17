"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, MapPin, Sparkles } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    title: "Terapeutas Certificados",
    description: "Cada terapeuta de nuestro equipo cuenta con un mínimo de 5 años de experiencia comprobada en las técnicas ofrecidas.",
  },
  {
    icon: ShieldCheck,
    title: "Filtro de Seguridad Riguroso",
    description: "Para tu tranquilidad, implementamos evaluaciones que incluyen pruebas psicológicas y exámenes toxicológicos.",
  },
  {
    icon: Sparkles,
    title: "Experiencia Spa Completa",
    description: "Llevamos mesas premium, sábanas de lujo, aceites y música para replicar la atmósfera de un hotel de cinco estrellas.",
  },
  {
    icon: MapPin,
    title: "Conveniencia Total",
    description: "Nos adaptamos a ti. Disponible en casas, departamentos, oficinas, residencias de lujo, hoteles y rentas vacacionales.",
  },
];

export default function Trust() {
  return (
    <section className="relative w-full py-24 bg-charcoal-deep border-b border-white/[0.02] z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-5 max-w-lg">
            <span className="text-rose uppercase tracking-[0.25em] text-xs font-semibold block mb-4">
              Estándar de Excelencia
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-tight leading-tight mb-6">
              Tu Seguridad y Bienestar son Nuestra Prioridad
            </h2>
            <p className="text-sm md:text-base text-ivory-muted leading-relaxed font-sans">
              Reinventamos el concepto de bienestar a domicilio. Llevamos la excelencia de los resorts más exclusivos directamente a tu puerta, cuidando de cada detalle y garantizando un servicio profesional, seguro e impecable.
            </p>
          </div>

          {/* Grid block */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                  className="p-6 rounded-2xl bg-charcoal-light border border-white/[0.02] hover:border-rose/25 transition-all duration-500 shadow-luxury-sm hover:shadow-luxury-md group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose/5 text-rose border border-rose/10 group-hover:bg-rose/10 group-hover:text-rose-light transition-all duration-300 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-ivory tracking-wider mb-2 group-hover:text-rose transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-ivory-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
