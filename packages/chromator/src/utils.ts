import { isOnFormat } from './validators/isOnFormat';
import { type StringColourFormat } from './types/StringColourFormat';
import { colourFormatRegex } from './data/colourFormatRegex';

export const modulo = (dividend: number, divisor: number): number => ((dividend % divisor) + divisor) % divisor; // This should be used in favor of the % operator when dealing with negative numbers, since the % operator does not handle negative numbers correctly.

export const round = (value: number, precision: number = 0): number =>
  Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);

export const floor = (value: number, precision: number = 0): number =>
  Math.floor(value * Math.pow(10, precision)) / Math.pow(10, precision);

export const evaluateFormat = (value: string): StringColourFormat | undefined => {
  const formatKeys: StringColourFormat[] = Object.keys(colourFormatRegex) as StringColourFormat[];
  for (const format of formatKeys) {
    if (isOnFormat(value, format)) return format;
  }
  return undefined;
};
