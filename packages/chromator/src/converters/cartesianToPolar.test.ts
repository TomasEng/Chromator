import { type CartesianCoordinates } from '../types/CartesianCoordinates.ts';
import { cartesianToPolar, cartesianToPolarInDegrees } from './cartesianToPolar.ts';

describe('Cartesian to polar coordinates converters', () => {
  interface TestCase {
    cartesian: CartesianCoordinates;
    expectedRadius: number;
    expectedAngleInRadians: number;
    expectedAngleInDegrees: number;
  }

  const testCases: TestCase[] = [
    {
      cartesian: { x: 0, y: 0 },
      expectedRadius: 0,
      expectedAngleInRadians: 0,
      expectedAngleInDegrees: 0
    },
    {
      cartesian: { x: 1, y: 0 },
      expectedRadius: 1,
      expectedAngleInRadians: 0,
      expectedAngleInDegrees: 0
    },
    {
      cartesian: { x: 0, y: 1 },
      expectedRadius: 1,
      expectedAngleInRadians: Math.PI / 2,
      expectedAngleInDegrees: 90
    },
    {
      cartesian: { x: -1, y: 0 },
      expectedRadius: 1,
      expectedAngleInRadians: Math.PI,
      expectedAngleInDegrees: 180
    },
    {
      cartesian: { x: 0, y: -1 },
      expectedRadius: 1,
      expectedAngleInRadians: (3 * Math.PI) / 2,
      expectedAngleInDegrees: 270
    },
    {
      cartesian: { x: 1, y: 1 },
      expectedRadius: Math.sqrt(2),
      expectedAngleInRadians: Math.PI / 4,
      expectedAngleInDegrees: 45
    },
    {
      cartesian: { x: -1, y: 1 },
      expectedRadius: Math.sqrt(2),
      expectedAngleInRadians: (3 * Math.PI) / 4,
      expectedAngleInDegrees: 135
    },
    {
      cartesian: { x: -1, y: -1 },
      expectedRadius: Math.sqrt(2),
      expectedAngleInRadians: (5 * Math.PI) / 4,
      expectedAngleInDegrees: 225
    },
    {
      cartesian: { x: 1, y: -1 },
      expectedRadius: Math.sqrt(2),
      expectedAngleInRadians: (7 * Math.PI) / 4,
      expectedAngleInDegrees: 315
    },
    {
      cartesian: { x: Math.sqrt(2) / 4, y: Math.sqrt(2) / 4 },
      expectedRadius: 0.5,
      expectedAngleInRadians: Math.PI / 4,
      expectedAngleInDegrees: 45
    }
  ];
  const testCaseIndices = testCases.map((_, i) => i);

  describe('cartesianToPolar', () => {
    it.each(testCaseIndices)('Test case %i', i => {
      const { cartesian, expectedRadius, expectedAngleInRadians } = testCases[i];
      const result = cartesianToPolar(cartesian);
      expect(result).toEqual({
        radius: expect.closeTo(expectedRadius, 6),
        angle: expect.closeTo(expectedAngleInRadians, 6)
      });
    });
  });

  describe('cartesianToPolarInDegrees', () => {
    it.each(testCaseIndices)('Test case %i', i => {
      const { cartesian, expectedRadius, expectedAngleInDegrees } = testCases[i];
      const result = cartesianToPolarInDegrees(cartesian);
      expect(result).toEqual({
        radius: expect.closeTo(expectedRadius, 6),
        angle: expect.closeTo(expectedAngleInDegrees, 6)
      });
    });
  });
});
