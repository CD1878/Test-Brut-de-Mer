import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { NavLink } from 'react-router-dom';

const ContentSection: React.FC<{
  imageSrc: string;
  title: string;
  text: string;
  reversed?: boolean;
  grayBg?: boolean;
}> = ({ imageSrc, title, text, reversed = false, grayBg = false }) => (
  <section className={`w-full py-16 md:py-24 ${grayBg ? 'bg-soft-gray' : 'bg-cream'}`}>
    <div className="max-w-6xl mx-auto px-6">
      <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${reversed ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden shadow-xl">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl font-serif text-marine-blue uppercase tracking-widest">{title}</h2>
          <div className="w-16 h-px bg-marine-blue mx-auto md:mx-0 opacity-50"></div>
          <p className="font-serif text-gray-700 leading-relaxed text-base md:text-lg italic">
            {text}
          </p>
          <div className="pt-4">
            <NavLink to="/menu">
              <Button variant="outline">Ontdek De Collectie</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ReviewSlider: React.FC = () => {
  const reviews = [
    {
      text: "The only time to eat diet food is while you're waiting for the steak to cook. But here, we wait for oysters.",
      author: "Julia Child (Inspired)"
    },
    {
      text: "Een stukje Frankrijk in de Pijp. De beste oesters van Amsterdam, zonder twijfel.",
      author: "Liesbeth (Gast review)"
    },
    {
      text: "Heerlijke sfeer, fantastische wijnen en de Fruits de Mer is een absolute aanrader.",
      author: "Mark (Gast review)"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="bg-marine-blue text-white py-24 text-center px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-8 relative">
        <div className="text-6xl font-serif opacity-30">“</div>
        <div className="min-h-[140px] md:min-h-[100px] flex items-center justify-center">
          <p
            key={currentIndex}
            className="text-xl md:text-2xl font-serif italic leading-relaxed tracking-wide animate-fade-in"
          >
            {reviews[currentIndex].text}
          </p>
        </div>
        <div className="text-xs uppercase tracking-widest opacity-70 pt-4">— {reviews[currentIndex].author}</div>
        <div className="flex justify-center gap-3 pt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-6' : 'bg-white opacity-30 hover:opacity-100'}`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2400", // Sharp interior
    "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=2400", // Sharp oysters
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2400"  // Sharp wine/bubbles
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="animate-fade-in bg-cream">
      {/* Hero Section */}
      <div className="relative w-full h-[85vh] bg-gray-900 overflow-hidden">
        {heroImages.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Hero ${idx}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${idx === heroIndex ? 'opacity-60 scale-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-8 px-4 bg-black/20">
          <h1 className="text-6xl md:text-8xl font-serif tracking-[0.2em] text-center drop-shadow-2xl">BRUT DE MER</h1>
          <div className="w-20 h-px bg-white opacity-50"></div>
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] font-light max-w-lg text-center leading-relaxed">
            Amsterdam's most exquisite seafood bar since 2016
          </p>
          <NavLink to="/over-ons">
            <button className="mt-12 border border-white/50 bg-white/5 backdrop-blur-sm px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-marine-blue transition-all duration-500 font-medium">
              Ontdek Onze Wereld
            </button>
          </NavLink>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-px h-12 bg-white"></div>
        </div>
      </div>

      {/* Intro Text */}
      <div className="py-24 text-center max-w-4xl mx-auto px-6">
        <h3 className="text-xs uppercase tracking-[0.5em] text-marine-blue/60 mb-8 font-sans">Puurheid & Passie</h3>
        <p className="font-serif text-2xl md:text-4xl text-marine-blue italic leading-relaxed">
          "Een stukje Parijse allure in hartje Amsterdam. Waar de zilte zeelucht de Pijp ontmoet en elk glas vertelt over de Loire."
        </p>
      </div>

      {/* Content Sections */}
      <ContentSection
        imageSrc="https://images.unsplash.com/photo-1599458252271-75480a67233c?auto=format&fit=crop&q=80&w=1200"
        title="Oesters & Schelpdieren"
        text="Onze passie voor oesters kent geen grenzen. Dagelijks selecteren wij de mooiste variëteiten direct van de Franse kust en onze eigen Zeeuwse bodem. Van de iconische Gillardeau tot de brute Zeeuwse Creuse."
      />

      <ContentSection
        imageSrc="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1200"
        title="Verfijnde Wijnen"
        text="Een zorgvuldig samengestelde collectie van voornamelijk Franse wijnen. Onze sommeliers adviseren u graag over de perfecte match, van een minerale Muscadet tot een rijke, complexe Meursault."
        reversed={true}
        grayBg={true}
      />

      <ContentSection
        imageSrc="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1200"
        title="Dagverse Vangst"
        text="Niets overtreft de eenvoud van dagverse vis. Puur bereid, met respect voor het product. Ontdek onze wisselende specials en de befaamde Plateau Brut de Mer, het ultieme eerbetoon aan de zee."
      />

      <ReviewSlider />

      {/* Final Visual */}
      <section className="h-[50vh] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover grayscale-[20%]"
          alt="Atmosphere"
        />
        <div className="absolute inset-0 bg-marine-blue/10 flex items-center justify-center">
          <div className="text-center text-white border border-white/30 p-12 backdrop-blur-md">
            <h2 className="text-4xl font-serif mb-4 italic">Bubbels & Oesters</h2>
            <p className="uppercase tracking-[0.3em] text-xs">De perfecte afsluiting van de dag</p>
          </div>
        </div>
      </section>
    </div>
  );
};