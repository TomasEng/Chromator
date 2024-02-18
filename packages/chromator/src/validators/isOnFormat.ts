import { type StringColourFormat } from '../types/StringColourFormat';
import { colourFormatRegex } from '../data/colourFormatRegex';
import {
  isValidColourName,
  isValidHslaString,
  isValidHslString,
  isValidRgb255String,
  isValidRgba255String
} from './stringFormatValidators';

export const isOnFormat = (value: string, format: StringColourFormat): boolean => {
  switch (format) {
    case 'hsl':
      return isValidHslString(value);
    case 'hsla':
      return isValidHslaString(value);
    case 'namedColour':
      return isValidColourName(value);
    case 'rgbDecimal':
      return isValidRgb255String(value);
    case 'rgbaDecimal':
      return isValidRgba255String(value);
    default:
      return colourFormatRegex[format].test(value);
  }
};
