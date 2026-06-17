"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Nosotros", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out py-4 px-6 md:px-12",
          isScrolled 
            ? "bg-charcoal/70 backdrop-blur-luxury border-b border-white/[0.04] py-3 shadow-glass-sm"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gold/10 flex items-center justify-center bg-charcoal/80 transition-all duration-500 group-hover:border-gold/30">
              <Image
                src="/logo.png"
                alt="HouseSpa Logo"
                fill
                sizes="40px"
                className="object-contain p-1.5 transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
            <span className="font-serif text-lg tracking-[0.2em] uppercase text-ivory transition-colors duration-500 group-hover:text-gold">
              HouseSpa
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm uppercase tracking-[0.15em] text-ivory/80 hover:text-gold transition-colors duration-300 py-2"
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-shimmer"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Book Now */}
          <div className="hidden md:flex items-center">
            <Link
              href="/services"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-transparent border border-gold/40 hover:border-gold px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-ivory transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Reservar Ahora</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 md:hidden p-2 text-ivory/85 hover:text-gold transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-charcoal-deep/90 backdrop-blur-luxury md:hidden flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-3xl font-serif tracking-widest transition-colors duration-300",
                        isActive ? "text-gold" : "text-ivory/80 hover:text-gold"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* CTA in mobile menu */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-white/5"
              >
                <Link
                  href="/services"
                  className="flex items-center justify-between w-full rounded-full bg-gold hover:bg-gold-dark px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold text-charcoal-deep transition-all duration-300"
                >
                  <span>Reservar Ahora</span>
                  <ArrowRight className="w-4 h-4 text-charcoal-deep" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
