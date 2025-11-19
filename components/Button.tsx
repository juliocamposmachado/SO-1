import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'facebook';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-gold hover:bg-yellow-600 focus:ring-brand-gold",
    secondary: "border-transparent text-white bg-brand-dark hover:bg-gray-800 focus:ring-gray-800",
    outline: "border-brand-gold text-brand-gold bg-transparent hover:bg-brand-gold hover:text-white focus:ring-brand-gold",
    whatsapp: "border-transparent text-white bg-green-600 hover:bg-green-700 focus:ring-green-500",
    facebook: "border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;