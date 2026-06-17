"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Service } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface AllServicesProps {
  services: Service[];
}

export default function AllServices({ services }: AllServicesProps) {
  // Extract all unique categories
  const categories = ["Todos", ...Array.from(new Set(services.flatMap(s => s.categories)))];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Filter services based on selection
  const filteredServices = selectedCategory === "Todos"
    ? services
    : services.filter(s => s.categories.includes(selectedCategory));

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-500 border ${
              selectedCategory === category
                ? "bg-rose border-rose text-charcoal-deep font-semibold shadow-luxury-sm"
                : "bg-transparent border-white/10 text-ivory-muted hover:border-rose/30 hover:text-ivory"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              key={service.slug}
              className="group relative rounded-3xl glassmorphism hover:border-rose/35 p-6 flex flex-col justify-between shadow-luxury-md hover:shadow-luxury-lg transition-all duration-500"
            >
              {/* Rose Shimmer Edge Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-rose/0 to-transparent group-hover:via-rose/40 transition-all duration-700 rounded-t-3xl" />

              <div>
                {/* Service Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-6 border border-white/5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1000ms] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 glassmorphism px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-rose font-semibold border border-white/5">
                    {service.categories[0]}
                  </div>
                </div>

                {/* Duration & Service Metadata */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-rose/80 mb-3 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{service.duration} Minutos</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-ivory tracking-wider mb-4 group-hover:text-rose transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-ivory-muted leading-relaxed font-sans mb-8 line-clamp-3">
                  {service.shortDescription}
                </p>
              </div>

              {/* Price & Booking Call */}
              <div className="border-t border-white/[0.04] pt-6 mt-6 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-ivory-muted/40 mb-1">
                    Desde
                  </span>
                  {service.price ? (
                    <span className="text-lg font-serif text-rose font-semibold">
                      {formatPrice(service.price)}
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted/50">
                      Precios al reservar
                    </span>
                  )}
                </div>

                <a
                  href={service.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-rose/30 hover:border-rose hover:bg-rose hover:text-charcoal-deep px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-rose transition-all duration-500"
                >
                  <span>Agendar</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
