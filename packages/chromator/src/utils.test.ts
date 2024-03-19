import {
  ensureWithinUnitInterval,
  evaluateFormat,
  floor,
  round
} from './utils';
import { validColourCodes } from './test-data/validColourCodes';
import { colourFormatRegex } from './data/colourFormatRegex';
import { type StringColourFormat } from './types/StringColourFormat';

describe('utils', () => {
  describe('round', () => {
    it('Rounds a number to a precision of 0 by default', () => {
      expect(round(1.4)).toBe(1);
      expect(round(1.5)).toBe(2);
    });

    it('Rounds a number to the given precision', () => {
      expect(round(1.44, 1)).toBe(1.4);
      expect(round(1.45, 1)).toBe(1.5);
      expect(round(14, -1)).toBe(10);
      expect(round(15, -1)).toBe(20);
    });
  });

  describe('floor', () => {
    it('Floors a number to a precision of 0 by default', () => {
      expect(floor(1.0)).toBe(1);
      expect(floor(1.1)).toBe(1);
      expect(floor(1.9)).toBe(1);
    });

    it('Floors a number to the given precision', () => {
      expect(floor(1.40, 1)).toBe(1.4);
      expect(floor(1.41, 1)).toBe(1.4);
      expect(floor(1.49, 1)).toBe(1.4);
      expect(floor(10, -1)).toBe(10);
      expect(floor(11, -1)).toBe(10);
      expect(floor(19, -1)).toBe(10);
    });
  });

  describe('evaluateFormat', () => {
    const formats: StringColourFormat[] = Object.keys(colourFormatRegex) as StringColourFormat[];
    it.each(formats)('Returns the correct format for %s', (format) => {
      const values: string[] = validColourCodes[format];
      values.forEach((value) => {
        expect(evaluateFormat(value)).toBe(format);
      });
    });
  });

  describe('ensureWithinUnitInterval', () => {
    it('Returns 0 if the value is less than 0', () => {
      expect(ensureWithinUnitInterval(-0.1)).toBe(0);
    });

    it('Returns 1 if the value is greater than 1', () => {
      expect(ensureWithinUnitInterval(1.1)).toBe(1);
    });

    it('Returns the value if it is within the unit interval', () => {
      expect(ensureWithinUnitInterval(0.5)).toBe(0.5);
    });
  });
});
