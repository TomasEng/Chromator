import { type NamedColour } from '../types/NamedColour';
import { testColours } from '../test-data/namedColourList';
import { hslToRgb, rgbToHsl } from './hsl-rgb.ts';

describe('RGB converters', () => {
  describe('hslToRgb', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to RGB', (colour) => {
      const {
        rgb,
        hsl
      } = testColours[colour];
      expect(hslToRgb(hsl)).toEqual({
        red: expect.closeTo(rgb.red, 2),
        green: expect.closeTo(rgb.green, 2),
        blue: expect.closeTo(rgb.blue, 2)
      });
    });
  });

  describe('rgbToHsl', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from RGB to HSL', (colour) => {
      const {
        rgb,
        hsl
      } = testColours[colour];
      expect(rgbToHsl(rgb)).toEqual({
        hue: expect.closeTo(hsl.hue, 2),
        saturation: expect.closeTo(hsl.saturation, 4),
        lightness: expect.closeTo(hsl.lightness, 4)
      });
    });
  });
});
