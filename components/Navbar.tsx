"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Tours", href: "#tours" },
    { name: "Destinos", href: "#destinos" },
    { name: "Blog", href: "#blog" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-black/90 backdrop-blur-md border-white/10 py-2" 
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1 transform group-hover:rotate-90 transition-transform duration-300">
                <div className="bg-black text-white px-1.5 py-0.5 font-black text-xl italic leading-none">
                  R*
                </div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                Cusco<span className="text-primary">Travel</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-rockstar text-xs">
              Reservar ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full btn-rockstar py-4 text-sm">
                  Reservar ahora
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
