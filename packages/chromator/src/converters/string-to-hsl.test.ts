import {
  hslaStringToHsla,
  hslStringToHsl,
  labStringToHsla,
  labStringToLaba,
  lchStringToHsla,
  lchStringToLcha
} from './string-to-hsl';

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

  describe('lchStringToLcha', () => {
    it('Converts a simple LCH string to an LCHA object', () => {
      expect(lchStringToLcha('lch(63 55 34)')).toEqual({
        L: 63,
        chroma: 55,
        hue: 34,
        alpha: 1
      });
    });

    it('Converts an LCH with percentages to an LCHA object', () => {
      expect(lchStringToLcha('lch(63% 55% 34)')).toEqual({
        L: 63,
        chroma: 82.5,
        hue: 34,
        alpha: 1
      });
    });

    it('Converts an LCH with alpha to an LCHA object', () => {
      expect(lchStringToLcha('lch(63 55 34 / 0.5)')).toEqual({
        L: 63,
        chroma: 55,
        hue: 34,
        alpha: 0.5
      });
    });

    it('Converts an LCH with "none" values to an LCHA object', () => {
      expect(lchStringToLcha('lch(none none none)')).toEqual({
        L: 0,
        chroma: 0,
        hue: 0,
        alpha: 1
      });
    });

    it('Converts an LCH with "deg" units to an LCHA object', () => {
      expect(lchStringToLcha('lch(63 55 34deg)')).toEqual({
        L: 63,
        chroma: 55,
        hue: 34,
        alpha: 1
      });
    });

    it('Converts an LCH with "rad" units to an LCHA object', () => {
      expect(lchStringToLcha('lch(63 55 0.5rad)')).toEqual({
        L: 63,
        chroma: 55,
        hue: expect.closeTo(28.6479, 4),
        alpha: 1
      });
    });

    it('Converts an LCH with "turn" units to an LCHA object', () => {
      expect(lchStringToLcha('lch(63 55 0.5turn)')).toEqual({
        L: 63,
        chroma: 55,
        hue: 180,
        alpha: 1
      });
    });

    it('Converts an LCH with "grad" units to an LCHA object', () => {
      expect(lchStringToLcha('lch(63 55 100grad)')).toEqual({
        L: 63,
        chroma: 55,
        hue: 90,
        alpha: 1
      });
    });
  });

  describe('lchStringToHsla', () => {
    it('Converts a simple LCH string to an HSLA object', () => {
      expect(lchStringToHsla('lch(63 55 34)')).toEqual({
        hue: expect.closeTo(6.84, 2),
        saturation: expect.closeTo(0.8, 3),
        lightness: expect.closeTo(0.663, 3),
        alpha: 1
      });
    });
  });
});
