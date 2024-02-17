import { type ColourCode } from '../types/ColourCode';
import { ColourCodeFormat } from '../enums/ColourCodeFormat';
import { type StringColourFormat } from '../types/StringColourFormat';
import { colourFormatRegex } from '../data/colourFormatRegex';
import {
  isValidColourName, isValidHslaString, isValidHslString,
  isValidRgb255String,
  isValidRgba255String,
  isValidTransparentName
} from './stringFormatValidators';
import { isHsl, isHsla, isHsv, isHsva, isRgb, isRgba } from './objectValidators';

export const isOnFormat = (value: ColourCode, format: ColourCodeFormat): boolean => {
  switch (format) {
    case ColourCodeFormat.Rgb255Object:
      return isRgb(value);
    case ColourCodeFormat.Rgba255Object:
      return isRgba(value);
    case ColourCodeFormat.HslObject:
      return isHsl(value);
    case ColourCodeFormat.HslaObject:
      return isHsla(value);
    case ColourCodeFormat.HsvObject:
      return isHsv(value);
    case ColourCodeFormat.HsvaObject:
      return isHsva(value);
    default:
      return typeof value === 'string' && isOnStringFormat(value, format);
  }
};

const isOnStringFormat = (value: string, format: StringColourFormat): boolean => {
  switch (format) {
    case ColourCodeFormat.HslString:
      return isValidHslString(value);
    case ColourCodeFormat.HslaString:
      return isValidHslaString(value);
    case ColourCodeFormat.NamedColour:
      return isValidColourName(value);
    case ColourCodeFormat.NamedTransparent:
      return isValidTransparentName(value);
    case ColourCodeFormat.Rgb255String:
      return isValidRgb255String(value);
    case ColourCodeFormat.Rgba255String:
      return isValidRgba255String(value);
    default:
      return colourFormatRegex[format].test(value);
  }
};
