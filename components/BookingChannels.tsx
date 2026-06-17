"use client";

import { motion } from "framer-motion";
import { Phone, Globe, MessageSquare } from "lucide-react";

export default function BookingChannels() {
  const phoneLink = "tel:+5215614379653";
  const whatsappLink = "https://wa.me/5215614379653?text=Hola%20HouseSpa,%20me%20gustaría%20solicitar%20información%20para%20agendar%20un%20masaje%20a%20domicilio.";
  const onlineLink = "/services";

  const channels = [
    {
      name: "Reserva Vía WhatsApp",
      icon: MessageSquare,
      link: whatsappLink,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "hover:text-green-400 group-hover:border-green-400/30",
    },
    {
      name: "Reserva Online",
      icon: Globe,
      link: onlineLink,
      target: "_self",
      color: "hover:text-rose group-hover:border-rose/30",
    },
    {
      name: "Reserva Vía Telefónica",
      icon: Phone,
      link: phoneLink,
      target: "_self",
      color: "hover:text-rose group-hover:border-rose/30",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-charcoal-deep border-b border-white/[0.02] z-20 overflow-hidden">
      
      {/* Background glow highlights */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-tight leading-tight">
            Reserva por estos medios
          </h2>
          <div className="h-[1px] w-16 bg-rose/35 mx-auto mt-6" />
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto items-center">
          {channels.map((channel, idx) => {
            const Icon = channel.icon;
            
            return (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center group"
              >
                {/* Clickable Circle Icon (Premium Glass Panel) */}
                <a
                  href={channel.link}
                  target={channel.target}
                  rel={channel.rel}
                  className="relative w-28 h-28 rounded-full glassmorphism flex items-center justify-center border border-white/10 hover:border-rose/40 hover:shadow-rose-border-glow shadow-glass-sm transition-all duration-500 hover:scale-108 active:scale-95 cursor-pointer mb-6"
                  aria-label={channel.name}
                >
                  {/* Subtle pulsing outer ring on hover */}
                  <div className="absolute inset-0 w-full h-full rounded-full bg-rose/5 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
                  
                  <Icon className="w-9 h-9 text-ivory group-hover:text-rose transition-colors duration-500" />
                </a>

                {/* Channel Title */}
                <h3 className="font-serif text-lg text-ivory tracking-wider mb-2 transition-colors duration-300 group-hover:text-rose">
                  {channel.name}
                </h3>

                {/* Subtitle click guide */}
                <span className="text-[10px] uppercase tracking-[0.25em] text-rose/60 font-semibold font-sans">
                  Dale clic al ícono
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
