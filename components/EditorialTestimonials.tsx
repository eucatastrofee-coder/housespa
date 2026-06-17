"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    quote: "La mejor experiencia de bienestar que he tenido. No hay nada como terminar un masaje profundo y poder quedarme dormida de inmediato en mi propia cama, sin el estrés de manejar en el tráfico de regreso.",
    author: "Sofía Ramos",
    role: "Lomas de Chapultepec",
    service: "Masaje Relajante"
  },
  {
    quote: "La calidad de los terapeutas de HouseSpa es insuperable. El riguroso filtro de confianza y exámenes toxicológicos me dan total tranquilidad al recibirlos en casa con mi familia.",
    author: "Alejandro Ortiz",
    role: "Polanco",
    service: "Masaje Descontracturante"
  }
];

export default function EditorialTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Setup word highlights
      [text1Ref.current, text2Ref.current].forEach((textEl) => {
        if (!textEl) return;
        const words = textEl.querySelectorAll(".word");
        
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: textEl,
              start: "top 75%",
              end: "bottom 35%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-36 bg-charcoal-deep border-b border-white/[0.02] overflow-hidden z-20">
      
      {/* Editorial Background Image Layout */}
      <div className="absolute right-0 top-1/4 w-[50%] h-[60%] opacity-10 blur-sm pointer-events-none select-none">
        <Image
          src="/imagenes/descarga (17).jpg"
          alt="Spa Details background"
          fill
          sizes="50vw"
          className="object-cover rounded-l-full"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-32">
        {testimonials.map((t, idx) => {
          // Split the quote into words to animate individually
          const words = t.quote.split(" ");
          const textRef = idx === 0 ? text1Ref : text2Ref;

          return (
            <div key={t.author} className="flex flex-col items-start max-w-4xl">
              
              {/* Quote Category */}
              <span className="text-rose uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
                Opiniones de Clientes • {t.service}
              </span>

              {/* Word-by-word animated quote */}
              <h3 
                ref={textRef} 
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory tracking-tight leading-[1.3] font-normal mb-8 select-none"
              >
                {words.map((word, wIdx) => (
                  <span key={wIdx} className="word inline-block mr-3 transition-opacity duration-300">
                    {word}
                  </span>
                ))}
              </h3>

              {/* Author Details */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-rose/50" />
                <p className="font-sans text-sm text-ivory-warm">
                  <span className="font-semibold text-ivory">{t.author}</span>
                  <span className="text-ivory-muted">, {t.role}</span>
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
