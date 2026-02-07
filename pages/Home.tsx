import React from 'react';
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
        <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-2xl font-serif text-marine-blue uppercase tracking-widest">{title}</h2>
          <div className="w-12 h-px bg-marine-blue mx-auto md:mx-0"></div>
          <p className="font-serif text-gray-700 leading-loose text-sm md:text-base">
            {text}
          </p>
          <div className="pt-4">
            <NavLink to="/menu">
              <Button variant="outline">Ontdek Meer</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const QuoteSection: React.FC = () => (
  <section className="bg-marine-blue text-white py-20 text-center px-6">
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-6xl font-serif opacity-30">“</div>
      <p className="text-xl md:text-2xl font-serif italic leading-relaxed tracking-wide">
        The only time to eat diet food is while you're waiting for the steak to cook. But here, we wait for oysters.
      </p>
      <div className="text-xs uppercase tracking-widest opacity-70 pt-4">— Julia Child (Inspired)</div>
      <div className="flex justify-center gap-3 pt-6">
        <span className="w-2 h-2 bg-white rounded-full opacity-100"></span>
        <span className="w-2 h-2 bg-white rounded-full opacity-30"></span>
        <span className="w-2 h-2 bg-white rounded-full opacity-30"></span>
      </div>
    </div>
  </section>
);

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] bg-gray-900">
        <img
          src="/images/hero_interior.png"
          alt="Brut de Mer Interior"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-8 px-4 bg-black/30">
          <h1 className="text-5xl md:text-7xl font-serif tracking-widest text-center">BRUT DE MER</h1>
          <p className="text-sm md:text-base uppercase tracking-[0.2em] font-light max-w-lg text-center leading-relaxed">
            Amsterdam's finest spot for oysters, fish & bubbles since 2016
          </p>
          <NavLink to="/over-ons">
            <button className="mt-8 border border-white bg-marine-blue px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-marine-blue transition-colors duration-300">
              Read More
            </button>
          </NavLink>
        </div>
      </div>

      {/* Intro Text */}
      <div className="py-20 text-center max-w-3xl mx-auto px-6">
        <p className="font-serif text-lg md:text-xl text-gray-800 italic leading-loose">
          "Een stukje Frankrijk in de Pijp. Waar de tijd even stilstaat en de smaak van de zee tot leven komt."
        </p>
      </div>

      {/* Content Sections */}
      <ContentSection
        imageSrc="https://images.unsplash.com/photo-1599458252271-75480a67233c?auto=format&fit=crop&q=80&w=1200"
        title="Oysters"
        text="Wij serveren dagelijks diverse soorten oesters, vers van de afslag. Van de ziltige Zeeuwse Creuse tot de verfijnde Gillardeau. Onze oesters worden met zorg geopend en geserveerd met klassieke mignonette en citroen."
      />

      <ContentSection
        imageSrc="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200"
        title="Wine"
        text="Onze wijnkaart is een zorgvuldige selectie van Europese wijnhuizen. Met een focus op witte wijnen uit de Elzas, Bourgogne en Loire die perfect harmoniëren met onze gerechten. Vraag ons team naar de perfecte combinatie."
        reversed={true}
        grayBg={true}
      />

      <ContentSection
        imageSrc="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1200"
        title="Fish"
        text="Naast onze Fruits de Mer plateaus serveren wij prachtige visgerechten. Dagvers, puur en zonder onnodige toevoegingen. De smaak van de vis staat altijd centraal in onze keuken."
      />

      {/* Video Section */}
      <section className="w-full bg-soft-gray py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video w-full bg-black relative">
            {/* Placeholder for iframe to mimic Youtube embed without external script heavy load */}
            <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white flex-col">
              <span className="text-2xl font-serif mb-4">BRUT DE MER</span>
              <span className="uppercase tracking-widest text-xs border border-white px-4 py-2">Watch Video</span>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection />
    </div>
  );
};