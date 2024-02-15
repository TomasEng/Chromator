import { colourFormatRegex } from '../data/colourFormatRegex';
import { ColourCodeFormat } from '../enums/ColourCodeFormat';
import { namedColours } from '../data/namedColours';

export const isValidHslString = (value: string): boolean => {
  const regex = colourFormatRegex[ColourCodeFormat.HslString];
  const trimmed = value.trim().toLowerCase();
  const hasExpectedFormat = regex.test(trimmed);
  if (!hasExpectedFormat) return false;
  const { hue, saturation, lightness } = regex.exec(trimmed)!.groups!;
  return (
    isValidDegreeValue(hue) &&
    isValidUnitIntervalOrPercentageValue(saturation) &&
    isValidUnitIntervalOrPercentageValue(lightness)
  );
};

export const isValidHslaString = (value: string): boolean => {
  const regex = colourFormatRegex[ColourCodeFormat.HslaString];
  const trimmed = value.trim().toLowerCase();
  const hasExpectedFormat = regex.test(trimmed);
  if (!hasExpectedFormat) return false;
  const { hue, saturation, lightness, alpha } = regex.exec(trimmed)!.groups!;
  return (
    isValidDegreeValue(hue) &&
    isValidUnitIntervalOrPercentageValue(saturation) &&
    isValidUnitIntervalOrPercentageValue(lightness) &&
    isValidUnitIntervalOrPercentageValue(alpha)
  );
};

export const isValidRgb255String = (value: string): boolean => {
  const regex = colourFormatRegex[ColourCodeFormat.Rgb255String];
  const trimmed = value.trim().toLowerCase();
  const hasExpectedFormat = regex.test(trimmed);
  if (!hasExpectedFormat) return false;
  const { red, green, blue } = regex.exec(trimmed)!.groups!;
  return (
    isValid255ScaleValue(red) &&
    isValid255ScaleValue(green) &&
    isValid255ScaleValue(blue)
  );
};

export const isValidRgba255String = (value: string): boolean => {
  const regex = colourFormatRegex[ColourCodeFormat.Rgba255String];
  const trimmed = value.trim().toLowerCase();
  const hasExpectedFormat = regex.test(trimmed);
  if (!hasExpectedFormat) return false;
  const { red, green, blue, alpha } = regex.exec(trimmed)!.groups!;
  return (
    isValid255ScaleValue(red) &&
    isValid255ScaleValue(green) &&
    isValid255ScaleValue(blue) &&
    isValidUnitIntervalOrPercentageValue(alpha)
  );
};

export const isValidColourName = (value: string): boolean => {
  const trimmed = value.trim().toLowerCase();
  return Object.keys(namedColours).includes(trimmed);
};

export const isValidTransparentName = (value: string): boolean => {
  const trimmed = value.trim().toLowerCase();
  return trimmed === 'transparent';
};

export const isValidDegreeValue = (value: string) =>
  /^(((([12]?\d{1,2})|(3[012345]\d))(\.\d+)?)|360(\.0+)?|\.\d+)$/.test(value);

export const isValidPercentageValue = (value: string) =>
  /^((((\d{1,2}(\.\d+)?)|(100(\.0+)?)|(\.\d+))%)|0)$/.test(value);

export const isValid255ScaleValue = (value: string) =>
  /^((((1?\d{1,2})|(2([01234]\d|5[01234])))(\.\d+)?)|255(\.0+)?|\.\d+)$/.test(value);

export const isValidUnitIntervalValue = (value: string) =>
  /^(0|0\.\d+|\.\d+|1(\.0+)?)$/.test(value);

export const isValidUnitIntervalOrPercentageValue = (value: string) =>
  isValidUnitIntervalValue(value) || isValidPercentageValue(value);