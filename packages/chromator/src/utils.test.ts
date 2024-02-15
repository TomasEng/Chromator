import {
  findFormat,
  floor, hexPairToDecimal, hexWithHashToRgb, hexWithoutHashToRgb, hslaStringToHsla, hslStringToHsl,
  numberFromPercentage,
  numberFromPercentageOrUnitInterval,
  round, shortHexToDecimal
} from './utils';
import { ColourCodeFormat } from './enums/ColourCodeFormat';
import { validColourCodes } from './test-data/validColourCodes';

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

  describe('findFormat', () => {
    it.each(Object.values(ColourCodeFormat))('Returns the correct format for %s', (format) => {
      const values = validColourCodes[format];
      values.forEach((value) => {
        expect(findFormat(value)).toBe(format);
      });
    });
  });

  describe('hslStringToHsl', () => {
    it('Converts a valid HSL string to an HSL object', () => {
      expect(hslStringToHsl('hsl(9, 100%, 64%)')).toEqual({
        hue: 9,
        saturation: 1,
        lightness: 0.64,
      });
    });
  });

  describe('hslaStringToHsla', () => {
    it('Converts a valid HSLA string to an HSLA object', () => {
      expect(hslaStringToHsla('hsla(9, 100%, 64%, 0.5)')).toEqual({
        hue: 9,
        saturation: 1,
        lightness: 0.64,
        alpha: 0.5,
      });
    });
  });

  describe('numberFromPercentage', () => {
    it('Returns the number corresponding to the given percentage string', () => {
      expect(numberFromPercentage('0%')).toBeCloseTo(0, 6);
      expect(numberFromPercentage('0.0%')).toBeCloseTo(0, 6);
      expect(numberFromPercentage('1%')).toBeCloseTo(0.01, 6);
      expect(numberFromPercentage('1.1%')).toBeCloseTo(0.011, 6);
      expect(numberFromPercentage('100%')).toBeCloseTo(1, 6);
    });
  });

  describe('numberFromPercentageOr1Scale', () => {
    it('Returns the number corresponding to the given percentage', () => {
      expect(numberFromPercentageOrUnitInterval('0%')).toBeCloseTo(0, 6);
      expect(numberFromPercentageOrUnitInterval('0.0%')).toBeCloseTo(0, 6);
      expect(numberFromPercentageOrUnitInterval('1%')).toBeCloseTo(0.01, 6);
      expect(numberFromPercentageOrUnitInterval('1.1%')).toBeCloseTo(0.011, 6);
      expect(numberFromPercentageOrUnitInterval('100%')).toBeCloseTo(1, 6);
    });

    it('Returns the number corresponding to the given unit interval value', () => {
      expect(numberFromPercentageOrUnitInterval('0')).toBeCloseTo(0, 6);
      expect(numberFromPercentageOrUnitInterval('0.0')).toBeCloseTo(0, 6);
      expect(numberFromPercentageOrUnitInterval('1')).toBeCloseTo(1, 6);
      expect(numberFromPercentageOrUnitInterval('1.0')).toBeCloseTo(1, 6);
      expect(numberFromPercentageOrUnitInterval('0.1')).toBeCloseTo(0.1, 6);
    });
  });

  describe('hexPairToDecimal', () => {
    it('Converts a hex pair to a decimal number', () => {
      expect(hexPairToDecimal('00')).toBe(0);
      expect(hexPairToDecimal('0a')).toBe(10);
      expect(hexPairToDecimal('ff')).toBe(255);
    });
  });

  describe('shortHexToDecimal', () => {
    it('Converts a short hex string to a decimal number', () => {
      expect(shortHexToDecimal('0')).toBe(0);
      expect(shortHexToDecimal('1')).toBe(17);
      expect(shortHexToDecimal('2')).toBe(34);
      expect(shortHexToDecimal('5')).toBe(85);
      expect(shortHexToDecimal('a')).toBe(170);
      expect(shortHexToDecimal('f')).toBe(255);
    });
  });

  describe('hexWithoutHashToRgb', () => {
    it('Converts a hex string to an RGB object', () => {
      expect(hexWithoutHashToRgb('000000')).toEqual({ red: 0, green: 0, blue: 0 });
      expect(hexWithoutHashToRgb('ffffff')).toEqual({ red: 255, green: 255, blue: 255 });
      expect(hexWithoutHashToRgb('0010ff')).toEqual({ red: 0, green: 16, blue: 255 });
      expect(hexWithoutHashToRgb('ffff00')).toEqual({ red: 255, green: 255, blue: 0 });
    });
  });

  describe('hexWithHashToRgb', () => {
    it('Converts a hex string to an RGB object', () => {
      expect(hexWithHashToRgb('#000000')).toEqual({ red: 0, green: 0, blue: 0 });
      expect(hexWithHashToRgb('#ffffff')).toEqual({ red: 255, green: 255, blue: 255 });
      expect(hexWithHashToRgb('#0010ff')).toEqual({ red: 0, green: 16, blue: 255 });
      expect(hexWithHashToRgb('#ffff00')).toEqual({ red: 255, green: 255, blue: 0 });
    });
  });
});