import { ColourCodeFormat } from './enums/ColourCodeFormat';
import { type ColourCode } from './types/ColourCode';
import { isOnFormat } from './validators/isOnFormat';

export const modulo = (dividend: number, divisor: number): number => ((dividend % divisor) + divisor) % divisor; // This should be used in favor of the % operator when dealing with negative numbers, since the % operator does not handle negative numbers correctly.

export const round = (value: number, precision: number = 0): number =>
  Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);

export const floor = (value: number, precision: number = 0): number =>
  Math.floor(value * Math.pow(10, precision)) / Math.pow(10, precision);

export const findFormat = (value: ColourCode): ColourCodeFormat | undefined => {
  for (const format of Object.values(ColourCodeFormat)) {
    if (isOnFormat(value, format)) return format;
  }
  return undefined;
};


