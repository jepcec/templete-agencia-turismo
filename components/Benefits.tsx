"use client";

import { ShieldCheck, Map, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Map className="w-10 h-10 text-primary" />,
    title: "Expertos Locales",
    description: "Guiados por leyendas vivas de los Andes, conociendo cada rincón secreto."
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Precio Directo",
    description: "Sin intermediarios. El valor real de una experiencia premium."
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Soporte Total",
    description: "Operaciones tácticas 24/7 para tu seguridad y comodidad."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Acceso Blindado",
    description: "Protocolos de seguridad de alto nivel y reservas garantizadas."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-[#161616] border-y border-white/5 relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 group hover:bg-black/40 transition-all duration-300"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 italic tracking-tighter uppercase leading-none group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-white/50 text-sm font-medium tracking-tight leading-relaxed uppercase">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
