import React from 'react';

interface DisplayProps {
  value: string;
}

export default function Display({ value }: DisplayProps) {
  const displayValue = value || '0';
  
  // Calculate font size based on display length
  const getFontSize = () => {
    if (displayValue.length > 12) return 'text-2xl';
    if (displayValue.length > 8) return 'text-3xl';
    if (displayValue.length > 6) return 'text-4xl';
    return 'text-5xl';
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 mb-6 shadow-inner">
      <div className="text-right">
        <div 
          className={`font-mono font-bold text-white leading-tight break-all ${getFontSize()}`}
          aria-live="polite"
          aria-label={`Calculator display showing ${displayValue}`}
        >
          {displayValue}
        </div>
      </div>
    </div>
  );
}