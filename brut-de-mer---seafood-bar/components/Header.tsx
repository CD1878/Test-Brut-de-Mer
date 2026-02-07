import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Menu', path: '/menu' },
  { label: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 flex flex-col items-center pt-8 pb-0">
      {/* Logo Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-serif tracking-widest text-marine-blue mb-1">
          BRUT DE MER
        </h1>
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-sans">
          Oysters | Fish | Bubbles
        </p>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full border-t border-gray-200">
        <ul className="flex justify-center w-full max-w-5xl mx-auto">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.path} className={`flex-1 text-center ${index !== NAV_ITEMS.length - 1 ? 'border-r border-gray-200' : ''}`}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block py-4 px-2 text-xs md:text-sm uppercase tracking-widest font-sans transition-colors duration-300
                  ${isActive ? 'bg-marine-blue text-white' : 'text-gray-600 hover:text-marine-blue hover:bg-gray-50'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};