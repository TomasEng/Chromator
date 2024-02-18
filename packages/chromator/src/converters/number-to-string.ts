import { round } from '../utils';

export const decimalToHexPair = (decimal: number): string => {
  const hex = round(decimal).toString(16).toUpperCase();
  return hex.length === 1 ? `0${hex}` : hex;
};

export const numberToPercentage = (value: number): string => `${value * 100}%`;
