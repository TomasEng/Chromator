import { clampOklchChromaWithinSrgb, hslToOklch, isOklchWithinSrgb, oklchToHsl } from './oklch.ts';
import { testColours } from '../../test-data/namedColourList.ts';
import { type NamedColour } from '../../types/NamedColour.ts';
import { verifyHsl } from '../../test-data/utils.ts';
import { type Oklch } from '../../types/Oklch.ts';

describe('Oklch object converters', () => {
  describe('hslToOklch', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to Oklch', (colour) => {
      const {
        hsl,
        oklch
      } = testColours[colour];
      expect(hslToOklch(hsl)).toEqual({
        l: expect.closeTo(oklch.l, 4),
        chroma: expect.closeTo(oklch.chroma, 4),
        hue: expect.closeTo(oklch.hue, 3)
      });
    });
  });

  describe('oklchToHsl', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from Oklch to HSL', (colour) => {
      const {
        hsl,
        oklch
      } = testColours[colour];
      const result = oklchToHsl(oklch);
      verifyHsl(result, hsl);
    });
  });

  describe('isOklchWithinSrgb', () => {
    it('Returns true for a colour within the SRGB gamut', () => {
      expect(isOklchWithinSrgb({ l: 0.68, chroma: 0.11, hue: 222 })).toBe(true);
      expect(isOklchWithinSrgb({ l: 0.2, chroma: 0.11, hue: 269 })).toBe(true);
      expect(isOklchWithinSrgb({ l: 0.91, chroma: 0.2, hue: 123 })).toBe(true);
    });

    it('Returns false for a colour outside of the SRGB gamut', () => {
      expect(isOklchWithinSrgb({ l: 0, chroma: 0.07, hue: 200 })).toBe(false);
      expect(isOklchWithinSrgb({ l: 0.2, chroma: 0.11, hue: 259 })).toBe(false);
      expect(isOklchWithinSrgb({ l: 0.91, chroma: 0.2, hue: 171 })).toBe(false);
    });
  });

  describe('clampOklchChromaWithinSrgb', () => {
    it('Returns the same colour if it is within the SRGB gamut', () => {
      const colour1: Oklch = { l: 0.68, chroma: 0.11, hue: 222 };
      const colour2: Oklch = { l: 0.2, chroma: 0.11, hue: 269 };
      const colour3: Oklch = { l: 0.91, chroma: 0.2, hue: 123 };
      expect(clampOklchChromaWithinSrgb(colour1)).toEqual(colour1);
      expect(clampOklchChromaWithinSrgb(colour2)).toEqual(colour2);
      expect(clampOklchChromaWithinSrgb(colour3)).toEqual(colour3);
    });

    it('Reduces the chroma of the given colour so that the result is within the SRGB gamut', () => {
      const colour: Oklch = { l: 0.91, chroma: 0.2, hue: 171 };
      const result = clampOklchChromaWithinSrgb(colour);
      expect(result).toEqual({
        l: 0.91,
        chroma: expect.closeTo(0.1383, 4),
        hue: 171
      });
      expect(isOklchWithinSrgb(result)).toBe(true);
      expect(isOklchWithinSrgb({ ...result, chroma: result.chroma + 0.00001 })).toBe(false);
    });
  });
});
