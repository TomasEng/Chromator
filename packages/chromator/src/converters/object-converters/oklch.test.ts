import { hslToOklch, oklchToHsl } from './oklch.ts';
import { testColours } from '../../test-data/namedColourList.ts';
import { type NamedColour } from '../../types/NamedColour.ts';
import { verifyHsl } from '../../test-data/utils.ts';

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
});
