import {
  hexPairToDecimal,
  numberFromPercentage,
  numberFromPercentageOrUnitInterval, numberFromScaledPercentage, numberFromScaledPercentageOrScale,
  shortHexToDecimal
} from './string-to-number';

describe('String to number converters', () => {
  describe('hexPairToDecimal', () => {
    it('Converts a hex pair to a decimal number', () => {
      expect(hexPairToDecimal('00')).toBe(0);
      expect(hexPairToDecimal('0a')).toBe(10);
      expect(hexPairToDecimal('ff')).toBe(255);
    });
  });

  describe('shortHexToDecimal', () => {
    it('Converts a short hex string to a decimal number', () => {
      expect(shortHexToDecimal('0')).toBe(0);
      expect(shortHexToDecimal('1')).toBe(17);
      expect(shortHexToDecimal('2')).toBe(34);
      expect(shortHexToDecimal('5')).toBe(85);
      expect(shortHexToDecimal('a')).toBe(170);
      expect(shortHexToDecimal('f')).toBe(255);
    });
  });

  describe('numberFromPercentage', () => {
    it('Returns the number corresponding to the given percentage string', () => {
      expect(numberFromPercentage('0%')).toBeCloseTo(0, 6);
      expect(numberFromPercentage('0.0%')).toBeCloseTo(0, 6);
      expect(numberFromPercentage('1%')).toBeCloseTo(0.01, 6);
      expect(numberFromPercentage('1.1%')).toBeCloseTo(0.011, 6);
      expect(numberFromPercentage('100%')).toBeCloseTo(1, 6);
    });
  });

  describe('numberFromScaledPercentage', () => {
    it('Returns the number corresponding to the given percentage string scaled by the given value', () => {
      expect(numberFromScaledPercentage('0%', 125)).toBeCloseTo(0, 6);
      expect(numberFromScaledPercentage('0.0%', 125)).toBeCloseTo(0, 6);
      expect(numberFromScaledPercentage('1%', 125)).toBeCloseTo(1.25, 6);
      expect(numberFromScaledPercentage('1.1%', 125)).toBeCloseTo(1.375, 6);
      expect(numberFromScaledPercentage('100%', 125)).toBeCloseTo(125, 6);
    });
  });

  describe('numberFromPercentageOrUnitInterval', () => {
    it('Returns the number corresponding to the given percentage', () => {
      expect(numberFromPercentageOrUnitInterval('0%')).toBeCloseTo(0, 6);
      expect(numberFromPercentageOrUnitInterval('0.0%')).toBeCloseTo(0, 6);
      expect(numberFromPercentageOrUnitInterval('1%')).toBeCloseTo(0.01, 6);
      expect(numberFromPercentageOrUnitInterval('1.1%')).toBeCloseTo(0.011, 6);
      expect(numberFromPercentageOrUnitInterval('100%')).toBeCloseTo(1, 6);
    });

    it('Returns the number corresponding to the given unit interval value', () => {
      expect(numberFromPercentageOrUnitInterval('0')).toBeCloseTo(0, 6);
      expect(numberFromPercentageOrUnitInterval('0.0')).toBeCloseTo(0, 6);
      expect(numberFromPercentageOrUnitInterval('1')).toBeCloseTo(1, 6);
      expect(numberFromPercentageOrUnitInterval('1.0')).toBeCloseTo(1, 6);
      expect(numberFromPercentageOrUnitInterval('0.1')).toBeCloseTo(0.1, 6);
    });
  });

  describe('numberFromScaledPercentageOrScale', () => {
    it('Returns the number corresponding to the given percentage when the given string is a percentage', () => {
      expect(numberFromScaledPercentageOrScale('0%', 125)).toBeCloseTo(0, 6);
      expect(numberFromScaledPercentageOrScale('0.0%', 125)).toBeCloseTo(0, 6);
      expect(numberFromScaledPercentageOrScale('1%', 125)).toBeCloseTo(1.25, 6);
      expect(numberFromScaledPercentageOrScale('1.1%', 125)).toBeCloseTo(1.375, 6);
      expect(numberFromScaledPercentageOrScale('100%', 125)).toBeCloseTo(125, 6);
      expect(numberFromScaledPercentageOrScale('200%', 125)).toBeCloseTo(250, 6);
    });

    it('Returns the given number when it is not a percentage', () => {
      expect(numberFromScaledPercentageOrScale('0', 125)).toBe(0);
      expect(numberFromScaledPercentageOrScale('0.0', 125)).toBe(0);
      expect(numberFromScaledPercentageOrScale('1', 125)).toBe(1);
      expect(numberFromScaledPercentageOrScale('1.0', 125)).toBe(1);
      expect(numberFromScaledPercentageOrScale('0.1', 125)).toBe(0.1);
      expect(numberFromScaledPercentageOrScale('125', 125)).toBe(125);
      expect(numberFromScaledPercentageOrScale('200', 125)).toBe(200);
    });
  });
});
