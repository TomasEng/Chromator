import { type NamedColour } from '../types/NamedColour';
import { type Rgb } from '../types/Rgb';
import { type Hsl } from '../types/Hsl';
import { type Hsv } from '../types/Hsv';
import { type Xyz } from '../types/Xyz';

type TestData = {
  [colour in NamedColour]: {
    rgb: Rgb;
    hsl: Hsl;
    hsv: Hsv;
    cieXyz: Xyz;
  }
};

export const testColours: TestData = {
  black: {
    rgb: { red: 0, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 0, lightness: 0 },
    hsv: { hue: 0, saturation: 0, value: 0 },
    cieXyz: { x: 0, y: 0, z: 0 }
  },
  silver: {
    rgb: { red: 192, green: 192, blue: 192 },
    hsl: { hue: 0, saturation: 0, lightness: 0.752941 },
    hsv: { hue: 0, saturation: 0, value: 0.752941 },
    cieXyz: { x: 0.501007, y: 0.527115, z: 0.573939 }
  },
  grey: {
    rgb: { red: 128, green: 128, blue: 128 },
    hsl: { hue: 0, saturation: 0, lightness: 0.501961 },
    hsv: { hue: 0, saturation: 0, value: 0.501961 },
    cieXyz: { x: 0.205169, y: 0.215861, z: 0.235035 }
  },
  white: {
    rgb: { red: 255, green: 255, blue: 255 },
    hsl: { hue: 0, saturation: 0, lightness: 1 },
    hsv: { hue: 0, saturation: 0, value: 1 },
    cieXyz: { x: 0.95047, y: 1, z: 1.08883 }
  },
  maroon: {
    rgb: { red: 128, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 0, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.089033, y: 0.045908, z: 0.004173 }
  },
  red: {
    rgb: { red: 255, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 1, lightness: 0.5 },
    hsv: { hue: 0, saturation: 1, value: 1 },
    cieXyz: { x: 0.412456, y: 0.212673, z: 0.019334 }
  },
  purple: {
    rgb: { red: 128, green: 0, blue: 128 },
    hsl: { hue: 300, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 300, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.127982, y: 0.061487, z: 0.209307 }
  },
  magenta: {
    rgb: { red: 255, green: 0, blue: 255 },
    hsl: { hue: 300, saturation: 1, lightness: 0.5 },
    hsv: { hue: 300, saturation: 1, value: 1 },
    cieXyz: { x: 0.592894, y: 0.284848, z: 0.969638 }
  },
  green: {
    rgb: { red: 0, green: 128, blue: 0 },
    hsl: { hue: 120, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 120, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.077187, y: 0.154373, z: 0.025729 }
  },
  lime: {
    rgb: { red: 0, green: 255, blue: 0 },
    hsl: { hue: 120, saturation: 1, lightness: 0.5 },
    hsv: { hue: 120, saturation: 1, value: 1 },
    cieXyz: { x: 0.357576, y: 0.715152, z: 0.119192 }
  },
  olive: {
    rgb: { red: 128, green: 128, blue: 0 },
    hsl: { hue: 60, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 60, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.16622, y: 0.200281, z: 0.029902 }
  },
  yellow: {
    rgb: { red: 255, green: 255, blue: 0 },
    hsl: { hue: 60, saturation: 1, lightness: 0.5 },
    hsv: { hue: 60, saturation: 1, value: 1 },
    cieXyz: { x: 0.770033, y: 0.927825, z: 0.138526 }
  },
  navy: {
    rgb: { red: 0, green: 0, blue: 128 },
    hsl: { hue: 240, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 240, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.038949, y: 0.01558, z: 0.205133 }
  },
  blue: {
    rgb: { red: 0, green: 0, blue: 255 },
    hsl: { hue: 240, saturation: 1, lightness: 0.5 },
    hsv: { hue: 240, saturation: 1, value: 1 },
    cieXyz: { x: 0.180438, y: 0.072175, z: 0.950304 }
  },
  teal: {
    rgb: { red: 0, green: 128, blue: 128 },
    hsl: { hue: 180, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 180, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.116136, y: 0.169953, z: 0.230862 }
  },
  cyan: {
    rgb: { red: 0, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.5 },
    hsv: { hue: 180, saturation: 1, value: 1 },
    cieXyz: { x: 0.538014, y: 0.787327, z: 1.069496 }
  },
  aliceblue: {
    rgb: { red: 240, green: 248, blue: 255 },
    hsl: { hue: 208, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 208, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.87549, y: 0.928794, z: 1.079035 }
  },
  antiquewhite: {
    rgb: { red: 250, green: 235, blue: 215 },
    hsl: { hue: 34.286, saturation: 0.777778, lightness: 0.911765 },
    hsv: { hue: 34.286, saturation: 0.14, value: 0.980392 },
    cieXyz: { x: 0.813976, y: 0.846483, z: 0.763276 }
  },
  aqua: {
    rgb: { red: 0, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.5 },
    hsv: { hue: 180, saturation: 1, value: 1 },
    cieXyz: { x: 0.538014, y: 0.787327, z: 1.069496 }
  },
  aquamarine: {
    rgb: { red: 127, green: 255, blue: 212 },
    hsl: { hue: 159.844, saturation: 1, lightness: 0.74902 },
    hsv: { hue: 159.844, saturation: 0.501961, value: 1 },
    cieXyz: { x: 0.563908, y: 0.807806, z: 0.748952 }
  },
  azure: {
    rgb: { red: 240, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 180, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.897415, y: 0.972643, z: 1.086343 }
  },
  beige: {
    rgb: { red: 245, green: 245, blue: 220 },
    hsl: { hue: 60, saturation: 0.555556, lightness: 0.911765 },
    hsv: { hue: 60, saturation: 0.102041, value: 0.960784 },
    cieXyz: { x: 0.832254, y: 0.898851, z: 0.806614 }
  },
  bisque: {
    rgb: { red: 255, green: 228, blue: 196 },
    hsl: { hue: 32.542, saturation: 1, lightness: 0.884314 },
    hsv: { hue: 32.542, saturation: 0.231373, value: 1 },
    cieXyz: { x: 0.789475, y: 0.807345, z: 0.636384 }
  },
  blanchedalmond: {
    rgb: { red: 255, green: 235, blue: 205 },
    hsl: { hue: 36, saturation: 1, lightness: 0.901961 },
    hsv: { hue: 36, saturation: 0.196078, value: 1 },
    cieXyz: { x: 0.819676, y: 0.850862, z: 0.698511 }
  },
  blueviolet: {
    rgb: { red: 138, green: 43, blue: 226 },
    hsl: { hue: 271.148, saturation: 0.759336, lightness: 0.527451 },
    hsv: { hue: 271.148, saturation: 0.809735, value: 0.886275 },
    cieXyz: { x: 0.250692, y: 0.126219, z: 0.730523 }
  },
  brown: {
    rgb: { red: 165, green: 42, blue: 42 },
    hsl: { hue: 0, saturation: 0.594203, lightness: 0.405882 },
    hsv: { hue: 0, saturation: 0.745455, value: 0.647059 },
    cieXyz: { x: 0.167649, y: 0.09825, z: 0.032037 }
  },
  burlywood: {
    rgb: { red: 222, green: 184, blue: 135 },
    hsl: { hue: 33.793, saturation: 0.568627, lightness: 0.7 },
    hsv: { hue: 33.793, saturation: 0.391892, value: 0.870588 },
    cieXyz: { x: 0.516393, y: 0.515623, z: 0.301495 }
  },
  cadetblue: {
    rgb: { red: 95, green: 158, blue: 160 },
    hsl: { hue: 181.846, saturation: 0.254902, lightness: 0.5 },
    hsv: { hue: 181.846, saturation: 0.40625, value: 0.627451 },
    cieXyz: { x: 0.23289, y: 0.29423, z: 0.377029 }
  },
  chartreuse: {
    rgb: { red: 127, green: 255, blue: 0 },
    hsl: { hue: 90.118, saturation: 1, lightness: 0.5 },
    hsv: { hue: 90.118, saturation: 1, value: 1 },
    cieXyz: { x: 0.445112, y: 0.760288, z: 0.123295 }
  },
  chocolate: {
    rgb: { red: 210, green: 105, blue: 30 },
    hsl: { hue: 25, saturation: 0.75, lightness: 0.470588 },
    hsv: { hue: 25, saturation: 0.857143, value: 0.823529 },
    cieXyz: { x: 0.318675, y: 0.239025, z: 0.041636 }
  },
  coral: {
    rgb: { red: 255, green: 127, blue: 80 },
    hsl: { hue: 16.114, saturation: 1, lightness: 0.656863 },
    hsv: { hue: 16.114, saturation: 0.686275, value: 1 },
    cieXyz: { x: 0.50282, y: 0.37024, z: 0.120863 }
  },
  cornflowerblue: {
    rgb: { red: 100, green: 149, blue: 237 },
    hsl: { hue: 218.54, saturation: 0.791908, lightness: 0.660784 },
    hsv: { hue: 218.54, saturation: 0.578059, value: 0.929412 },
    cieXyz: { x: 0.312837, y: 0.30316, z: 0.843073 }
  },
  cornsilk: {
    rgb: { red: 255, green: 248, blue: 220 },
    hsl: { hue: 48, saturation: 1, lightness: 0.931373 },
    hsv: { hue: 48, saturation: 0.137255, value: 1 },
    cieXyz: { x: 0.877246, y: 0.935631, z: 0.811344 }
  },
  crimson: {
    rgb: { red: 220, green: 20, blue: 60 },
    hsl: { hue: 348, saturation: 0.833333, lightness: 0.470588 },
    hsv: { hue: 348, saturation: 0.909091, value: 0.862745 },
    cieXyz: { x: 0.305847, y: 0.160473, z: 0.057612 }
  },
  darkblue: {
    rgb: { red: 0, green: 0, blue: 139 },
    hsl: { hue: 240, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 240, saturation: 1, value: 0.545098 },
    cieXyz: { x: 0.046586, y: 0.018634, z: 0.245352 }
  },
  darkcyan: {
    rgb: { red: 0, green: 139, blue: 139 },
    hsl: { hue: 180, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 180, saturation: 1, value: 0.545098 },
    cieXyz: { x: 0.138906, y: 0.203274, z: 0.276126 }
  },
  darkgoldenrod: {
    rgb: { red: 184, green: 134, blue: 11 },
    hsl: { hue: 42.659, saturation: 0.887179, lightness: 0.382353 },
    hsv: { hue: 42.659, saturation: 0.940217, value: 0.721569 },
    cieXyz: { x: 0.283548, y: 0.27267, z: 0.040862 }
  },
  darkgray: {
    rgb: { red: 169, green: 169, blue: 169 },
    hsl: { hue: 0, saturation: 0, lightness: 0.662745 },
    hsv: { hue: 0, saturation: 0, value: 0.662745 },
    cieXyz: { x: 0.377104, y: 0.396755, z: 0.431999 }
  },
  darkgreen: {
    rgb: { red: 0, green: 100, blue: 0 },
    hsl: { hue: 120, saturation: 1, lightness: 0.196078 },
    hsv: { hue: 120, saturation: 1, value: 0.392157 },
    cieXyz: { x: 0.045569, y: 0.091137, z: 0.01519 }
  },
  darkgrey: {
    rgb: { red: 169, green: 169, blue: 169 },
    hsl: { hue: 0, saturation: 0, lightness: 0.662745 },
    hsv: { hue: 0, saturation: 0, value: 0.662745 },
    cieXyz: { x: 0.377104, y: 0.396755, z: 0.431999 }
  },
  darkkhaki: {
    rgb: { red: 189, green: 183, blue: 107 },
    hsl: { hue: 55.61, saturation: 0.383178, lightness: 0.580392 },
    hsv: { hue: 55.61, saturation: 0.433862, value: 0.741176 },
    cieXyz: { x: 0.405744, y: 0.457484, z: 0.206 }
  },
  darkmagenta: {
    rgb: { red: 139, green: 0, blue: 139 },
    hsl: { hue: 300, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 300, saturation: 1, value: 0.545098 },
    cieXyz: { x: 0.153075, y: 0.073543, z: 0.250344 }
  },
  darkolivegreen: {
    rgb: { red: 85, green: 107, blue: 47 },
    hsl: { hue: 82, saturation: 0.38961, lightness: 0.301961 },
    hsv: { hue: 82, saturation: 0.560748, value: 0.419608 },
    cieXyz: { x: 0.095171, y: 0.126518, z: 0.046294 }
  },
  darkorange: {
    rgb: { red: 255, green: 140, blue: 0 },
    hsl: { hue: 32.941, saturation: 1, lightness: 0.5 },
    hsv: { hue: 32.941, saturation: 1, value: 1 },
    cieXyz: { x: 0.506231, y: 0.400222, z: 0.050592 }
  },
  darkorchid: {
    rgb: { red: 153, green: 50, blue: 204 },
    hsl: { hue: 280.13, saturation: 0.606299, lightness: 0.498039 },
    hsv: { hue: 280.13, saturation: 0.754902, value: 0.8 },
    cieXyz: { x: 0.251745, y: 0.134138, z: 0.58378 }
  },
  darkred: {
    rgb: { red: 139, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 0, saturation: 1, value: 0.545098 },
    cieXyz: { x: 0.106489, y: 0.054908, z: 0.004992 }
  },
  darksalmon: {
    rgb: { red: 233, green: 150, blue: 122 },
    hsl: { hue: 15.135, saturation: 0.716129, lightness: 0.696078 },
    hsv: { hue: 15.135, saturation: 0.476395, value: 0.913725 },
    cieXyz: { x: 0.480261, y: 0.405455, z: 0.237052 }
  },
  darkseagreen: {
    rgb: { red: 143, green: 188, blue: 143 },
    hsl: { hue: 120, saturation: 0.251397, lightness: 0.64902 },
    hsv: { hue: 120, saturation: 0.239362, value: 0.737255 },
    cieXyz: { x: 0.342675, y: 0.437882, z: 0.326278 }
  },
  darkslateblue: {
    rgb: { red: 72, green: 61, blue: 139 },
    hsl: { hue: 248.462, saturation: 0.39, lightness: 0.392157 },
    hsv: { hue: 248.462, saturation: 0.561151, value: 0.545098 },
    cieXyz: { x: 0.090001, y: 0.065789, z: 0.252167 }
  },
  darkslategray: {
    rgb: { red: 47, green: 79, blue: 79 },
    hsl: { hue: 180, saturation: 0.253968, lightness: 0.247059 },
    hsv: { hue: 180, saturation: 0.405063, value: 0.309804 },
    cieXyz: { x: 0.05379, y: 0.067605, z: 0.084171 }
  },
  darkslategrey: {
    rgb: { red: 47, green: 79, blue: 79 },
    hsl: { hue: 180, saturation: 0.253968, lightness: 0.247059 },
    hsv: { hue: 180, saturation: 0.405063, value: 0.309804 },
    cieXyz: { x: 0.05379, y: 0.067605, z: 0.084171 }
  },
  darkturquoise: {
    rgb: { red: 0, green: 206, blue: 209 },
    hsl: { hue: 180.861, saturation: 1, lightness: 0.409804 },
    hsv: { hue: 180.861, saturation: 1, value: 0.819608 },
    cieXyz: { x: 0.335745, y: 0.487415, z: 0.679477 }
  },
  darkviolet: {
    rgb: { red: 148, green: 0, blue: 211 },
    hsl: { hue: 282.085, saturation: 1, lightness: 0.413725 },
    hsv: { hue: 282.085, saturation: 1, value: 0.827451 },
    cieXyz: { x: 0.239682, y: 0.109996, z: 0.624759 }
  },
  deeppink: {
    rgb: { red: 255, green: 20, blue: 147 },
    hsl: { hue: 327.574, saturation: 1, lightness: 0.539216 },
    hsv: { hue: 327.574, saturation: 0.921569, value: 1 },
    cieXyz: { x: 0.467604, y: 0.238734, z: 0.297439 }
  },
  deepskyblue: {
    rgb: { red: 0, green: 191, blue: 255 },
    hsl: { hue: 195.059, saturation: 1, lightness: 0.5 },
    hsv: { hue: 195.059, saturation: 1, value: 1 },
    cieXyz: { x: 0.366733, y: 0.444766, z: 1.012403 }
  },
  dimgray: {
    rgb: { red: 105, green: 105, blue: 105 },
    hsl: { hue: 0, saturation: 0, lightness: 0.411765 },
    hsv: { hue: 0, saturation: 0, value: 0.411765 },
    cieXyz: { x: 0.134267, y: 0.141263, z: 0.153812 }
  },
  dimgrey: {
    rgb: { red: 105, green: 105, blue: 105 },
    hsl: { hue: 0, saturation: 0, lightness: 0.411765 },
    hsv: { hue: 0, saturation: 0, value: 0.411765 },
    cieXyz: { x: 0.134267, y: 0.141263, z: 0.153812 }
  },
  dodgerblue: {
    rgb: { red: 30, green: 144, blue: 255 },
    hsl: { hue: 209.6, saturation: 1, lightness: 0.558824 },
    hsv: { hue: 209.6, saturation: 0.882353, value: 1 },
    cieXyz: { x: 0.285518, y: 0.274388, z: 0.983797 }
  },
  firebrick: {
    rgb: { red: 178, green: 34, blue: 34 },
    hsl: { hue: 0, saturation: 0.679245, lightness: 0.415686 },
    hsv: { hue: 0, saturation: 0.808989, value: 0.698039 },
    cieXyz: { x: 0.192232, y: 0.107277, z: 0.025715 }
  },
  floralwhite: {
    rgb: { red: 255, green: 250, blue: 240 },
    hsl: { hue: 40, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 40, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.911517, y: 0.95923, z: 0.961342 }
  },
  forestgreen: {
    rgb: { red: 34, green: 139, blue: 34 },
    hsl: { hue: 120, saturation: 0.606936, lightness: 0.339216 },
    hsv: { hue: 120, saturation: 0.755396, value: 0.545098 },
    cieXyz: { x: 0.101804, y: 0.189197, z: 0.046284 }
  },
  fuchsia: {
    rgb: { red: 255, green: 0, blue: 255 },
    hsl: { hue: 300, saturation: 1, lightness: 0.5 },
    hsv: { hue: 300, saturation: 1, value: 1 },
    cieXyz: { x: 0.592894, y: 0.284848, z: 0.969638 }
  },
  gainsboro: {
    rgb: { red: 220, green: 220, blue: 220 },
    hsl: { hue: 0, saturation: 0, lightness: 0.862745 },
    hsv: { hue: 0, saturation: 0, value: 0.862745 },
    cieXyz: { x: 0.680245, y: 0.715694, z: 0.779269 }
  },
  ghostwhite: {
    rgb: { red: 248, green: 248, blue: 255 },
    hsl: { hue: 240, saturation: 1, lightness: 0.986275 },
    hsv: { hue: 240, saturation: 0.027451, value: 1 },
    cieXyz: { x: 0.903256, y: 0.943111, z: 1.080336 }
  },
  gold: {
    rgb: { red: 255, green: 215, blue: 0 },
    hsl: { hue: 50.588, saturation: 1, lightness: 0.5 },
    hsv: { hue: 50.588, saturation: 1, value: 1 },
    cieXyz: { x: 0.655445, y: 0.698649, z: 0.10033 }
  },
  goldenrod: {
    rgb: { red: 218, green: 165, blue: 32 },
    hsl: { hue: 42.903, saturation: 0.744, lightness: 0.490196 },
    hsv: { hue: 42.903, saturation: 0.853211, value: 0.854902 },
    cieXyz: { x: 0.426323, y: 0.419233, z: 0.072129 }
  },
  gray: {
    rgb: { red: 128, green: 128, blue: 128 },
    hsl: { hue: 0, saturation: 0, lightness: 0.501961 },
    hsv: { hue: 0, saturation: 0, value: 0.501961 },
    cieXyz: { x: 0.205169, y: 0.215861, z: 0.235035 }
  },
  greenyellow: {
    rgb: { red: 173, green: 255, blue: 47 },
    hsl: { hue: 83.654, saturation: 1, lightness: 0.592157 },
    hsv: { hue: 83.654, saturation: 0.815686, value: 1 },
    cieXyz: { x: 0.535065, y: 0.806077, z: 0.154285 }
  },
  honeydew: {
    rgb: { red: 240, green: 255, blue: 240 },
    hsl: { hue: 120, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 120, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.874204, y: 0.963359, z: 0.964103 }
  },
  hotpink: {
    rgb: { red: 255, green: 105, blue: 180 },
    hsl: { hue: 330, saturation: 1, lightness: 0.705882 },
    hsv: { hue: 330, saturation: 0.588235, value: 1 },
    cieXyz: { x: 0.545322, y: 0.346639, z: 0.469901 }
  },
  indianred: {
    rgb: { red: 205, green: 92, blue: 92 },
    hsl: { hue: 0, saturation: 0.530516, lightness: 0.582353 },
    hsv: { hue: 0, saturation: 0.55122, value: 0.803922 },
    cieXyz: { x: 0.309383, y: 0.214098, z: 0.126264 }
  },
  indigo: {
    rgb: { red: 75, green: 0, blue: 130 },
    hsl: { hue: 274.615, saturation: 1, lightness: 0.254902 },
    hsv: { hue: 274.615, saturation: 1, value: 0.509804 },
    cieXyz: { x: 0.069299, y: 0.031075, z: 0.213495 }
  },
  ivory: {
    rgb: { red: 255, green: 255, blue: 240 },
    hsl: { hue: 60, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 60, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.92726, y: 0.990716, z: 0.96659 }
  },
  khaki: {
    rgb: { red: 240, green: 230, blue: 140 },
    hsl: { hue: 54, saturation: 0.769231, lightness: 0.745098 },
    hsv: { hue: 54, saturation: 0.416667, value: 0.941176 },
    cieXyz: { x: 0.68967, y: 0.770143, z: 0.360381 }
  },
  lavender: {
    rgb: { red: 230, green: 230, blue: 250 },
    hsl: { hue: 240, saturation: 0.666667, lightness: 0.941176 },
    hsv: { hue: 240, saturation: 0.08, value: 0.980392 },
    cieXyz: { x: 0.781819, y: 0.803183, z: 1.018081 }
  },
  lavenderblush: {
    rgb: { red: 255, green: 240, blue: 245 },
    hsl: { hue: 340, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 340, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.888794, y: 0.901736, z: 0.990915 }
  },
  lawngreen: {
    rgb: { red: 124, green: 252, blue: 0 },
    hsl: { hue: 90.476, saturation: 1, lightness: 0.494118 },
    hsv: { hue: 90.476, saturation: 1, value: 0.988235 },
    cieXyz: { x: 0.431214, y: 0.739027, z: 0.119924 }
  },
  lemonchiffon: {
    rgb: { red: 255, green: 250, blue: 205 },
    hsl: { hue: 54, saturation: 1, lightness: 0.901961 },
    hsv: { hue: 54, saturation: 0.196078, value: 1 },
    cieXyz: { x: 0.864446, y: 0.940402, z: 0.713435 }
  },
  lightblue: {
    rgb: { red: 173, green: 216, blue: 230 },
    hsl: { hue: 194.737, saturation: 0.53271, lightness: 0.790196 },
    hsv: { hue: 194.737, saturation: 0.247826, value: 0.901961 },
    cieXyz: { x: 0.560681, y: 0.637069, z: 0.8419 }
  },
  lightcoral: {
    rgb: { red: 240, green: 128, blue: 128 },
    hsl: { hue: 0, saturation: 0.788732, lightness: 0.721569 },
    hsv: { hue: 0, saturation: 0.466667, value: 0.941176 },
    cieXyz: { x: 0.475537, y: 0.355269, z: 0.247709 }
  },
  lightcyan: {
    rgb: { red: 224, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.939216 },
    hsv: { hue: 180, saturation: 0.121569, value: 1 },
    cieXyz: { x: 0.84546, y: 0.945854, z: 1.083908 }
  },
  lightgoldenrodyellow: {
    rgb: { red: 250, green: 250, blue: 210 },
    hsl: { hue: 60, saturation: 0.8, lightness: 0.901961 },
    hsv: { hue: 60, saturation: 0.16, value: 0.980392 },
    cieXyz: { x: 0.852419, y: 0.933491, z: 0.744879 }
  },
  lightgray: {
    rgb: { red: 211, green: 211, blue: 211 },
    hsl: { hue: 0, saturation: 0, lightness: 0.827451 },
    hsv: { hue: 0, saturation: 0, value: 0.827451 },
    cieXyz: { x: 0.619142, y: 0.651406, z: 0.70927 }
  },
  lightgreen: {
    rgb: { red: 144, green: 238, blue: 144 },
    hsl: { hue: 120, saturation: 0.734375, lightness: 0.74902 },
    hsv: { hue: 120, saturation: 0.394958, value: 0.933333 },
    cieXyz: { x: 0.47108, y: 0.690892, z: 0.372335 }
  },
  lightgrey: {
    rgb: { red: 211, green: 211, blue: 211 },
    hsl: { hue: 0, saturation: 0, lightness: 0.827451 },
    hsv: { hue: 0, saturation: 0, value: 0.827451 },
    cieXyz: { x: 0.619142, y: 0.651406, z: 0.70927 }
  },
  lightpink: {
    rgb: { red: 255, green: 182, blue: 193 },
    hsl: { hue: 350.959, saturation: 1, lightness: 0.856863 },
    hsv: { hue: 350.959, saturation: 0.286275, value: 1 },
    cieXyz: { x: 0.675948, y: 0.585699, z: 0.581865 }
  },
  lightsalmon: {
    rgb: { red: 255, green: 160, blue: 122 },
    hsl: { hue: 17.143, saturation: 1, lightness: 0.739216 },
    hsv: { hue: 17.143, saturation: 0.521569, value: 1 },
    cieXyz: { x: 0.573272, y: 0.478119, z: 0.24618 }
  },
  lightseagreen: {
    rgb: { red: 32, green: 178, blue: 170 },
    hsl: { hue: 176.712, saturation: 0.695238, lightness: 0.411765 },
    hsv: { hue: 176.712, saturation: 0.820225, value: 0.698039 },
    cieXyz: { x: 0.237683, y: 0.350471, z: 0.435345 }
  },
  lightskyblue: {
    rgb: { red: 135, green: 206, blue: 250 },
    hsl: { hue: 202.957, saturation: 0.92, lightness: 0.754902 },
    hsv: { hue: 202.957, saturation: 0.46, value: 0.980392 },
    cieXyz: { x: 0.493122, y: 0.561921, z: 0.986716 }
  },
  lightslategray: {
    rgb: { red: 119, green: 136, blue: 153 },
    hsl: { hue: 210, saturation: 0.142857, lightness: 0.533333 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.6 },
    cieXyz: { x: 0.221601, y: 0.238295, z: 0.335628 }
  },
  lightslategrey: {
    rgb: { red: 119, green: 136, blue: 153 },
    hsl: { hue: 210, saturation: 0.142857, lightness: 0.533333 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.6 },
    cieXyz: { x: 0.221601, y: 0.238295, z: 0.335628 }
  },
  lightsteelblue: {
    rgb: { red: 176, green: 196, blue: 222 },
    hsl: { hue: 213.913, saturation: 0.410714, lightness: 0.780392 },
    hsv: { hue: 213.913, saturation: 0.207207, value: 0.870588 },
    cieXyz: { x: 0.508258, y: 0.539826, z: 0.768349 }
  },
  lightyellow: {
    rgb: { red: 255, green: 255, blue: 224 },
    hsl: { hue: 60, saturation: 1, lightness: 0.939216 },
    hsv: { hue: 60, saturation: 0.121569, value: 1 },
    cieXyz: { x: 0.904531, y: 0.981625, z: 0.846887 }
  },
  limegreen: {
    rgb: { red: 50, green: 205, blue: 50 },
    hsl: { hue: 120, saturation: 0.607843, lightness: 0.5 },
    hsv: { hue: 120, saturation: 0.756098, value: 0.803922 },
    cieXyz: { x: 0.23721, y: 0.445683, z: 0.103694 }
  },
  linen: {
    rgb: { red: 250, green: 240, blue: 230 },
    hsl: { hue: 30, saturation: 0.666667, lightness: 0.941176 },
    hsv: { hue: 30, saturation: 0.08, value: 0.980392 },
    cieXyz: { x: 0.848657, y: 0.883582, z: 0.874316 }
  },
  mediumaquamarine: {
    rgb: { red: 102, green: 205, blue: 170 },
    hsl: { hue: 159.612, saturation: 0.507389, lightness: 0.601961 },
    hsv: { hue: 159.612, saturation: 0.502439, value: 0.803922 },
    cieXyz: { x: 0.345633, y: 0.493867, z: 0.457336 }
  },
  mediumblue: {
    rgb: { red: 0, green: 0, blue: 205 },
    hsl: { hue: 240, saturation: 1, lightness: 0.401961 },
    hsv: { hue: 240, saturation: 1, value: 0.803922 },
    cieXyz: { x: 0.110156, y: 0.044063, z: 0.580156 }
  },
  mediumorchid: {
    rgb: { red: 186, green: 85, blue: 211 },
    hsl: { hue: 288.095, saturation: 0.588785, lightness: 0.580392 },
    hsv: { hue: 288.095, saturation: 0.597156, value: 0.827451 },
    cieXyz: { x: 0.352546, y: 0.216408, z: 0.639354 }
  },
  mediumpurple: {
    rgb: { red: 147, green: 112, blue: 219 },
    hsl: { hue: 259.626, saturation: 0.597765, lightness: 0.64902 },
    hsv: { hue: 259.626, saturation: 0.488584, value: 0.858824 },
    cieXyz: { x: 0.306098, y: 0.229054, z: 0.698126 }
  },
  mediumseagreen: {
    rgb: { red: 60, green: 179, blue: 113 },
    hsl: { hue: 146.723, saturation: 0.497908, lightness: 0.468627 },
    hsv: { hue: 146.723, saturation: 0.664804, value: 0.701961 },
    cieXyz: { x: 0.209624, y: 0.343909, z: 0.211529 }
  },
  mediumslateblue: {
    rgb: { red: 123, green: 104, blue: 238 },
    hsl: { hue: 248.507, saturation: 0.797619, lightness: 0.670588 },
    hsv: { hue: 248.507, saturation: 0.563025, value: 0.933333 },
    cieXyz: { x: 0.285468, y: 0.202833, z: 0.832832 }
  },
  mediumspringgreen: {
    rgb: { red: 0, green: 250, blue: 154 },
    hsl: { hue: 156.96, saturation: 1, lightness: 0.490196 },
    hsv: { hue: 156.96, saturation: 1, value: 0.980392 },
    cieXyz: { x: 0.40014, y: 0.706989, z: 0.421029 }
  },
  mediumturquoise: {
    rgb: { red: 72, green: 209, blue: 204 },
    hsl: { hue: 177.81, saturation: 0.598253, lightness: 0.55098 },
    hsv: { hue: 177.81, saturation: 0.655502, value: 0.819608 },
    cieXyz: { x: 0.363671, y: 0.513342, z: 0.651069 }
  },
  mediumvioletred: {
    rgb: { red: 199, green: 21, blue: 133 },
    hsl: { hue: 322.247, saturation: 0.809091, lightness: 0.431373 },
    hsv: { hue: 322.247, saturation: 0.894472, value: 0.780392 },
    cieXyz: { x: 0.280567, y: 0.143754, z: 0.23483 }
  },
  midnightblue: {
    rgb: { red: 25, green: 25, blue: 112 },
    hsl: { hue: 240, saturation: 0.635036, lightness: 0.268627 },
    hsv: { hue: 240, saturation: 0.776786, value: 0.439216 },
    cieXyz: { x: 0.036722, y: 0.020714, z: 0.155324 }
  },
  mintcream: {
    rgb: { red: 245, green: 255, blue: 250 },
    hsl: { hue: 150, saturation: 1, lightness: 0.980392 },
    hsv: { hue: 150, saturation: 0.039216, value: 1 },
    cieXyz: { x: 0.906683, y: 0.978341, z: 1.045311 }
  },
  mistyrose: {
    rgb: { red: 255, green: 228, blue: 225 },
    hsl: { hue: 6, saturation: 1, lightness: 0.941176 },
    hsv: { hue: 6, saturation: 0.117647, value: 1 },
    cieXyz: { x: 0.825731, y: 0.821847, z: 0.82733 }
  },
  moccasin: {
    rgb: { red: 255, green: 228, blue: 181 },
    hsl: { hue: 38.108, saturation: 1, lightness: 0.854902 },
    hsv: { hue: 38.108, saturation: 0.290196, value: 1 },
    cieXyz: { x: 0.773248, y: 0.800854, z: 0.550919 }
  },
  navajowhite: {
    rgb: { red: 255, green: 222, blue: 173 },
    hsl: { hue: 35.854, saturation: 1, lightness: 0.839216 },
    hsv: { hue: 35.854, saturation: 0.321569, value: 1 },
    cieXyz: { x: 0.749054, y: 0.765224, z: 0.503517 }
  },
  oldlace: {
    rgb: { red: 253, green: 245, blue: 230 },
    hsl: { hue: 39.13, saturation: 0.851852, lightness: 0.947059 },
    hsv: { hue: 39.13, saturation: 0.090909, value: 0.992157 },
    cieXyz: { x: 0.874418, y: 0.919015, z: 0.879798 }
  },
  olivedrab: {
    rgb: { red: 107, green: 142, blue: 35 },
    hsl: { hue: 79.626, saturation: 0.60452, lightness: 0.347059 },
    hsv: { hue: 79.626, saturation: 0.753521, value: 0.556863 },
    cieXyz: { x: 0.160399, y: 0.225929, z: 0.051056 }
  },
  orange: {
    rgb: { red: 255, green: 165, blue: 0 },
    hsl: { hue: 38.824, saturation: 1, lightness: 0.5 },
    hsv: { hue: 38.824, saturation: 1, value: 1 },
    cieXyz: { x: 0.546999, y: 0.481758, z: 0.064181 }
  },
  orangered: {
    rgb: { red: 255, green: 69, blue: 0 },
    hsl: { hue: 16.235, saturation: 1, lightness: 0.5 },
    hsv: { hue: 16.235, saturation: 1, value: 1 },
    cieXyz: { x: 0.433736, y: 0.255232, z: 0.026427 }
  },
  orchid: {
    rgb: { red: 218, green: 112, blue: 214 },
    hsl: { hue: 302.264, saturation: 0.588889, lightness: 0.647059 },
    hsv: { hue: 302.264, saturation: 0.486239, value: 0.854902 },
    cieXyz: { x: 0.468446, y: 0.313515, z: 0.671893 }
  },
  palegoldenrod: {
    rgb: { red: 238, green: 232, blue: 170 },
    hsl: { hue: 54.706, saturation: 0.666667, lightness: 0.8 },
    hsv: { hue: 54.706, saturation: 0.285714, value: 0.933333 },
    cieXyz: { x: 0.713726, y: 0.78794, z: 0.494714 }
  },
  palegreen: {
    rgb: { red: 152, green: 251, blue: 152 },
    hsl: { hue: 120, saturation: 0.925234, lightness: 0.790196 },
    hsv: { hue: 120, saturation: 0.394422, value: 0.984314 },
    cieXyz: { x: 0.531111, y: 0.779337, z: 0.419438 }
  },
  paleturquoise: {
    rgb: { red: 175, green: 238, blue: 238 },
    hsl: { hue: 180, saturation: 0.649485, lightness: 0.809804 },
    hsv: { hue: 180, saturation: 0.264706, value: 0.933333 },
    cieXyz: { x: 0.636814, y: 0.76433, z: 0.9227 }
  },
  palevioletred: {
    rgb: { red: 219, green: 112, blue: 147 },
    hsl: { hue: 340.374, saturation: 0.597765, lightness: 0.64902 },
    hsv: { hue: 340.374, saturation: 0.488584, value: 0.858824 },
    cieXyz: { x: 0.402758, y: 0.287587, z: 0.310279 }
  },
  papayawhip: {
    rgb: { red: 255, green: 239, blue: 213 },
    hsl: { hue: 37.143, saturation: 1, lightness: 0.917647 },
    hsv: { hue: 37.143, saturation: 0.164706, value: 1 },
    cieXyz: { x: 0.841162, y: 0.877986, z: 0.754536 }
  },
  peachpuff: {
    rgb: { red: 255, green: 218, blue: 185 },
    hsl: { hue: 28.286, saturation: 1, lightness: 0.862745 },
    hsv: { hue: 28.286, saturation: 0.27451, value: 1 },
    cieXyz: { x: 0.750693, y: 0.749083, z: 0.56394 }
  },
  peru: {
    rgb: { red: 205, green: 133, blue: 63 },
    hsl: { hue: 29.577, saturation: 0.586777, lightness: 0.52549 },
    hsv: { hue: 29.577, saturation: 0.692683, value: 0.803922 },
    cieXyz: { x: 0.344641, y: 0.301163, z: 0.086996 }
  },
  pink: {
    rgb: { red: 255, green: 192, blue: 203 },
    hsl: { hue: 349.524, saturation: 1, lightness: 0.876471 },
    hsv: { hue: 349.524, saturation: 0.247059, value: 1 },
    cieXyz: { x: 0.708698, y: 0.632743, z: 0.649685 }
  },
  plum: {
    rgb: { red: 221, green: 160, blue: 221 },
    hsl: { hue: 300, saturation: 0.472868, lightness: 0.747059 },
    hsv: { hue: 300, saturation: 0.276018, value: 0.866667 },
    cieXyz: { x: 0.554395, y: 0.45736, z: 0.743002 }
  },
  powderblue: {
    rgb: { red: 176, green: 224, blue: 230 },
    hsl: { hue: 186.667, saturation: 0.519231, lightness: 0.796078 },
    hsv: { hue: 186.667, saturation: 0.234783, value: 0.901961 },
    cieXyz: { x: 0.588388, y: 0.682522, z: 0.849214 }
  },
  rebeccapurple: {
    rgb: { red: 102, green: 51, blue: 153 },
    hsl: { hue: 270, saturation: 0.5, lightness: 0.4 },
    hsv: { hue: 270, saturation: 0.666667, value: 0.6 },
    cieXyz: { x: 0.124118, y: 0.074924, z: 0.309231 }
  },
  rosybrown: {
    rgb: { red: 188, green: 143, blue: 143 },
    hsl: { hue: 0, saturation: 0.251397, lightness: 0.64902 },
    hsv: { hue: 0, saturation: 0.239362, value: 0.737255 },
    cieXyz: { x: 0.355199, y: 0.323211, z: 0.303489 }
  },
  royalblue: {
    rgb: { red: 65, green: 105, blue: 225 },
    hsl: { hue: 225, saturation: 0.727273, lightness: 0.568627 },
    hsv: { hue: 225, saturation: 0.711111, value: 0.882353 },
    cieXyz: { x: 0.208174, y: 0.16661, z: 0.733384 }
  },
  saddlebrown: {
    rgb: { red: 139, green: 69, blue: 19 },
    hsl: { hue: 25, saturation: 0.759494, lightness: 0.309804 },
    hsv: { hue: 25, saturation: 0.863309, value: 0.545098 },
    cieXyz: { x: 0.128944, y: 0.097938, z: 0.018273 }
  },
  salmon: {
    rgb: { red: 250, green: 128, blue: 114 },
    hsl: { hue: 6.176, saturation: 0.931507, lightness: 0.713725 },
    hsv: { hue: 6.176, saturation: 0.544, value: 0.980392 },
    cieXyz: { x: 0.501846, y: 0.369828, z: 0.204119 }
  },
  sandybrown: {
    rgb: { red: 244, green: 164, blue: 96 },
    hsl: { hue: 27.568, saturation: 0.870588, lightness: 0.666667 },
    hsv: { hue: 27.568, saturation: 0.606557, value: 0.956863 },
    cieXyz: { x: 0.526985, y: 0.466331, z: 0.172897 }
  },
  seagreen: {
    rgb: { red: 46, green: 139, blue: 87 },
    hsl: { hue: 146.452, saturation: 0.502703, lightness: 0.362745 },
    hsv: { hue: 146.452, saturation: 0.669065, value: 0.545098 },
    cieXyz: { x: 0.120786, y: 0.197329, z: 0.121873 }
  },
  seashell: {
    rgb: { red: 255, green: 245, blue: 238 },
    hsl: { hue: 24.706, saturation: 1, lightness: 0.966667 },
    hsv: { hue: 24.706, saturation: 0.066667, value: 1 },
    cieXyz: { x: 0.893231, y: 0.927387, z: 0.940671 }
  },
  sienna: {
    rgb: { red: 160, green: 82, blue: 45 },
    hsl: { hue: 19.304, saturation: 0.560976, lightness: 0.401961 },
    hsv: { hue: 19.304, saturation: 0.71875, value: 0.627451 },
    cieXyz: { x: 0.179898, y: 0.136997, z: 0.041791 }
  },
  skyblue: {
    rgb: { red: 135, green: 206, blue: 235 },
    hsl: { hue: 197.4, saturation: 0.714286, lightness: 0.72549 },
    hsv: { hue: 197.4, saturation: 0.425532, value: 0.921569 },
    cieXyz: { x: 0.470531, y: 0.552884, z: 0.867734 }
  },
  slateblue: {
    rgb: { red: 106, green: 90, blue: 205 },
    hsl: { hue: 248.348, saturation: 0.534884, lightness: 0.578431 },
    hsv: { hue: 248.348, saturation: 0.560976, value: 0.803922 },
    cieXyz: { x: 0.206162, y: 0.147833, z: 0.595129 }
  },
  slategray: {
    rgb: { red: 112, green: 128, blue: 144 },
    hsl: { hue: 210, saturation: 0.125984, lightness: 0.501961 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.564706 },
    cieXyz: { x: 0.19434, y: 0.208962, z: 0.293896 }
  },
  slategrey: {
    rgb: { red: 112, green: 128, blue: 144 },
    hsl: { hue: 210, saturation: 0.125984, lightness: 0.501961 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.564706 },
    cieXyz: { x: 0.19434, y: 0.208962, z: 0.293896 }
  },
  snow: {
    rgb: { red: 255, green: 250, blue: 250 },
    hsl: { hue: 0, saturation: 1, lightness: 0.990196 },
    hsv: { hue: 0, saturation: 0.019608, value: 1 },
    cieXyz: { x: 0.926783, y: 0.965337, z: 1.041744 }
  },
  springgreen: {
    rgb: { red: 0, green: 255, blue: 127 },
    hsl: { hue: 149.882, saturation: 1, lightness: 0.5 },
    hsv: { hue: 149.882, saturation: 1, value: 1 },
    cieXyz: { x: 0.39587, y: 0.73047, z: 0.320876 }
  },
  steelblue: {
    rgb: { red: 70, green: 130, blue: 180 },
    hsl: { hue: 207.273, saturation: 0.44, lightness: 0.490196 },
    hsv: { hue: 207.273, saturation: 0.611111, value: 0.705882 },
    cieXyz: { x: 0.187436, y: 0.205609, z: 0.46152 }
  },
  tan: {
    rgb: { red: 210, green: 180, blue: 140 },
    hsl: { hue: 34.286, saturation: 0.4375, lightness: 0.686275 },
    hsv: { hue: 34.286, saturation: 0.333333, value: 0.823529 },
    cieXyz: { x: 0.476341, y: 0.482395, z: 0.316079 }
  },
  thistle: {
    rgb: { red: 216, green: 191, blue: 216 },
    hsl: { hue: 300, saturation: 0.242718, lightness: 0.798039 },
    hsv: { hue: 300, saturation: 0.115741, value: 0.847059 },
    cieXyz: { x: 0.593427, y: 0.568192, z: 0.727935 }
  },
  tomato: {
    rgb: { red: 255, green: 99, blue: 71 },
    hsl: { hue: 9.13, saturation: 1, lightness: 0.639216 },
    hsv: { hue: 9.13, saturation: 0.721569, value: 1 },
    cieXyz: { x: 0.468441, y: 0.306451, z: 0.094084 }
  },
  turquoise: {
    rgb: { red: 64, green: 224, blue: 208 },
    hsl: { hue: 174, saturation: 0.720721, lightness: 0.564706 },
    hsv: { hue: 174, saturation: 0.714286, value: 0.878431 },
    cieXyz: { x: 0.401497, y: 0.589506, z: 0.689249 }
  },
  violet: {
    rgb: { red: 238, green: 130, blue: 238 },
    hsl: { hue: 300, saturation: 0.760563, lightness: 0.721569 },
    hsv: { hue: 300, saturation: 0.453782, value: 0.933333 },
    cieXyz: { x: 0.586741, y: 0.403185, z: 0.85564 }
  },
  wheat: {
    rgb: { red: 245, green: 222, blue: 179 },
    hsl: { hue: 39.091, saturation: 0.767442, lightness: 0.831373 },
    hsv: { hue: 39.091, saturation: 0.269388, value: 0.960784 },
    cieXyz: { x: 0.719147, y: 0.749117, z: 0.533102 }
  },
  whitesmoke: {
    rgb: { red: 245, green: 245, blue: 245 },
    hsl: { hue: 0, saturation: 0, lightness: 0.960784 },
    hsv: { hue: 0, saturation: 0, value: 0.960784 },
    cieXyz: { x: 0.867873, y: 0.913099, z: 0.994209 }
  },
  yellowgreen: {
    rgb: { red: 154, green: 205, blue: 50 },
    hsl: { hue: 79.742, saturation: 0.607843, lightness: 0.5 },
    hsv: { hue: 79.742, saturation: 0.756098, value: 0.803922 },
    cieXyz: { x: 0.357336, y: 0.507623, z: 0.109325 }
  }
};
