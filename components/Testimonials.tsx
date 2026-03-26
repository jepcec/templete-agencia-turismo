"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Elena Rodriguez",
    location: "España",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    text: "Experiencia definitiva. Organización impecable de principio a fin. El nivel de detalle es de otro mundo.",
    rating: 5
  },
  {
    name: "James Wilson",
    location: "USA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    text: "Guías con conocimiento absoluto. Nos llevaron por rutas tácticas que jamás habríamos descubierto solos.",
    rating: 5
  },
  {
    name: "Maria Silva",
    location: "Brasil",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    text: "Atención excepcional. El equipo fue extremadamente profesional y flexible. Cusco es pura magia.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-primary text-xl font-black mb-4 tracking-tight italic">Testimonios</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
            Reportes de <br /> Campo
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#161616] p-12 relative border border-white/5 group hover:border-primary/50 transition-all duration-500"
            >
              <Quote className="absolute top-12 right-12 text-white/5 group-hover:text-primary/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#FDBE11" className="text-primary" />
                ))}
              </div>

              <p className="text-white/70 mb-12 italic font-medium leading-relaxed text-lg uppercase tracking-tight">
                &quot;{item.text}&quot;
              </p>

              <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all overflow-hidden border border-white/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-widest leading-none mb-1">{item.name}</h4>
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
