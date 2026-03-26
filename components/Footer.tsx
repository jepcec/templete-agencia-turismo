"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white/50 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1">
                <div className="bg-black text-white px-1.5 py-0.5 font-black text-xl italic leading-none">
                  R*
                </div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                Cusco<span className="text-primary">Travel</span>
              </span>
            </Link>
            <p className="text-xs font-black uppercase tracking-widest leading-relaxed">
              Puerta de entrada a las maravillas del Imperio Inca. <br />
              Operaciones de alto impacto en Cusco y todo el Perú.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10">Compañía</h4>
            <ul className="space-y-6 text-[10px] font-black uppercase tracking-widest">
              <li><Link href="#" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Expediciones</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Sectores</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Informes</Link></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10">Mundos</h4>
            <ul className="space-y-6 text-[10px] font-black uppercase tracking-widest">
              <li><Link href="#" className="hover:text-primary transition-colors">Machu Picchu Pro</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Leyenda Inca</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Valle Sagrado</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">7 Colores</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10">Contacto</h4>
            <ul className="space-y-6 text-[10px] font-black uppercase tracking-widest">
              <li className="text-white/30">Plaza de Armas, Cusco, Perú</li>
              <li><span className="text-primary">+51 984 123 456</span></li>
              <li>info@cuscotravel.com</li>
            </ul>
            <div className="mt-12">
              <div className="flex bg-white/5 border border-white/10 p-1">
                <input 
                  type="email" 
                  placeholder="SUSCRIBIRSE" 
                  className="bg-transparent px-4 py-3 text-[10px] font-black uppercase tracking-widest focus:outline-none w-full"
                />
                <button className="bg-primary text-black px-4 py-2 font-black uppercase text-[10px]">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="hover:text-white transition-colors">Legal</Link>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            © 2024 Cusco Travel Agency. Edición Global.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
