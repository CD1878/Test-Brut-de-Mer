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
      <NavLink to="/" className="text-center mb-6 group cursor-pointer block">
        <img
          src="https://brutdemer.nl/wp-content/uploads/2022/04/logo_high_res_KLEINER.png"
          alt="Brut de Mer"
          className="h-16 md:h-20 mx-auto group-hover:opacity-80 transition-opacity"
        />
      </NavLink>

      {/* Navigation Bar */}
      <nav className="w-full">
        <ul className="flex flex-col md:flex-row w-full max-w-full mx-auto">
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item.path}
              className={`flex-1 border-y md:border-y-0 md:border-l border-black first:md:border-l-0 bg-[#fcfdfb] transition-colors duration-300`}
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
          {/* Add an extra border to the right of the last item to close the grid if needed */}
          <div className="hidden md:block border-l border-black"></div>
        </ul>
      </nav>
    </header>
  );
};