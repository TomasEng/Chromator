import { isOnFormat } from './validators/isOnFormat';
import { type StringColourFormat } from './types/StringColourFormat';
import { colourFormatRegex } from './data/colourFormatRegex';
import { type Interval } from './types/Interval';

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

export const ensureWithinUnitInterval = (value: number): number => {
  if (value < 0) return 0;
  if (value > 1) return 1;
  return value;
};

/**
 * Runs the given function recursively within the given interval until an output value close to the target output is found.
 * It is assumed that the function is always increasing and that an answer exists within the given interval.
 * @param fun The function to find the input value to.
 * @param targetOutput The desired output value.
 * @param precision The maximum difference between the target output and the output of the function.
 * @param interval The interval within which the input value is assumed to exist.
 */
export const findInputToAlwaysIncreasingFunc = (fun: (input: number) => number, targetOutput: number, precision: number, interval: Interval = { start: 0, end: 1 }): number => {
  const input = middleOfInterval(interval);
  if (Math.abs(fun(input) - targetOutput) <= precision) return input;
  if (fun(input) < targetOutput) interval.start = input;
  else interval.end = input;
  return findInputToAlwaysIncreasingFunc(fun, targetOutput, precision, interval);
};

const middleOfInterval = (interval: Interval): number => (interval.start + interval.end) / 2;
