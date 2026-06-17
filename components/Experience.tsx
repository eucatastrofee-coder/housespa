"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Context for safe cleanup
    const ctx = gsap.context(() => {
      // Pin execution
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyRef.current,
        pinSpacing: false,
        scrub: true,
      });

      // Expand image clip-path and shrink scale
      gsap.fromTo(
        imageContainerRef.current,
        {
          clipPath: "inset(20% 30% 20% 30% rounded 40px)",
          scale: 1.25,
        },
        {
          clipPath: "inset(0% 0% 0% 0% rounded 0px)",
          scale: 1.0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      // Text 1 Timeline
      gsap.fromTo(
        text1Ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top start",
            end: "top+=25% start",
            scrub: true,
          },
        }
      );
      gsap.to(text1Ref.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=25% start",
          end: "top+=45% start",
          scrub: true,
        },
      });

      // Text 2 Timeline
      gsap.fromTo(
        text2Ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top+=45% start",
            end: "top+=65% start",
            scrub: true,
          },
        }
      );
      gsap.to(text2Ref.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=65% start",
          end: "top+=85% start",
          scrub: true,
        },
      });

      // Text 3 Timeline
      gsap.fromTo(
        text3Ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top+=85% start",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-charcoal-deep z-20">
      <div ref={stickyRef} className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden flex items-center justify-center">
        
        {/* Animated Image Underlay */}
        <div ref={imageContainerRef} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-charcoal-deep/60 z-10" />
          <Image
            src="/imagenes/descarga (15).jpg"
            alt="Wellness Experience"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Narrative Floating Overlays */}
        <div className="relative max-w-5xl mx-auto w-full px-6 md:px-12 z-20 flex flex-col items-center justify-center text-center h-full">
          
          {/* Scroll block 1 */}
          <div ref={text1Ref} className="absolute flex flex-col items-center max-w-3xl pointer-events-none">
            <span className="text-rose uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              La Filosofía
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-ivory tracking-wider leading-tight">
              Diseñado Para Quienes Valoran Su Tiempo
            </h3>
            <p className="mt-6 text-sm sm:text-base text-ivory-warm/80 leading-relaxed max-w-xl">
              Eliminamos el estrés del spa convencional. No necesitas salir a carretera o lidiar con salas de espera para gozar de masajes profesionales.
            </p>
          </div>

          {/* Scroll block 2 */}
          <div ref={text2Ref} className="absolute flex flex-col items-center max-w-3xl pointer-events-none">
            <span className="text-rose uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Los Materiales
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-ivory tracking-wider leading-tight">
              Atmósfera Cinco Estrellas en tu Hogar
            </h3>
            <p className="mt-6 text-sm sm:text-base text-ivory-warm/80 leading-relaxed max-w-xl">
              Equipamiento premium transportable. El terapeuta suministra sábanas de algodón egipcio, aromaterapia botánica pura, toallas limpias y música ambiental.
            </p>
          </div>

          {/* Scroll block 3 */}
          <div ref={text3Ref} className="absolute flex flex-col items-center max-w-3xl pointer-events-none">
            <span className="text-rose uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              El Resultado
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-ivory tracking-wider leading-tight">
              Decompresión Completa sin Interrupciones
            </h3>
            <p className="mt-6 text-sm sm:text-base text-ivory-warm/80 leading-relaxed max-w-xl">
              Conserva el estado meditativo. Una vez finalizada la sesión, relájate directamente en tu espacio. Nosotros nos encargamos de empacar todo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
