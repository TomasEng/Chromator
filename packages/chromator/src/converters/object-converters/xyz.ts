import { type Hsl } from '../../types/Hsl';
import { type Rgb } from '../../types/Rgb';
import { ensureWithinUnitInterval } from '../../utils';
import { type Hsla } from '../../types/Hsla';
import { type Xyz } from '../../types/Xyz';
import { type Xyza } from '../../types/Xyza';
import { hslToRgb, rgbToHsl } from './rgb';
import { rgb1ToRgb255, rgb255ToRgb1 } from '../utils';

export const hslaToCieXyza = (hsla: Hsla): Xyza => {
  const { hue, saturation, lightness, alpha } = hsla;
  const hsl = { hue, saturation, lightness };
  const xyz = hslToCieXyz(hsl);
  return { ...xyz, alpha };
};

export const hslToCieXyz = (hsl: Hsl): Xyz => {
  const rgb = hslToRgb(hsl);
  return rgbToCieXyz(rgb);
};

export const rgbToCieXyz = (rgb: Rgb): Xyz => {
  const rgb1 = rgb255ToRgb1(rgb);
  const { red, green, blue } = gammaExpandedRgb(rgb1);
  const x = red * 0.4124564 + green * 0.3575761 + blue * 0.1804375;
  const y = red * 0.2126729 + green * 0.7151522 + blue * 0.072175;
  const z = red * 0.0193339 + green * 0.119192 + blue * 0.9503041;
  return { x, y, z };
};

export const relativeLuminanceFromHsl = (hsl: Hsl): number => {
  const rgb = hslToRgb(hsl);
  return relativeLuminanceFromRgb(rgb);
};

const relativeLuminanceFromRgb = (rgb: Rgb): number => {
  const rgb1 = rgb255ToRgb1(rgb);
  const { red, green, blue } = gammaExpandedRgb(rgb1);
  return red * 0.2126729 + green * 0.7151522 + blue * 0.072175;
};

const gammaExpandedRgb = (srgb: Rgb): Rgb => {
  const { red, green, blue } = srgb;
  return {
    red: gammaExpand(red),
    green: gammaExpand(green),
    blue: gammaExpand(blue)
  };
};

const gammaExpand = (value: number): number =>
  value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);

export const cieXyzaToHsla = (xyz: Xyza): Hsla => {
  const { x, y, z, alpha } = xyz;
  const hsl = cieXyzToHsl({ x, y, z });
  return { ...hsl, alpha };
};

export const cieXyzToHsl = (xyz: Xyz): Hsl => {
  const rgb = cieXyzToRgb(xyz);
  return rgbToHsl(rgb);
};

export const cieXyzToRgb = (xyz: Xyz): Rgb => {
  const { x, y, z } = xyz;
  const red = x * xyzToRgbRedX + y * xyzToRgbRedY + z * xyzToRgbRedZ;
  const green = x * xyzToRgbGreenX + y * xyzToRgbGreenY + z * xyzToRgbGreenZ;
  const blue = x * xyzToRgbBlueX + y * xyzToRgbBlueY + z * xyzToRgbBlueZ;
  const compressedRgb = gammaCompressedRgb({ red, green, blue });
  const normalizedRgb = ensureRgbWithinUnitScale(compressedRgb);
  return rgb1ToRgb255(normalizedRgb);
};

const ensureRgbWithinUnitScale = (rgb: Rgb): Rgb => {
  const { red, green, blue } = rgb;
  return {
    red: ensureWithinUnitInterval(red),
    green: ensureWithinUnitInterval(green),
    blue: ensureWithinUnitInterval(blue)
  };
};

const gammaCompressedRgb = (linearRgb: Rgb): Rgb => {
  const { red, green, blue } = linearRgb;
  return {
    red: gammaCompress(red),
    green: gammaCompress(green),
    blue: gammaCompress(blue)
  };
};

const gammaCompress = (value: number): number =>
  value <= 0.0031308 ? value * 12.92 : 1.055 * Math.pow(value, 1 / 2.4) - 0.055;

const xyzToRgbRedX = 3.2404542;
const xyzToRgbRedY = -1.5371385;
const xyzToRgbRedZ = -0.4985314;
const xyzToRgbGreenX = -0.969266;
const xyzToRgbGreenY = 1.8760108;
const xyzToRgbGreenZ = 0.041556;
const xyzToRgbBlueX = 0.0556434;
const xyzToRgbBlueY = -0.2040259;
const xyzToRgbBlueZ = 1.0572252;
