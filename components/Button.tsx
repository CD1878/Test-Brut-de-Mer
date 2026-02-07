import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "uppercase tracking-widest text-xs py-3 px-8 transition-colors duration-300 font-serif border border-marine-blue";
  
  const variants = {
    primary: "bg-marine-blue text-white hover:bg-white hover:text-marine-blue",
    outline: "bg-transparent text-marine-blue hover:bg-marine-blue hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};