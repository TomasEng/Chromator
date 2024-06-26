import { testColours } from '../../test-data/namedColourList.ts';
import { type NamedColour } from '../../types/NamedColour.ts';
import { hslToLab, labToHsl } from './lab.ts';
import { verifyHsl } from '../../test-data/utils.ts';

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
      verifyHsl(result, hsl);
    });
  });
});
