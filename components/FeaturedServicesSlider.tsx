"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, ChevronLeft, ChevronRight, Hand } from "lucide-react";
import { Service } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface FeaturedServicesSliderProps {
  services: Service[];
}

export default function FeaturedServicesSlider({ services }: FeaturedServicesSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  
  // Active slide index for pagination dots
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Apply the 3D arc calculations on scroll
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".arc-card");
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    cards.forEach((cardEl: any) => {
      const cardCenter = cardEl.offsetLeft + cardEl.offsetWidth / 2;
      const distanceFromCenter = cardCenter - containerCenter;
      const maxDistance = container.offsetWidth / 1.5;
      const ratio = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));

      // 3D rotations for the fan/arc effect
      const rotateY = ratio * -20; 
      const rotateZ = ratio * 3;   
      const translateY = Math.abs(ratio) * 25; 
      const scale = 1 - Math.abs(ratio) * 0.08; 
      const opacity = 1 - Math.abs(ratio) * 0.15; 

      cardEl.style.transform = `translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      cardEl.style.opacity = opacity;
    });

    // Calculate active dot index
    if (cards.length > 0) {
      const cardWidth = (cards[0] as HTMLElement).offsetWidth;
      const gap = 32; // gap-8 is 32px
      const index = Math.round(container.scrollLeft / (cardWidth + gap));
      setActiveCardIndex(Math.max(0, Math.min(services.length - 1, index)));
    }
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    container.scrollLeft = scrollLeft.current - walk;
  };

  // Click handler for navigation arrows with infinite loop wrap-around
  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".arc-card");
    if (cards.length === 0) return;

    const cardWidth = (cards[0] as HTMLElement).offsetWidth;
    const gap = 32;
    const totalCards = services.length;

    let targetIndex = activeCardIndex + (direction === "left" ? -1 : 1);

    // Loop wrap-around index calculation
    if (targetIndex < 0) {
      targetIndex = totalCards - 1;
    } else if (targetIndex >= totalCards) {
      targetIndex = 0;
    }

    container.scrollTo({
      left: targetIndex * (cardWidth + gap),
      behavior: "smooth"
    });
  };

  // Run on mount and updates
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    handleScroll();

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [services]);

  return (
    <div className="relative w-full overflow-visible py-8">
      {/* Scroll indicator overlay guides */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-charcoal-deep to-transparent z-20 pointer-events-none hidden lg:block" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-charcoal-deep to-transparent z-20 pointer-events-none hidden lg:block" />

      {/* Navigation Arrows (Visible only on hover or desktop) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 sm:px-12 z-30 pointer-events-none">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-ivory hover:text-rose hover:border-rose/50 border border-white/10 shadow-glass-sm pointer-events-auto transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Anterior masaje"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-ivory hover:text-rose hover:border-rose/50 border border-white/10 shadow-glass-sm pointer-events-auto transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Siguiente masaje"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dragging viewport container */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={cn(
          "flex gap-8 overflow-x-auto py-12 px-[10%] sm:px-[25%] md:px-[30%] lg:px-[35%] snap-x snap-mandatory scrollbar-none cursor-grab active:cursor-grabbing select-none",
          isDragging ? "scroll-smooth-none" : ""
        )}
        style={{ perspective: "1200px" }}
      >
        {services.map((service, idx) => (
          <div
            key={service.slug}
            className="arc-card w-[290px] sm:w-[340px] md:w-[380px] h-[480px] md:h-[520px] flex-shrink-0 relative rounded-[32px] overflow-hidden border border-white/10 shadow-glass-md transition-all duration-500 snap-center select-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Background cover image */}
            <div className="absolute inset-0 w-full h-full z-0 select-none">
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10 z-10" />
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 300px, 400px"
                className="object-cover pointer-events-none"
                draggable={false}
              />
            </div>

            {/* Upper category tag */}
            <div className="absolute top-6 left-6 z-20 glassmorphism px-4 py-1.5 rounded-full border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-rose font-bold">
                {service.categories[0]}
              </span>
            </div>

            {/* Bottom details card (Glassmorphic) */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glassmorphism z-20 border border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-rose font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>{service.duration} Minutos</span>
              </div>
              
              <h3 className="font-serif text-xl sm:text-2xl text-ivory tracking-wider leading-tight">
                {service.title}
              </h3>
              
              <p className="text-xs text-ivory-muted leading-relaxed font-sans line-clamp-2">
                {service.shortDescription}
              </p>

              {/* Price and Redirect */}
              <div className="border-t border-white/[0.05] pt-4 mt-2 flex items-center justify-between">
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-ivory-muted/40 mb-0.5">
                    Inversión
                  </span>
                  {service.price ? (
                    <span className="text-base font-serif text-rose font-semibold">
                      {formatPrice(service.price)}
                    </span>
                  ) : (
                    <span className="text-[9px] uppercase tracking-wider text-rose/60">
                      Consulte precios
                    </span>
                  )}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-1.5 rounded-full bg-ivory text-charcoal-deep hover:bg-rose hover:text-charcoal-deep px-4 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300"
                  draggable={false}
                >
                  <span>Ver Detalle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe/Interaction Guide Subtext */}
      <div className="flex items-center justify-center gap-2 text-xs text-ivory-muted/40 mb-6 select-none animate-pulse">
        <Hand className="w-3.5 h-3.5" />
        <span>Arrastra con el mouse o usa las flechas laterales para navegar</span>
      </div>

      {/* Pagination dots indicators */}
      <div className="flex justify-center gap-3">
        {services.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => {
              const container = scrollRef.current;
              if (!container) return;
              const cards = container.querySelectorAll(".arc-card");
              if (cards.length === 0) return;
              const cardWidth = (cards[0] as HTMLElement).offsetWidth;
              const gap = 32;
              container.scrollTo({
                left: dotIdx * (cardWidth + gap),
                behavior: "smooth"
              });
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              dotIdx === activeCardIndex 
                ? "w-8 bg-rose shadow-glass-sm" 
                : "w-2 bg-white/10 hover:bg-white/30"
            }`}
            aria-label={`Ir al panel ${dotIdx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Inline helper to merge classes since CN is imported conditionally
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
