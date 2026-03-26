"use client";

import { Clock, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const tours = [
  {
    title: "Machu Picchu Pro",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop",
    duration: "1 Día",
    price: "299",
    rating: 4.9,
    tag: "Original",
    size: "large"
  },
  {
    title: "Valle Sagrado",
    image: "https://images.unsplash.com/photo-1590050752117-23a9d7f281bd?q=80&w=2070&auto=format&fit=crop",
    duration: "1 Día",
    price: "85",
    rating: 4.8,
    tag: "Cultura",
    size: "small"
  },
  {
    title: "7 Colores",
    image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=2070&auto=format&fit=crop",
    duration: "1 Día",
    price: "65",
    rating: 4.7,
    tag: "Aventura",
    size: "small"
  },
  {
    title: "Camino Inca",
    image: "https://images.unsplash.com/photo-1555930647-66c813d10bb2?q=80&w=2070&auto=format&fit=crop",
    duration: "4 Días",
    price: "650",
    rating: 5.0,
    tag: "Leyenda",
    size: "wide"
  },
  {
    title: "Humantay",
    image: "https://images.unsplash.com/photo-1610411802100-84c483a90306?q=80&w=2070&auto=format&fit=crop",
    duration: "1 Día",
    price: "75",
    rating: 4.9,
    tag: "Nature",
    size: "small"
  },
  {
    title: "Cusco City",
    image: "https://images.unsplash.com/photo-1584559582128-b8be739912e1?q=80&w=2071&auto=format&fit=crop",
    duration: "1/2 Día",
    price: "45",
    rating: 4.6,
    tag: "Ciudad",
    size: "small"
  }
];

const FeaturedTours = () => {
  return (
    <section id="tours" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary text-xl font-black mb-4 tracking-tight italic">Tours Destacados</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
              Nuestros <br /> Mundos
            </h3>
          </div>
          <button className="btn-rockstar-outline px-12 py-4">
            Ver Todo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[1000px]">
          {tours.map((tour, index) => {
            let gridClasses = "relative group overflow-hidden bg-[#161616] border border-white/5";
            if (tour.size === "large") gridClasses += " md:col-span-2 md:row-span-2";
            if (tour.size === "wide") gridClasses += " md:col-span-2 md:row-span-1";
            if (tour.size === "small") gridClasses += " md:col-span-1 md:row-span-1";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={gridClasses}
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-black px-3 py-0.5 text-[10px] font-black uppercase tracking-widest">
                    {tour.tag}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[10px] font-black text-white/60 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Clock size={12} /> {tour.duration}</span>
                      <span className="flex items-center gap-1"><Star size={12} fill="white" className="text-white" /> {tour.rating}</span>
                    </div>
                    <div className="text-xl font-black text-primary">
                      ${tour.price}
                    </div>
                  </div>
                </div>
                
                {/* Reveal on hover overlay */}
                <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
