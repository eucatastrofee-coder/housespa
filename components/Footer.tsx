import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Clock, ShieldCheck, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal-deep border-t border-white/[0.03] pt-20 pb-10 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Logo & Manifesto */}
          <div className="md:col-span-2 pr-0 md:pr-12">
            <div className="flex items-center mb-6">
              <div className="relative w-44 h-32">
                <Image
                  src="/logo.png"
                  alt="HouseSpa Logo"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="font-sans text-sm text-ivory-muted leading-relaxed max-w-sm mb-6">
              Servicios exclusivos de masaje profesional y rituales de bienestar entregados directamente en tu hogar, residencia, hotel u oficina. Sin traslados, sin estrés, solo bienestar absoluto.
            </p>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-rose/80 bg-charcoal-light border border-white/[0.03] rounded-full py-2 px-4 w-fit">
              <ShieldCheck className="w-4 h-4 text-rose" />
              <span>Terapeutas Certificados & Evaluados</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=61556339878477"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light border border-white/5 flex items-center justify-center text-ivory-muted hover:text-rose hover:border-rose/40 hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/house_spamx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light border border-white/5 flex items-center justify-center text-ivory-muted hover:text-rose hover:border-rose/40 hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div>
            <h4 className="font-serif text-sm text-ivory tracking-widest uppercase mb-6">Navegación</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-sm text-ivory-muted hover:text-rose transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-ivory-muted hover:text-rose transition-colors duration-300">
                  Masajes & Servicios
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-ivory-muted hover:text-rose transition-colors duration-300">
                  Nosotros & Vetting
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-ivory-muted hover:text-rose transition-colors duration-300">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-ivory-muted hover:text-rose transition-colors duration-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm text-ivory tracking-widest uppercase mb-6">Contacto & Horarios</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-ivory-muted">
                <Phone className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase text-ivory-muted/50 tracking-wider">Atención Directa</span>
                  <a href="tel:+5215614379653" className="hover:text-rose transition-colors">
                    +52 1 56 1437 9653
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory-muted">
                <Mail className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase text-ivory-muted/50 tracking-wider">Correo Electrónico</span>
                  <a href="mailto:hola@housespa.mx" className="hover:text-rose transition-colors">
                    hola@housespa.mx
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory-muted">
                <Clock className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase text-ivory-muted/50 tracking-wider">Horario de Servicios</span>
                  <span className="block">Lunes a Domingo</span>
                  <span className="block text-xs text-rose/80">08:00 AM — 10:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-white/[0.03] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory-muted/50 tracking-wider">
            &copy; {currentYear} HouseSpa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/faq" className="text-xs text-ivory-muted/50 hover:text-rose transition-colors">
              Políticas de Cancelación
            </Link>
            <Link href="/about" className="text-xs text-ivory-muted/50 hover:text-rose transition-colors">
              Filtro de Seguridad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
