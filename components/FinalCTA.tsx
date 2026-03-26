"use client";

import { motion } from "framer-motion";
import { Send, Info } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contacto" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#161616] overflow-hidden p-8 md:p-32 text-center text-white border border-white/5"
        >
          {/* Background Pattern/Texture */}
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center grayscale pointer-events-none"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1584559582128-b8be739912e1?q=80&w=2071&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-primary text-lg md:text-xl font-black mb-6 tracking-tight italic">Únete a la Expedición</h2>
            <h3 className="text-4xl md:text-8xl font-black italic tracking-tighter uppercase leading-[1] md:leading-[0.9] mb-12">
              Empieza <br className="hidden md:block" /> Tu Misión <br /> <span className="text-primary">Hoy</span>
            </h3>
            <p className="text-white/50 text-base md:text-xl mb-16 leading-tight font-black uppercase tracking-tight max-w-2xl mx-auto">
              Operaciones personalizadas. Guías expertos. La experiencia definitiva en los Andes está a un clic.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-rockstar group w-full md:w-auto md:min-w-[300px]"
              >
                <span>Solicitar Reporte Gratis</span>
                <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-rockstar-outline group w-full md:w-auto md:min-w-[300px]"
              >
                <span>Ver Directivas</span>
                <Info className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
