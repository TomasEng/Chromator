import { type Hsl } from '../../types/Hsl';
import { type Lab } from '../../types/Lab';
import { type Lch } from '../../types/Lch';
import { hslToLab, labToHsl } from './lab';
import { type Lcha } from '../../types/Lcha';
import { type Hsla } from '../../types/Hsla';
import { cartesianToPolarInDegrees } from '../cartesianToPolar';
import { polarInDegreesToCartesian } from '../polarToCartesian';

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
