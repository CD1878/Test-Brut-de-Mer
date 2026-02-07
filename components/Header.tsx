import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Menu', path: '/menu' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <ul className="flex flex-row w-full max-w-full mx-auto">
          {NAV_ITEMS.map((item, index) => (
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
          <div className="border-l border-black"></div>
        </ul>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-white border-b border-black transition-all duration-300 ease-in-out origin-top overflow-hidden
        ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'}
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
        </ul>
      </div>
    </header>
  );
};