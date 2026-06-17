"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, MapPin, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    icon: Award,
    title: "Terapeutas Certificados",
    description: "Cada terapeuta de nuestro equipo cuenta con un mínimo de 5 años de experiencia comprobada en las técnicas ofrecidas.",
    image: "/imagenes/descarga.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Filtro de Seguridad Riguroso",
    description: "Para tu tranquilidad, implementamos evaluaciones que incluyen pruebas psicológicas y exámenes toxicológicos.",
    image: "/imagenes/descarga (26).jpg",
  },
  {
    icon: Sparkles,
    title: "Experiencia Spa Completa",
    description: "Llevamos mesas premium, sábanas de lujo, aceites y música para replicar la atmósfera de un hotel de cinco estrellas.",
    image: "/imagenes/descarga (16).jpg",
  },
  {
    icon: MapPin,
    title: "Conveniencia Total",
    description: "Nos adaptamos a ti. Disponible en casas, departamentos, oficinas, residencias de lujo, hoteles y rentas vacacionales.",
    image: "/imagenes/descarga (20).jpg",
  },
];

export default function Trust() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-24 bg-charcoal-deep border-b border-white/[0.02] z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Typography */}
          <div className="lg:col-span-4 max-w-lg">
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

          {/* Right Side: Horizontal iOS-Style Glass Slider */}
          <div className="lg:col-span-8 w-full">
            {/* Desktop Horizontal Sliding Accordion */}
            <div className="hidden sm:flex gap-4 h-[450px] w-full items-stretch">
              {trustItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = idx === activeIndex;

                return (
                  <motion.div
                    key={item.title}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    animate={{
                      flex: isActive ? 3.2 : 0.7,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 24,
                    }}
                    className={cn(
                      "relative rounded-[32px] overflow-hidden cursor-pointer border transition-colors duration-500 shadow-luxury-md select-none group",
                      isActive ? "border-rose/25" : "border-white/5 hover:border-white/15"
                    )}
                  >
                    {/* Background image underlay */}
                    <div className="absolute inset-0 w-full h-full">
                      <div className="absolute inset-0 bg-charcoal-deep/35 group-hover:bg-charcoal-deep/20 transition-colors duration-500 z-10" />
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                        priority={idx === 0}
                      />
                    </div>

                    {/* Bottom visual panels */}
                    <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                      <AnimatePresence mode="wait">
                        {isActive ? (
                          /* Expanded Panel Details */
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full p-6 rounded-[24px] glassmorphism flex flex-col gap-3"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose/10 text-rose border border-rose/15 shrink-0">
                                <Icon className="w-5 h-5" />
                              </div>
                              <h3 className="font-serif text-lg text-ivory tracking-wider">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-xs md:text-sm text-ivory-muted leading-relaxed font-sans">
                              {item.description}
                            </p>
                          </motion.div>
                        ) : (
                          /* Compressed Circular Icon Badge */
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="mx-auto w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-ivory border border-white/10 group-hover:text-rose group-hover:border-rose/40 transition-all duration-300"
                          >
                            <Icon className="w-5 h-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Vertical/Stacked Fallback */}
            <div className="sm:hidden flex flex-col gap-6">
              {trustItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="relative rounded-3xl overflow-hidden border border-white/5 p-6 flex flex-col justify-end min-h-[200px]"
                  >
                    <div className="absolute inset-0 w-full h-full select-none">
                      <div className="absolute inset-0 bg-black/60 z-10" />
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative z-20 flex flex-col gap-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-rose/15 text-rose border border-rose/20 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-serif text-lg text-ivory tracking-wider">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-ivory-muted leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
