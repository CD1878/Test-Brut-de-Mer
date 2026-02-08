import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'NL' | 'ENG'>('NL');

  const toggleOpen = () => setIsOpen(!isOpen);

  const selectLang = (lang: 'NL' | 'ENG') => {
    setCurrentLang(lang);
    setIsOpen(false);
    // Here you would implement actual language switching logic
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      <div className="relative">
        {/* Dropdown Content */}
        {isOpen && (
          <div className="absolute bottom-full left-0 mb-2 w-full bg-[#0F2043] rounded-sm shadow-lg overflow-hidden animate-fade-in-up">
            <button
              onClick={() => selectLang('ENG')}
              className="flex items-center gap-3 w-full px-4 py-3 hover:bg-white/10 transition-colors text-white"
            >
              <img 
                src="https://flagcdn.com/w40/gb.png" 
                alt="English" 
                className="w-5 h-auto shadow-sm"
              />
              <span className="text-sm font-medium">ENG</span>
            </button>
            <button
              onClick={() => selectLang('NL')}
              className="flex items-center gap-3 w-full px-4 py-3 hover:bg-white/10 transition-colors text-white"
            >
              <img 
                src="https://flagcdn.com/w40/nl.png" 
                alt="Dutch" 
                className="w-5 h-auto shadow-sm"
              />
              <span className="text-sm font-medium">NL</span>
            </button>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={toggleOpen}
          className="flex items-center gap-3 bg-[#0F2043] text-white px-4 py-3 rounded-sm shadow-xl hover:bg-[#1a3668] transition-all duration-300 min-w-[100px] justify-between border border-white/10"
        >
          <div className="flex items-center gap-3">
            <img 
              src={currentLang === 'NL' ? "https://flagcdn.com/w40/nl.png" : "https://flagcdn.com/w40/gb.png"} 
              alt={currentLang} 
              className="w-5 h-auto shadow-sm"
            />
            <span className="text-sm font-medium">{currentLang}</span>
          </div>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </div>
  );
};
