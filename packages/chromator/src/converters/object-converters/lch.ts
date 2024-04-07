import { type Hsl } from '../../types/Hsl';
import { type Lab } from '../../types/Lab';
import { type Lch } from '../../types/Lch';
import { hslToLab, isLabWithinSrgb, labToHsl, relativeLuminanceFromLab } from './lab';
import { type Lcha } from '../../types/Lcha';
import { type Hsla } from '../../types/Hsla';
import { cartesianToPolarInDegrees } from '../cartesianToPolar';
import { polarInDegreesToCartesian } from '../polarToCartesian';
import { CHROMA_REDUCTION_ALGORITHM_PRECISION, RELATIVE_LUMINANCE_ALGORITHM_PRECISION } from '../../constants';
import { findInputToAlwaysIncreasingFunc } from '../../utils';

export const hslToLch = (hsl: Hsl): Lch => {
  const lab = hslToLab(hsl);
  return labToLch(lab);
};

const labToLch = (lab: Lab): Lch => {
  const { L, a, b } = lab;
  const { angle: hue, radius: chroma } = cartesianToPolarInDegrees({ x: a, y: b });
  return { L, chroma, hue };
};

export const lchToHsl = (lch: Lch): Hsl => {
  const lab = lchToLab(lch);
  return labToHsl(lab);
};

const lchToLab = ({ L, chroma, hue }: Lch): Lab => {
  const { x: a, y: b } = polarInDegreesToCartesian({ radius: chroma, angle: hue });
  return { L, a, b };
};

export const hslaToLcha = (hsla: Hsla): Lcha => {
  const { alpha, ...hsl } = hsla;
  const lch = hslToLch(hsl);
  return { ...lch, alpha };
};

export const lchaToHsla = (lcha: Lcha): Hsla => {
  const { alpha, ...lch } = lcha;
  const hsl = lchToHsl(lch);
  return { ...hsl, alpha };
};

export const adjustLchLightnessForRelativeLuminance = (lch: Lch, luminance: number): Lch => {
  const { chroma, hue } = lch;
  const lumFunc = (L: number): number => {
    lch = clampLchChromaWithinSrgb({ L, chroma, hue });
    return relativeLuminanceFromLch(lch);
  };
  findInputToAlwaysIncreasingFunc(
    lumFunc,
    luminance,
    RELATIVE_LUMINANCE_ALGORITHM_PRECISION,
    {
      start: -50,
      end: 150
    }
  );
  return lch;
};

export const relativeLuminanceFromLch = (lch: Lch): number => {
  const lab = lchToLab(lch);
  return relativeLuminanceFromLab(lab);
};

/**
 * Reduces the chroma of the given colour if it is outside the SRGB gamut, returning the closest colour within the gamut without changing the hue nor the lightness.
 */
export const clampLchChromaWithinSrgb = (lch: Lch): Lch => {
  if (lch.L === 0) return { ...lch, chroma: 0 };
  if (lch.L === 100) return { ...lch, chroma: 0 };
  const chromaFunc = (chroma: number): boolean => isLchWithinSrgb({ ...lch, chroma });
  if (chromaFunc(lch.chroma)) return lch;
  let low = 0;
  let high = lch.chroma;
  let middle = (low + high) / 2;
  while (high - low > CHROMA_REDUCTION_ALGORITHM_PRECISION) {
    if (chromaFunc(middle)) low = middle;
    else high = middle;
    middle = (low + high) / 2;
  }
  return { ...lch, chroma: middle };
};

export const isLchWithinSrgb = (lch: Lch): boolean => {
  const lab = lchToLab(lch);
  return isLabWithinSrgb(lab);
};
