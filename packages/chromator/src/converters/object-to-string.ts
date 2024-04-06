import { type Rgba } from '../types/Rgba';
import { decimalToHexPair, numberToPercentage } from './number-to-string';
import { type Hsla } from '../types/Hsla';
import { round } from '../utils';
import { type Laba } from '../types/Laba';
import { type Lcha } from '../types/Lcha';
import { type Oklaba } from '../types/Oklaba';
import { type Oklcha } from '../types/Oklcha';

export const hslaObjectToHslString = (hsla: Hsla): string => {
  const { hue, saturation, lightness, alpha } = hsla;
  const hueRounded = round(hue);
  const saturationRounded = round(saturation, 2);
  const lightnessRounded = round(lightness, 2);
  const saturationAsPercentage = numberToPercentage(saturationRounded);
  const lightnessAsPercentage = numberToPercentage(lightnessRounded);
  if (alpha === 1) {
    return `hsl(${hueRounded}deg, ${saturationAsPercentage}, ${lightnessAsPercentage})`;
  } else {
    const alphaRounded = round(alpha, 2);
    return `hsla(${hueRounded}deg, ${saturationAsPercentage}, ${lightnessAsPercentage}, ${alphaRounded})`;
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

export const lchaObjectToLchString = (lcha: Lcha): string => {
  const { L, chroma, hue, alpha } = lcha;
  const LRounded = round(L, 0);
  const chromaRounded = round(chroma, 0);
  const hueRounded = round(hue, 0);
  if (alpha === 1) {
    return `lch(${LRounded} ${chromaRounded} ${hueRounded}deg)`;
  } else {
    const alphaRounded = round(alpha, 2);
    return `lch(${LRounded} ${chromaRounded} ${hueRounded}deg / ${alphaRounded})`;
  }
};

export const oklabaObjectToOklabString = (oklaba: Oklaba): string => {
  const { l, a, b, alpha } = oklaba;
  const lRounded = round(l, 2);
  const aRounded = round(a, 2);
  const bRounded = round(b, 2);
  if (alpha === 1) {
    return `oklab(${lRounded} ${aRounded} ${bRounded})`;
  } else {
    const alphaRounded = round(alpha, 2);
    return `oklab(${lRounded} ${aRounded} ${bRounded} / ${alphaRounded})`;
  }
};

export const oklchaObjectToOklchString = (oklcha: Oklcha): string => {
  const { l, chroma, hue, alpha } = oklcha;
  const lRounded = round(l, 2);
  const chromaRounded = round(chroma, 2);
  const hueRounded = round(hue, 0);
  if (alpha === 1) {
    return `oklch(${lRounded} ${chromaRounded} ${hueRounded}deg)`;
  } else {
    const alphaRounded = round(alpha, 2);
    return `oklch(${lRounded} ${chromaRounded} ${hueRounded}deg / ${alphaRounded})`;
  }
};
