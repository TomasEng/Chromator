import { isValidUnitIntervalValue } from '../validators/stringFormatValidators';
import { modulo } from '../utils';
import { type AngleUnit } from '../types/AngleUnit';

export const hexPairToDecimal = (value: string): number => parseInt(value, 16);

export const shortHexToDecimal = (value: string): number => hexPairToDecimal(value + value);

export const numberFromPercentageOrUnitInterval = (value: string): number =>
  isValidUnitIntervalValue(value) ? parseFloat(value) : numberFromPercentage(value);

export const numberFromPercentage = (value: string): number => {
  const percentage = percentageRegex.exec(value)![0];
  return parseFloat(percentage) / 100;
};

/** When 100% corresponds to another number than 1 for some reason */
export const numberFromScaledPercentageOrScale = (value: string, scale: number): number =>
  value.endsWith('%') ? numberFromScaledPercentage(value, scale) : parseFloat(value);

export const numberFromScaledPercentage = (value: string, scale: number): number => {
  const percentage = percentageRegex.exec(value)![0];
  return (parseFloat(percentage) / 100) * scale;
};

const percentageRegex = /-?\d*\.?\d*(?=%)/;

export const hueDegreesFromString = (value: string): number => {
  if (!hueRegex.test(value) || value === 'none') return 0;
  const scales: Record<AngleUnit, number> = {
    deg: 1,
    turn: 360,
    grad: 0.9,
    rad: 180 / Math.PI
  };
  for (const unit in scales) {
    if (value.endsWith(unit)) {
      const numberString = value.replace(unit, '');
      const number = parseFloatOr0(numberString) * scales[unit as AngleUnit];
      return modulo(number, 360);
    }
  }
  return modulo(parseFloatOr0(value), 360);
};

const hueRegex = /^(-?\d*\.?\d*(|deg|turn|grad|rad))|none$/i;

const parseFloatOr0 = (value: string): number => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
};
