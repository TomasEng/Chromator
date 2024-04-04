import { hslaStringToHsla, hslStringToHsl, labStringToHsla, labStringToLaba } from './string-to-hsl';

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

  describe('labStringToLaba', () => {
    it('Converts a simple LAB string to an LABA object', () => {
      expect(labStringToLaba('lab(51 52 -53)')).toEqual({
        L: 51,
        a: 52,
        b: -53,
        alpha: 1
      });
    });

    it('Converts a LAB with percentages to an LABA object', () => {
      // In the lab syntax, for some reason, 100% does not correspond to 1, but to 100 for the L value and 125 for the a and b values.
      expect(labStringToLaba('lab(51% -52% 53%)')).toEqual({
        L: 51,
        a: -65,
        b: 66.25,
        alpha: 1
      });
    });

    it('Converts a LAB with alpha to an LABA object', () => {
      expect(labStringToLaba('lab(51 52 -53 / 0.5)')).toEqual({
        L: 51,
        a: 52,
        b: -53,
        alpha: 0.5
      });
    });

    it('Converts a LAB with "none" values to an LABA object', () => {
      expect(labStringToLaba('lab(none none none)')).toEqual({
        L: 0,
        a: 0,
        b: 0,
        alpha: 1
      });
    });
  });

  describe('labStringToHsla', () => {
    it('Converts a simple LAB string to an HSLA object', () => {
      expect(labStringToHsla('lab(63 55 -34)')).toEqual({
        hue: expect.closeTo(303, 0),
        saturation: expect.closeTo(0.59, 2),
        lightness: expect.closeTo(0.65, 2),
        alpha: 1
      });
    });
  });
});
