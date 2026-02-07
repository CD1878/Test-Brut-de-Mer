import React from 'react';
import { Button } from '../components/Button';

export const Menu: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-cream min-h-screen">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="text-marine-blue font-serif text-3xl tracking-widest uppercase">
            Menu
          </div>
          <div className="w-12 h-px bg-marine-blue mx-auto"></div>
          <p className="text-gray-500 font-serif italic">
            Ontdek onze smaken
          </p>
        </div>

        {/* Buttons Container */}
        <div className="w-full space-y-8">
          
          {/* Dutch Section */}
          <div className="space-y-4 w-full">
            <h3 className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4">Nederlands</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <Button fullWidth>Snacks</Button>
               <Button fullWidth>Diner</Button>
               <Button fullWidth>Wijnen</Button>
               <Button fullWidth>Kerstmenu</Button>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 my-8"></div>

          {/* English Section */}
          <div className="space-y-4 w-full">
            <h3 className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4">English</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <Button fullWidth>Snacks (EN)</Button>
               <Button fullWidth>Dinner (EN)</Button>
               <Button fullWidth>Wines (EN)</Button>
               <Button fullWidth>Christmas Menu (EN)</Button>
            </div>
          </div>

        </div>

        {/* Allergy Warning */}
        <div className="mt-16 text-center">
          <p className="font-serif text-sm text-gray-600 italic">
            Heeft u een allergie? Vraag de bediening om advies!
          </p>
        </div>

      </div>
    </div>
  );
};