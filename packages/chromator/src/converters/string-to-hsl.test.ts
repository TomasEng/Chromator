import {
  hslaStringToHsla,
  hslStringToHsl,
  labStringToHsla,
  labStringToLaba,
  lchStringToHsla,
  lchStringToLcha, oklabStringToHsla, oklabStringToOklaba, oklchStringToHsla, oklchStringToOklcha
} from './string-to-hsl';

describe('String to HSL(A) converters', () => {
  describe('hslStringToHsl', () => {
    it('Converts a simple HSL string to an HSL object', () => {
      expect(hslStringToHsl('hsl(9, 1, 0.64)')).toEqual({
        hue: 9,
        saturation: 1,
        lightness: 0.64
      });
    });

    it('Converts an HSL string with percentages to an HSL object', () => {
      expect(hslStringToHsl('hsl(9, 100%, 64%)')).toEqual({
        hue: 9,
        saturation: 1,
        lightness: 0.64
      });
    });

    it('Converts an HSL string with "none" values to an HSL object', () => {
      expect(hslStringToHsl('hsl(none, none, none)')).toEqual({
        hue: 0,
        saturation: 0,
        lightness: 0
      });
    });

    it('Converts an HSL string with degree units to an HSL object', () => {
      expect(hslStringToHsl('hsl(9deg, 1, 0.64)')).toEqual({
        hue: 9,
        saturation: 1,
        lightness: 0.64
      });
    });

    it('Converts an HSL string with turn units to an HSL object', () => {
      expect(hslStringToHsl('hsl(.5turn, 1, 0.64)')).toEqual({
        hue: 180,
        saturation: 1,
        lightness: 0.64
      });
    });

    it('Converts an HSL string with rad units to an HSL object', () => {
      expect(hslStringToHsl('hsl(0.5rad, 1, 0.64)')).toEqual({
        hue: expect.closeTo(28.6479, 4),
        saturation: 1,
        lightness: 0.64
      });
    });

    it('Converts an HSL string with grad units to an HSL object', () => {
      expect(hslStringToHsl('hsl(100grad, 1, 0.64)')).toEqual({
        hue: 90,
        saturation: 1,
        lightness: 0.64
      });
    });

    it('Converts an HSL string with negative hue to an HSL object', () => {
      expect(hslStringToHsl('hsl(-9deg, 1, 0.64)')).toEqual({
        hue: 351,
        saturation: 1,
        lightness: 0.64
      });
    });
  });

  describe('hslaStringToHsla', () => {
    it('Converts a simple HSLA string to an HSLA object', () => {
      expect(hslaStringToHsla('hsla(9, 1, 0.64, 0.5)')).toEqual({
        hue: 9,
        saturation: 1,
        lightness: 0.64,
        alpha: 0.5
      });
    });

    it('Converts an HSLA string with percentages to an HSLA object', () => {
      expect(hslaStringToHsla('hsla(9, 100%, 64%, 50%)')).toEqual({
        hue: 9,
        saturation: 1,
        lightness: 0.64,
        alpha: 0.5
      });
    });

    it('Converts an HSLA string with "none" values to an HSLA object', () => {
      expect(hslaStringToHsla('hsla(none, none, none, 0.5)')).toEqual({
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 0.5
      });
    });

    it('Converts an HSLA string with degree units to an HSLA object', () => {
      expect(hslaStringToHsla('hsla(9deg, 1, 0.64, 0.5)')).toEqual({
        hue: 9,
        saturation: 1,
        lightness: 0.64,
        alpha: 0.5
      });
    });

    it('Converts an HSLA string with turn units to an HSLA object', () => {
      expect(hslaStringToHsla('hsla(.5turn, 1, 0.64, 0.5)')).toEqual({
        hue: 180,
        saturation: 1,
        lightness: 0.64,
        alpha: 0.5
      });
    });

    it('Converts an HSLA string with rad units to an HSLA object', () => {
      expect(hslaStringToHsla('hsla(0.5rad, 1, 0.64, 0.5)')).toEqual({
        hue: expect.closeTo(28.6479, 4),
        saturation: 1,
        lightness: 0.64,
        alpha: 0.5
      });
    });

    it('Converts an HSLA string with grad units to an HSLA object', () => {
      expect(hslaStringToHsla('hsla(100grad, 1, 0.64, 0.5)')).toEqual({
        hue: 90,
        saturation: 1,
        lightness: 0.64,
        alpha: 0.5
      });
    });

    it('Converts an HSLA string with negative hue to an HSLA object', () => {
      expect(hslaStringToHsla('hsla(-9deg, 1, 0.64, 0.5)')).toEqual({
        hue: 351,
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

  describe('oklabStringToOklaba', () => {
    it('Converts a simple Oklab string to an Oklaba object', () => {
      expect(oklabStringToOklaba('oklab(0.9 0.1 -0.1)')).toEqual({
        l: 0.9,
        a: 0.1,
        b: -0.1,
        alpha: 1
      });
    });

    it('Converts an Oklab string with percentages to an Oklaba object', () => {
      expect(oklabStringToOklaba('oklab(90% 25% -25%)')).toEqual({
        l: 0.9,
        a: 0.1,
        b: -0.1,
        alpha: 1
      });
    });

    it('Converts an Oklab string with alpha to an Oklaba object', () => {
      expect(oklabStringToOklaba('oklab(0.9 0.1 -0.1 / 0.5)')).toEqual({
        l: 0.9,
        a: 0.1,
        b: -0.1,
        alpha: 0.5
      });
    });

    it('Converts an Oklab string with "none" values to an Oklaba object', () => {
      expect(oklabStringToOklaba('oklab(none none none)')).toEqual({
        l: 0,
        a: 0,
        b: 0,
        alpha: 1
      });
    });
  });

  describe('oklabStringToHsla', () => {
    it('Converts an Oklab string to an HSLA object', () => {
      expect(oklabStringToHsla('oklab(0.70 0.15 -0.09)')).toEqual({
        hue: expect.closeTo(303, 0),
        saturation: expect.closeTo(0.567, 3),
        lightness: expect.closeTo(0.646, 3),
        alpha: 1
      });
    });
  });

  describe('oklchStringToOklcha', () => {
    it('Converts a simple Oklch string to an Oklcha object', () => {
      expect(oklchStringToOklcha('oklch(0.7 0.3 90deg)')).toEqual({
        l: 0.7,
        chroma: 0.3,
        hue: 90,
        alpha: 1
      });
    });

    it('Converts an Oklch string with percentages to an Oklcha object', () => {
      expect(oklchStringToOklcha('oklch(70% 75% 90deg)')).toEqual({
        l: 0.7,
        chroma: expect.closeTo(0.3, 6),
        hue: 90,
        alpha: 1
      });
    });

    it('Converts an Oklch string with unitless hue to an Oklcha object', () => {
      expect(oklchStringToOklcha('oklch(0.7 0.3 90)')).toEqual({
        l: 0.7,
        chroma: 0.3,
        hue: 90,
        alpha: 1
      });
    });

    it('Converts an Oklch string with turn units to an Oklcha object', () => {
      expect(oklchStringToOklcha('oklch(0.7 0.3 .25turn)')).toEqual({
        l: 0.7,
        chroma: 0.3,
        hue: 90,
        alpha: 1
      });
    });

    it('Converts an Oklch string with rad units to an Oklcha object', () => {
      expect(oklchStringToOklcha('oklch(0.7 0.3 1.57rad)')).toEqual({
        l: 0.7,
        chroma: 0.3,
        hue: expect.closeTo(90, 1),
        alpha: 1
      });
    });

    it('Converts an Oklch string with grad units to an Oklcha object', () => {
      expect(oklchStringToOklcha('oklch(0.7 0.3 100grad)')).toEqual({
        l: 0.7,
        chroma: 0.3,
        hue: 90,
        alpha: 1
      });
    });

    it('Converts an Oklch with alpha to an Oklcha object', () => {
      expect(oklchStringToOklcha('oklch(0.7 0.3 90deg / 0.5)')).toEqual({
        l: 0.7,
        chroma: 0.3,
        hue: 90,
        alpha: 0.5
      });
    });

    it('Converts an Oklch with "none" values to an Oklcha object', () => {
      expect(oklchStringToOklcha('oklch(none none none)')).toEqual({
        l: 0,
        chroma: 0,
        hue: 0,
        alpha: 1
      });
    });
  });

  describe('oklchStringToHsla', () => {
    it('Converts an Oklch string to an HSLA object', () => {
      expect(oklchStringToHsla('oklch(0.7 0.3 90deg)')).toEqual({
        hue: expect.closeTo(36, 0),
        saturation: 1,
        lightness: expect.closeTo(0.45, 2),
        alpha: 1
      });
    });
  });
});
