import { type NamedColour } from '../../types/NamedColour.ts';
import {
  cieXyzToHsl,
  cieXyzToRgb,
  hslToCieXyz,
  rgbToCieXyz
} from './xyz.ts';
import { testColours } from '../../test-data/namedColourList.ts';
import { verifyHsl } from '../../test-data/utils.ts';

describe('CIE XYZ converters', () => {
  describe('rgbToCieXyz', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from RGB to CIE XYZ', (colour) => {
      const codes = testColours[colour];
      const { rgb, cieXyz } = codes;
      expect(rgbToCieXyz(rgb)).toEqual({
        x: expect.closeTo(cieXyz.x, 4),
        y: expect.closeTo(cieXyz.y, 4),
        z: expect.closeTo(cieXyz.z, 4)
      });
    });
  });

  describe('cieXyzToRgb', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from CIE XYZ to RGB', (colour) => {
      const codes = testColours[colour];
      const { rgb, cieXyz } = codes;
      expect(cieXyzToRgb(cieXyz)).toEqual({
        red: expect.closeTo(rgb.red, 1),
        green: expect.closeTo(rgb.green, 1),
        blue: expect.closeTo(rgb.blue, 1)
      });
    });
  });

  describe('hslToCieXyz', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to CIE XYZ', (colour) => {
      const codes = testColours[colour];
      const { hsl, cieXyz } = codes;
      expect(hslToCieXyz(hsl)).toEqual({
        x: expect.closeTo(cieXyz.x, 4),
        y: expect.closeTo(cieXyz.y, 4),
        z: expect.closeTo(cieXyz.z, 4)
      });
    });
  });

  describe('cieXyzToHsl', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from CIE XYZ to HSL', (colour) => {
      const codes = testColours[colour];
      const { hsl, cieXyz } = codes;
      const result = cieXyzToHsl(cieXyz);
      verifyHsl(result, hsl);
    });
  });
});
