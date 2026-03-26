"use client";

import { Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Protocolos: Altitud en Cusco",
    category: "Táctico",
    date: "15 Mar, 2024",
    image: "https://images.unsplash.com/photo-1518182170546-076d3fd16942?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Infiltración: Machu Picchu 2024",
    category: "Misión",
    date: "10 Mar, 2024",
    image: "https://images.unsplash.com/photo-1541417101235-5be13247079a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Gastronomía: El Sabor del Imperio",
    category: "Cultura",
    date: "05 Mar, 2024",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-primary text-xl font-black mb-4 tracking-tight italic">Noticias & Reportes</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
              Últimas <br /> Actualizaciones
            </h3>
          </div>
          <button className="btn-rockstar-outline px-12 py-4">
            Archivo Completo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer bg-[#161616] border border-white/5 overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-black px-3 py-0.5 text-[10px] font-black uppercase tracking-widest">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex items-center gap-2 text-white/30 text-[10px] font-black uppercase tracking-widest mb-4">
                  <Calendar size={12} /> {article.date}
                </div>
                <h4 className="text-3xl font-black text-white mb-8 group-hover:text-primary transition-colors leading-tight italic uppercase tracking-tighter">
                  {article.title}
                </h4>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/50 group-hover:text-white group-hover:translate-x-2 transition-all">
                  Leer Reporte <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
