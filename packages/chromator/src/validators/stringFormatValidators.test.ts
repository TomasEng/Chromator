import {
  isValid255ScaleValue,
  isValidColourName,
  isValidDegreeValue,
  isValidHslaString,
  isValidHslString,
  isValidPercentageValue,
  isValidRgb255String,
  isValidRgba255String,
  isValidTransparentName,
  isValidUnitIntervalOrPercentageValue,
  isValidUnitIntervalValue
} from './stringFormatValidators';

describe('stringFormatValidators', () => {
  describe('isValidDegreeValue', () => {
    it('Returns true for valid degree values', () => {
      expect(isValidDegreeValue('0')).toBe(true);
      expect(isValidDegreeValue('1')).toBe(true);
      expect(isValidDegreeValue('1.1')).toBe(true);
      expect(isValidDegreeValue('360')).toBe(true);
      expect(isValidDegreeValue('180')).toBe(true);
      expect(isValidDegreeValue('90')).toBe(true);
      expect(isValidDegreeValue('45')).toBe(true);
      expect(isValidDegreeValue('22.5')).toBe(true);
      expect(isValidDegreeValue('22.51')).toBe(true);
      expect(isValidDegreeValue('360.0')).toBe(true);
      expect(isValidDegreeValue('359.9')).toBe(true);
      expect(isValidDegreeValue('0.0')).toBe(true);
      expect(isValidDegreeValue('.1')).toBe(true);
      expect(isValidDegreeValue('361')).toBe(true);
      expect(isValidDegreeValue('-1')).toBe(true);
      expect(isValidDegreeValue('+1')).toBe(true);
      expect(isValidDegreeValue('1deg')).toBe(true);
      expect(isValidDegreeValue('1turn')).toBe(true);
      expect(isValidDegreeValue('1rad')).toBe(true);
      expect(isValidDegreeValue('1grad')).toBe(true);
    });

    it('Returns false for invalid degree values', () => {
      expect(isValidDegreeValue('22.51.')).toBe(false);
      expect(isValidDegreeValue('22.51.0')).toBe(false);
      expect(isValidDegreeValue('22.51.0.')).toBe(false);
      expect(isValidDegreeValue('')).toBe(false);
      expect(isValidDegreeValue('.')).toBe(false);
      expect(isValidDegreeValue('a')).toBe(false);
      expect(isValidDegreeValue('1a')).toBe(false);
      expect(isValidDegreeValue('deg')).toBe(false);
      expect(isValidDegreeValue('turn')).toBe(false);
      expect(isValidDegreeValue('rad')).toBe(false);
      expect(isValidDegreeValue('grad')).toBe(false);
    });
  });

  describe('isValidPercentageValue', () => {
    it('Returns true for valid percentage values', () => {
      expect(isValidPercentageValue('0')).toBe(true);
      expect(isValidPercentageValue('0%')).toBe(true);
      expect(isValidPercentageValue('1%')).toBe(true);
      expect(isValidPercentageValue('1.1%')).toBe(true);
      expect(isValidPercentageValue('100%')).toBe(true);
      expect(isValidPercentageValue('50%')).toBe(true);
      expect(isValidPercentageValue('0.5%')).toBe(true);
      expect(isValidPercentageValue('0.01%')).toBe(true);
      expect(isValidPercentageValue('100.0%')).toBe(true);
      expect(isValidPercentageValue('99.9%')).toBe(true);
      expect(isValidPercentageValue('0.0%')).toBe(true);
      expect(isValidPercentageValue('.1%')).toBe(true);
    });

    it('Returns false for invalid percentage values', () => {
      expect(isValidPercentageValue('101%')).toBe(false);
      expect(isValidPercentageValue('-1%')).toBe(false);
      expect(isValidPercentageValue('100.1%')).toBe(false);
      expect(isValidPercentageValue('1000%')).toBe(false);
      expect(isValidPercentageValue('0.01.%')).toBe(false);
      expect(isValidPercentageValue('0.01.0%')).toBe(false);
      expect(isValidPercentageValue('0.01.0.%')).toBe(false);
      expect(isValidPercentageValue('')).toBe(false);
      expect(isValidPercentageValue('%')).toBe(false);
      expect(isValidPercentageValue('.%')).toBe(false);
      expect(isValidPercentageValue('1.%')).toBe(false);
    });

    it('Returns true for 0', () => {
      expect(isValidPercentageValue('0')).toBe(true);
    });

    it('Returns false for other numbers without the % sign', () => {
      expect(isValidPercentageValue('1')).toBe(false);
      expect(isValidPercentageValue('1.1')).toBe(false);
      expect(isValidPercentageValue('100')).toBe(false);
      expect(isValidPercentageValue('50')).toBe(false);
      expect(isValidPercentageValue('0.5')).toBe(false);
      expect(isValidPercentageValue('0.01')).toBe(false);
      expect(isValidPercentageValue('100.0')).toBe(false);
      expect(isValidPercentageValue('99.9')).toBe(false);
      expect(isValidPercentageValue('0.0')).toBe(false);
    });
  });

  describe('isValid255ScaleValue', () => {
    it('Returns true for valid 255 scale values', () => {
      expect(isValid255ScaleValue('.1')).toBe(true);
      expect(isValid255ScaleValue('0')).toBe(true);
      expect(isValid255ScaleValue('1')).toBe(true);
      expect(isValid255ScaleValue('1.1')).toBe(true);
      expect(isValid255ScaleValue('255')).toBe(true);
      expect(isValid255ScaleValue('128')).toBe(true);
      expect(isValid255ScaleValue('64')).toBe(true);
      expect(isValid255ScaleValue('32')).toBe(true);
      expect(isValid255ScaleValue('16')).toBe(true);
      expect(isValid255ScaleValue('8')).toBe(true);
      expect(isValid255ScaleValue('4')).toBe(true);
      expect(isValid255ScaleValue('2')).toBe(true);
      expect(isValid255ScaleValue('1.1')).toBe(true);
      expect(isValid255ScaleValue('255.0')).toBe(true);
      expect(isValid255ScaleValue('254.9')).toBe(true);
      expect(isValid255ScaleValue('0.0')).toBe(true);
    });

    it('Returns false for invalid 255 scale values', () => {
      expect(isValid255ScaleValue('256')).toBe(false);
      expect(isValid255ScaleValue('-1')).toBe(false);
      expect(isValid255ScaleValue('255.1')).toBe(false);
      expect(isValid255ScaleValue('300')).toBe(false);
      expect(isValid255ScaleValue('1.1.')).toBe(false);
      expect(isValid255ScaleValue('1.1.0')).toBe(false);
      expect(isValid255ScaleValue('1.1.0.')).toBe(false);
      expect(isValid255ScaleValue('')).toBe(false);
      expect(isValid255ScaleValue('.')).toBe(false);
      expect(isValid255ScaleValue('1.')).toBe(false);
    });
  });

  describe('isValidUnitIntervalValue', () => {
    it('Returns true for valid 1 scale values', () => {
      expect(isValidUnitIntervalValue('0')).toBe(true);
      expect(isValidUnitIntervalValue('0.0')).toBe(true);
      expect(isValidUnitIntervalValue('0.1')).toBe(true);
      expect(isValidUnitIntervalValue('0.12')).toBe(true);
      expect(isValidUnitIntervalValue('.1')).toBe(true);
      expect(isValidUnitIntervalValue('.12')).toBe(true);
      expect(isValidUnitIntervalValue('0.999')).toBe(true);
      expect(isValidUnitIntervalValue('.999')).toBe(true);
      expect(isValidUnitIntervalValue('1')).toBe(true);
      expect(isValidUnitIntervalValue('1.0')).toBe(true);
      expect(isValidUnitIntervalValue('1.00')).toBe(true);
    });

    it('Returns false for invalid 1 scale values', () => {
      expect(isValidUnitIntervalValue('2')).toBe(false);
      expect(isValidUnitIntervalValue('-1')).toBe(false);
      expect(isValidUnitIntervalValue('1.1')).toBe(false);
      expect(isValidUnitIntervalValue('0.1.')).toBe(false);
      expect(isValidUnitIntervalValue('0.1.0')).toBe(false);
      expect(isValidUnitIntervalValue('0.1.0.')).toBe(false);
      expect(isValidUnitIntervalValue('')).toBe(false);
      expect(isValidUnitIntervalValue('.')).toBe(false);
      expect(isValidUnitIntervalValue('1.')).toBe(false);
    });
  });

  describe('isValidUnitIntervalOrPercentageValue', () => {
    it('Returns true for valid 1 scale or percentage values', () => {
      expect(isValidUnitIntervalOrPercentageValue('0')).toBe(true);
      expect(isValidUnitIntervalOrPercentageValue('1')).toBe(true);
      expect(isValidUnitIntervalOrPercentageValue('100%')).toBe(true);
      expect(isValidUnitIntervalOrPercentageValue('.02')).toBe(true);
      expect(isValidUnitIntervalOrPercentageValue('2%')).toBe(true);
    });

    it('Retursn false for values that are neither 1 scale nor percentage values', () => {
      expect(isValidUnitIntervalOrPercentageValue('2')).toBe(false);
      expect(isValidUnitIntervalOrPercentageValue('101%')).toBe(false);
      expect(isValidUnitIntervalOrPercentageValue('-1%')).toBe(false);
      expect(isValidUnitIntervalOrPercentageValue('100.1%')).toBe(false);
      expect(isValidUnitIntervalOrPercentageValue('-1')).toBe(false);
    });
  });

  describe('isValidHslString', () => {
    it('Returns true for valid HSL strings', () => {
      expect(isValidHslString('hsl(9, 100%, 64%)')).toBe(true);
      expect(isValidHslString(' hsl ( 9, 100% , 64% ) ')).toBe(true);
      expect(isValidHslString('hsl(9,100%,64%)')).toBe(true);
      expect(isValidHslString('HSL(9, 100%, 64%)')).toBe(true);
      expect(isValidHslString('hsl(9, 1, 64%)')).toBe(true);
      expect(isValidHslString('hsl(9, 100%, .64)')).toBe(true);
      expect(isValidHslString('hsl(9, 1, 0.64)')).toBe(true);
    });

    it('Returns false for invalid HSL strings', () => {
      expect(isValidHslString('hsl(9, 100%, 64%, 0.5)')).toBe(false);
      expect(isValidHslString('hsl(9%, 100%, 64%)')).toBe(false);
      expect(isValidHslString('hsl(9, -100%, 64%)')).toBe(false);
      expect(isValidHslString('hsl(9, 1, 0.64, 0.5)')).toBe(false);
    });

    it('Returns false for non-HSL strings', () => {
      expect(isValidHslString('rgb(255, 0, 0)')).toBe(false);
      expect(isValidHslString('hsla(9, 100%, 64%, 0.5)')).toBe(false);
      expect(isValidHslString('red')).toBe(false);
    });
  });

  describe('isValidHslaString', () => {
    it('Returns true for valid HSLA strings', () => {
      expect(isValidHslaString('hsla(9, 100%, 64%, 0.5)')).toBe(true);
      expect(isValidHslaString(' hsla ( 9, 100% , 64% , 0.5 ) ')).toBe(true);
      expect(isValidHslaString('hsla(9,100%,64%,0.5)')).toBe(true);
      expect(isValidHslaString('HSLA(9, 100%, 64%, 0.5)')).toBe(true);
      expect(isValidHslaString('hsla(9, 100%, 64%, 50%)')).toBe(true);
      expect(isValidHslaString('hsla(9, 1, 0.64, 0.5)')).toBe(true);
    });

    it('Returns false for invalid HSLA strings', () => {
      expect(isValidHslaString('hsla(9, 100%, 64%)')).toBe(false);
      expect(isValidHslaString('hsla(9, 100%, 64%, 2)')).toBe(false);
      expect(isValidHslaString('hsla(9%, 100%, 64%, 0.5)')).toBe(false);
      expect(isValidHslaString('hsla(9, -100%, 64%, 0.5)')).toBe(false);
    });

    it('Returns false for non-HSLA strings', () => {
      expect(isValidHslaString('rgb(255, 0, 0)')).toBe(false);
      expect(isValidHslaString('hsl(9, 100%, 64%)')).toBe(false);
      expect(isValidHslaString('red')).toBe(false);
    });
  });

  describe('isValidRgb255String', () => {
    it('Returns true for valid RGB strings', () => {
      expect(isValidRgb255String('rgb(255, 99, 71)')).toBe(true);
      expect(isValidRgb255String(' rgb ( 255, 99 , 71 ) ')).toBe(true);
      expect(isValidRgb255String('rgb(255,99,71)')).toBe(true);
      expect(isValidRgb255String('RGB(255, 99, 71)')).toBe(true);
    });

    it('Returns false for invalid RGB strings', () => {
      expect(isValidRgb255String('rgb(255, 99, 71, 0.5)')).toBe(false);
      expect(isValidRgb255String('rgb(255%, 99, 71)')).toBe(false);
      expect(isValidRgb255String('rgb(255, -99, 71)')).toBe(false);
    });

    it('Returns false for non-RGB strings', () => {
      expect(isValidRgb255String('hsl(9, 100%, 64%)')).toBe(false);
      expect(isValidRgb255String('rgba(255, 99, 71, 0.5)')).toBe(false);
      expect(isValidRgb255String('red')).toBe(false);
    });
  });

  describe('isValidRgba255String', () => {
    it('Returns true for valid RGBA strings', () => {
      expect(isValidRgba255String('rgba(255, 99, 71, 0.5)')).toBe(true);
      expect(isValidRgba255String(' rgba ( 255, 99 , 71 , 0.5 ) ')).toBe(true);
      expect(isValidRgba255String('rgba(255,99,71,0.5)')).toBe(true);
      expect(isValidRgba255String('RGBA(255, 99, 71, 0.5)')).toBe(true);
    });

    it('Returns false for invalid RGBA strings', () => {
      expect(isValidRgba255String('rgba(255, 99, 71)')).toBe(false);
      expect(isValidRgba255String('rgba(255, 99, 71, 2)')).toBe(false);
      expect(isValidRgba255String('rgba(255%, 99, 71, 0.5)')).toBe(false);
      expect(isValidRgba255String('rgba(255, -99, 71, 0.5)')).toBe(false);
    });

    it('Returns false for non-RGBA strings', () => {
      expect(isValidRgba255String('hsl(9, 100%, 64%)')).toBe(false);
      expect(isValidRgba255String('rgb(255, 99, 71)')).toBe(false);
      expect(isValidRgba255String('red')).toBe(false);
    });
  });

  describe('isValidColourName', () => {
    it('Returns true for valid colour names', () => {
      expect(isValidColourName('red')).toBe(true);
      expect(isValidColourName('ReD')).toBe(true);
      expect(isValidColourName('RED')).toBe(true);
      expect(isValidColourName('red ')).toBe(true);
      expect(isValidColourName(' red')).toBe(true);
      expect(isValidColourName(' red ')).toBe(true);
    });

    it('Returns false for invalid colour names', () => {
      expect(isValidColourName('red1')).toBe(false);
      expect(isValidColourName('1red')).toBe(false);
      expect(isValidColourName('')).toBe(false);
    });

    it('Returns false for non-colour names', () => {
      expect(isValidColourName('hsl(9, 100%, 64%)')).toBe(false);
      expect(isValidColourName('rgb(255, 99, 71)')).toBe(false);
      expect(isValidColourName('rgba(255, 99, 71, 0.5)')).toBe(false);
      expect(isValidColourName('transparent')).toBe(false);
    });
  });

  describe('isValidTransparentName', () => {
    it('Returns true for valid transparent names', () => {
      expect(isValidTransparentName('transparent')).toBe(true);
      expect(isValidTransparentName('TrAnSpArEnT')).toBe(true);
      expect(isValidTransparentName('TRANSPARENT')).toBe(true);
      expect(isValidTransparentName('transparent ')).toBe(true);
      expect(isValidTransparentName(' transparent')).toBe(true);
      expect(isValidTransparentName(' transparent ')).toBe(true);
    });

    it('Returns false for invalid transparent names', () => {
      expect(isValidTransparentName('transparent1')).toBe(false);
      expect(isValidTransparentName('1transparent')).toBe(false);
      expect(isValidTransparentName('')).toBe(false);
    });

    it('Returns false for non-transparent names', () => {
      expect(isValidTransparentName('hsl(9, 100%, 64%)')).toBe(false);
      expect(isValidTransparentName('rgb(255, 99, 71)')).toBe(false);
      expect(isValidTransparentName('rgba(255, 99, 71, 0.5)')).toBe(false);
      expect(isValidTransparentName('red')).toBe(false);
    });
  });
});
