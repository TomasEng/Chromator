import { testColours } from '../test-data/namedColourList.ts';
import { type NamedColour } from '../types/NamedColour.ts';
import { hslToLab, labToHsl } from './hsl-lab.ts';
import { round } from '../utils.ts';

describe('Lab object converters', () => {
  describe('hslToLab', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to Lab', (colour) => {
      const {
        hsl,
        lab
      } = testColours[colour];
      expect(hslToLab(hsl)).toEqual({
        L: expect.closeTo(lab.L, 4),
        a: expect.closeTo(lab.a, 4),
        b: expect.closeTo(lab.b, 4)
      });
    });
  });

  describe('labToHsl', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from Lab to HSL', (colour) => {
      const {
        hsl,
        lab
      } = testColours[colour];
      const result = labToHsl(lab);
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
