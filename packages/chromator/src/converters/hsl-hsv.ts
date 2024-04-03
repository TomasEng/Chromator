import type { Hsv } from '../types/Hsv';
import type { Hsl } from '../types/Hsl';
import type { Hsla } from '../types/Hsla';
import type { Hsva } from '../types/Hsva';

export const hsvToHsl = (hsv: Hsv): Hsl => {
  const { hue, saturation, value } = hsv;
  const chroma = value * saturation;
  const lightness = (2 - saturation) * value / 2;
  const saturationPrime = chroma === 0 ? 0 : chroma / (1 - Math.abs(2 * lightness - 1));
  return {
    hue,
    saturation: saturationPrime,
    lightness
  };
};

export const hsvaToHsla = (hsva: Hsva): Hsla => {
  const { alpha, ...hsv } = hsva;
  const hsl = hsvToHsl(hsv);
  return { ...hsl, alpha };
};

export const hslToHsv = (hsl: Hsl): Hsv => {
  const { hue, saturation, lightness } = hsl;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const value = lightness + chroma / 2;
  const saturationPrime = value === 0 ? 0 : chroma / value;
  return {
    hue,
    saturation: saturationPrime,
    value
  };
};

export const hslaToHsva = (hsla: Hsla): Hsva => {
  const { alpha, ...hsl } = hsla;
  const hsv = hslToHsv(hsl);
  return { ...hsv, alpha };
};
