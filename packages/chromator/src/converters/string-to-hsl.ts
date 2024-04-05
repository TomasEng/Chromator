import { type Hsl } from '../types/Hsl';
import { colourFormatRegex } from '../data/colourFormatRegex';
import {
  hueDegreesFromString,
  numberFromPercentageOrUnitInterval,
  numberFromScaledPercentageOrScale
} from './string-to-number';
import { type Hsla } from '../types/Hsla';
import { rgbaToHsla, rgbToHsl } from './object-converters/rgb';
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
} from './string-to-rgb';
import { type Laba } from '../types/Laba';
import { labaToHsla } from './object-converters/lab';
import { type Lcha } from '../types/Lcha';
import { lchaToHsla } from './object-converters/lch';

export const hslStringToHsl = (value: string): Hsl => {
  const regex = colourFormatRegex.hsl;
  const { hue, saturation, lightness } = regex.exec(value)!.groups!;
  return {
    hue: hueDegreesFromString(hue),
    saturation: saturation === 'none' ? 0 : numberFromPercentageOrUnitInterval(saturation),
    lightness: lightness === 'none' ? 0 : numberFromPercentageOrUnitInterval(lightness)
  };
};

export const hslaStringToHsla = (value: string): Hsla => {
  const regex = colourFormatRegex.hsla;
  const { hue, saturation, lightness, alpha } = regex.exec(value)!.groups!;
  return {
    hue: hueDegreesFromString(hue),
    saturation: saturation === 'none' ? 0 : numberFromPercentageOrUnitInterval(saturation),
    lightness: lightness === 'none' ? 0 : numberFromPercentageOrUnitInterval(lightness),
    alpha: numberFromPercentageOrUnitInterval(alpha)
  };
};

export const labStringToHsla = (value: string): Hsla =>
  labaToHsla(labStringToLaba(value));

export const labStringToLaba = (value: string): Laba => {
  const regex = colourFormatRegex.lab;
  const { L, a, b, alpha } = regex.exec(value)!.groups!;
  const LNumber = L === 'none' ? 0 : numberFromScaledPercentageOrScale(L, 100);
  const aNumber = a === 'none' ? 0 : numberFromScaledPercentageOrScale(a, 125);
  const bNumber = b === 'none' ? 0 : numberFromScaledPercentageOrScale(b, 125);
  const alphaNumber = alpha === undefined ? 1 : numberFromPercentageOrUnitInterval(alpha);
  return { L: LNumber, a: aNumber, b: bNumber, alpha: alphaNumber };
};

export const lchStringToHsla = (value: string): Hsla =>
  lchaToHsla(lchStringToLcha(value));

export const lchStringToLcha = (value: string): Lcha => {
  const regex = colourFormatRegex.lch;
  const { L, chroma, hue, alpha } = regex.exec(value)!.groups!;
  return {
    L: L === 'none' ? 0 : numberFromScaledPercentageOrScale(L, 100),
    chroma: chroma === 'none' ? 0 : numberFromScaledPercentageOrScale(chroma, 150),
    hue: hueDegreesFromString(hue),
    alpha: alpha === undefined ? 1 : numberFromPercentageOrUnitInterval(alpha)
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
