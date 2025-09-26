import React from 'react';
import { CalculatorButton } from '@/types/calculator';

interface ButtonProps {
  button: CalculatorButton;
  onClick: (value: string | number) => void;
}

export default function Button({ button, onClick }: ButtonProps) {
  const baseClasses = "h-16 rounded-xl font-semibold text-lg transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";
  
  const getButtonClasses = () => {
    switch (button.type) {
      case 'number':
      case 'decimal':
        return `${baseClasses} bg-gray-700 hover:bg-gray-600 text-white shadow-lg hover:shadow-xl`;
      case 'operator':
        return `${baseClasses} bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-xl`;
      case 'equals':
        return `${baseClasses} bg-green-600 hover:bg-green-500 text-white shadow-lg hover:shadow-xl`;
      case 'clear':
        return `${baseClasses} bg-red-600 hover:bg-red-500 text-white shadow-lg hover:shadow-xl`;
      case 'allclear':
        return `${baseClasses} bg-red-700 hover:bg-red-600 text-white shadow-lg hover:shadow-xl`;
      default:
        return `${baseClasses} bg-gray-600 hover:bg-gray-500 text-white shadow-lg hover:shadow-xl`;
    }
  };

  return (
    <button
      className={`${getButtonClasses()} ${button.className || ''}`}
      onClick={() => onClick(button.value)}
      aria-label={`${button.label} button`}
    >
      {button.label}
    </button>
  );
}