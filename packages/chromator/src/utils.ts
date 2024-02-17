import { colourFormatRegex } from './data/colourFormatRegex';
import { ColourCodeFormat } from './enums/ColourCodeFormat';
import { type Rgb } from './types/Rgb';
import { type ColourCode } from './types/ColourCode';
import { type Rgba } from './types/Rgba';
import { type Hsl } from './types/Hsl';
import { type Hsla } from './types/Hsla';
import { hsvaToHsla, hsvToHsl, rgbaToHsla, rgbToHsl } from './converters';
import { isOnFormat } from './validators/isOnFormat';
import { isValidUnitIntervalValue } from './validators/stringFormatValidators';
import { type Hsv } from './types/Hsv';
import { type Hsva } from './types/Hsva';
import { namedColours } from './data/namedColours';
import { type NamedColour } from './types/NamedColour';

export const modulo = (dividend: number, divisor: number): number => ((dividend % divisor) + divisor) % divisor; // This should be used in favor of the % operator when dealing with negative numbers, since the % operator does not handle negative numbers correctly.

export const round = (value: number, precision: number = 0): number =>
  Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);

export const floor = (value: number, precision: number = 0): number =>
  Math.floor(value * Math.pow(10, precision)) / Math.pow(10, precision);

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
      return { ...shortHexWithoutHashToHsla(code as string) };
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

export const findFormat = (value: ColourCode): ColourCodeFormat | undefined => {
  for (const format of Object.values(ColourCodeFormat)) {
    if (isOnFormat(value, format)) return format;
  }
  return undefined;
};

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

export const rgb255StringToRgb = (value: string): Rgb => {
  const regex = colourFormatRegex[ColourCodeFormat.Rgb255String];
  const { red, green, blue } = regex.exec(value)!.groups!;
  return {
    red: parseFloat(red),
    green: parseFloat(green),
    blue: parseFloat(blue)
  };
};

export const rgb255StringToHsl = (value: string): Hsl => {
  return rgbToHsl(rgb255StringToRgb(value));
};

export const rgba255StringToRgba = (value: string): Rgba => {
  const regex = colourFormatRegex[ColourCodeFormat.Rgba255String];
  const { red, green, blue, alpha } = regex.exec(value)!.groups!;
  return {
    red: parseFloat(red),
    green: parseFloat(green),
    blue: parseFloat(blue),
    alpha: numberFromPercentageOrUnitInterval(alpha)
  };
};

export const rgba255StringToHsla = (value: string): Hsla => {
  const { alpha, ...rgb } = rgba255StringToRgba(value);
  const hsl = rgbToHsl(rgb);
  return { ...hsl, alpha };
};

export const hexPairToDecimal = (value: string): number => parseInt(value, 16);

export const shortHexToDecimal = (value: string): number => hexPairToDecimal(value + value);

export const hexWithoutHashToRgb = (value: string): Rgb => {
  const red = hexPairToDecimal(value.substring(0, 2));
  const green = hexPairToDecimal(value.substring(2, 4));
  const blue = hexPairToDecimal(value.substring(4, 6));
  return { red, green, blue };
};
export const hexWithHashToRgb = (value: string): Rgb => hexWithoutHashToRgb(value.substring(1));

export const hexWithoutHashToHsl = (value: string): Hsl => rgbToHsl(hexWithoutHashToRgb(value));
export const hexWithHashToHsl = (value: string): Hsl => rgbToHsl(hexWithHashToRgb(value));

export const hexWithoutHashToRgba = (value: string): Rgba => {
  const { red, green, blue } = hexWithoutHashToRgb(value);
  const alpha = hexPairToDecimal(value.substring(6, 8)) / 255;
  return { red, green, blue, alpha };
};
export const hexWithHashToRgba = (value: string): Rgba => hexWithoutHashToRgba(value.substring(1));

export const hexWithoutHashToHsla = (value: string): Hsla => rgbaToHsla(hexWithoutHashToRgba(value));
export const hexWithHashToHsla = (value: string): Hsla => rgbaToHsla(hexWithHashToRgba(value));

export const shortHexWithoutHashToRgb = (value: string): Rgb => {
  const red = shortHexToDecimal(value.substring(0, 1));
  const green = shortHexToDecimal(value.substring(1, 2));
  const blue = shortHexToDecimal(value.substring(2, 3));
  return { red, green, blue };
};
export const shortHexWithHashToRgb = (value: string): Rgb => shortHexWithoutHashToRgb(value.substring(1));

export const shortHexWithoutHashToHsl = (value: string): Hsl => rgbToHsl(shortHexWithoutHashToRgb(value));
export const shortHexWithHashToHsl = (value: string): Hsl => rgbToHsl(shortHexWithHashToRgb(value));

export const shortHexWithoutHashToRgba = (value: string): Rgba => {
  const { red, green, blue } = shortHexWithoutHashToRgb(value);
  return { red, green, blue, alpha: 1 };
};
export const shortHexWithHashToRgba = (value: string): Rgba => shortHexWithoutHashToRgba(value.substring(1));

export const shortHexWithoutHashToHsla = (value: string): Hsla => rgbaToHsla(shortHexWithoutHashToRgba(value));
export const shortHexWithHashToHsla = (value: string): Hsla => rgbaToHsla(shortHexWithHashToRgba(value));

export const numberFromPercentageOrUnitInterval = (value: string): number =>
  isValidUnitIntervalValue(value) ? parseFloat(value) : numberFromPercentage(value);

export const numberFromPercentage = (value: string): number => {
  const percentage = percentageRegex.exec(value)![0];
  return parseFloat(percentage) / 100;
};

const percentageRegex = /\d*\.?\d*(?=%)/;
