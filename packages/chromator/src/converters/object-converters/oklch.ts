import { type Oklab } from '../../types/Oklab';
import { type Oklch } from '../../types/Oklch';
import { cartesianToPolarInDegrees } from '../cartesianToPolar';
import { type Hsl } from '../../types/Hsl';
import { hslToOklab, isOklabWithinSrgb, oklabToHsl, relativeLuminanceFromOklab } from './oklab';
import { type Hsla } from '../../types/Hsla';
import { type Oklcha } from '../../types/Oklcha';
import { polarInDegreesToCartesian } from '../polarToCartesian';
import { CHROMA_REDUCTION_ALGORITHM_PRECISION, RELATIVE_LUMINANCE_ALGORITHM_PRECISION } from '../../constants';
import { findInputToAlwaysIncreasingFunc } from '../../utils';

export const hslToOklch = (hsl: Hsl): Oklch => {
  const oklab = hslToOklab(hsl);
  return oklabToOklch(oklab);
};

const oklabToOklch = ({ l, a, b }: Oklab): Oklch => {
  const { angle: hue, radius: chroma } = cartesianToPolarInDegrees({ x: a, y: b });
  return { l, chroma, hue };
};

export const hslaToOklcha = (hsla: Hsla): Oklcha => {
  const { alpha, ...hsl } = hsla;
  const oklch = hslToOklch(hsl);
  return { ...oklch, alpha };
};

export const oklchToHsl = (oklch: Oklch): Hsl => {
  const oklab = oklchToOklab(oklch);
  return oklabToHsl(oklab);
};

const oklchToOklab = ({ l, chroma, hue }: Oklch): Oklab => {
  const { x: a, y: b } = polarInDegreesToCartesian({ radius: chroma, angle: hue });
  return { l, a, b };
};

export const oklchaToHsla = (oklcha: Oklcha): Hsla => {
  const { alpha, ...oklch } = oklcha;
  const hsl = oklchToHsl(oklch);
  return { ...hsl, alpha };
};

export const adjustOklchLightnessForRelativeLuminance = (oklch: Oklch, luminance: number): Oklch => {
  const { chroma, hue } = oklch;
  const lumFunc = (l: number): number => {
    oklch = clampOklchChromaWithinSrgb({ l, chroma, hue });
    return relativeLuminanceFromOklch(oklch);
  };
  findInputToAlwaysIncreasingFunc(
    lumFunc,
    luminance,
    RELATIVE_LUMINANCE_ALGORITHM_PRECISION,
    { start: -0.5, end: 1.5 }
  );
  return oklch;
};

export const relativeLuminanceFromOklch = (oklch: Oklch): number => {
  const oklab = oklchToOklab(oklch);
  return relativeLuminanceFromOklab(oklab);
};

/**
 * Reduces the chroma of the given colour if it is outside the SRGB gamut, returning the closest colour within the gamut without changing the hue nor the lightness.
 */
export const clampOklchChromaWithinSrgb = (oklch: Oklch): Oklch => {
  const chromaFunc = (chroma: number): boolean => isOklchWithinSrgb({ ...oklch, chroma });
  if (chromaFunc(oklch.chroma)) {
    return oklch;
  }
  let low = 0;
  let high = oklch.chroma;
  let middle = (low + high) / 2;
  while (high - low > CHROMA_REDUCTION_ALGORITHM_PRECISION) {
    if (chromaFunc(middle)) low = middle;
    else high = middle;
    middle = (low + high) / 2;
  }
  return { ...oklch, chroma: middle };
};

export const isOklchWithinSrgb = (oklch: Oklch): boolean => {
  const oklab = oklchToOklab(oklch);
  return isOklabWithinSrgb(oklab);
};
