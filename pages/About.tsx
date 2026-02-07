import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-cream animate-fade-in">
      {/* Hero */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://brutdemer.nl/wp-content/uploads/2022/03/brut-de-mer-terras-over-ons-header.jpg"
          alt="Brut de Mer Terras"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl text-white font-serif tracking-[0.2em] uppercase drop-shadow-2xl">Over Ons</h1>
            <div className="w-16 h-px bg-white mx-auto mt-6 opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">

        {/* BRUT DE MER Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 shadow-2xl overflow-hidden group">
            <img
              src="https://brutdemer.nl/wp-content/uploads/2022/03/contact-page-1.jpg"
              alt="Brut de Mer Sfeer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl font-serif text-marine-blue uppercase tracking-widest border-b border-marine-blue/20 pb-4 inline-block">BRUT DE MER</h2>
            <p className="font-serif text-gray-700 leading-relaxed text-lg italic">
              Brut de Mer brengt de Cote d’ Azur naar het gezellige Gerard Douplein in Amsterdam. Wij zijn een dynamische Oester – Vis – Wijn – Bar waar altijd een heerlijke bruisende sfeer heerst.
            </p>
            <p className="font-serif text-gray-600 leading-loose text-base">
              Kakelverse oesters die dagelijks en direct vanuit de Zeeuwse oester putten geleverd worden. Brut heeft een groot assortiment oesters uit diverse streken waarbij we rekening houden met de verschillende seizoenen en herkomst. De oesters worden op professionele wijze geopend door onze getrainde oestermannen. Zij kunnen u over iedere oester informeren en hierbij een passende wijn adviseren.
            </p>
          </div>
        </div>

        {/* WIE ZIJN WIJ Section */}
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="w-full md:w-1/2 shadow-2xl overflow-hidden group">
            <img
              src="https://brutdemer.nl/wp-content/uploads/2022/03/contact-page-2.jpg"
              alt="Wie zijn wij"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl font-serif text-marine-blue uppercase tracking-widest border-b border-marine-blue/20 pb-4 inline-block">WIE ZIJN WIJ</h2>
            <p className="font-serif text-gray-700 leading-relaxed text-lg italic">
              In april 2015 opende Brut de Mer aan het Gerard Douplein in de Amsterdamse Pijp. Brut de Mer is van vijf vrienden, wij hebben allen ons eigen specialisme waardoor er een goede/sterke synergie ontstaat binnen Brut.
            </p>
            <p className="font-serif text-gray-600 leading-loose text-base">
              Voor de een zijn we een oesterbar, voor de ander een visbar of restaurant. Iedereen beleeft Brut de Mer op zijn manier. Met de wijze hoe wij de klant bedienen, onze robuuste uitstraling en fantastische gerechten heeft Brut de Mer vis opnieuw op de kaart gezet. Wij zijn niet traditioneel en zeker niet stijf, met creatieve gerechten, met de beste ingrediënten en enthousiast personeel hebben we een bijzonder mooi en gezellig concept!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};