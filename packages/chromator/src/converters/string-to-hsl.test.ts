import { hslaStringToHsla, hslStringToHsl } from './string-to-hsl';

describe('String to HSL(A) converters', () => {
  describe('hslStringToHsl', () => {
    it('Converts a valid HSL string to an HSL object', () => {
      expect(hslStringToHsl('hsl(9, 100%, 64%)')).toEqual({
        hue: 9,
        saturation: 1,
        lightness: 0.64
      });
    });
  });

  describe('hslaStringToHsla', () => {
    it('Converts a valid HSLA string to an HSLA object', () => {
      expect(hslaStringToHsla('hsla(9, 100%, 64%, 0.5)')).toEqual({
        hue: 9,
        saturation: 1,
        lightness: 0.64,
        alpha: 0.5
      });
    });
  });
});
