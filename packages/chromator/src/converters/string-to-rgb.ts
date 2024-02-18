import { type Rgb } from '../types/Rgb';
import { colourFormatRegex } from '../data/colourFormatRegex';
import { type Rgba } from '../types/Rgba';
import { hexPairToDecimal, numberFromPercentageOrUnitInterval, shortHexToDecimal } from './string-to-number';

export const rgb255StringToRgb = (value: string): Rgb => {
  const regex = colourFormatRegex.rgbDecimal;
  const { red, green, blue } = regex.exec(value)!.groups!;
  return {
    red: parseFloat(red),
    green: parseFloat(green),
    blue: parseFloat(blue)
  };
};

export const rgba255StringToRgba = (value: string): Rgba => {
  const regex = colourFormatRegex.rgbaDecimal;
  const { red, green, blue, alpha } = regex.exec(value)!.groups!;
  return {
    red: parseFloat(red),
    green: parseFloat(green),
    blue: parseFloat(blue),
    alpha: numberFromPercentageOrUnitInterval(alpha)
  };
};

export const hexWithHashToRgb = (value: string): Rgb => hexWithoutHashToRgb(value.substring(1));

export const hexWithoutHashToRgb = (value: string): Rgb => {
  const red = hexPairToDecimal(value.substring(0, 2));
  const green = hexPairToDecimal(value.substring(2, 4));
  const blue = hexPairToDecimal(value.substring(4, 6));
  return { red, green, blue };
};

export const hexWithHashToRgba = (value: string): Rgba => hexWithoutHashToRgba(value.substring(1));

export const hexWithoutHashToRgba = (value: string): Rgba => {
  const { red, green, blue } = hexWithoutHashToRgb(value);
  const alpha = hexPairToDecimal(value.substring(6, 8)) / 255;
  return { red, green, blue, alpha };
};

export const shortHexWithHashToRgb = (value: string): Rgb => shortHexWithoutHashToRgb(value.substring(1));

export const shortHexWithoutHashToRgb = (value: string): Rgb => {
  const red = shortHexToDecimal(value.substring(0, 1));
  const green = shortHexToDecimal(value.substring(1, 2));
  const blue = shortHexToDecimal(value.substring(2, 3));
  return { red, green, blue };
};

export const shortHexWithHashToRgba = (value: string): Rgba => shortHexWithoutHashToRgba(value.substring(1));

export const shortHexWithoutHashToRgba = (value: string): Rgba => {
  const { red, green, blue } = shortHexWithoutHashToRgb(value);
  const alpha = shortHexToDecimal(value.substring(3, 4)) / 255;
  return { red, green, blue, alpha };
};
