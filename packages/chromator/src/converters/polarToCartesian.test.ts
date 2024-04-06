import { polarInDegreesToCartesian, polarToCartesian } from './polarToCartesian.ts';
import { type CartesianCoordinates } from '../types/CartesianCoordinates.ts';
import { type PolarCoordinates } from '../types/PolarCoordinates.ts';

describe('Polar to cartesian converters', () => {
  interface TestCase {
    radius: number;
    angleInRadians: number;
    angleInDegrees: number;
    expectedResult: CartesianCoordinates;
  }

  const testCases: TestCase[] = [
    {
      radius: 1,
      angleInRadians: 0,
      angleInDegrees: 0,
      expectedResult: { x: 1, y: 0 }
    },
    {
      radius: 1,
      angleInRadians: Math.PI / 2,
      angleInDegrees: 90,
      expectedResult: { x: 0, y: 1 }
    },
    {
      radius: 1,
      angleInRadians: Math.PI,
      angleInDegrees: 180,
      expectedResult: { x: -1, y: 0 }
    },
    {
      radius: 1,
      angleInRadians: 3 * Math.PI / 2,
      angleInDegrees: 270,
      expectedResult: { x: 0, y: -1 }
    },
    {
      radius: Math.sqrt(2),
      angleInRadians: Math.PI / 4,
      angleInDegrees: 45,
      expectedResult: { x: 1, y: 1 }
    },
    {
      radius: Math.sqrt(2),
      angleInRadians: 3 * Math.PI / 4,
      angleInDegrees: 135,
      expectedResult: { x: -1, y: 1 }
    },
    {
      radius: Math.sqrt(2),
      angleInRadians: 5 * Math.PI / 4,
      angleInDegrees: 225,
      expectedResult: { x: -1, y: -1 }
    },
    {
      radius: Math.sqrt(2),
      angleInRadians: 7 * Math.PI / 4,
      angleInDegrees: 315,
      expectedResult: { x: 1, y: -1 }
    },
    {
      radius: 1,
      angleInRadians: Math.PI / 4,
      angleInDegrees: 45,
      expectedResult: { x: Math.sqrt(2) / 2, y: Math.sqrt(2) / 2 }
    },
    {
      radius: 0.5,
      angleInRadians: Math.PI / 4,
      angleInDegrees: 45,
      expectedResult: { x: Math.sqrt(2) / 4, y: Math.sqrt(2) / 4 }
    },
    {
      radius: 2,
      angleInRadians: Math.PI / 4,
      angleInDegrees: 45,
      expectedResult: { x: Math.sqrt(2), y: Math.sqrt(2) }
    },
    {
      radius: 1,
      angleInRadians: Math.PI * 3,
      angleInDegrees: 540,
      expectedResult: { x: -1, y: 0 }
    },
    {
      radius: 1,
      angleInRadians: Math.PI * -1,
      angleInDegrees: -180,
      expectedResult: { x: -1, y: 0 }
    }
  ];
  const testCaseIndices: number[] = testCases.map((_, i) => i);

  describe('polarToCartesian', () => {
    it.each(testCaseIndices)('Test case %s', (index: number) => {
      const { radius, angleInRadians, expectedResult } = testCases[index];
      const polarCoordinates: PolarCoordinates = { radius, angle: angleInRadians };
      expect(polarToCartesian(polarCoordinates)).toEqual({
        x: expect.closeTo(expectedResult.x, 0.6),
        y: expect.closeTo(expectedResult.y, 0.6)
      });
    });
  });

  describe('polarInDegreesToCartesian', () => {
    it.each(testCaseIndices)('Test case %s', (index: number) => {
      const { radius, angleInDegrees, expectedResult } = testCases[index];
      const polarCoordinates: PolarCoordinates = { radius, angle: angleInDegrees };
      expect(polarInDegreesToCartesian(polarCoordinates)).toEqual({
        x: expect.closeTo(expectedResult.x, 0.6),
        y: expect.closeTo(expectedResult.y, 0.6)
      });
    });
  });
});
