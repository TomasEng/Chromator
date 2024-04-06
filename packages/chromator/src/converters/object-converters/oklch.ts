import { type Oklab } from '../../types/Oklab';
import { type Oklch } from '../../types/Oklch';
import { cartesianToPolarInDegrees } from '../cartesianToPolar';
import { type Hsl } from '../../types/Hsl';
import { hslToOklab, oklabToHsl } from './oklab';
import { type Hsla } from '../../types/Hsla';
import { type Oklcha } from '../../types/Oklcha';
import { polarInDegreesToCartesian } from '../polarToCartesian';

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
