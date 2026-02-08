import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

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
            <h1 className="text-4xl md:text-7xl text-white font-serif tracking-[0.2em] uppercase drop-shadow-2xl">{t.about.heroTitle}</h1>
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
            <h2 className="text-3xl font-serif text-marine-blue uppercase tracking-widest border-b border-marine-blue/20 pb-4 inline-block">{t.about.section1Title}</h2>
            <p className="font-serif text-gray-700 leading-relaxed text-lg italic">
              {t.about.section1Text1}
            </p>
            <p className="font-serif text-gray-600 leading-loose text-base">
              {t.about.section1Text2}
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
            <h2 className="text-3xl font-serif text-marine-blue uppercase tracking-widest border-b border-marine-blue/20 pb-4 inline-block">{t.about.section2Title}</h2>
            <p className="font-serif text-gray-700 leading-relaxed text-lg italic">
              {t.about.section2Text1}
            </p>
            <p className="font-serif text-gray-600 leading-loose text-base">
              {t.about.section2Text2}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};