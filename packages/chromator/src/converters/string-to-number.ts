import { isValidUnitIntervalValue } from '../validators/stringFormatValidators';

export const hexPairToDecimal = (value: string): number => parseInt(value, 16);

export const shortHexToDecimal = (value: string): number => hexPairToDecimal(value + value);

export const numberFromPercentageOrUnitInterval = (value: string): number =>
  isValidUnitIntervalValue(value) ? parseFloat(value) : numberFromPercentage(value);

export const numberFromPercentage = (value: string): number => {
  const percentage = percentageRegex.exec(value)![0];
  return parseFloat(percentage) / 100;
};

const percentageRegex = /\d*\.?\d*(?=%)/;
