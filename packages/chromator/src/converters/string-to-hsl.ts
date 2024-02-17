import { Hsl } from '../types/Hsl.ts';
import { colourFormatRegex } from '../data/colourFormatRegex.ts';
import { ColourCodeFormat } from '../enums/ColourCodeFormat.ts';
import { numberFromPercentageOrUnitInterval } from './string-to-number.ts';
import { Hsla } from '../types/Hsla.ts';
import { rgbaToHsla, rgbToHsl } from './colour-object-converters.ts';
import {
  hexWithHashToRgb,
  hexWithHashToRgba,
  hexWithoutHashToRgb,
  hexWithoutHashToRgba,
  rgb255StringToRgb,
  rgba255StringToRgba,
  shortHexWithHashToRgb,
  shortHexWithHashToRgba,
  shortHexWithoutHashToRgb,
  shortHexWithoutHashToRgba
} from './string-to-rgb.ts';

export const hslStringToHsl = (value: string): Hsl => {
  const regex = colourFormatRegex[ColourCodeFormat.HslString];
  const { hue, saturation, lightness } = regex.exec(value)!.groups!;
  return {
    hue: parseFloat(hue),
    saturation: numberFromPercentageOrUnitInterval(saturation),
    lightness: numberFromPercentageOrUnitInterval(lightness)
  };
};

export const hslaStringToHsla = (value: string): Hsla => {
  const regex = colourFormatRegex[ColourCodeFormat.HslaString];
  const { hue, saturation, lightness, alpha } = regex.exec(value)!.groups!;
  return {
    hue: parseFloat(hue),
    saturation: numberFromPercentageOrUnitInterval(saturation),
    lightness: numberFromPercentageOrUnitInterval(lightness),
    alpha: numberFromPercentageOrUnitInterval(alpha)
  };
};

export const rgb255StringToHsl = (value: string): Hsl => {
  return rgbToHsl(rgb255StringToRgb(value));
};

export const rgba255StringToHsla = (value: string): Hsla => {
  const { alpha, ...rgb } = rgba255StringToRgba(value);
  const hsl = rgbToHsl(rgb);
  return { ...hsl, alpha };
};

export const hexWithoutHashToHsl = (value: string): Hsl => rgbToHsl(hexWithoutHashToRgb(value));
export const hexWithHashToHsl = (value: string): Hsl => rgbToHsl(hexWithHashToRgb(value));

export const hexWithoutHashToHsla = (value: string): Hsla => rgbaToHsla(hexWithoutHashToRgba(value));
export const hexWithHashToHsla = (value: string): Hsla => rgbaToHsla(hexWithHashToRgba(value));

export const shortHexWithoutHashToHsl = (value: string): Hsl => rgbToHsl(shortHexWithoutHashToRgb(value));
export const shortHexWithHashToHsl = (value: string): Hsl => rgbToHsl(shortHexWithHashToRgb(value));

export const shortHexWithoutHashToHsla = (value: string): Hsla => rgbaToHsla(shortHexWithoutHashToRgba(value));
export const shortHexWithHashToHsla = (value: string): Hsla => rgbaToHsla(shortHexWithHashToRgba(value));