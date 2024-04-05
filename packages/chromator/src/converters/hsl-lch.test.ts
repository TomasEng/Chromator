import { testColours } from '../test-data/namedColourList.ts';
import { type NamedColour } from '../types/NamedColour.ts';
import { hslToLch, lchToHsl } from './hsl-lch.ts';
import { round } from '../utils.ts';

describe('Lch object converters', () => {
  describe('hslToLch', () => {
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
        expect(result).toEqual({
          hue: expect.anything(),
          saturation: hsl.lightness === 1 ? expect.anything() : expect.closeTo(hsl.saturation, 4),
          lightness: expect.closeTo(hsl.lightness, 4)
        });
        const { hue } = result;
        expect(hue).toBeGreaterThanOrEqual(0);
        expect(hue).toBeLessThanOrEqual(360);
        const isGrey = hsl.saturation === 0;
        if (!isGrey) {
          const numDigitsAfterDecimal = 1;
          const roundedHue = round(hue, numDigitsAfterDecimal);
          const modulatedHue = roundedHue % 360;
          expect(modulatedHue).toBeCloseTo(hsl.hue, numDigitsAfterDecimal);
        }
      });
    });
  });
});
