'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Display from './Display';
import Button from './Button';
import { CalculatorButton, CalculatorState, CalculatorOperation } from '@/types/calculator';
import {
  initialState,
  handleNumberInput,
  handleDecimalInput,
  handleOperatorInput,
  handleEqualsInput,
  handleClear,
  handleAllClear,
} from '@/lib/calculator-logic';

const calculatorButtons: CalculatorButton[] = [
  { label: 'AC', value: 'AC', type: 'allclear', className: 'col-span-2' },
  { label: 'C', value: 'C', type: 'clear' },
  { label: '÷', value: '/', type: 'operator' },
  { label: '7', value: '7', type: 'number' },
  { label: '8', value: '8', type: 'number' },
  { label: '9', value: '9', type: 'number' },
  { label: '×', value: '*', type: 'operator' },
  { label: '4', value: '4', type: 'number' },
  { label: '5', value: '5', type: 'number' },
  { label: '6', value: '6', type: 'number' },
  { label: '−', value: '-', type: 'operator' },
  { label: '1', value: '1', type: 'number' },
  { label: '2', value: '2', type: 'number' },
  { label: '3', value: '3', type: 'number' },
  { label: '+', value: '+', type: 'operator' },
  { label: '0', value: '0', type: 'number', className: 'col-span-2' },
  { label: '.', value: '.', type: 'decimal' },
  { label: '=', value: '=', type: 'equals' },
];

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>(initialState);

  const handleButtonClick = useCallback((value: string | number) => {
    const stringValue = value.toString();
    
    if (stringValue >= '0' && stringValue <= '9') {
      setState(prevState => handleNumberInput(prevState, stringValue));
    } else if (stringValue === '.') {
      setState(prevState => handleDecimalInput(prevState));
    } else if (['+', '-', '*', '/'].includes(stringValue)) {
      setState(prevState => handleOperatorInput(prevState, stringValue as CalculatorOperation));
    } else if (stringValue === '=') {
      setState(prevState => handleEqualsInput(prevState));
    } else if (stringValue === 'C') {
      setState(handleClear());
    } else if (stringValue === 'AC') {
      setState(handleAllClear());
    }
  }, []);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      
      // Prevent default for calculator keys
      if (/[\d+\-*/.=]|Enter|Escape|Backspace/.test(key)) {
        event.preventDefault();
      }
      
      if (key >= '0' && key <= '9') {
        handleButtonClick(key);
      } else if (key === '.') {
        handleButtonClick('.');
      } else if (key === '+') {
        handleButtonClick('+');
      } else if (key === '-') {
        handleButtonClick('-');
      } else if (key === '*') {
        handleButtonClick('*');
      } else if (key === '/') {
        handleButtonClick('/');
      } else if (key === '=' || key === 'Enter') {
        handleButtonClick('=');
      } else if (key === 'Escape') {
        handleButtonClick('AC');
      } else if (key === 'Backspace') {
        handleButtonClick('C');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleButtonClick]);

  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm border border-gray-700">
        <Display value={state.display} />
        <div className="grid grid-cols-4 gap-3">
          {calculatorButtons.map((button, index) => (
            <Button
              key={`${button.label}-${index}`}
              button={button}
              onClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-4 text-gray-400 text-sm">
        Use keyboard for input: Numbers, +, -, *, /, =, Enter, Escape, Backspace
      </div>
    </div>
  );
}