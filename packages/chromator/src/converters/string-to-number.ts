import { isValidPercentageValue, isValidUnitIntervalValue } from '../validators/stringFormatValidators';

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
