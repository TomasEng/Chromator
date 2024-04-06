import { type ColourCode } from '../types/ColourCode';
import { type Hsla } from '../types/Hsla';
import {
  cieXyzaToHsla,
  cieXyzToHsl
} from './object-converters/xyz';
import { namedColours } from '../data/namedColours';
import { type NamedColour } from '../types/NamedColour';
import { evaluateFormat } from '../utils';
import {
  hexWithHashToHsl,
  hexWithHashToHsla,
  hexWithoutHashToHsl,
  hexWithoutHashToHsla,
  hslaStringToHsla,
  hslStringToHsl, labStringToHsla, lchStringToHsla, oklabStringToHsla, oklchStringToHsla,
  rgb255StringToHsl,
  rgba255StringToHsla,
  shortHexWithHashToHsl,
  shortHexWithHashToHsla,
  shortHexWithoutHashToHsl,
  shortHexWithoutHashToHsla
} from './string-to-hsl';
import {
  isHsl,
  isHsla,
  isHsv,
  isHsva,
  isLab,
  isLaba, isLch, isLcha, isOklab, isOklaba, isOklch, isOklcha,
  isRgb,
  isRgba,
  isXyz,
  isXyza
} from '../validators/objectValidators';
import { rgbaToHsla, rgbToHsl } from './object-converters/rgb';
import { hsvaToHsla, hsvToHsl } from './object-converters/hsv';
import { labaToHsla, labToHsl } from './object-converters/lab';
import { lchaToHsla, lchToHsl } from './object-converters/lch';
import { oklabaToHsla, oklabToHsl } from './object-converters/oklab';
import { oklchaToHsla, oklchToHsl } from './object-converters/oklch';

export const colourCodeToHsla = (code: ColourCode): Hsla => {
  if (typeof code === 'string') return stringToHsla(code);
  if (isHsla(code)) return code;
  if (isHsl(code)) return { ...code, alpha: 1 };
  if (isRgb(code)) return { ...rgbToHsl(code), alpha: 1 };
  if (isRgba(code)) return rgbaToHsla(code);
  if (isHsv(code)) return { ...hsvToHsl(code), alpha: 1 };
  if (isHsva(code)) return hsvaToHsla(code);
  if (isXyz(code)) return { ...cieXyzToHsl(code), alpha: 1 };
  if (isXyza(code)) return cieXyzaToHsla(code);
  if (isLab(code)) return { ...labToHsl(code), alpha: 1 };
  if (isLaba(code)) return labaToHsla(code);
  if (isLch(code)) return { ...lchToHsl(code), alpha: 1 };
  if (isLcha(code)) return lchaToHsla(code);
  if (isOklab(code)) return { ...oklabToHsl(code), alpha: 1 };
  if (isOklaba(code)) return oklabaToHsla(code);
  if (isOklch(code)) return { ...oklchToHsl(code), alpha: 1 };
  if (isOklcha(code)) return oklchaToHsla(code);
  throw new Error('The passed object is not a valid colour code.');
};

const stringToHsla = (value: string): Hsla => {
  const format = evaluateFormat(value);
  switch (format) {
    case 'hsl':
      return { ...hslStringToHsl(value), alpha: 1 };
    case 'hsla':
      return hslaStringToHsla(value);
    case 'lab':
      return labStringToHsla(value);
    case 'lch':
      return lchStringToHsla(value);
    case 'oklab':
      return oklabStringToHsla(value);
    case 'oklch':
      return oklchStringToHsla(value);
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
