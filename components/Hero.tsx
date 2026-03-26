"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Cinematic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20000ms] hover:scale-110"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?q=80&w=2070&auto=format&fit=crop')",
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
            className="text-6xl md:text-8xl lg:text-[120px] font-black mb-8 leading-[0.85] tracking-tighter uppercase italic"
          >
            Cusco <br />
            <span className="text-primary">Eterno</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/80 max-w-2xl mb-12 font-medium tracking-tight leading-tight uppercase"
          >
            Tours de alto impacto en el corazón de los Andes. Vive la experiencia definitiva en Machu Picchu con expertos locales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="btn-rockstar text-lg px-12 py-5 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none">
              Ver Catálogo
            </button>
            <button className="btn-rockstar-outline text-lg px-12 py-5">
              Nuestra Historia
            </button>
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
