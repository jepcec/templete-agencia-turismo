"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const points = [
    {
      title: "Personalización Total",
      description: "Itinerarios adaptados a tu ritmo. Sin compromisos. Sin limitaciones."
    },
    {
      title: "Operaciones 24/7",
      description: "Despliegue táctico en todo momento. Estamos en el terreno, listos para actuar."
    },
    {
      title: "Flota Exclusiva",
      description: "Control absoluto de la calidad. Sin intermediarios. Solo resultados premium."
    }
  ];

  return (
    <section className="py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative group"
          >
            <div className="relative aspect-[4/5] overflow-hidden border-4 border-white/10 group-hover:border-primary transition-colors duration-500">
              <img
                src="https://images.unsplash.com/photo-1544991583-0937a069d06b?q=80&w=2070&auto=format&fit=crop"
                alt="Viajero en Cusco"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-10 hidden md:block max-w-[320px] shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)]">
              <div className="flex items-center gap-4 mb-4">
                <p className="text-5xl font-black text-black italic leading-none">15+</p>
                <p className="text-[10px] text-black font-black uppercase tracking-widest">Años de <br /> Experiencia</p>
              </div>
              <p className="text-black text-xs font-black uppercase tracking-tight leading-tight">
                Expertos en crear memorias definitivas en los Andes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-primary text-xl font-black mb-4 tracking-tight italic">Excelencia Táctica</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none mb-12">
              ¿Por qué <br /> Elegirnos?
            </h3>
            
            <div className="space-y-12">
              {points.map((point, index) => (
                <div key={index} className="flex gap-8 group">
                  <div className="bg-white/5 w-16 h-16 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 transform group-hover:rotate-45">
                    <CheckCircle2 className="text-primary group-hover:text-black transition-colors duration-300 transform group-hover:-rotate-45" size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white mb-3 italic uppercase tracking-tighter">{point.title}</h4>
                    <p className="text-white/50 text-sm font-medium uppercase tracking-tight leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-rockstar mt-16 px-16 py-5 text-lg">
              Conócenos más
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
