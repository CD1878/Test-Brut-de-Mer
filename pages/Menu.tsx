import React from 'react';
import { Button } from '../components/Button';

export const Menu: React.FC = () => {
  const menuCategories = [
    { name: "Snacks", link: "https://brutdemer.nl/wp-content/uploads/2025/11/content___com.whatsapp.provider-4.pdf" },
    { name: "Diner", link: "https://brutdemer.nl/wp-content/uploads/2025/11/content___com.whatsapp.provider_1.pdf" },
    { name: "Wijnen", link: "https://brutdemer.nl/wp-content/uploads/2025/11/content___com.whatsapp.provider-6.pdf" },
    { name: "Kerstmenu", link: "https://brutdemer.nl/?ft-ticket=2523f225" }
  ];

  return (
    <div className="py-24 px-6 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <h1 className="text-marine-blue font-serif text-5xl md:text-6xl tracking-[0.2em] uppercase">
            Menu
          </h1>
          <div className="w-16 h-px bg-marine-blue mx-auto opacity-40"></div>
          <p className="text-gray-600 font-serif italic text-lg">
            Ontdek onze dagverse smaken en geselecteerde wijnen
          </p>
        </div>

        {/* Menu Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
          {menuCategories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="border border-marine-blue/20 p-12 text-center hover:bg-marine-blue hover:text-white transition-all duration-500 bg-white/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 border border-marine-blue/5 m-2 pointer-events-none"></div>
                <h3 className="text-2xl font-serif uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all duration-500">
                  {cat.name}
                </h3>
                <div className="mt-4 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                  Bekijk Menu
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Decorative Quote */}
        <div className="mt-32 text-center max-w-2xl px-6 opacity-60">
          <p className="font-serif italic text-xl text-marine-blue">
            "Savor the ocean's finest offerings, paired with the perfect bubbles."
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <span className="w-1 h-1 bg-marine-blue rounded-full"></span>
            <span className="w-1 h-1 bg-marine-blue rounded-full"></span>
            <span className="w-1 h-1 bg-marine-blue rounded-full"></span>
          </div>
        </div>

        {/* Allergy Warning */}
        <div className="mt-24 py-8 border-t border-marine-blue/10 w-full text-center">
          <p className="font-serif text-sm text-gray-400 italic">
            Heeft u een allergie? Laat het ons weten! Wij informeren u graag over onze ingrediënten.
          </p>
        </div>

      </div>
    </div>
  );
};