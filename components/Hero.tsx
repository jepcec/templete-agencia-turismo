"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Cinematic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20000ms] hover:scale-110"
        style={{ 
          backgroundImage: "url('https://content.r9cdn.net/rimg/simg/2048/45618.jpg?width=1366&height=768&xhint=1020&yhint=831&crop=true')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="bg-primary text-black px-4 py-1 text-xs font-black uppercase tracking-widest inline-block skew-x-[-10deg]">
              <span className="inline-block skew-x-[10deg]">Explora lo Desconocido</span>
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-[120px] font-black mb-8 leading-[0.9] md:leading-[0.85] tracking-tighter uppercase italic"
          >
            Cusco <br />
            <span className="text-primary">Eterno</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-2xl text-white/80 max-w-2xl mb-12 font-medium tracking-tight leading-snug md:leading-tight uppercase"
          >
            Tours de alto impacto en el corazón de los Andes. Vive la experiencia definitiva en Machu Picchu con expertos locales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-rockstar group w-full sm:w-auto sm:min-w-[240px]"
            >
              <span>Ver Catálogo</span>
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-rockstar-outline w-full sm:w-auto sm:min-w-[240px]"
            >
              Nuestra Historia
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Grid Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      {/* Bottom Label */}
      <div className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-6">
        <div className="h-[1px] w-24 bg-white/30" />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
          Cusco Travel • Edición 2024
        </p>
      </div>
    </section>
  );
};

export default Hero;
