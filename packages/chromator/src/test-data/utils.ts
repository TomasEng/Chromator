import { type Hsl } from '../types/Hsl';
import { round } from '../utils';

export const verifyHsl = (received: Hsl, expected: Hsl): void => {
  expect(received).toEqual({
    hue: expect.anything(),
    saturation: expected.lightness === 1 ? expect.anything() : expect.closeTo(expected.saturation, 4),
    lightness: expect.closeTo(expected.lightness, 4)
  });
  const { hue } = received;
  expect(hue).toBeGreaterThanOrEqual(0);
  expect(hue).toBeLessThan(360);
  const isGrey = expected.saturation === 0;
  if (!isGrey) {
    const numDigitsAfterDecimal = 1;
    const roundedHue = round(hue, numDigitsAfterDecimal);
    const modulatedHue = roundedHue % 360;
    expect(modulatedHue).toBeCloseTo(expected.hue, numDigitsAfterDecimal);
  }
};
