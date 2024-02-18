import { type ColourCode } from '../types/ColourCode';
import { type Hsla } from '../types/Hsla';
import { hsvaToHsla, hsvToHsl, rgbaToHsla, rgbToHsl } from './colour-object-converters';
import { namedColours } from '../data/namedColours';
import { type NamedColour } from '../types/NamedColour';
import { evaluateFormat } from '../utils';
import {
  hexWithHashToHsl,
  hexWithHashToHsla,
  hexWithoutHashToHsl,
  hexWithoutHashToHsla,
  hslaStringToHsla,
  hslStringToHsl,
  rgb255StringToHsl,
  rgba255StringToHsla,
  shortHexWithHashToHsl,
  shortHexWithHashToHsla,
  shortHexWithoutHashToHsl,
  shortHexWithoutHashToHsla
} from './string-to-hsl';
import { isHsl, isHsla, isHsv, isHsva, isRgb, isRgba } from '../validators/objectValidators';

export const colourCodeToHsla = (code: ColourCode): Hsla => {
  if (typeof code === 'string') return stringToHsla(code);
  if (isHsla(code)) return code;
  if (isHsl(code)) return { ...code, alpha: 1 };
  if (isRgb(code)) return { ...rgbToHsl(code), alpha: 1 };
  if (isRgba(code)) return rgbaToHsla(code);
  if (isHsv(code)) return { ...hsvToHsl(code), alpha: 1 };
  if (isHsva(code)) return hsvaToHsla(code);
  throw new Error('The passed object is not a valid colour code.');
};

const stringToHsla = (value: string): Hsla => {
  const format = evaluateFormat(value);
  switch (format) {
    case 'hsl':
      return { ...hslStringToHsl(value), alpha: 1 };
    case 'hsla':
      return hslaStringToHsla(value);
    case 'rgbDecimal':
      return { ...rgb255StringToHsl(value), alpha: 1 };
    case 'rgbaDecimal':
      return rgba255StringToHsla(value);
    case 'rgbHexLongWithHash':
      return { ...hexWithHashToHsl(value), alpha: 1 };
    case 'rgbHexLongWithoutHash':
      return { ...hexWithoutHashToHsl(value), alpha: 1 };
    case 'rgbHexShortWithHash':
      return { ...shortHexWithHashToHsl(value), alpha: 1 };
    case 'rgbHexShortWithoutHash':
      return { ...shortHexWithoutHashToHsl(value), alpha: 1 };
    case 'rgbaHexLongWithHash':
      return hexWithHashToHsla(value);
    case 'rgbaHexLongWithoutHash':
      return hexWithoutHashToHsla(value);
    case 'rgbaHexShortWithHash':
      return shortHexWithHashToHsla(value);
    case 'rgbaHexShortWithoutHash':
      return shortHexWithoutHashToHsla(value);
    case 'namedColour':
      return { ...rgbToHsl(namedColours[value as NamedColour]), alpha: 1 };
    case 'namedTransparent':
      return { hue: 0, saturation: 0, lightness: 0, alpha: 0 };
    default:
      throw new Error(`Invalid colour code: ${value}`);
  }
};
