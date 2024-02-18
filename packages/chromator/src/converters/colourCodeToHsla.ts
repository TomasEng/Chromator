import { type ColourCode } from '../types/ColourCode';
import { type Hsla } from '../types/Hsla';
import { ColourCodeFormat } from '../enums/ColourCodeFormat';
import { type Hsl } from '../types/Hsl';
import { hsvaToHsla, hsvToHsl, rgbaToHsla, rgbToHsl } from './colour-object-converters';
import { type Rgb } from '../types/Rgb';
import { type Rgba } from '../types/Rgba';
import { type Hsv } from '../types/Hsv';
import { type Hsva } from '../types/Hsva';
import { namedColours } from '../data/namedColours';
import { type NamedColour } from '../types/NamedColour';
import { findFormat } from '../utils';
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

export const colourCodeToHsla = (code: ColourCode): Hsla => {
  const format = findFormat(code);
  switch (format) {
    case ColourCodeFormat.HslObject:
      return { ...code as Hsl, alpha: 1 };
    case ColourCodeFormat.HslaObject:
      return code as Hsla;
    case ColourCodeFormat.Rgb255Object:
      return { ...rgbToHsl(code as Rgb), alpha: 1 };
    case ColourCodeFormat.Rgba255Object:
      return rgbaToHsla(code as Rgba);
    case ColourCodeFormat.HsvObject:
      return { ...hsvToHsl(code as Hsv), alpha: 1 };
    case ColourCodeFormat.HsvaObject:
      return hsvaToHsla(code as Hsva);
    case ColourCodeFormat.HslString:
      return { ...hslStringToHsl(code as string), alpha: 1 };
    case ColourCodeFormat.HslaString:
      return hslaStringToHsla(code as string);
    case ColourCodeFormat.Rgb255String:
      return { ...rgb255StringToHsl(code as string), alpha: 1 };
    case ColourCodeFormat.Rgba255String:
      return rgba255StringToHsla(code as string);
    case ColourCodeFormat.RgbHexLongWithHash:
      return { ...hexWithHashToHsl(code as string), alpha: 1 };
    case ColourCodeFormat.RgbHexLongWithoutHash:
      return { ...hexWithoutHashToHsl(code as string), alpha: 1 };
    case ColourCodeFormat.RgbHexShortWithHash:
      return { ...shortHexWithHashToHsl(code as string), alpha: 1 };
    case ColourCodeFormat.RgbHexShortWithoutHash:
      return { ...shortHexWithoutHashToHsl(code as string), alpha: 1 };
    case ColourCodeFormat.RgbaHexLongWithHash:
      return hexWithHashToHsla(code as string);
    case ColourCodeFormat.RgbaHexLongWithoutHash:
      return hexWithoutHashToHsla(code as string);
    case ColourCodeFormat.RgbaHexShortWithHash:
      return shortHexWithHashToHsla(code as string);
    case ColourCodeFormat.RgbaHexShortWithoutHash:
      return shortHexWithoutHashToHsla(code as string);
    case ColourCodeFormat.NamedColour:
      return { ...rgbToHsl(namedColours[code as NamedColour]), alpha: 1 };
    case ColourCodeFormat.NamedTransparent:
      return { hue: 0, saturation: 0, lightness: 0, alpha: 0 };
    default:
      throw new Error(`Invalid colour code: ${code}`);
  }
};
