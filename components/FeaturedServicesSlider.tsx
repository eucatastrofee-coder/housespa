"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
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

      // Mathematical 3D transformations for the fan/arc effect
      const rotateY = ratio * -20; // 3D rotation yaw
      const rotateZ = ratio * 3;   // Roll tilt
      const translateY = Math.abs(ratio) * 25; // Dip cards down on the sides
      const scale = 1 - Math.abs(ratio) * 0.08; // Slightly scale down sides
      const opacity = 1 - Math.abs(ratio) * 0.15; // Soft opacity fade on sides

      cardEl.style.transform = `translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      cardEl.style.opacity = opacity;
    });
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
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    container.scrollLeft = scrollLeft.current - walk;
  };

  // Run on mount and scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Run initial alignment
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
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-charcoal-deep to-transparent z-20 pointer-events-none hidden md:block" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-charcoal-deep to-transparent z-20 pointer-events-none hidden md:block" />

      {/* Dragging viewport */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10 z-10" />
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
                    Precio base
                  </span>
                  {service.price ? (
                    <span className="text-base font-serif text-rose font-semibold">
                      {formatPrice(service.price)}
                    </span>
                  ) : (
                    <span className="text-[9px] uppercase tracking-wider text-ivory-muted/50">
                      Consulte precios
                    </span>
                  )}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-1.5 rounded-full bg-ivory text-charcoal-deep hover:bg-rose hover:text-charcoal-deep px-4 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300"
                  draggable={false}
                >
                  <span>Reservar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline helper to merge classes since CN exists in lib/utils
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
