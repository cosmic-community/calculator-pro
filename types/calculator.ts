export type CalculatorOperation = '+' | '-' | '*' | '/' | '=';

export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: CalculatorOperation | null;
  waitingForOperand: boolean;
  hasCalculated: boolean;
}

export interface CalculatorButton {
  label: string;
  value: string | number | CalculatorOperation;
  type: 'number' | 'operator' | 'equals' | 'clear' | 'allclear' | 'decimal';
  className?: string;
}