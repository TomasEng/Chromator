import type { Rgb } from '../../types/Rgb';
import type { Hsl } from '../../types/Hsl';
import { modulo } from '../../utils';
import { HueRegion } from '../../enums/HueRegion';
import type { Hsla } from '../../types/Hsla';
import type { Rgba } from '../../types/Rgba';
import { rgb1ToRgb255, rgb255ToRgb1 } from '../utils';

export const rgbToHsl = (rgb: Rgb): Hsl => {
  const rgb1 = rgb255ToRgb1(rgb);
  const {
    red,
    green,
    blue
  } = rgb1;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const chroma = max - min;
  const lightness = (max + min) / 2;
  const saturation = chroma <= Number.EPSILON ? 0 : chroma / (1 - Math.abs(2 * lightness - 1));
  const hue1 = chroma === 0 ? 0 : calculateHue(red, green, blue, max, chroma);
  const hue = modulo(hue1 * 60, 360);
  return {
    hue,
    saturation,
    lightness
  };
};

const calculateHue = (red: number, green: number, blue: number, max: number, chroma: number): number => {
  switch (max) {
    case red:
      return (green - blue) / chroma;
    case green:
      return (blue - red) / chroma + 2;
    case blue:
      return (red - green) / chroma + 4;
    default:
      return 0;
  }
};

export const hslToRgb = (hsl: Hsl): Rgb => {
  const { hue, saturation, lightness } = hsl;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const huePrime = hue / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const m = lightness - chroma / 2;
  const rgb1WithoutLightness = findRgb1FromHue(hue, chroma, x);
  const rgb1 = addToRgb(rgb1WithoutLightness, m);
  return rgb1ToRgb255(rgb1);
};

const findRgb1FromHue = (hue: number, chroma: number, x: number): Rgb => {
  switch (findHueRegion(hue)) {
    case HueRegion.RedYellow:
      return { red: chroma, green: x, blue: 0 };
    case HueRegion.YellowGreen:
      return { red: x, green: chroma, blue: 0 };
    case HueRegion.GreenCyan:
      return { red: 0, green: chroma, blue: x };
    case HueRegion.CyanBlue:
      return { red: 0, green: x, blue: chroma };
    case HueRegion.BlueMagenta:
      return { red: x, green: 0, blue: chroma };
    case HueRegion.MagentaRed:
      return { red: chroma, green: 0, blue: x };
  }
};

const findHueRegion = (hue: number): HueRegion => {
  const hue360 = modulo(hue, 360);
  if (hue360 >= 0 && hue360 < 60) {
    return HueRegion.RedYellow;
  } else if (hue360 >= 60 && hue360 < 120) {
    return HueRegion.YellowGreen;
  } else if (hue360 >= 120 && hue360 < 180) {
    return HueRegion.GreenCyan;
  } else if (hue360 >= 180 && hue360 < 240) {
    return HueRegion.CyanBlue;
  } else if (hue360 >= 240 && hue360 < 300) {
    return HueRegion.BlueMagenta;
  } else {
    return HueRegion.MagentaRed;
  }
};

const addToRgb = (rgb: Rgb, value: number): Rgb => {
  const { red, green, blue } = rgb;
  return {
    red: red + value,
    green: green + value,
    blue: blue + value
  };
};

export const hslaToRgba = (hsla: Hsla): Rgba => {
  const { alpha, ...hsl } = hsla;
  const rgb = hslToRgb(hsl);
  return { ...rgb, alpha };
};

export const rgbaToHsla = (rgba: Rgba): Hsla => {
  const { alpha, ...rgb } = rgba;
  const hsl = rgbToHsl(rgb);
  return { ...hsl, alpha };
};
