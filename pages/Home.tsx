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
        <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden shadow-2xl group">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
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
              <Button variant="outline">Ontdek De Kaart</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ImageCarousel: React.FC = () => {
  const images = [
    "https://brutdemer.nl/wp-content/uploads/2022/03/carusel-10.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/carusel-11.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/carusel-12.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/carusel-15.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/carusel-13.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/verplicht-2.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/carusel-1.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/carusel-17.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/carusel-2.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-[50vh] md:h-[60vh] bg-cream relative overflow-hidden flex items-center justify-center">
      <div className="flex gap-4 px-4 transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(calc(-${index * 300}px + 50vw - 150px))` }}>
        {images.map((src, i) => (
          <div
            key={i}
            className={`w-[280px] md:w-[400px] h-[400px] flex-shrink-0 transition-all duration-700 ${i === index ? 'scale-110 z-10 opacity-100 shadow-2xl' : 'scale-90 opacity-40 grayscale-[50%]'}`}
          >
            <img src={src} alt={`Moment ${i}`} className="w-full h-full object-cover rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ReviewSlider: React.FC = () => {
  const reviews = [
    {
      text: "Fantastisch eten en goede bediening. Speciaal teruggekomen voor de fantastische oesters, maar ook de bijgerechten zijn top. Bijzonder vriendelijke en snelle bediening.",
      author: "Maarten"
    },
    {
      text: "Subliem! Absoluut een van de beste visrestaurants waar ik ooit ben geweest! De oesters zijn geweldig, de king krab zoals je hem altijd al wilde eten en de pulpo zo mals...",
      author: "Russell Ramirez"
    },
    {
      text: "Heerlijk, gezellig en verrassend. Fruit de mer is heerlijk en veel verschillende oesters. De krab, makreel en picana zijn ook echte aanraders.",
      author: "Roger"
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
        <div className="min-h-[160px] md:min-h-[120px] flex items-center justify-center">
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
    "https://brutdemer.nl/wp-content/uploads/2022/04/1920x610_nieuw_header_brut_de_mere.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/brut-de-mer-terras-over-ons-header.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/verplicht-1.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/contact-page-1.jpg",
    "https://brutdemer.nl/wp-content/uploads/2022/03/contact-page-2.jpg"
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
      <div className="relative w-full h-[85vh] bg-black overflow-hidden">
        {heroImages.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Hero ${idx}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${idx === heroIndex ? 'opacity-60 scale-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-[70px] font-serif tracking-[3px] uppercase leading-tight drop-shadow-sm mb-8 font-light">
            BRUT DE MER
          </h1>
          <div className="max-w-2xl space-y-8">
            <p className="text-sm md:text-base font-serif leading-relaxed opacity-90 font-light">
              Brut de Mer brengt de Cote d’ Azur naar het gezellige Gerard Douplein in Amsterdam. Wij zijn een dynamische Oester – Vis – Wijn – Bar waar altijd een heerlijke bruisende sfeer heerst. Kakelverse oesters die dagelijks en direct vanuit de Zeeuwse oester putten geleverd worden.
            </p>
            <div className="pt-8">
              <NavLink to="/over-ons">
                <button className="bg-[#202F4F] text-white px-10 py-3 text-[12px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#202F4F] transition-all duration-300 font-light shadow-xl">
                  Lees Meer
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-pulse">
          <div className="w-px h-16 bg-white"></div>
        </div>
      </div>

      {/* Intro Text */}
      <div className="py-32 text-center max-w-4xl mx-auto px-6">
        <h3 className="text-xs uppercase tracking-[0.6em] text-marine-blue/60 mb-10 font-sans font-bold">Puurheid & Passie</h3>
        <p className="font-serif text-3xl md:text-5xl text-marine-blue italic leading-snug">
          "Wij zijn een dynamische Oester – Vis – Wijn – Bar waar altijd een heerlijke bruisende sfeer heerst."
        </p>
      </div>

      {/* Sections with Official Content */}
      <ContentSection
        imageSrc="https://brutdemer.nl/wp-content/uploads/2022/04/800x570-oesters.jpg"
        title="Oesters"
        text="Ga jij voor je favoriet of laat je je inspireren door onze oesterman? Met onze 6 verschillende oesters zit er altijd iets passends bij. Keuzestress? Niet nodig! Take it all met onze proeverij!"
      />

      <ContentSection
        imageSrc="https://brutdemer.nl/wp-content/uploads/2022/04/800x570-vis.jpg"
        title="Vis"
        text="Dagelijks serveren wij duurzame vis die rechtstreeks uit de zee gevangen wordt. Laat u verrassen en geniet van de vangst van de dag! Ga voor de Fruits de mer en ontdek op BRUTale wijze wat de zee te bieden heeft."
        reversed={true}
        grayBg={true}
      />

      <ContentSection
        imageSrc="https://brutdemer.nl/wp-content/uploads/2022/04/800x570-wijn.jpg"
        title="Wijn"
        text="Een avond zonder wijn is als oesters zonder parels. Maak uw avond af door te genieten van uw favoriete wijn of laat u adviseren door een van ons!"
      />

      <ContentSection
        imageSrc="https://brutdemer.nl/wp-content/uploads/2022/04/800x570-bar.jpg"
        title="Bar"
        text="Start de avond met een bubbel en eindig met een cocktail! Naast de wijn, champagne en cocktails serveren wij zowel non-alcoholisch als alcoholische alternatieven, waardoor iedereen een brute experience beleeft."
        reversed={true}
        grayBg={true}
      />

      <ReviewSlider />

      {/* Image Gallery Slider */}
      <section className="py-24 bg-cream">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.6em] text-marine-blue/40 font-bold">Visual Moments</h2>
        </div>
        <ImageCarousel />
      </section>

      {/* Final Visual */}
      <section className="h-[60vh] relative overflow-hidden">
        <img
          src="https://brutdemer.nl/wp-content/uploads/2022/03/verplicht-1.jpg"
          className="w-full h-full object-cover"
          alt="Atmosphere"
        />
        <div className="absolute inset-0 bg-marine-blue/20 flex items-center justify-center">
          <div className="text-center text-white border border-white/40 p-16 backdrop-blur-xl shadow-2xl">
            <h2 className="text-5xl font-serif mb-6 italic drop-shadow-lg">Beleef de Zilte Smaak</h2>
            <p className="uppercase tracking-[0.4em] text-sm font-light drop-shadow-md">Gerard Douplein 8H, Amsterdam</p>
          </div>
        </div>
      </section>
    </div>
  );
};