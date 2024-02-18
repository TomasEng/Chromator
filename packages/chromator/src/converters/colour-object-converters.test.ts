import { type NamedColour } from '../types/NamedColour';
import { hslToHsv, hslToRgb, hsvToHsl, hsvToRgb, rgbToHsl, rgbToHsv } from './colour-object-converters';
import { testColours } from '../test-data/namedColourList';

describe('Colour object converters', () => {
  describe('hslToRgb', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to RGB', (colour) => {
      const { rgb, hsl } = testColours[colour];
      expect(hslToRgb(hsl)).toEqual({
        red: expect.closeTo(rgb.red, 2),
        green: expect.closeTo(rgb.green, 2),
        blue: expect.closeTo(rgb.blue, 2)
      });
    });
  });

  describe('rgbToHsl', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from RGB to HSL', (colour) => {
      const { rgb, hsl } = testColours[colour];
      expect(rgbToHsl(rgb)).toEqual({
        hue: expect.closeTo(hsl.hue, 2),
        saturation: expect.closeTo(hsl.saturation, 4),
        lightness: expect.closeTo(hsl.lightness, 4)
      });
    });
  });

  describe('hsvToRgb', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSV to RGB', (colour) => {
      const { rgb, hsv } = testColours[colour];
      expect(hsvToRgb(hsv)).toEqual({
        red: expect.closeTo(rgb.red, 2),
        green: expect.closeTo(rgb.green, 2),
        blue: expect.closeTo(rgb.blue, 2)
      });
    });
  });

  describe('rgbToHsv', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from RGB to HSV', (colour) => {
      const { rgb, hsv } = testColours[colour];
      expect(rgbToHsv(rgb)).toEqual({
        hue: expect.closeTo(hsv.hue, 2),
        saturation: expect.closeTo(hsv.saturation, 4),
        value: expect.closeTo(hsv.value, 4)
      });
    });
  });

  describe('hslToHsv', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to HSV', (colour) => {
      const { hsl, hsv } = testColours[colour];
      expect(hslToHsv(hsl)).toEqual({
        hue: hsv.hue,
        saturation: expect.closeTo(hsv.saturation, 4),
        value: expect.closeTo(hsv.value, 4)
      });
    });
  });

  describe('hsvToHsl', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to HSV', (colour) => {
      const { hsl, hsv } = testColours[colour];
      expect(hsvToHsl(hsv)).toEqual({
        hue: hsl.hue,
        saturation: expect.closeTo(hsl.saturation, 4),
        lightness: expect.closeTo(hsl.lightness, 4)
      });
    });
  });
});
