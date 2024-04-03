import { type NamedColour } from '../types/NamedColour';
import { testColours } from '../test-data/namedColourList';
import { hslToHsv, hsvToHsl } from './hsl-hsv.ts';

describe('HSV converters', () => {
  describe('hslToHsv', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to HSV', (colour) => {
      const {
        hsl,
        hsv
      } = testColours[colour];
      expect(hslToHsv(hsl)).toEqual({
        hue: hsv.hue,
        saturation: expect.closeTo(hsv.saturation, 4),
        value: expect.closeTo(hsv.value, 4)
      });
    });
  });

  describe('hsvToHsl', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to HSV', (colour) => {
      const {
        hsl,
        hsv
      } = testColours[colour];
      expect(hsvToHsl(hsv)).toEqual({
        hue: hsl.hue,
        saturation: expect.closeTo(hsl.saturation, 4),
        lightness: expect.closeTo(hsl.lightness, 4)
      });
    });
  });
});
