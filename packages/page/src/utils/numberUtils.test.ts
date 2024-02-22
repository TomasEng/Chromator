import { PolarCoords } from '../types/PolarCoords';
import { polarDegreesToCartesian, standardCoordsToScreenCoords } from './numberUtils';

describe('numberUtils', () => {
  describe('polarDegressToCartesian', () => {
    it('Converts polar coordinates to cartesian coordinates', () => {
      const polarDegreeCoords: PolarCoords = {
        angle: 90,
        radius: 1
      };
      const cartesianCoords = polarDegreesToCartesian(polarDegreeCoords);
      expect(cartesianCoords).toEqual({
        x: expect.closeTo(0, 5),
        y: expect.closeTo(1, 5)
      });
    });
  });

  describe('standardCoordsToScreenCoords', () => {
    it.each([
      [{ x: 1, y: 0 }, { left: 1, top: 0.5 }],
      [{ x: 0.5, y: 0 }, { left: 0.75, top: 0.5 }],
      [{ x: 0, y: 0 }, { left: 0.5, top: 0.5 }],
      [{ x: -0.5, y: 0 }, { left: 0.25, top: 0.5 }],
      [{ x: -1, y: 0 }, { left: 0, top: 0.5 }],
      [{ x: -1, y: -1 }, { left: 0, top: 1 }],
      [{ x: -1, y: -0.5 }, { left: 0, top: 0.75 }],
      [{ x: -1, y: 0.5 }, { left: 0, top: 0.25 }],
      [{ x: -1, y: 1 }, { left: 0, top: 0 }],
    ])('Converts %s to %s', (input, expectedOutput) => {
      expect(standardCoordsToScreenCoords(input)).toEqual(expectedOutput);
    });
  });
});