import { type NamedColour } from '../types/NamedColour';
import {
  cieXyzToHsl,
  cieXyzToRgb, hslToCieXyz,
  hslToHsv,
  hslToRgb,
  hsvToHsl,
  hsvToRgb,
  rgbToCieXyz,
  rgbToHsl,
  rgbToHsv
} from './colour-object-converters';
import { testColours } from '../test-data/namedColourList';
import { round } from '../utils.ts';

describe('Colour object converters', () => {
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

  describe('hsvToRgb', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSV to RGB', (colour) => {
      const {
        rgb,
        hsv
      } = testColours[colour];
      expect(hsvToRgb(hsv)).toEqual({
        red: expect.closeTo(rgb.red, 2),
        green: expect.closeTo(rgb.green, 2),
        blue: expect.closeTo(rgb.blue, 2)
      });
    });
  });

  describe('rgbToHsv', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from RGB to HSV', (colour) => {
      const {
        rgb,
        hsv
      } = testColours[colour];
      expect(rgbToHsv(rgb)).toEqual({
        hue: expect.closeTo(hsv.hue, 2),
        saturation: expect.closeTo(hsv.saturation, 4),
        value: expect.closeTo(hsv.value, 4)
      });
    });
  });

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
      expect(result).toEqual({
        hue: expect.anything(),
        saturation: hsl.lightness === 1 ? expect.anything() : expect.closeTo(hsl.saturation, 3),
        lightness: expect.closeTo(hsl.lightness, 3)
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
