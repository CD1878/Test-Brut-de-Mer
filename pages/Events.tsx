import React from 'react';
import { Button } from '../components/Button';

const EventSection: React.FC<{
    imageSrc: string;
    title: string;
    subtitle: string;
    text: string;
    ctaText: string;
    reversed?: boolean;
}> = ({ imageSrc, title, subtitle, text, ctaText, reversed = false }) => (
    <section className="w-full py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
            <div className={`flex flex-col md:flex-row items-center gap-16 ${reversed ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden shadow-2xl group">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-marine-blue/10 pointer-events-none"></div>
                </div>
                <div className="w-full md:w-1/2 space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="space-y-2">
                        <h3 className="text-xs uppercase tracking-[0.6em] text-marine-blue/50 font-bold">{subtitle}</h3>
                        <h2 className="text-4xl md:text-5xl font-serif text-marine-blue leading-tight italic">{title}</h2>
                    </div>
                    <div className="w-16 h-px bg-marine-blue opacity-30"></div>
                    <p className="font-serif text-lg text-gray-700 leading-relaxed italic max-w-lg">
                        {text}
                    </p>
                    <div className="pt-6">
                        <a href="https://brutdemer.nl/#contact" target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#202F4F] text-white px-12 py-4 text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-[#202F4F] border border-transparent hover:border-[#202F4F] transition-all duration-500 font-light shadow-xl">
                                {ctaText}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const Events: React.FC = () => {
    return (
        <div className="animate-fade-in bg-cream">
            {/* Hero Section */}
            <div className="relative w-full h-[65vh] bg-black overflow-hidden">
                <img
                    src="https://brutdemer.nl/wp-content/uploads/2022/04/1920x610_nieuw_header_brut_de_mere.jpg"
                    alt="Luxury Seafood Events"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-5xl md:text-[140px] font-serif tracking-[3px] text-center drop-shadow-2xl uppercase font-light">
                        Events
                    </h1>
                    <div className="w-24 h-px bg-white mt-10 opacity-50"></div>
                    <p className="text-xs md:text-sm uppercase tracking-[0.6em] mt-10 font-bold max-w-2xl text-center opacity-90">
                        Bijzondere momenten bij Brut de Mer
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-32 text-center max-w-4xl mx-auto px-6">
                <h3 className="text-xs uppercase tracking-[0.6em] text-marine-blue/40 mb-10 font-bold">Unforgettable Experiences</h3>
                <p className="font-serif text-3xl md:text-5xl text-marine-blue italic leading-snug">
                    "Bij Brut de Mer creëren we herinneringen die blijven hangen zoals de zilte smaak van een perfecte oester."
                </p>
            </div>

            {/* Mother's Day Section */}
            <EventSection
                subtitle="Zondag 11 Mei"
                title="Moederdag bij Brut de Mer"
                text="Verras de belangrijkste vrouw in je leven met een onvergetelijke middag aan het Gerard Douplein. Geniet samen van een speciaal geselecteerd plateau Fruits de Mer, sprankelende bubbels en de meest verfijnde oesters in een ambiance van Franse allure."
                imageSrc="https://brutdemer.nl/wp-content/uploads/2022/03/carusel-15.jpg"
                ctaText="Reserveer voor Moederdag"
            />

            {/* Private Dining / Group Section */}
            <EventSection
                subtitle="Groepen & Partijen"
                title="Private Moments"
                text="Onze bar is de perfecte plek voor een BRUTale borrel of een op maat gemaakt event. Van oesterproeverijen voor groepen tot exclusieve diners in het hart van de Pijp. Wij verzorgen uw event tot in de kleinste details."
                imageSrc="https://brutdemer.nl/wp-content/uploads/2022/04/800x570-bar.jpg"
                ctaText="Vraag een offerte aan"
                reversed={true}
            />

            {/* Footer Visual */}
            <section className="h-[50vh] relative overflow-hidden">
                <img
                    src="https://brutdemer.nl/wp-content/uploads/2022/03/verplicht-1.jpg"
                    className="w-full h-full object-cover"
                    alt="Atmosphere"
                />
                <div className="absolute inset-0 bg-marine-blue/20 flex items-center justify-center">
                    <div className="text-center text-white border border-white/40 p-16 backdrop-blur-xl shadow-2xl">
                        <h2 className="text-5xl font-serif mb-6 italic drop-shadow-lg">Vier het leven</h2>
                        <p className="uppercase tracking-[0.4em] text-sm font-light drop-shadow-md">Gerard Douplein 8H, Amsterdam</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
