import { CalculatorState, CalculatorOperation } from '@/types/calculator';

export const initialState: CalculatorState = {
  display: '0',
  previousValue: null,
  operation: null,
  waitingForOperand: false,
  hasCalculated: false,
};

export function calculate(
  firstOperand: number,
  secondOperand: number,
  operation: CalculatorOperation
): number {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      if (secondOperand === 0) {
        throw new Error('Division by zero');
      }
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}

export function formatNumber(num: number): string {
  const str = num.toString();
  
  // Handle very large or very small numbers
  if (Math.abs(num) >= 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
    return num.toExponential(6);
  }
  
  // Handle decimal places
  if (str.includes('.')) {
    const parts = str.split('.');
    if (parts[1] && parts[1].length > 8) {
      return parseFloat(num.toFixed(8)).toString();
    }
  }
  
  return str;
}

export function handleNumberInput(state: CalculatorState, digit: string): CalculatorState {
  if (state.waitingForOperand || state.hasCalculated) {
    return {
      ...state,
      display: digit,
      waitingForOperand: false,
      hasCalculated: false,
    };
  }
  
  if (state.display === '0') {
    return {
      ...state,
      display: digit,
    };
  }
  
  return {
    ...state,
    display: state.display + digit,
  };
}

export function handleDecimalInput(state: CalculatorState): CalculatorState {
  if (state.waitingForOperand || state.hasCalculated) {
    return {
      ...state,
      display: '0.',
      waitingForOperand: false,
      hasCalculated: false,
    };
  }
  
  if (state.display.indexOf('.') === -1) {
    return {
      ...state,
      display: state.display + '.',
    };
  }
  
  return state;
}

export function handleOperatorInput(
  state: CalculatorState,
  nextOperation: CalculatorOperation
): CalculatorState {
  const inputValue = parseFloat(state.display);
  
  if (state.previousValue === null) {
    return {
      ...state,
      previousValue: inputValue,
      operation: nextOperation,
      waitingForOperand: true,
      hasCalculated: false,
    };
  }
  
  if (state.operation && state.waitingForOperand) {
    return {
      ...state,
      operation: nextOperation,
    };
  }
  
  if (state.operation) {
    const currentValue = state.previousValue || 0;
    let result: number;
    
    try {
      result = calculate(currentValue, inputValue, state.operation);
    } catch (error) {
      return {
        ...initialState,
        display: 'Error',
      };
    }
    
    return {
      ...state,
      display: formatNumber(result),
      previousValue: result,
      operation: nextOperation,
      waitingForOperand: true,
      hasCalculated: false,
    };
  }
  
  return state;
}

export function handleEqualsInput(state: CalculatorState): CalculatorState {
  const inputValue = parseFloat(state.display);
  
  if (state.previousValue !== null && state.operation) {
    let result: number;
    
    try {
      result = calculate(state.previousValue, inputValue, state.operation);
    } catch (error) {
      return {
        ...initialState,
        display: 'Error',
      };
    }
    
    return {
      ...state,
      display: formatNumber(result),
      previousValue: null,
      operation: null,
      waitingForOperand: false,
      hasCalculated: true,
    };
  }
  
  return state;
}

export function handleClear(): CalculatorState {
  return {
    ...initialState,
    display: '0',
  };
}

export function handleAllClear(): CalculatorState {
  return initialState;
}