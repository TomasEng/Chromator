import { type Rgba } from '../types/Rgba';
import { decimalToHexPair, numberToPercentage } from './number-to-string';
import { type Hsla } from '../types/Hsla';
import { round } from '../utils';
import { type Laba } from '../types/Laba';

export const hslaObjectToHslString = (hsla: Hsla): string => {
  const { hue, saturation, lightness, alpha } = hsla;
  const hueRounded = round(hue);
  const saturationRounded = round(saturation, 2);
  const lightnessRounded = round(lightness, 2);
  const saturationAsPercentage = numberToPercentage(saturationRounded);
  const lightnessAsPercentage = numberToPercentage(lightnessRounded);
  if (alpha === 1) {
    return `hsl(${hueRounded}, ${saturationAsPercentage}, ${lightnessAsPercentage})`;
  } else {
    const alphaRounded = round(alpha, 2);
    return `hsla(${hueRounded}, ${saturationAsPercentage}, ${lightnessAsPercentage}, ${alphaRounded})`;
  }
};

export const rgbaObjectToRgbDecimalString = (rgba: Rgba): string => {
  const { red, green, blue, alpha } = rgba;
  const redRounded = round(red);
  const greenRounded = round(green);
  const blueRounded = round(blue);
  if (alpha === 1) {
    return `rgb(${redRounded}, ${greenRounded}, ${blueRounded})`;
  } else {
    const alphaRounded = round(alpha, 2);
    return `rgba(${redRounded}, ${greenRounded}, ${blueRounded}, ${alphaRounded})`;
  }
};

export const rgbaObjectToRgbHexString = (rgba: Rgba): string => {
  const { red, green, blue, alpha } = rgba;
  const redHex = decimalToHexPair(red);
  const greenHex = decimalToHexPair(green);
  const blueHex = decimalToHexPair(blue);
  const alphaHex = alpha === 1 ? '' : decimalToHexPair(round(alpha * 255));
  return `#${redHex}${greenHex}${blueHex}${alphaHex}`;
};

export const labaObjectToLabString = (laba: Laba): string => {
  const { L, a, b, alpha } = laba;
  const LRounded = round(L, 0);
  const aRounded = round(a, 0);
  const bRounded = round(b, 0);
  if (alpha === 1) {
    return `lab(${LRounded} ${aRounded} ${bRounded})`;
  } else {
    const alphaRounded = round(alpha, 2);
    return `lab(${LRounded} ${aRounded} ${bRounded} / ${alphaRounded})`;
  }
};
