"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate luxury API submit request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
      {/* Contact Details Column */}
      <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-12 rounded-3xl glassmorphism shadow-luxury-md">
        <div>
          <span className="text-rose uppercase tracking-[0.3em] text-xs font-semibold block mb-4">
            Información
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-ivory tracking-wider mb-8">
            Estemos en Contacto
          </h3>

          <ul className="flex flex-col gap-8">
            <li className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose/5 text-rose border border-rose/15 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase text-ivory-muted/40 tracking-wider mb-1">
                  Atención Telefónica
                </span>
                <a href="tel:+5215500000000" className="text-sm text-ivory hover:text-rose transition-colors duration-300 font-medium">
                  +52 1 55 0000 0000
                </a>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose/5 text-rose border border-rose/15 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase text-ivory-muted/40 tracking-wider mb-1">
                  Correo Electrónico
                </span>
                <a href="mailto:hola@housespa.mx" className="text-sm text-ivory hover:text-rose transition-colors duration-300 font-medium">
                  hola@housespa.mx
                </a>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose/5 text-rose border border-rose/15 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase text-ivory-muted/40 tracking-wider mb-1">
                  Horario de Servicios
                </span>
                <p className="text-sm text-ivory font-medium">
                  Lunes a Domingo
                  <span className="block text-rose text-xs mt-0.5">08:00 AM — 10:00 PM</span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.03] text-xs text-ivory-muted/50 leading-relaxed font-sans">
          Recomendamos agendar con al menos 2 horas de anticipación para asegurar disponibilidad de terapeutas en tu zona.
        </div>
      </div>

      {/* Contact Form Column */}
      <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl glassmorphism shadow-luxury-md flex flex-col justify-center">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-rose/10 border border-rose/30 text-rose mb-6 animate-pulse">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl text-ivory tracking-wide mb-4">
              Mensaje Recibido
            </h4>
            <p className="text-sm text-ivory-muted leading-relaxed max-w-sm mb-8">
              Gracias por escribirnos. Uno de nuestros coordinadores de bienestar se pondrá en contacto contigo a la brevedad.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-xs uppercase tracking-widest text-rose hover:text-rose-light border-b border-rose/30 hover:border-rose pb-1 transition-all"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-ivory-muted/60">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-charcoal/50 border border-white/5 focus:border-rose focus:outline-none rounded-xl px-5 py-3.5 text-sm text-ivory transition-colors duration-300"
                  placeholder="Ej. Sofía Ramos"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-ivory-muted/60">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-charcoal/50 border border-white/5 focus:border-rose focus:outline-none rounded-xl px-5 py-3.5 text-sm text-ivory transition-colors duration-300"
                  placeholder="ejemplo@correo.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-widest text-ivory-muted/60">
                Número Celular
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="bg-charcoal/50 border border-white/5 focus:border-rose focus:outline-none rounded-xl px-5 py-3.5 text-sm text-ivory transition-colors duration-300"
                placeholder="Ej. +52 55 1234 5678"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-ivory-muted/60">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-charcoal/50 border border-white/5 focus:border-rose focus:outline-none rounded-xl px-5 py-3.5 text-sm text-ivory transition-colors duration-300 resize-none"
                placeholder="¿En qué podemos ayudarte? Escribe tus dudas aquí..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group flex items-center justify-center gap-3 w-full rounded-xl bg-rose hover:bg-rose-dark text-charcoal-deep font-semibold uppercase tracking-[0.2em] py-4 text-xs transition-all duration-300 shadow-luxury-sm disabled:opacity-50"
            >
              <span>{status === "submitting" ? "Enviando..." : "Enviar Mensaje"}</span>
              <ArrowRight className="w-4 h-4 text-charcoal-deep group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
