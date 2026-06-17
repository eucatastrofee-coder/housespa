"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create parallax effect on scroll for the hero background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-charcoal-deep"
    >
      {/* Background Image with Parallax and Zoom */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/30 via-charcoal-deep/75 to-charcoal-deep z-10" />
        <div className="absolute inset-0 bg-charcoal-deep/20 z-10" />
        {/* Local high-res wellness asset */}
        <div 
          className="w-full h-full bg-cover bg-center select-none"
          style={{ backgroundImage: "url('/imagenes/descarga (12).jpg')" }}
        />
      </motion.div>

      {/* Main Content Overlays */}
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 z-20 mt-16 flex flex-col items-center justify-center text-center">
        <motion.div style={{ y: textY, opacity }} className="max-w-4xl flex flex-col items-center">
          
          {/* Subtle upper title */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-rose uppercase tracking-[0.3em] text-xs font-semibold mb-6 block"
          >
            Wellness Concierge de Alta Gama
          </motion.span>

          {/* Large editorial headline */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-ivory tracking-tight leading-[1.05] mb-8 font-medium">
            El Spa De Lujo
            <span className="block mt-2 italic font-normal text-rose/90 font-serif">En Tu Propio Hogar</span>
          </h1>

          {/* Context subheader */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="text-base sm:text-lg md:text-xl text-ivory-warm/85 font-sans leading-relaxed max-w-2xl mb-12"
          >
            Servicio exclusivo de masajes profesionales entregado directamente en tu domicilio. Sin traslados, sin tráfico, sin salas de espera. Relajación absoluta donde tú estés.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
          >
            <Link
              href="/services"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-rose hover:bg-rose-dark px-10 py-4 text-xs uppercase tracking-[0.25em] font-bold text-charcoal-deep shadow-luxury-md hover:shadow-luxury-lg transition-all duration-300"
            >
              <span>Ver Masajes</span>
              <ArrowRight className="w-4 h-4 text-charcoal-deep group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>

            <Link
              href="/contact"
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 hover:border-rose/50 px-10 py-4 text-xs uppercase tracking-[0.25em] font-medium text-ivory transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>Contactar</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Parallax Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight - 80,
            behavior: "smooth",
          });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-rose/80">Deslizar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-rose" />
        </motion.div>
      </motion.div>
    </section>
  );
}
