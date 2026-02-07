import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-soft-gray min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-12 shadow-sm border border-gray-100">
        
        <div className="space-y-8">
           <h1 className="text-3xl font-serif text-marine-blue tracking-widest uppercase">Contact</h1>
           <div className="space-y-4 font-serif text-gray-700">
             <p><strong>BRUT DE MER</strong></p>
             <p>Gerard Douplein 8H</p>
             <p>1072 VE Amsterdam</p>
             <p className="pt-4"><a href="tel:0204714099" className="hover:text-marine-blue transition-colors">020 – 471 40 99</a></p>
             <p><a href="mailto:info@brutdemer.nl" className="hover:text-marine-blue transition-colors">info@brutdemer.nl</a></p>
           </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-xl font-serif text-marine-blue tracking-widest uppercase">Openingstijden</h2>
          <div className="font-sans text-sm text-gray-600 space-y-2">
            <div className="flex justify-between border-b border-gray-100 pb-2"><span>Maandag</span> <span>16:00 – 00:00</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-2"><span>Dinsdag</span> <span>16:00 – 00:00</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-2"><span>Woensdag</span> <span>16:00 – 00:00</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-2"><span>Donderdag</span> <span>16:00 – 00:00</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-2"><span>Vrijdag</span> <span>12:00 – 00:00</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-2"><span>Zaterdag</span> <span>12:00 – 00:00</span></div>
            <div className="flex justify-between border-b border-gray-100 pb-2"><span>Zondag</span> <span>12:00 – 00:00</span></div>
          </div>
        </div>

      </div>
      
      {/* Map Placeholder */}
      <div className="max-w-4xl mx-auto mt-12 h-64 bg-gray-200 flex items-center justify-center border border-gray-300">
        <span className="font-serif text-gray-500 italic">Kaart laden...</span>
      </div>
    </div>
  );
};