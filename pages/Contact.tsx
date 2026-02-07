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

      {/* Map Section */}
      <div className="max-w-4xl mx-auto mt-12 bg-white shadow-sm border border-gray-100 overflow-hidden group">
        <div className="relative h-[400px] w-full">
          <iframe
            src="https://maps.google.com/maps?width=650&height=400&hl=en&q=brut%20de%20mer%20amsterdam&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brut de Mer Locatie"
          ></iframe>

          {/* Directions Bridge Over Map */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Brut+de+Mer+Gerard+Douplein+8H+Amsterdam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-marine-blue text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-marine-blue transition-all duration-300 shadow-xl border border-marine-blue"
            >
              <span>Route naar Brut de Mer</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};