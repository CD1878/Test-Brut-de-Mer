import React from 'react';
import { Instagram, Facebook, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-marine-blue text-white pt-16 pb-12 mt-auto relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* Contact Column */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-serif text-lg tracking-widest uppercase mb-2">Contact</h3>
          <div className="font-sans text-sm font-light leading-relaxed text-gray-300">
            <p>Brut de Mer</p>
            <p>Gerard Douplein 8H</p>
            <p>1072 VE Amsterdam</p>
            <p className="mt-2"><a href="tel:0204714099" className="hover:text-white transition-colors">020 – 471 40 99</a></p>
          </div>
          <div className="pt-4 flex gap-6">
            <a href="https://www.instagram.com/brut_de_mer/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/Brut-de-Mer-1547834715464434/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.tripadvisor.nl/Restaurant_Review-g188590-d8538295-Reviews-Brut_de_Mer-Amsterdam_North_Holland_Province.html" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
              <Award size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Opening Hours Column */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-serif text-lg tracking-widest uppercase mb-2">Openingstijden</h3>
          <div className="font-sans text-sm font-light leading-relaxed text-gray-300 space-y-1">
            <div className="flex justify-between w-48 md:w-56 border-b border-gray-800 pb-1"><span>Maandag:</span> <span>16:00 – 00:00</span></div>
            <div className="flex justify-between w-48 md:w-56 border-b border-gray-800 pb-1"><span>Dinsdag:</span> <span>16:00 – 00:00</span></div>
            <div className="flex justify-between w-48 md:w-56 border-b border-gray-800 pb-1"><span>Woensdag:</span> <span>16:00 – 00:00</span></div>
            <div className="flex justify-between w-48 md:w-56 border-b border-gray-800 pb-1"><span>Donderdag:</span> <span>16:00 – 00:00</span></div>
            <div className="flex justify-between w-48 md:w-56 border-b border-gray-800 pb-1"><span>Vrijdag:</span> <span>12:00 – 00:00</span></div>
            <div className="flex justify-between w-48 md:w-56 border-b border-gray-800 pb-1"><span>Zaterdag:</span> <span>12:00 – 00:00</span></div>
            <div className="flex justify-between w-48 md:w-56 border-b border-gray-800 pb-1"><span>Zondag:</span> <span>12:00 – 00:00</span></div>
          </div>
          <p className="text-xs text-gray-400 italic mt-4">
            Onze keuken sluit iedere dag om 22:00
          </p>
        </div>

        {/* Brand Column */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h3 className="font-serif text-lg tracking-widest uppercase mb-2">Instagram</h3>
          <p className="font-sans text-sm font-light text-gray-300">
            Deel uw momenten met #brutdemer en beleef de sfeer van de Cote d'Azur in de Pijp.
          </p>
          <a href="https://www.instagram.com/brut_de_mer/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
            @BRUT_DE_MER
          </a>
        </div>
      </div>

      {/* Fixed Reservation Button */}
      <div className="fixed bottom-0 right-0 z-50 p-6 md:p-8">
        <a
          href="#tebi-reservations"
          className="bg-marine-blue text-white font-serif text-xs uppercase tracking-widest py-3 px-6 shadow-none hover:bg-white hover:text-marine-blue border border-white transition-colors duration-300"
        >
          Reserveren
        </a>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center">
        <p className="text-[10px] text-gray-500 font-sans tracking-[0.2em] uppercase">
          &copy; {new Date().getFullYear()} BRUT DE MER AMSTERDAM. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};