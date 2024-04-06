import { testColours } from '../../test-data/namedColourList.ts';
import { type NamedColour } from '../../types/NamedColour.ts';
import { hslToOklab, oklabToHsl } from './oklab.ts';
import { verifyHsl } from '../../test-data/utils.ts';

describe('Oklab object converters', () => {
  describe('hslToOklab', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from HSL to Oklab', (colour) => {
      const {
        hsl,
        oklab
      } = testColours[colour];
      expect(hslToOklab(hsl)).toEqual({
        l: expect.closeTo(oklab.l, 4),
        a: expect.closeTo(oklab.a, 4),
        b: expect.closeTo(oklab.b, 4)
      });
    });
  });

  describe('oklabToHsl', () => {
    it.each(Object.keys(testColours) as NamedColour[])('Converts %s from Oklab to HSL', (colour) => {
      const {
        hsl,
        oklab
      } = testColours[colour];
      const result = oklabToHsl(oklab);
      verifyHsl(result, hsl);
    });
  });
});
