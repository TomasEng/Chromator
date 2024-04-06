import { type Hsl } from '../types/Hsl';
import { colourFormatRegex } from '../data/colourFormatRegex';
import {
  cssStringToNumber,
  hueDegreesFromString
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
import { oklabaToHsla } from './object-converters/oklab';
import { type Oklaba } from '../types/Oklaba';
import { oklchaToHsla } from './object-converters/oklch';
import { type Oklcha } from '../types/Oklcha';

export const hslStringToHsl = (value: string): Hsl => {
  const regex = colourFormatRegex.hsl;
  const { hue, saturation, lightness } = regex.exec(value)!.groups!;
  return {
    hue: hueDegreesFromString(hue),
    saturation: cssStringToNumber(saturation, { min: 0, max: 1 }),
    lightness: cssStringToNumber(lightness, { min: 0, max: 1 })
  };
};

export const hslaStringToHsla = (value: string): Hsla => {
  const regex = colourFormatRegex.hsla;
  const { hue, saturation, lightness, alpha } = regex.exec(value)!.groups!;
  return {
    hue: hueDegreesFromString(hue),
    saturation: cssStringToNumber(saturation, { min: 0, max: 1 }),
    lightness: cssStringToNumber(lightness, { min: 0, max: 1 }),
    alpha: cssStringToNumber(alpha, { min: 0, max: 1 })
  };
};

export const labStringToHsla = (value: string): Hsla =>
  labaToHsla(labStringToLaba(value));

export const labStringToLaba = (value: string): Laba => {
  const regex = colourFormatRegex.lab;
  const { L, a, b, alpha } = regex.exec(value)!.groups!;
  const LNumber = cssStringToNumber(L, { percentageScale: 100, min: 0, max: 100 });
  const aNumber = cssStringToNumber(a, { percentageScale: 125 });
  const bNumber = cssStringToNumber(b, { percentageScale: 125 });
  const alphaNumber = alpha === undefined ? 1 : cssStringToNumber(alpha);
  return { L: LNumber, a: aNumber, b: bNumber, alpha: alphaNumber };
};

export const lchStringToHsla = (value: string): Hsla =>
  lchaToHsla(lchStringToLcha(value));

export const lchStringToLcha = (value: string): Lcha => {
  const regex = colourFormatRegex.lch;
  const { L, chroma, hue, alpha } = regex.exec(value)!.groups!;
  return {
    L: cssStringToNumber(L, { percentageScale: 100, min: 0, max: 100 }),
    chroma: cssStringToNumber(chroma, { percentageScale: 150, min: 0 }),
    hue: hueDegreesFromString(hue),
    alpha: alpha === undefined ? 1 : cssStringToNumber(alpha)
  };
};

export const oklabStringToHsla = (value: string): Hsla =>
  oklabaToHsla(oklabStringToOklaba(value));

export const oklabStringToOklaba = (value: string): Oklaba => {
  const regex = colourFormatRegex.oklab;
  const { l, a, b, alpha } = regex.exec(value)!.groups!;
  return {
    l: cssStringToNumber(l, { min: 0, max: 1 }),
    a: cssStringToNumber(a, { percentageScale: 0.4 }),
    b: cssStringToNumber(b, { percentageScale: 0.4 }),
    alpha: alpha === undefined ? 1 : cssStringToNumber(alpha, { min: 0, max: 1 })
  };
};

export const oklchStringToHsla = (value: string): Hsla =>
  oklchaToHsla(oklchStringToOklcha(value));

export const oklchStringToOklcha = (value: string): Oklcha => {
  const regex = colourFormatRegex.oklch;
  const { l, chroma, hue, alpha } = regex.exec(value)!.groups!;
  return {
    l: cssStringToNumber(l, { min: 0, max: 1 }),
    chroma: cssStringToNumber(chroma, { min: 0, percentageScale: 0.4 }),
    hue: hueDegreesFromString(hue),
    alpha: alpha === undefined ? 1 : cssStringToNumber(alpha, { min: 0, max: 1 })
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
