import { testColours } from '../../test-data/namedColourList.ts';
import { type NamedColour } from '../../types/NamedColour.ts';
import { hslToLch, lchToHsl } from './lch.ts';
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
});
