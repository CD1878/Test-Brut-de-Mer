import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { NavItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const NAV_ITEMS: NavItem[] = [
    { label: t.header.home, path: '/' },
    { label: t.header.about, path: '/over-ons' },
    { label: t.header.menu, path: '/menu' },
    { label: t.header.events, path: '/events' },
    { label: t.header.contact, path: '/contact' },
  ];

  const LanguageSelector = ({ mobile = false }) => (
    <div className={`flex items-center gap-2 ${mobile ? 'justify-center py-4 border-t border-gray-100 mt-4' : 'ml-6'}`}>
      <button
        onClick={() => setLanguage('NL')}
        className={`flex items-center gap-1 transition-opacity ${language === 'NL' ? 'opacity-100 font-bold' : 'opacity-40 hover:opacity-100'}`}
      >
        <img src="https://flagcdn.com/w20/nl.png" alt="NL" className="w-5 h-auto shadow-sm" />
        <span className="text-xs font-sans">NL</span>
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => setLanguage('ENG')}
        className={`flex items-center gap-1 transition-opacity ${language === 'ENG' ? 'opacity-100 font-bold' : 'opacity-40 hover:opacity-100'}`}
      >
        <img src="https://flagcdn.com/w20/gb.png" alt="ENG" className="w-5 h-auto shadow-sm" />
        <span className="text-xs font-sans">ENG</span>
      </button>
    </div>
  );

  return (
    <header className="w-full bg-white border-b border-black md:border-b-0 flex flex-col items-center pt-8 pb-0 relative z-50">
      {/* Logo */}
      <NavLink to="/" className="text-center mb-6 group cursor-pointer block">
        <img
          src="https://brutdemer.nl/wp-content/uploads/2022/04/logo_high_res_KLEINER.png"
          alt="Brut de Mer"
          className="h-14 md:h-20 mx-auto group-hover:opacity-80 transition-opacity"
        />
      </NavLink>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden absolute top-10 right-6 text-marine-blue"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
      </button>

      {/* Desktop Navigation Bar */}
      <nav className="hidden md:block w-full">
        <ul className="flex flex-row w-full max-w-full mx-auto items-center justify-center">
          <div className="flex-1 flex justify-center border-l-0"></div> {/* Spacer */}
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="flex-1 border-l border-black first:border-l-0 bg-[#fcfdfb] transition-colors duration-300"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-5 px-2 text-[13px] uppercase tracking-[0.2em] font-bold transition-all duration-300 text-center
                  ${isActive ? 'bg-marine-blue text-white' : 'text-gray-900 hover:bg-marine-blue hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <div className="border-l border-black h-full"></div>

          {/* Language Selector Desktop - integrated into grid or placed to side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-8 hidden lg:block">
            <LanguageSelector />
          </div>
        </ul>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-white border-b border-black transition-all duration-300 ease-in-out origin-top overflow-hidden
        ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'}
      `}>
        <ul className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <li key={item.path} className="border-t border-gray-100">
              <NavLink
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-6 px-6 text-center text-sm uppercase tracking-[0.3em] font-medium transition-colors
                  ${isActive ? 'bg-marine-blue text-white shadow-inner' : 'text-marine-blue active:bg-gray-50'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <LanguageSelector mobile={true} />
        </ul>
      </div>
    </header>
  );
};