import React, { useState } from 'react';
import { Button } from '../components/Button';

interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const Menu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const snacksMenu: MenuSection[] = [
    {
      title: "Amuse Bouche + Glass of Salentein",
      items: [
        { name: "Sparkling Pinot Noir, Chardonnay", description: "Or Cocottes Sparkling Chardonnay 0%" }
      ]
    },
    {
      title: "Starters",
      items: [
        { name: "Tide Meets Grove", description: "Langoustine - Chestnut - Nettle + Caviar", price: "€10" },
        { name: "Evening Among The Brumble", description: "Foie gras - Aromatic herbs - Duck broth" }
      ]
    },
    {
      title: "Mains",
      items: [
        { name: "Roots Beneath The Tide", description: "Red porgy - Salsify - Black trumpet mushrooms" },
        { name: "Nest In Clearing", description: "Quail - Wild spinach - Cereals" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "The First Snow", description: "Coconut - Passionfruit - Milk" },
        { name: "Nightfall In The Forest", description: "Chocolate - Black garlic - Buckwheat" }
      ]
    }
  ];

  const renderActiveMenu = () => {
    if (activeMenu === 'Snacks') {
      return (
        <div className="w-full mt-12 animate-fade-in bg-white p-8 md:p-16 shadow-2xl rounded-sm text-center space-y-12">
          <button
            onClick={() => setActiveMenu(null)}
            className="absolute top-4 right-4 text-marine-blue hover:opacity-50 transition-opacity"
          >
            ✕
          </button>

          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-marine-blue uppercase tracking-widest">Valentine's Menu</h2>
            <div className="w-12 h-px bg-marine-blue mx-auto opacity-30"></div>
          </div>

          <div className="space-y-16">
            {snacksMenu.map((section, idx) => (
              <div key={idx} className="space-y-8">
                <h3 className="text-xl font-serif text-[#8B8B4B] uppercase tracking-[0.2em]">{section.title}</h3>
                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-2">
                      <div className="flex flex-col items-center">
                        <span className="text-lg md:text-xl font-serif text-[#C4673B] tracking-wide">{item.name}</span>
                        <span className="text-sm font-sans text-[#C4673B] opacity-80 italic">{item.description} {item.price && <span className="font-bold underline ml-1">{item.price}</span>}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {idx < snacksMenu.length - 1 && <div className="w-8 h-px bg-[#C4673B] mx-auto opacity-40"></div>}
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-cream space-y-2 text-[#C4673B] font-sans">
            <p className="font-serif text-xl">Valentine's menu €110</p>
            <p className="text-sm opacity-80 italic">Wine pairing per glass is €10</p>
            <p className="text-sm opacity-80 italic">Half glass is €7</p>
          </div>

          <Button variant="outline" onClick={() => setActiveMenu(null)} className="mt-8">Terug naar overzicht</Button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="py-20 px-6 bg-cream min-h-screen relative">
      <div className="max-w-3xl mx-auto flex flex-col items-center">

        {/* Header */}
        {!activeMenu && (
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="text-marine-blue font-serif text-3xl tracking-widest uppercase">
              Menu
            </div>
            <div className="w-12 h-px bg-marine-blue mx-auto"></div>
            <p className="text-gray-500 font-serif italic">
              Ontdek onze smaken
            </p>
          </div>
        )}

        {/* Buttons Container */}
        {!activeMenu ? (
          <div className="w-full space-y-8 animate-fade-in">
            {/* Dutch Section */}
            <div className="space-y-4 w-full">
              <h3 className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4 font-sans">Nederlands</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button fullWidth onClick={() => setActiveMenu('Snacks')}>Snacks</Button>
                <Button fullWidth>Diner</Button>
                <Button fullWidth>Wijnen</Button>
                <Button fullWidth>Kerstmenu</Button>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 my-12"></div>

            {/* English Section */}
            <div className="space-y-4 w-full">
              <h3 className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4 font-sans">English</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button fullWidth onClick={() => setActiveMenu('Snacks')}>Snacks (EN)</Button>
                <Button fullWidth>Dinner (EN)</Button>
                <Button fullWidth>Wines (EN)</Button>
                <Button fullWidth>Christmas Menu (EN)</Button>
              </div>
            </div>

            {/* Allergy Warning */}
            <div className="mt-20 text-center">
              <p className="font-serif text-sm text-gray-600 italic">
                Heeft u een allergie? Vraag de bediening om advies!
              </p>
            </div>
          </div>
        ) : (
          renderActiveMenu()
        )}

      </div>
    </div>
  );
};