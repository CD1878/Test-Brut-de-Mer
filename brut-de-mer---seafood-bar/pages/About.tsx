import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-cream">
       {/* Hero */}
       <div className="relative w-full h-[60vh]">
        <img 
          src="https://picsum.photos/seed/brutdemerabout/1920/1080" 
          alt="About Brut de Mer" 
          className="w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-marine-blue bg-opacity-20 flex items-center justify-center">
           <h1 className="text-4xl md:text-6xl text-white font-serif tracking-widest uppercase shadow-sm">Over Ons</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-24">
        
        {/* Intro */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-serif text-marine-blue uppercase tracking-widest">Sinds 2016</h2>
          <div className="w-12 h-px bg-marine-blue mx-auto"></div>
          <p className="font-serif text-gray-700 leading-loose text-lg">
            Gelegen aan het gezellige Gerard Douplein in de Amsterdamse Pijp. Brut de Mer is geboren uit liefde voor de Franse kust, verse zeevruchten en goede wijnen.
          </p>
        </div>

        {/* Text Image Split 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
             <p className="font-serif text-gray-700 leading-loose text-sm md:text-base mb-4">
               <strong>DE SFEER</strong><br/><br/>
               Wanneer je bij ons binnenstapt, voel je direct de ontspannen, maritieme sfeer. Geen stijve bediening, maar vakkennis met een glimlach. Het interieur ademt de klasse van een Parijse bistro, gecombineerd met de nuchterheid van Amsterdam. Marmeren bladen, donker hout en het geluid van klinkende glazen.
             </p>
          </div>
          <div className="w-full md:w-1/2 aspect-square">
            <img src="https://picsum.photos/seed/interior/600/600" alt="Interior" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Image Split 2 */}
         <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2">
             <p className="font-serif text-gray-700 leading-loose text-sm md:text-base mb-4">
               <strong>WIE ZIJN WIJ</strong><br/><br/>
               Wij zijn ambachtslieden. Onze 'écailleurs' openen oesters met precisie. Onze chefs werken uitsluitend met dagverse producten. Wij geloven niet in hypes of ingewikkelde concepten. Wij geloven in kwaliteit. In een goed glas wijn. En in de tijd nemen om daarvan te genieten.
             </p>
          </div>
          <div className="w-full md:w-1/2 aspect-square">
            <img src="https://picsum.photos/seed/chef/600/600" alt="Chef" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
};