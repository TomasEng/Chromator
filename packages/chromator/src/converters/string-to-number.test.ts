import {
  hexPairToDecimal, hueDegreesFromString,
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

  describe('hueDegreesFromString', () => {
    it('Returns 0 when the given string is not a valid hue value', () => {
      expect(hueDegreesFromString('')).toBe(0);
      expect(hueDegreesFromString('a')).toBe(0);
      expect(hueDegreesFromString('deg')).toBe(0);
      expect(hueDegreesFromString('adeg')).toBe(0);
    });

    it('Returns 0 when the given string is "none"', () => {
      expect(hueDegreesFromString('none')).toBe(0);
    });

    it('Returns the number in degrees when the given string is a number followed by "deg"', () => {
      expect(hueDegreesFromString('0deg')).toBe(0);
      expect(hueDegreesFromString('1deg')).toBe(1);
      expect(hueDegreesFromString('.5deg')).toBe(0.5);
      expect(hueDegreesFromString('0.5deg')).toBe(0.5);
      expect(hueDegreesFromString('1.5deg')).toBe(1.5);
      expect(hueDegreesFromString('180deg')).toBe(180);
      expect(hueDegreesFromString('360deg')).toBe(0);
      expect(hueDegreesFromString('361deg')).toBe(1);
      expect(hueDegreesFromString('-1deg')).toBe(359);
      expect(hueDegreesFromString('-360deg')).toBe(0);
    });

    it('Returns the number in degrees when the given string is a number followed by "turn"', () => {
      expect(hueDegreesFromString('0turn')).toBe(0);
      expect(hueDegreesFromString('1turn')).toBe(0);
      expect(hueDegreesFromString('.5turn')).toBe(180);
      expect(hueDegreesFromString('0.5turn')).toBe(180);
      expect(hueDegreesFromString('1.5turn')).toBe(180);
      expect(hueDegreesFromString('2turn')).toBe(0);
      expect(hueDegreesFromString('-1turn')).toBe(0);
      expect(hueDegreesFromString('-0.25turn')).toBe(270);
      expect(hueDegreesFromString('-.25turn')).toBe(270);
    });

    it('Returns the number in degrees when the given string is a number followed by "grad"', () => {
      expect(hueDegreesFromString('0grad')).toBe(0);
      expect(hueDegreesFromString('1grad')).toBeCloseTo(0.9);
      expect(hueDegreesFromString('.5grad')).toBeCloseTo(0.45);
      expect(hueDegreesFromString('0.5grad')).toBeCloseTo(0.45);
      expect(hueDegreesFromString('1.5grad')).toBeCloseTo(1.35);
      expect(hueDegreesFromString('200grad')).toBeCloseTo(180);
      expect(hueDegreesFromString('400grad')).toBe(0);
      expect(hueDegreesFromString('401grad')).toBeCloseTo(0.9);
      expect(hueDegreesFromString('-1grad')).toBeCloseTo(359.1);
      expect(hueDegreesFromString('-400grad')).toBe(0);
    });

    it('Returns the number in degrees when the given string is a number followed by "rad"', () => {
      expect(hueDegreesFromString('0rad')).toBe(0);
      expect(hueDegreesFromString('1rad')).toBeCloseTo(57.2957795131);
      expect(hueDegreesFromString('.5rad')).toBeCloseTo(28.6478897566);
      expect(hueDegreesFromString('0.5rad')).toBeCloseTo(28.6478897566);
      expect(hueDegreesFromString('1.5rad')).toBeCloseTo(85.9436692698);
      expect(hueDegreesFromString('3.14159rad')).toBeCloseTo(180);
      expect(hueDegreesFromString('6.28319rad')).toBeCloseTo(0);
      expect(hueDegreesFromString('9.42478rad')).toBeCloseTo(180);
      expect(hueDegreesFromString('-1rad')).toBeCloseTo(302.7042204869);
    });

    it('Defaults to degrees when no unit is given', () => {
      expect(hueDegreesFromString('0')).toBe(0);
      expect(hueDegreesFromString('1')).toBe(1);
      expect(hueDegreesFromString('.5')).toBe(0.5);
      expect(hueDegreesFromString('0.5')).toBe(0.5);
      expect(hueDegreesFromString('1.5')).toBe(1.5);
      expect(hueDegreesFromString('180')).toBe(180);
      expect(hueDegreesFromString('360')).toBe(0);
      expect(hueDegreesFromString('361')).toBe(1);
      expect(hueDegreesFromString('-1')).toBe(359);
      expect(hueDegreesFromString('-360')).toBe(0);
    });
  });
});
