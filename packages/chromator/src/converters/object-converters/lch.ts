import { type Hsl } from '../../types/Hsl';
import { type Lab } from '../../types/Lab';
import { type Lch } from '../../types/Lch';
import { hslToLab, labToHsl } from './lab';
import { modulo } from '../../utils';
import { type Lcha } from '../../types/Lcha';
import { type Hsla } from '../../types/Hsla';

export const hslToLch = (hsl: Hsl): Lch => {
  const lab = hslToLab(hsl);
  return labToLch(lab);
};

const labToLch = (lab: Lab): Lch => {
  const { L, a, b } = lab;
  const chroma = Math.sqrt(a ** 2 + b ** 2);
  const hue = modulo(Math.atan2(b, a) * (180 / Math.PI), 360);
  return { L, chroma, hue };
};

export const lchToHsl = (lch: Lch): Hsl => {
  const lab = lchToLab(lch);
  return labToHsl(lab);
};

const lchToLab = ({ L, chroma, hue }: Lch): Lab => {
  const a = chroma * Math.cos(hue * (Math.PI / 180));
  const b = chroma * Math.sin(hue * (Math.PI / 180));
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
