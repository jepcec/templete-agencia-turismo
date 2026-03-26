"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/51984123456"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 bg-primary text-black p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center group transition-all"
    >
      <MessageCircle size={32} fill="black" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-black uppercase text-xs tracking-widest whitespace-nowrap">
        Contacto Directo
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
