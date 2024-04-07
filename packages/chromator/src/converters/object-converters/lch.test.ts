import { testColours } from '../../test-data/namedColourList.ts';
import { type NamedColour } from '../../types/NamedColour.ts';
import { clampLchChromaWithinSrgb, hslToLch, isLchWithinSrgb, lchToHsl } from './lch.ts';
import { verifyHsl } from '../../test-data/utils.ts';

describe('Lch object converters', () => {
  describe('hslToLch', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to Lab', (colour) => {
      const {
        hsl,
        lch
      } = testColours[colour];
      expect(hslToLch(hsl)).toEqual({
        L: expect.closeTo(lch.L, 4),
        chroma: expect.closeTo(lch.chroma, 4),
        hue: expect.closeTo(lch.hue, 3)
      });
    });
  });

  describe('lchToHsl', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from Lch to HSL', (colour) => {
      const {
        hsl,
        lch
      } = testColours[colour];
      const result = lchToHsl(lch);
      verifyHsl(result, hsl);
    });
  });

  describe('isLchWithinSrgb', () => {
    it('Returns true for a colour within the SRGB gamut', () => {
      expect(isLchWithinSrgb({ L: 54, chroma: 53, hue: 342 })).toBe(true);
      expect(isLchWithinSrgb({ L: 88, chroma: 46, hue: 195 })).toBe(true);
      expect(isLchWithinSrgb({ L: 9, chroma: 42, hue: 301 })).toBe(true);
    });

    it('Returns false for a colour outside of the SRGB gamut', () => {
      expect(isLchWithinSrgb({ L: 25, chroma: 110, hue: 30 })).toBe(false);
      expect(isLchWithinSrgb({ L: 9, chroma: 42, hue: 301 })).toBe(true);
      expect(isLchWithinSrgb({ L: 84, chroma: 33, hue: 34 })).toBe(false);
    });
  });

  describe('clampLchChromaWithinSrgb', () => {
    it('Returns the same colour if it is within the SRGB gamut', () => {
      const colour1 = { L: 54, chroma: 53, hue: 342 };
      const colour2 = { L: 88, chroma: 46, hue: 195 };
      const colour3 = { L: 9, chroma: 42, hue: 301 };
      expect(clampLchChromaWithinSrgb(colour1)).toEqual(colour1);
      expect(clampLchChromaWithinSrgb(colour2)).toEqual(colour2);
      expect(clampLchChromaWithinSrgb(colour3)).toEqual(colour3);
    });

    it('Reduces the chroma of the given colour so that the result is within the SRGB gamut', () => {
      const colour = { L: 25, chroma: 110, hue: 30 };
      const result = clampLchChromaWithinSrgb(colour);
      expect(result).toEqual({
        L: 25,
        chroma: expect.closeTo(55.06),
        hue: 30
      });
    });
  });
});
