"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const whatsAppNumber = "5215500000000"; // WooCommerce fallback booking number
  const initialText = encodeURIComponent(
    "Hola HouseSpa, me gustaría solicitar información para agendar un masaje a domicilio."
  );
  const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${initialText}`;

  return (
    <motion.a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-charcoal border border-rose/30 text-rose shadow-glass-md hover:border-rose hover:text-ivory transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 w-full h-full rounded-full bg-rose/5 animate-pulse" />
      <MessageSquare className="w-6 h-6 z-10 transition-transform duration-500 group-hover:rotate-12" />
    </motion.a>
  );
}
