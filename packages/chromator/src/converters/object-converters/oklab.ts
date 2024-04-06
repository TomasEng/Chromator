import { type Oklab } from '../../types/Oklab';
import { type Xyz } from '../../types/Xyz';
import { cieXyzToHsl, hslToCieXyz } from './xyz';
import { type Hsl } from '../../types/Hsl';
import { type Oklaba } from '../../types/Oklaba';
import { type Hsla } from '../../types/Hsla';

export const hslToOklab = (hsl: Hsl): Oklab => {
  const xyz = hslToCieXyz(hsl);
  return xyzToOklab(xyz);
};

const xyzToOklab = ({ x, y, z }: Xyz): Oklab => {
  const L = 0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z;
  const M = 0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z;
  const S = 0.0482003018 * x + 0.2643662691 * y + 0.6338517070 * z;
  const L_ = Math.cbrt(L);
  const M_ = Math.cbrt(M);
  const S_ = Math.cbrt(S);
  const l = 0.2104542553 * L_ + 0.7936177850 * M_ - 0.0040720468 * S_;
  const a = 1.9779984951 * L_ - 2.4285922050 * M_ + 0.4505937099 * S_;
  const b = 0.0259040371 * L_ + 0.7827717662 * M_ - 0.8086757660 * S_;
  return { l, a, b };
};

export const hslaToOklaba = (hsla: Hsla): Oklaba => {
  const { alpha, ...hsl } = hsla;
  const oklab = hslToOklab(hsl);
  return { ...oklab, alpha };
};

export const oklabToHsl = (oklab: Oklab): Hsl => {
  const xyz = oklabToXyz(oklab);
  return cieXyzToHsl(xyz);
};

const oklabToXyz = ({ l, a, b }: Oklab): Xyz => {
  const L_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const M_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const S_ = l - 0.0894841775 * a - 1.2914855480 * b;
  const L = L_ ** 3;
  const M = M_ ** 3;
  const S = S_ ** 3;
  const x = 1.2270138511 * L - 0.5577999807 * M + 0.2812561490 * S;
  const y = -0.0405801784 * L + 1.1122568696 * M - 0.0716766787 * S;
  const z = -0.0763812845 * L - 0.4214819784 * M + 1.5861632204 * S;
  return { x, y, z };
};

export const oklabaToHsla = (oklaba: Oklaba): Hsla => {
  const { alpha, ...oklab } = oklaba;
  const hsl = oklabToHsl(oklab);
  return { ...hsl, alpha };
};
