import { decimalToHexPair, numberToPercentage } from './number-to-string';

describe('Number to string converters', () => {
  describe('decimalToHexPair', () => {
    it.each([
      [0, '00'],
      [1, '01'],
      [10, '0A'],
      [15, '0F'],
      [16, '10'],
      [255, 'FF']
    ])('Converts %i to %s', (decimal, hex) => {
      expect(decimalToHexPair(decimal)).toBe(hex);
    });
  });

  describe('numberToPercentage', () => {
    it.each([
      [0, '0%'],
      [0.1, '10%'],
      [0.5, '50%'],
      [1, '100%']
    ])('Converts %i to %s', (number, percentage) => {
      expect(numberToPercentage(number)).toBe(percentage);
    });
  });
});
