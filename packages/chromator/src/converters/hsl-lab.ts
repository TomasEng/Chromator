import { type Hsl } from '../types/Hsl';
import { type Lab } from '../types/Lab';
import { cieXyzToHsl, hslToCieXyz } from './hsl-xyz';
import { type Xyz } from '../types/Xyz';
import { type Hsla } from '../types/Hsla';
import { type Laba } from '../types/Laba';

export const hslToLab = (hsl: Hsl): Lab => {
  const { x, y, z } = hslToCieXyz(hsl);
  return xyzToLab({ x, y, z });
};

const xyzToLab = ({ x, y, z }: Xyz): Lab => {
  const xr = x / referenceWhite.x;
  const yr = y / referenceWhite.y;
  const zr = z / referenceWhite.z;
  const L = 116 * f(yr) - 16;
  const a = 500 * (f(xr) - f(yr));
  const b = 200 * (f(yr) - f(zr));
  return { L, a, b };
};

const referenceWhite: Xyz = { x: 0.95047, y: 1.00000, z: 1.08883 };

const f = (t: number): number =>
  t > epsilon ? Math.cbrt(t) : ((kappa * t + 16) / 116);

const epsilon = 0.008856;
const kappa = 903.3;

export const labToHsl = (lab: Lab): Hsl => {
  const { x, y, z } = labToXyz(lab);
  return cieXyzToHsl({ x, y, z });
};

const labToXyz = (lab: Lab): Xyz => {
  const x = xr(lab) * referenceWhite.x;
  const y = yr(lab) * referenceWhite.y;
  const z = zr(lab) * referenceWhite.z;
  return { x, y, z };
};

const xr = (lab: Lab): number => {
  const fxResult = fx(lab);
  const fx3 = fxResult ** 3;
  return fx3 > epsilon
    ? fx3
    : ((116 * fxResult - 16) / kappa);
};

const yr = (lab: Lab): number => lab.L > kappa * epsilon
  ? ((lab.L + 16) / 116) ** 3
  : lab.L / kappa;

const zr = (lab: Lab): number => {
  const fzResult = fz(lab);
  const fz3 = fzResult ** 3;
  return fz3 > epsilon
    ? fz3
    : ((116 * fzResult - 16) / kappa);
};

const fx = (lab: Lab): number => lab.a / 500 + fy(lab);
const fy = ({ L }: Lab): number => (L + 16) / 116;
const fz = (lab: Lab): number => fy(lab) - lab.b / 200;

export const hslaToLaba = (hsla: Hsla): Laba => {
  const { alpha, ...hsl } = hsla;
  const lab = hslToLab(hsl);
  return { ...lab, alpha };
};

export const labaToHsla = (laba: Laba): Hsla => {
  const { alpha, ...lab } = laba;
  const hsl = labToHsl(lab);
  return { ...hsl, alpha };
};
