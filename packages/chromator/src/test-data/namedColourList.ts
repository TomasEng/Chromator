import { type NamedColour } from '../types/NamedColour';
import { type Rgb } from '../types/Rgb';
import { type Hsl } from '../types/Hsl';
import { type Hsv } from '../types/Hsv';
import { type Xyz } from '../types/Xyz';
import { type Lab } from '../types/Lab';

type TestData = {
  [colour in NamedColour]: {
    rgb: Rgb;
    hsl: Hsl;
    hsv: Hsv;
    cieXyz: Xyz;
    lab: Lab;
  }
};

export const testColours: TestData = {
  black: {
    rgb: { red: 0, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 0, lightness: 0 },
    hsv: { hue: 0, saturation: 0, value: 0 },
    cieXyz: { x: 0, y: 0, z: 0 },
    lab: { L: 0, a: 0, b: 0 }
  },
  silver: {
    rgb: { red: 192, green: 192, blue: 192 },
    hsl: { hue: 0, saturation: 0, lightness: 0.752941 },
    hsv: { hue: 0, saturation: 0, value: 0.752941 },
    cieXyz: { x: 0.501007, y: 0.527115, z: 0.573939 },
    lab: { L: 77.7044, a: 0, b: 0 }
  },
  grey: {
    rgb: { red: 128, green: 128, blue: 128 },
    hsl: { hue: 0, saturation: 0, lightness: 0.501961 },
    hsv: { hue: 0, saturation: 0, value: 0.501961 },
    cieXyz: { x: 0.205169, y: 0.215861, z: 0.235035 },
    lab: { L: 53.585, a: 0, b: 0 }
  },
  white: {
    rgb: { red: 255, green: 255, blue: 255 },
    hsl: { hue: 0, saturation: 0, lightness: 1 },
    hsv: { hue: 0, saturation: 0, value: 1 },
    cieXyz: { x: 0.95047, y: 1, z: 1.08883 },
    lab: { L: 100, a: 0, b: 0 }
  },
  maroon: {
    rgb: { red: 128, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 0, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.089033, y: 0.045908, z: 0.004173 },
    lab: { L: 25.5355, a: 48.0451, b: 38.0572 }
  },
  red: {
    rgb: { red: 255, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 1, lightness: 0.5 },
    hsv: { hue: 0, saturation: 1, value: 1 },
    cieXyz: { x: 0.412456, y: 0.212673, z: 0.019334 },
    lab: { L: 53.2408, a: 80.0925, b: 67.2032 }
  },
  purple: {
    rgb: { red: 128, green: 0, blue: 128 },
    hsl: { hue: 300, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 300, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.127982, y: 0.061487, z: 0.209307 },
    lab: { L: 29.7846, a: 58.9278, b: -36.487 }
  },
  magenta: {
    rgb: { red: 255, green: 0, blue: 255 },
    hsl: { hue: 300, saturation: 1, lightness: 0.5 },
    hsv: { hue: 300, saturation: 1, value: 1 },
    cieXyz: { x: 0.592894, y: 0.284848, z: 0.969638 },
    lab: { L: 60.3242, a: 98.2343, b: -60.8249 }
  },
  green: {
    rgb: { red: 0, green: 128, blue: 0 },
    hsl: { hue: 120, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 120, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.077187, y: 0.154373, z: 0.025729 },
    lab: { L: 46.2274, a: -51.6984, b: 49.8968 }
  },
  lime: {
    rgb: { red: 0, green: 255, blue: 0 },
    hsl: { hue: 120, saturation: 1, lightness: 0.5 },
    hsv: { hue: 120, saturation: 1, value: 1 },
    cieXyz: { x: 0.357576, y: 0.715152, z: 0.119192 },
    lab: { L: 87.7347, a: -86.1827, b: 83.1793 }
  },
  olive: {
    rgb: { red: 128, green: 128, blue: 0 },
    hsl: { hue: 60, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 60, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.16622, y: 0.200281, z: 0.029902 },
    lab: { L: 51.8689, a: -12.9294, b: 56.6745 }
  },
  yellow: {
    rgb: { red: 255, green: 255, blue: 0 },
    hsl: { hue: 60, saturation: 1, lightness: 0.5 },
    hsv: { hue: 60, saturation: 1, value: 1 },
    cieXyz: { x: 0.770033, y: 0.927825, z: 0.138526 },
    lab: { L: 97.1393, a: -21.5537, b: 94.478 }
  },
  navy: {
    rgb: { red: 0, green: 0, blue: 128 },
    hsl: { hue: 240, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 240, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.038949, y: 0.01558, z: 0.205133 },
    lab: { L: 12.9719, a: 47.5022, b: -64.7021 }
  },
  blue: {
    rgb: { red: 0, green: 0, blue: 255 },
    hsl: { hue: 240, saturation: 1, lightness: 0.5 },
    hsv: { hue: 240, saturation: 1, value: 1 },
    cieXyz: { x: 0.180438, y: 0.072175, z: 0.950304 },
    lab: { L: 32.297, a: 79.1875, b: -107.8602 }
  },
  teal: {
    rgb: { red: 0, green: 128, blue: 128 },
    hsl: { hue: 180, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 180, saturation: 1, value: 0.501961 },
    cieXyz: { x: 0.116136, y: 0.169953, z: 0.230862 },
    lab: { L: 48.254, a: -28.8463, b: -8.4769 }
  },
  cyan: {
    rgb: { red: 0, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.5 },
    hsv: { hue: 180, saturation: 1, value: 1 },
    cieXyz: { x: 0.538014, y: 0.787327, z: 1.069496 },
    lab: { L: 91.1132, a: -48.0875, b: -14.1312 }
  },
  aliceblue: {
    rgb: { red: 240, green: 248, blue: 255 },
    hsl: { hue: 208, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 208, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.87549, y: 0.928794, z: 1.079035 },
    lab: { L: 97.1786, a: -1.3486, b: -4.2629 }
  },
  antiquewhite: {
    rgb: { red: 250, green: 235, blue: 215 },
    hsl: { hue: 34.286, saturation: 0.777778, lightness: 0.911765 },
    hsv: { hue: 34.286, saturation: 0.14, value: 0.980392 },
    cieXyz: { x: 0.813976, y: 0.846483, z: 0.763276 },
    lab: { L: 93.7314, a: 1.8386, b: 11.5262 }
  },
  aqua: {
    rgb: { red: 0, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.5 },
    hsv: { hue: 180, saturation: 1, value: 1 },
    cieXyz: { x: 0.538014, y: 0.787327, z: 1.069496 },
    lab: { L: 91.1132, a: -48.0875, b: -14.1312 }
  },
  aquamarine: {
    rgb: { red: 127, green: 255, blue: 212 },
    hsl: { hue: 159.844, saturation: 1, lightness: 0.74902 },
    hsv: { hue: 159.844, saturation: 0.501961, value: 1 },
    cieXyz: { x: 0.563908, y: 0.807806, z: 0.748952 },
    lab: { L: 92.034, a: -45.5244, b: 9.7178 }
  },
  azure: {
    rgb: { red: 240, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 180, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.897415, y: 0.972643, z: 1.086343 },
    lab: { L: 98.9324, a: -4.8804, b: -1.6883 }
  },
  beige: {
    rgb: { red: 245, green: 245, blue: 220 },
    hsl: { hue: 60, saturation: 0.555556, lightness: 0.911765 },
    hsv: { hue: 60, saturation: 0.102041, value: 0.960784 },
    cieXyz: { x: 0.832254, y: 0.898851, z: 0.806614 },
    lab: { L: 95.9491, a: -4.1929, b: 12.049 }
  },
  bisque: {
    rgb: { red: 255, green: 228, blue: 196 },
    hsl: { hue: 32.542, saturation: 1, lightness: 0.884314 },
    hsv: { hue: 32.542, saturation: 0.231373, value: 1 },
    cieXyz: { x: 0.789475, y: 0.807345, z: 0.636384 },
    lab: { L: 92.0134, a: 4.431, b: 19.0118 }
  },
  blanchedalmond: {
    rgb: { red: 255, green: 235, blue: 205 },
    hsl: { hue: 36, saturation: 1, lightness: 0.901961 },
    hsv: { hue: 36, saturation: 0.196078, value: 1 },
    cieXyz: { x: 0.819676, y: 0.850862, z: 0.698511 },
    lab: { L: 93.9203, a: 2.1302, b: 17.0261 }
  },
  blueviolet: {
    rgb: { red: 138, green: 43, blue: 226 },
    hsl: { hue: 271.148, saturation: 0.759336, lightness: 0.527451 },
    hsv: { hue: 271.148, saturation: 0.809735, value: 0.886275 },
    cieXyz: { x: 0.250692, y: 0.126219, z: 0.730523 },
    lab: { L: 42.188, a: 69.845, b: -74.7631 }
  },
  brown: {
    rgb: { red: 165, green: 42, blue: 42 },
    hsl: { hue: 0, saturation: 0.594203, lightness: 0.405882 },
    hsv: { hue: 0, saturation: 0.745455, value: 0.647059 },
    cieXyz: { x: 0.167649, y: 0.09825, z: 0.032037 },
    lab: { L: 37.5265, a: 49.6903, b: 30.5432 }
  },
  burlywood: {
    rgb: { red: 222, green: 184, blue: 135 },
    hsl: { hue: 33.793, saturation: 0.568627, lightness: 0.7 },
    hsv: { hue: 33.793, saturation: 0.391892, value: 0.870588 },
    cieXyz: { x: 0.516393, y: 0.515623, z: 0.301495 },
    lab: { L: 77.0183, a: 7.05, b: 30.0188 }
  },
  cadetblue: {
    rgb: { red: 95, green: 158, blue: 160 },
    hsl: { hue: 181.846, saturation: 0.254902, lightness: 0.5 },
    hsv: { hue: 181.846, saturation: 0.40625, value: 0.627451 },
    cieXyz: { x: 0.23289, y: 0.29423, z: 0.377029 },
    lab: { L: 61.1532, a: -19.6795, b: -7.4207 }
  },
  chartreuse: {
    rgb: { red: 127, green: 255, blue: 0 },
    hsl: { hue: 90.118, saturation: 1, lightness: 0.5 },
    hsv: { hue: 90.118, saturation: 1, value: 1 },
    cieXyz: { x: 0.445112, y: 0.760288, z: 0.123295 },
    lab: { L: 89.8727, a: -68.0665, b: 85.7799 }
  },
  chocolate: {
    rgb: { red: 210, green: 105, blue: 30 },
    hsl: { hue: 25, saturation: 0.75, lightness: 0.470588 },
    hsv: { hue: 25, saturation: 0.857143, value: 0.823529 },
    cieXyz: { x: 0.318675, y: 0.239025, z: 0.041636 },
    lab: { L: 55.99, a: 37.0526, b: 56.7407 }
  },
  coral: {
    rgb: { red: 255, green: 127, blue: 80 },
    hsl: { hue: 16.114, saturation: 1, lightness: 0.656863 },
    hsv: { hue: 16.114, saturation: 0.686275, value: 1 },
    cieXyz: { x: 0.50282, y: 0.37024, z: 0.120863 },
    lab: { L: 67.2949, a: 45.3547, b: 47.4931 }
  },
  cornflowerblue: {
    rgb: { red: 100, green: 149, blue: 237 },
    hsl: { hue: 218.54, saturation: 0.791908, lightness: 0.660784 },
    hsv: { hue: 218.54, saturation: 0.578059, value: 0.929412 },
    cieXyz: { x: 0.312837, y: 0.30316, z: 0.843073 },
    lab: { L: 61.926, a: 9.3328, b: -49.298 }
  },
  cornsilk: {
    rgb: { red: 255, green: 248, blue: 220 },
    hsl: { hue: 48, saturation: 1, lightness: 0.931373 },
    hsv: { hue: 48, saturation: 0.137255, value: 1 },
    cieXyz: { x: 0.877246, y: 0.935631, z: 0.811344 },
    lab: { L: 97.4557, a: -2.2177, b: 14.2934 }
  },
  crimson: {
    rgb: { red: 220, green: 20, blue: 60 },
    hsl: { hue: 348, saturation: 0.833333, lightness: 0.470588 },
    hsv: { hue: 348, saturation: 0.909091, value: 0.862745 },
    cieXyz: { x: 0.305847, y: 0.160473, z: 0.057612 },
    lab: { L: 47.0364, a: 70.9211, b: 33.5996 }
  },
  darkblue: {
    rgb: { red: 0, green: 0, blue: 139 },
    hsl: { hue: 240, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 240, saturation: 1, value: 0.545098 },
    cieXyz: { x: 0.046586, y: 0.018634, z: 0.245352 },
    lab: { L: 14.7536, a: 50.4234, b: -68.681 }
  },
  darkcyan: {
    rgb: { red: 0, green: 139, blue: 139 },
    hsl: { hue: 180, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 180, saturation: 1, value: 0.545098 },
    cieXyz: { x: 0.138906, y: 0.203274, z: 0.276126 },
    lab: { L: 52.2054, a: -30.6202, b: -8.9982 }
  },
  darkgoldenrod: {
    rgb: { red: 184, green: 134, blue: 11 },
    hsl: { hue: 42.659, saturation: 0.887179, lightness: 0.382353 },
    hsv: { hue: 42.659, saturation: 0.940217, value: 0.721569 },
    cieXyz: { x: 0.283548, y: 0.27267, z: 0.040862 },
    lab: { L: 59.2207, a: 9.8647, b: 62.7305 }
  },
  darkgray: {
    rgb: { red: 169, green: 169, blue: 169 },
    hsl: { hue: 0, saturation: 0, lightness: 0.662745 },
    hsv: { hue: 0, saturation: 0, value: 0.662745 },
    cieXyz: { x: 0.377104, y: 0.396755, z: 0.431999 },
    lab: { L: 69.2378, a: 0, b: 0 }
  },
  darkgreen: {
    rgb: { red: 0, green: 100, blue: 0 },
    hsl: { hue: 120, saturation: 1, lightness: 0.196078 },
    hsv: { hue: 120, saturation: 1, value: 0.392157 },
    cieXyz: { x: 0.045569, y: 0.091137, z: 0.01519 },
    lab: { L: 36.2023, a: -43.3696, b: 41.8582 }
  },
  darkgrey: {
    rgb: { red: 169, green: 169, blue: 169 },
    hsl: { hue: 0, saturation: 0, lightness: 0.662745 },
    hsv: { hue: 0, saturation: 0, value: 0.662745 },
    cieXyz: { x: 0.377104, y: 0.396755, z: 0.431999 },
    lab: { L: 69.2378, a: 0, b: 0 }
  },
  darkkhaki: {
    rgb: { red: 189, green: 183, blue: 107 },
    hsl: { hue: 55.61, saturation: 0.383178, lightness: 0.580392 },
    hsv: { hue: 55.61, saturation: 0.433862, value: 0.741176 },
    cieXyz: { x: 0.405744, y: 0.457484, z: 0.206 },
    lab: { L: 73.3821, a: -8.7879, b: 39.2918 }
  },
  darkmagenta: {
    rgb: { red: 139, green: 0, blue: 139 },
    hsl: { hue: 300, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 300, saturation: 1, value: 0.545098 },
    cieXyz: { x: 0.153075, y: 0.073543, z: 0.250344 },
    lab: { L: 32.6002, a: 62.5517, b: -38.7309 }
  },
  darkolivegreen: {
    rgb: { red: 85, green: 107, blue: 47 },
    hsl: { hue: 82, saturation: 0.38961, lightness: 0.301961 },
    hsv: { hue: 82, saturation: 0.560748, value: 0.419608 },
    cieXyz: { x: 0.095171, y: 0.126518, z: 0.046294 },
    lab: { L: 42.2339, a: -18.8278, b: 30.5984 }
  },
  darkorange: {
    rgb: { red: 255, green: 140, blue: 0 },
    hsl: { hue: 32.941, saturation: 1, lightness: 0.5 },
    hsv: { hue: 32.941, saturation: 1, value: 1 },
    cieXyz: { x: 0.506231, y: 0.400222, z: 0.050592 },
    lab: { L: 69.4852, a: 36.8261, b: 75.487 }
  },
  darkorchid: {
    rgb: { red: 153, green: 50, blue: 204 },
    hsl: { hue: 280.13, saturation: 0.606299, lightness: 0.498039 },
    hsv: { hue: 280.13, saturation: 0.754902, value: 0.8 },
    cieXyz: { x: 0.251745, y: 0.134138, z: 0.58378 },
    lab: { L: 43.3803, a: 65.1536, b: -60.0976 }
  },
  darkred: {
    rgb: { red: 139, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 0, saturation: 1, value: 0.545098 },
    cieXyz: { x: 0.106489, y: 0.054908, z: 0.004992 },
    lab: { L: 28.0898, a: 50.9997, b: 41.2908 }
  },
  darksalmon: {
    rgb: { red: 233, green: 150, blue: 122 },
    hsl: { hue: 15.135, saturation: 0.716129, lightness: 0.696078 },
    hsv: { hue: 15.135, saturation: 0.476395, value: 0.913725 },
    cieXyz: { x: 0.480261, y: 0.405455, z: 0.237052 },
    lab: { L: 69.8562, a: 28.1744, b: 27.7117 }
  },
  darkseagreen: {
    rgb: { red: 143, green: 188, blue: 143 },
    hsl: { hue: 120, saturation: 0.251397, lightness: 0.64902 },
    hsv: { hue: 120, saturation: 0.239362, value: 0.737255 },
    cieXyz: { x: 0.342675, y: 0.437882, z: 0.326278 },
    lab: { L: 72.0867, a: -23.8196, b: 18.0378 }
  },
  darkslateblue: {
    rgb: { red: 72, green: 61, blue: 139 },
    hsl: { hue: 248.462, saturation: 0.39, lightness: 0.392157 },
    hsv: { hue: 248.462, saturation: 0.561151, value: 0.545098 },
    cieXyz: { x: 0.090001, y: 0.065789, z: 0.252167 },
    lab: { L: 30.8284, a: 26.0511, b: -42.0825 }
  },
  darkslategray: {
    rgb: { red: 47, green: 79, blue: 79 },
    hsl: { hue: 180, saturation: 0.253968, lightness: 0.247059 },
    hsv: { hue: 180, saturation: 0.405063, value: 0.309804 },
    cieXyz: { x: 0.05379, y: 0.067605, z: 0.084171 },
    lab: { L: 31.2553, a: -11.7199, b: -3.7236 }
  },
  darkslategrey: {
    rgb: { red: 47, green: 79, blue: 79 },
    hsl: { hue: 180, saturation: 0.253968, lightness: 0.247059 },
    hsv: { hue: 180, saturation: 0.405063, value: 0.309804 },
    cieXyz: { x: 0.05379, y: 0.067605, z: 0.084171 },
    lab: { L: 31.2553, a: -11.7199, b: -3.7236 }
  },
  darkturquoise: {
    rgb: { red: 0, green: 206, blue: 209 },
    hsl: { hue: 180.861, saturation: 1, lightness: 0.409804 },
    hsv: { hue: 180.861, saturation: 1, value: 0.819608 },
    cieXyz: { x: 0.335745, y: 0.487415, z: 0.679477 },
    lab: { L: 75.2905, a: -40.0437, b: -13.513 }
  },
  darkviolet: {
    rgb: { red: 148, green: 0, blue: 211 },
    hsl: { hue: 282.085, saturation: 1, lightness: 0.413725 },
    hsv: { hue: 282.085, saturation: 1, value: 0.827451 },
    cieXyz: { x: 0.239682, y: 0.109996, z: 0.624759 },
    lab: { L: 39.5795, a: 76.3218, b: -70.3666 }
  },
  deeppink: {
    rgb: { red: 255, green: 20, blue: 147 },
    hsl: { hue: 327.574, saturation: 1, lightness: 0.539216 },
    hsv: { hue: 327.574, saturation: 0.921569, value: 1 },
    cieXyz: { x: 0.467604, y: 0.238734, z: 0.297439 },
    lab: { L: 55.9609, a: 84.5388, b: -5.701 }
  },
  deepskyblue: {
    rgb: { red: 0, green: 191, blue: 255 },
    hsl: { hue: 195.059, saturation: 1, lightness: 0.5 },
    hsv: { hue: 195.059, saturation: 1, value: 1 },
    cieXyz: { x: 0.366733, y: 0.444766, z: 1.012403 },
    lab: { L: 72.5457, a: -17.6582, b: -42.5415 }
  },
  dimgray: {
    rgb: { red: 105, green: 105, blue: 105 },
    hsl: { hue: 0, saturation: 0, lightness: 0.411765 },
    hsv: { hue: 0, saturation: 0, value: 0.411765 },
    cieXyz: { x: 0.134267, y: 0.141263, z: 0.153812 },
    lab: { L: 44.4136, a: 0, b: 0 }
  },
  dimgrey: {
    rgb: { red: 105, green: 105, blue: 105 },
    hsl: { hue: 0, saturation: 0, lightness: 0.411765 },
    hsv: { hue: 0, saturation: 0, value: 0.411765 },
    cieXyz: { x: 0.134267, y: 0.141263, z: 0.153812 },
    lab: { L: 44.4136, a: 0, b: 0 }
  },
  dodgerblue: {
    rgb: { red: 30, green: 144, blue: 255 },
    hsl: { hue: 209.6, saturation: 1, lightness: 0.558824 },
    hsv: { hue: 209.6, saturation: 0.882353, value: 1 },
    cieXyz: { x: 0.285518, y: 0.274388, z: 0.983797 },
    lab: { L: 59.3783, a: 9.9575, b: -63.3878 }
  },
  firebrick: {
    rgb: { red: 178, green: 34, blue: 34 },
    hsl: { hue: 0, saturation: 0.679245, lightness: 0.415686 },
    hsv: { hue: 0, saturation: 0.808989, value: 0.698039 },
    cieXyz: { x: 0.192232, y: 0.107277, z: 0.025715 },
    lab: { L: 39.1179, a: 55.9167, b: 37.649 }
  },
  floralwhite: {
    rgb: { red: 255, green: 250, blue: 240 },
    hsl: { hue: 40, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 40, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.911517, y: 0.95923, z: 0.961342 },
    lab: { L: 98.4016, a: -0.0365, b: 5.3762 }
  },
  forestgreen: {
    rgb: { red: 34, green: 139, blue: 34 },
    hsl: { hue: 120, saturation: 0.606936, lightness: 0.339216 },
    hsv: { hue: 120, saturation: 0.755396, value: 0.545098 },
    cieXyz: { x: 0.101804, y: 0.189197, z: 0.046284 },
    lab: { L: 50.5931, a: -49.5854, b: 45.016 }
  },
  fuchsia: {
    rgb: { red: 255, green: 0, blue: 255 },
    hsl: { hue: 300, saturation: 1, lightness: 0.5 },
    hsv: { hue: 300, saturation: 1, value: 1 },
    cieXyz: { x: 0.592894, y: 0.284848, z: 0.969638 },
    lab: { L: 60.3242, a: 98.2343, b: -60.8249 }
  },
  gainsboro: {
    rgb: { red: 220, green: 220, blue: 220 },
    hsl: { hue: 0, saturation: 0, lightness: 0.862745 },
    hsv: { hue: 0, saturation: 0, value: 0.862745 },
    cieXyz: { x: 0.680245, y: 0.715694, z: 0.779269 },
    lab: { L: 87.7609, a: 0, b: 0 }
  },
  ghostwhite: {
    rgb: { red: 248, green: 248, blue: 255 },
    hsl: { hue: 240, saturation: 1, lightness: 0.986275 },
    hsv: { hue: 240, saturation: 0.027451, value: 1 },
    cieXyz: { x: 0.903256, y: 0.943111, z: 1.080336 },
    lab: { L: 97.7573, a: 1.2471, b: -3.3453 }
  },
  gold: {
    rgb: { red: 255, green: 215, blue: 0 },
    hsl: { hue: 50.588, saturation: 1, lightness: 0.5 },
    hsv: { hue: 50.588, saturation: 1, value: 1 },
    cieXyz: { x: 0.655445, y: 0.698649, z: 0.10033 },
    lab: { L: 86.9303, a: -1.9232, b: 87.1319 }
  },
  goldenrod: {
    rgb: { red: 218, green: 165, blue: 32 },
    hsl: { hue: 42.903, saturation: 0.744, lightness: 0.490196 },
    hsv: { hue: 42.903, saturation: 0.853211, value: 0.854902 },
    cieXyz: { x: 0.426323, y: 0.419233, z: 0.072129 },
    lab: { L: 70.8178, a: 8.5245, b: 68.7617 }
  },
  gray: {
    rgb: { red: 128, green: 128, blue: 128 },
    hsl: { hue: 0, saturation: 0, lightness: 0.501961 },
    hsv: { hue: 0, saturation: 0, value: 0.501961 },
    cieXyz: { x: 0.205169, y: 0.215861, z: 0.235035 },
    lab: { L: 53.585, a: 0, b: 0 }
  },
  greenyellow: {
    rgb: { red: 173, green: 255, blue: 47 },
    hsl: { hue: 83.654, saturation: 1, lightness: 0.592157 },
    hsv: { hue: 83.654, saturation: 0.815686, value: 1 },
    cieXyz: { x: 0.535065, y: 0.806077, z: 0.154285 },
    lab: { L: 91.9568, a: -52.481, b: 81.8644 }
  },
  honeydew: {
    rgb: { red: 240, green: 255, blue: 240 },
    hsl: { hue: 120, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 120, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.874204, y: 0.963359, z: 0.964103 },
    lab: { L: 98.5655, a: -7.565, b: 5.4754 }
  },
  hotpink: {
    rgb: { red: 255, green: 105, blue: 180 },
    hsl: { hue: 330, saturation: 1, lightness: 0.705882 },
    hsv: { hue: 330, saturation: 0.588235, value: 1 },
    cieXyz: { x: 0.545322, y: 0.346639, z: 0.469901 },
    lab: { L: 65.4861, a: 64.2385, b: -10.6463 }
  },
  indianred: {
    rgb: { red: 205, green: 92, blue: 92 },
    hsl: { hue: 0, saturation: 0.530516, lightness: 0.582353 },
    hsv: { hue: 0, saturation: 0.55122, value: 0.803922 },
    cieXyz: { x: 0.309383, y: 0.214098, z: 0.126264 },
    lab: { L: 53.3951, a: 44.8282, b: 22.1171 }
  },
  indigo: {
    rgb: { red: 75, green: 0, blue: 130 },
    hsl: { hue: 274.615, saturation: 1, lightness: 0.254902 },
    hsv: { hue: 274.615, saturation: 1, value: 0.509804 },
    cieXyz: { x: 0.069299, y: 0.031075, z: 0.213495 },
    lab: { L: 20.4693, a: 51.6855, b: -53.3129 }
  },
  ivory: {
    rgb: { red: 255, green: 255, blue: 240 },
    hsl: { hue: 60, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 60, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.92726, y: 0.990716, z: 0.96659 },
    lab: { L: 99.6399, a: -2.5514, b: 7.1627 }
  },
  khaki: {
    rgb: { red: 240, green: 230, blue: 140 },
    hsl: { hue: 54, saturation: 0.769231, lightness: 0.745098 },
    hsv: { hue: 54, saturation: 0.416667, value: 0.941176 },
    cieXyz: { x: 0.68967, y: 0.770143, z: 0.360381 },
    lab: { L: 90.3282, a: -9.0098, b: 44.9793 }
  },
  lavender: {
    rgb: { red: 230, green: 230, blue: 250 },
    hsl: { hue: 240, saturation: 0.666667, lightness: 0.941176 },
    hsv: { hue: 240, saturation: 0.08, value: 0.980392 },
    cieXyz: { x: 0.781819, y: 0.803183, z: 1.018081 },
    lab: { L: 91.8274, a: 3.7079, b: -9.6614 }
  },
  lavenderblush: {
    rgb: { red: 255, green: 240, blue: 245 },
    hsl: { hue: 340, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 340, saturation: 0.058824, value: 1 },
    cieXyz: { x: 0.888794, y: 0.901736, z: 0.990915 },
    lab: { L: 96.0687, a: 5.8874, b: -0.5937 }
  },
  lawngreen: {
    rgb: { red: 124, green: 252, blue: 0 },
    hsl: { hue: 90.476, saturation: 1, lightness: 0.494118 },
    hsv: { hue: 90.476, saturation: 1, value: 0.988235 },
    cieXyz: { x: 0.431214, y: 0.739027, z: 0.119924 },
    lab: { L: 88.8766, a: -67.8559, b: 84.9526 }
  },
  lemonchiffon: {
    rgb: { red: 255, green: 250, blue: 205 },
    hsl: { hue: 54, saturation: 1, lightness: 0.901961 },
    hsv: { hue: 54, saturation: 0.196078, value: 1 },
    cieXyz: { x: 0.864446, y: 0.940402, z: 0.713435 },
    lab: { L: 97.6482, a: -5.4268, b: 22.2338 }
  },
  lightblue: {
    rgb: { red: 173, green: 216, blue: 230 },
    hsl: { hue: 194.737, saturation: 0.53271, lightness: 0.790196 },
    hsv: { hue: 194.737, saturation: 0.247826, value: 0.901961 },
    cieXyz: { x: 0.560681, y: 0.637069, z: 0.8419 },
    lab: { L: 83.8129, a: -10.8917, b: -11.4767 }
  },
  lightcoral: {
    rgb: { red: 240, green: 128, blue: 128 },
    hsl: { hue: 0, saturation: 0.788732, lightness: 0.721569 },
    hsv: { hue: 0, saturation: 0.466667, value: 0.941176 },
    cieXyz: { x: 0.475537, y: 0.355269, z: 0.247709 },
    lab: { L: 66.1569, a: 42.8098, b: 19.5568 }
  },
  lightcyan: {
    rgb: { red: 224, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.939216 },
    hsv: { hue: 180, saturation: 0.121569, value: 1 },
    cieXyz: { x: 0.84546, y: 0.945854, z: 1.083908 },
    lab: { L: 97.8674, a: -9.9445, b: -3.375 }
  },
  lightgoldenrodyellow: {
    rgb: { red: 250, green: 250, blue: 210 },
    hsl: { hue: 60, saturation: 0.8, lightness: 0.901961 },
    hsv: { hue: 60, saturation: 0.16, value: 0.980392 },
    cieXyz: { x: 0.852419, y: 0.933491, z: 0.744879 },
    lab: { L: 97.3691, a: -6.4811, b: 19.2372 }
  },
  lightgray: {
    rgb: { red: 211, green: 211, blue: 211 },
    hsl: { hue: 0, saturation: 0, lightness: 0.827451 },
    hsv: { hue: 0, saturation: 0, value: 0.827451 },
    cieXyz: { x: 0.619142, y: 0.651406, z: 0.70927 },
    lab: { L: 84.5561, a: 0, b: 0 }
  },
  lightgreen: {
    rgb: { red: 144, green: 238, blue: 144 },
    hsl: { hue: 120, saturation: 0.734375, lightness: 0.74902 },
    hsv: { hue: 120, saturation: 0.394958, value: 0.933333 },
    cieXyz: { x: 0.47108, y: 0.690892, z: 0.372335 },
    lab: { L: 86.5482, a: -46.3279, b: 36.949 }
  },
  lightgrey: {
    rgb: { red: 211, green: 211, blue: 211 },
    hsl: { hue: 0, saturation: 0, lightness: 0.827451 },
    hsv: { hue: 0, saturation: 0, value: 0.827451 },
    cieXyz: { x: 0.619142, y: 0.651406, z: 0.70927 },
    lab: { L: 84.5561, a: 0, b: 0 }
  },
  lightpink: {
    rgb: { red: 255, green: 182, blue: 193 },
    hsl: { hue: 350.959, saturation: 1, lightness: 0.856863 },
    hsv: { hue: 350.959, saturation: 0.286275, value: 1 },
    cieXyz: { x: 0.675948, y: 0.585699, z: 0.581865 },
    lab: { L: 81.0546, a: 27.9626, b: 5.036 }
  },
  lightsalmon: {
    rgb: { red: 255, green: 160, blue: 122 },
    hsl: { hue: 17.143, saturation: 1, lightness: 0.739216 },
    hsv: { hue: 17.143, saturation: 0.521569, value: 1 },
    cieXyz: { x: 0.573272, y: 0.478119, z: 0.24618 },
    lab: { L: 74.7062, a: 31.4773, b: 34.5487 }
  },
  lightseagreen: {
    rgb: { red: 32, green: 178, blue: 170 },
    hsl: { hue: 176.712, saturation: 0.695238, lightness: 0.411765 },
    hsv: { hue: 176.712, saturation: 0.820225, value: 0.698039 },
    cieXyz: { x: 0.237683, y: 0.350471, z: 0.435345 },
    lab: { L: 65.7853, a: -37.5142, b: -6.3305 }
  },
  lightskyblue: {
    rgb: { red: 135, green: 206, blue: 250 },
    hsl: { hue: 202.957, saturation: 0.92, lightness: 0.754902 },
    hsv: { hue: 202.957, saturation: 0.46, value: 0.980392 },
    cieXyz: { x: 0.493122, y: 0.561921, z: 0.986716 },
    lab: { L: 79.7228, a: -10.8306, b: -28.5022 }
  },
  lightslategray: {
    rgb: { red: 119, green: 136, blue: 153 },
    hsl: { hue: 210, saturation: 0.142857, lightness: 0.533333 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.6 },
    cieXyz: { x: 0.221601, y: 0.238295, z: 0.335628 },
    lab: { L: 55.9167, a: -2.2477, b: -11.108 }
  },
  lightslategrey: {
    rgb: { red: 119, green: 136, blue: 153 },
    hsl: { hue: 210, saturation: 0.142857, lightness: 0.533333 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.6 },
    cieXyz: { x: 0.221601, y: 0.238295, z: 0.335628 },
    lab: { L: 55.9167, a: -2.2477, b: -11.108 }
  },
  lightsteelblue: {
    rgb: { red: 176, green: 196, blue: 222 },
    hsl: { hue: 213.913, saturation: 0.410714, lightness: 0.780392 },
    hsv: { hue: 213.913, saturation: 0.207207, value: 0.870588 },
    cieXyz: { x: 0.508258, y: 0.539826, z: 0.768349 },
    lab: { L: 78.4516, a: -1.2816, b: -15.211 }
  },
  lightyellow: {
    rgb: { red: 255, green: 255, blue: 224 },
    hsl: { hue: 60, saturation: 1, lightness: 0.939216 },
    hsv: { hue: 60, saturation: 0.121569, value: 1 },
    cieXyz: { x: 0.904531, y: 0.981625, z: 0.846887 },
    lab: { L: 99.2851, a: -5.1073, b: 14.8377 }
  },
  limegreen: {
    rgb: { red: 50, green: 205, blue: 50 },
    hsl: { hue: 120, saturation: 0.607843, lightness: 0.5 },
    hsv: { hue: 120, saturation: 0.756098, value: 0.803922 },
    cieXyz: { x: 0.23721, y: 0.445683, z: 0.103694 },
    lab: { L: 72.6067, a: -67.1255, b: 61.4372 }
  },
  linen: {
    rgb: { red: 250, green: 240, blue: 230 },
    hsl: { hue: 30, saturation: 0.666667, lightness: 0.941176 },
    hsv: { hue: 30, saturation: 0.08, value: 0.980392 },
    cieXyz: { x: 0.848657, y: 0.883582, z: 0.874316 },
    lab: { L: 95.3115, a: 1.6775, b: 6.0222 }
  },
  mediumaquamarine: {
    rgb: { red: 102, green: 205, blue: 170 },
    hsl: { hue: 159.612, saturation: 0.507389, lightness: 0.601961 },
    hsv: { hue: 159.612, saturation: 0.502439, value: 0.803922 },
    cieXyz: { x: 0.345633, y: 0.493867, z: 0.457336 },
    lab: { L: 75.6913, a: -38.3355, b: 8.3077 }
  },
  mediumblue: {
    rgb: { red: 0, green: 0, blue: 205 },
    hsl: { hue: 240, saturation: 1, lightness: 0.401961 },
    hsv: { hue: 240, saturation: 1, value: 0.803922 },
    cieXyz: { x: 0.110156, y: 0.044063, z: 0.580156 },
    lab: { L: 24.9714, a: 67.1766, b: -91.5002 }
  },
  mediumorchid: {
    rgb: { red: 186, green: 85, blue: 211 },
    hsl: { hue: 288.095, saturation: 0.588785, lightness: 0.580392 },
    hsv: { hue: 288.095, saturation: 0.597156, value: 0.827451 },
    cieXyz: { x: 0.352546, y: 0.216408, z: 0.639354 },
    lab: { L: 53.6437, a: 59.0603, b: -47.4025 }
  },
  mediumpurple: {
    rgb: { red: 147, green: 112, blue: 219 },
    hsl: { hue: 259.626, saturation: 0.597765, lightness: 0.64902 },
    hsv: { hue: 259.626, saturation: 0.488584, value: 0.858824 },
    cieXyz: { x: 0.306098, y: 0.229054, z: 0.698126 },
    lab: { L: 54.9748, a: 36.7976, b: -50.0894 }
  },
  mediumseagreen: {
    rgb: { red: 60, green: 179, blue: 113 },
    hsl: { hue: 146.723, saturation: 0.497908, lightness: 0.468627 },
    hsv: { hue: 146.723, saturation: 0.664804, value: 0.701961 },
    cieXyz: { x: 0.209624, y: 0.343909, z: 0.211529 },
    lab: { L: 65.2716, a: -48.218, b: 24.2899 }
  },
  mediumslateblue: {
    rgb: { red: 123, green: 104, blue: 238 },
    hsl: { hue: 248.507, saturation: 0.797619, lightness: 0.670588 },
    hsv: { hue: 248.507, saturation: 0.563025, value: 0.933333 },
    cieXyz: { x: 0.285468, y: 0.202833, z: 0.832832 },
    lab: { L: 52.1559, a: 41.0682, b: -65.3964 }
  },
  mediumspringgreen: {
    rgb: { red: 0, green: 250, blue: 154 },
    hsl: { hue: 156.96, saturation: 1, lightness: 0.490196 },
    hsv: { hue: 156.96, saturation: 1, value: 0.980392 },
    cieXyz: { x: 0.40014, y: 0.706989, z: 0.421029 },
    lab: { L: 87.3385, a: -70.6865, b: 32.4628 }
  },
  mediumturquoise: {
    rgb: { red: 72, green: 209, blue: 204 },
    hsl: { hue: 177.81, saturation: 0.598253, lightness: 0.55098 },
    hsv: { hue: 177.81, saturation: 0.655502, value: 0.819608 },
    cieXyz: { x: 0.363671, y: 0.513342, z: 0.651069 },
    lab: { L: 76.881, a: -37.3603, b: -8.3545 }
  },
  mediumvioletred: {
    rgb: { red: 199, green: 21, blue: 133 },
    hsl: { hue: 322.247, saturation: 0.809091, lightness: 0.431373 },
    hsv: { hue: 322.247, saturation: 0.894472, value: 0.780392 },
    cieXyz: { x: 0.280567, y: 0.143754, z: 0.23483 },
    lab: { L: 44.7667, a: 70.9922, b: -15.1695 }
  },
  midnightblue: {
    rgb: { red: 25, green: 25, blue: 112 },
    hsl: { hue: 240, saturation: 0.635036, lightness: 0.268627 },
    hsv: { hue: 240, saturation: 0.776786, value: 0.439216 },
    cieXyz: { x: 0.036722, y: 0.020714, z: 0.155324 },
    lab: { L: 15.8576, a: 31.7133, b: -49.5745 }
  },
  mintcream: {
    rgb: { red: 245, green: 255, blue: 250 },
    hsl: { hue: 150, saturation: 1, lightness: 0.980392 },
    hsv: { hue: 150, saturation: 0.039216, value: 1 },
    cieXyz: { x: 0.906683, y: 0.978341, z: 1.045311 },
    lab: { L: 99.1564, a: -4.163, b: 1.2464 }
  },
  mistyrose: {
    rgb: { red: 255, green: 228, blue: 225 },
    hsl: { hue: 6, saturation: 1, lightness: 0.941176 },
    hsv: { hue: 6, saturation: 0.117647, value: 1 },
    cieXyz: { x: 0.825731, y: 0.821847, z: 0.82733 },
    lab: { L: 92.6563, a: 8.7472, b: 4.8358 }
  },
  moccasin: {
    rgb: { red: 255, green: 228, blue: 181 },
    hsl: { hue: 38.108, saturation: 1, lightness: 0.854902 },
    hsv: { hue: 38.108, saturation: 0.290196, value: 1 },
    cieXyz: { x: 0.773248, y: 0.800854, z: 0.550919 },
    lab: { L: 91.7231, a: 2.4394, b: 26.3598 }
  },
  navajowhite: {
    rgb: { red: 255, green: 222, blue: 173 },
    hsl: { hue: 35.854, saturation: 1, lightness: 0.839216 },
    hsv: { hue: 35.854, saturation: 0.321569, value: 1 },
    cieXyz: { x: 0.749054, y: 0.765224, z: 0.503517 },
    lab: { L: 90.1015, a: 4.5099, b: 28.2723 }
  },
  oldlace: {
    rgb: { red: 253, green: 245, blue: 230 },
    hsl: { hue: 39.13, saturation: 0.851852, lightness: 0.947059 },
    hsv: { hue: 39.13, saturation: 0.090909, value: 0.992157 },
    cieXyz: { x: 0.874418, y: 0.919015, z: 0.879798 },
    lab: { L: 96.78, a: 0.171, b: 8.1661 }
  },
  olivedrab: {
    rgb: { red: 107, green: 142, blue: 35 },
    hsl: { hue: 79.626, saturation: 0.60452, lightness: 0.347059 },
    hsv: { hue: 79.626, saturation: 0.753521, value: 0.556863 },
    cieXyz: { x: 0.160399, y: 0.225929, z: 0.051056 },
    lab: { L: 54.6506, a: -28.2217, b: 49.6908 }
  },
  orange: {
    rgb: { red: 255, green: 165, blue: 0 },
    hsl: { hue: 38.824, saturation: 1, lightness: 0.5 },
    hsv: { hue: 38.824, saturation: 1, value: 1 },
    cieXyz: { x: 0.546999, y: 0.481758, z: 0.064181 },
    lab: { L: 74.9361, a: 23.9321, b: 78.9501 }
  },
  orangered: {
    rgb: { red: 255, green: 69, blue: 0 },
    hsl: { hue: 16.235, saturation: 1, lightness: 0.5 },
    hsv: { hue: 16.235, saturation: 1, value: 1 },
    cieXyz: { x: 0.433736, y: 0.255232, z: 0.026427 },
    lab: { L: 57.5816, a: 67.7832, b: 68.9585 }
  },
  orchid: {
    rgb: { red: 218, green: 112, blue: 214 },
    hsl: { hue: 302.264, saturation: 0.588889, lightness: 0.647059 },
    hsv: { hue: 302.264, saturation: 0.486239, value: 0.854902 },
    cieXyz: { x: 0.468446, y: 0.313515, z: 0.671893 },
    lab: { L: 62.8032, a: 55.2824, b: -34.4046 }
  },
  palegoldenrod: {
    rgb: { red: 238, green: 232, blue: 170 },
    hsl: { hue: 54.706, saturation: 0.666667, lightness: 0.8 },
    hsv: { hue: 54.706, saturation: 0.285714, value: 0.933333 },
    cieXyz: { x: 0.713726, y: 0.78794, z: 0.494714 },
    lab: { L: 91.141, a: -7.3492, b: 30.9714 }
  },
  palegreen: {
    rgb: { red: 152, green: 251, blue: 152 },
    hsl: { hue: 120, saturation: 0.925234, lightness: 0.790196 },
    hsv: { hue: 120, saturation: 0.394422, value: 0.984314 },
    cieXyz: { x: 0.531111, y: 0.779337, z: 0.419438 },
    lab: { L: 90.7496, a: -48.2968, b: 38.5278 }
  },
  paleturquoise: {
    rgb: { red: 175, green: 238, blue: 238 },
    hsl: { hue: 180, saturation: 0.649485, lightness: 0.809804 },
    hsv: { hue: 180, saturation: 0.264706, value: 0.933333 },
    cieXyz: { x: 0.636814, y: 0.76433, z: 0.9227 },
    lab: { L: 90.06, a: -19.6384, b: -6.3999 }
  },
  palevioletred: {
    rgb: { red: 219, green: 112, blue: 147 },
    hsl: { hue: 340.374, saturation: 0.597765, lightness: 0.64902 },
    hsv: { hue: 340.374, saturation: 0.488584, value: 0.858824 },
    cieXyz: { x: 0.402758, y: 0.287587, z: 0.310279 },
    lab: { L: 60.5681, a: 45.5189, b: 0.4024 }
  },
  papayawhip: {
    rgb: { red: 255, green: 239, blue: 213 },
    hsl: { hue: 37.143, saturation: 1, lightness: 0.917647 },
    hsv: { hue: 37.143, saturation: 0.164706, value: 1 },
    cieXyz: { x: 0.841162, y: 0.877986, z: 0.754536 },
    lab: { L: 95.0761, a: 1.2707, b: 14.5255 }
  },
  peachpuff: {
    rgb: { red: 255, green: 218, blue: 185 },
    hsl: { hue: 28.286, saturation: 1, lightness: 0.862745 },
    hsv: { hue: 28.286, saturation: 0.27451, value: 1 },
    cieXyz: { x: 0.750693, y: 0.749083, z: 0.56394 },
    lab: { L: 89.3501, a: 8.085, b: 21.0226 }
  },
  peru: {
    rgb: { red: 205, green: 133, blue: 63 },
    hsl: { hue: 29.577, saturation: 0.586777, lightness: 0.52549 },
    hsv: { hue: 29.577, saturation: 0.692683, value: 0.803922 },
    cieXyz: { x: 0.344641, y: 0.301163, z: 0.086996 },
    lab: { L: 61.7541, a: 21.3962, b: 47.9181 }
  },
  pink: {
    rgb: { red: 255, green: 192, blue: 203 },
    hsl: { hue: 349.524, saturation: 1, lightness: 0.876471 },
    hsv: { hue: 349.524, saturation: 0.247059, value: 1 },
    cieXyz: { x: 0.708698, y: 0.632743, z: 0.649685 },
    lab: { L: 83.5866, a: 24.1435, b: 3.326 }
  },
  plum: {
    rgb: { red: 221, green: 160, blue: 221 },
    hsl: { hue: 300, saturation: 0.472868, lightness: 0.747059 },
    hsv: { hue: 300, saturation: 0.276018, value: 0.866667 },
    cieXyz: { x: 0.554395, y: 0.45736, z: 0.743002 },
    lab: { L: 73.3739, a: 32.5308, b: -21.9856 }
  },
  powderblue: {
    rgb: { red: 176, green: 224, blue: 230 },
    hsl: { hue: 186.667, saturation: 0.519231, lightness: 0.796078 },
    hsv: { hue: 186.667, saturation: 0.234783, value: 0.901961 },
    cieXyz: { x: 0.588388, y: 0.682522, z: 0.849214 },
    lab: { L: 86.1323, a: -14.0928, b: -8.0077 }
  },
  rebeccapurple: {
    rgb: { red: 102, green: 51, blue: 153 },
    hsl: { hue: 270, saturation: 0.5, lightness: 0.4 },
    hsv: { hue: 270, saturation: 0.666667, value: 0.6 },
    cieXyz: { x: 0.124118, y: 0.074924, z: 0.309231 },
    lab: { L: 32.9025, a: 42.8831, b: -47.1486 }
  },
  rosybrown: {
    rgb: { red: 188, green: 143, blue: 143 },
    hsl: { hue: 0, saturation: 0.251397, lightness: 0.64902 },
    hsv: { hue: 0, saturation: 0.239362, value: 0.737255 },
    cieXyz: { x: 0.355199, y: 0.323211, z: 0.303489 },
    lab: { L: 63.6074, a: 17.0127, b: 6.6097 }
  },
  royalblue: {
    rgb: { red: 65, green: 105, blue: 225 },
    hsl: { hue: 225, saturation: 0.727273, lightness: 0.568627 },
    hsv: { hue: 225, saturation: 0.711111, value: 0.882353 },
    cieXyz: { x: 0.208174, y: 0.16661, z: 0.733384 },
    lab: { L: 47.83, a: 26.2632, b: -65.2638 }
  },
  saddlebrown: {
    rgb: { red: 139, green: 69, blue: 19 },
    hsl: { hue: 25, saturation: 0.759494, lightness: 0.309804 },
    hsv: { hue: 25, saturation: 0.863309, value: 0.545098 },
    cieXyz: { x: 0.128944, y: 0.097938, z: 0.018273 },
    lab: { L: 37.4698, a: 26.4426, b: 40.9838 }
  },
  salmon: {
    rgb: { red: 250, green: 128, blue: 114 },
    hsl: { hue: 6.176, saturation: 0.931507, lightness: 0.713725 },
    hsv: { hue: 6.176, saturation: 0.544, value: 0.980392 },
    cieXyz: { x: 0.501846, y: 0.369828, z: 0.204119 },
    lab: { L: 67.2638, a: 45.2271, b: 29.0941 }
  },
  sandybrown: {
    rgb: { red: 244, green: 164, blue: 96 },
    hsl: { hue: 27.568, saturation: 0.870588, lightness: 0.666667 },
    hsv: { hue: 27.568, saturation: 0.606557, value: 0.956863 },
    cieXyz: { x: 0.526985, y: 0.466331, z: 0.172897 },
    lab: { L: 73.9547, a: 23.0264, b: 46.7915 }
  },
  seagreen: {
    rgb: { red: 46, green: 139, blue: 87 },
    hsl: { hue: 146.452, saturation: 0.502703, lightness: 0.362745 },
    hsv: { hue: 146.452, saturation: 0.669065, value: 0.545098 },
    cieXyz: { x: 0.120786, y: 0.197329, z: 0.121873 },
    lab: { L: 51.5339, a: -39.7152, b: 20.0519 }
  },
  seashell: {
    rgb: { red: 255, green: 245, blue: 238 },
    hsl: { hue: 24.706, saturation: 1, lightness: 0.966667 },
    hsv: { hue: 24.706, saturation: 0.066667, value: 1 },
    cieXyz: { x: 0.893231, y: 0.927387, z: 0.940671 },
    lab: { L: 97.1215, a: 2.1622, b: 4.5541 }
  },
  sienna: {
    rgb: { red: 160, green: 82, blue: 45 },
    hsl: { hue: 19.304, saturation: 0.560976, lightness: 0.401961 },
    hsv: { hue: 19.304, saturation: 0.71875, value: 0.627451 },
    cieXyz: { x: 0.179898, y: 0.136997, z: 0.041791 },
    lab: { L: 43.7991, a: 29.3227, b: 35.6383 }
  },
  skyblue: {
    rgb: { red: 135, green: 206, blue: 235 },
    hsl: { hue: 197.4, saturation: 0.714286, lightness: 0.72549 },
    hsv: { hue: 197.4, saturation: 0.425532, value: 0.921569 },
    cieXyz: { x: 0.470531, y: 0.552884, z: 0.867734 },
    lab: { L: 79.2071, a: -14.839, b: -21.2765 }
  },
  slateblue: {
    rgb: { red: 106, green: 90, blue: 205 },
    hsl: { hue: 248.348, saturation: 0.534884, lightness: 0.578431 },
    hsv: { hue: 248.348, saturation: 0.560976, value: 0.803922 },
    cieXyz: { x: 0.206162, y: 0.147833, z: 0.595129 },
    lab: { L: 45.3359, a: 36.0396, b: -57.772 }
  },
  slategray: {
    rgb: { red: 112, green: 128, blue: 144 },
    hsl: { hue: 210, saturation: 0.125984, lightness: 0.501961 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.564706 },
    cieXyz: { x: 0.19434, y: 0.208962, z: 0.293896 },
    lab: { L: 52.8357, a: -2.1428, b: -10.571 }
  },
  slategrey: {
    rgb: { red: 112, green: 128, blue: 144 },
    hsl: { hue: 210, saturation: 0.125984, lightness: 0.501961 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.564706 },
    cieXyz: { x: 0.19434, y: 0.208962, z: 0.293896 },
    lab: { L: 52.8357, a: -2.1428, b: -10.571 }
  },
  snow: {
    rgb: { red: 255, green: 250, blue: 250 },
    hsl: { hue: 0, saturation: 1, lightness: 0.990196 },
    hsv: { hue: 0, saturation: 0.019608, value: 1 },
    cieXyz: { x: 0.926783, y: 0.965337, z: 1.041744 },
    lab: { L: 98.6439, a: 1.6568, b: 0.5875 }
  },
  springgreen: {
    rgb: { red: 0, green: 255, blue: 127 },
    hsl: { hue: 149.882, saturation: 1, lightness: 0.5 },
    hsv: { hue: 149.882, saturation: 1, value: 1 },
    cieXyz: { x: 0.39587, y: 0.73047, z: 0.320876 },
    lab: { L: 88.4701, a: -76.902, b: 47.0285 }
  },
  steelblue: {
    rgb: { red: 70, green: 130, blue: 180 },
    hsl: { hue: 207.273, saturation: 0.44, lightness: 0.490196 },
    hsv: { hue: 207.273, saturation: 0.611111, value: 0.705882 },
    cieXyz: { x: 0.187436, y: 0.205609, z: 0.46152 },
    lab: { L: 52.4654, a: -4.0772, b: -32.1921 }
  },
  tan: {
    rgb: { red: 210, green: 180, blue: 140 },
    hsl: { hue: 34.286, saturation: 0.4375, lightness: 0.686275 },
    hsv: { hue: 34.286, saturation: 0.333333, value: 0.823529 },
    cieXyz: { x: 0.476341, y: 0.482395, z: 0.316079 },
    lab: { L: 74.9758, a: 5.0211, b: 24.4282 }
  },
  thistle: {
    rgb: { red: 216, green: 191, blue: 216 },
    hsl: { hue: 300, saturation: 0.242718, lightness: 0.798039 },
    hsv: { hue: 300, saturation: 0.115741, value: 0.847059 },
    cieXyz: { x: 0.593427, y: 0.568192, z: 0.727935 },
    lab: { L: 80.0778, a: 13.2176, b: -9.2289 }
  },
  tomato: {
    rgb: { red: 255, green: 99, blue: 71 },
    hsl: { hue: 9.13, saturation: 1, lightness: 0.639216 },
    hsv: { hue: 9.13, saturation: 0.721569, value: 1 },
    cieXyz: { x: 0.468441, y: 0.306451, z: 0.094084 },
    lab: { L: 62.2067, a: 57.8518, b: 46.4195 }
  },
  turquoise: {
    rgb: { red: 64, green: 224, blue: 208 },
    hsl: { hue: 174, saturation: 0.720721, lightness: 0.564706 },
    hsv: { hue: 174, saturation: 0.714286, value: 0.878431 },
    cieXyz: { x: 0.401497, y: 0.589506, z: 0.689249 },
    lab: { L: 81.2644, a: -44.0819, b: -4.0284 }
  },
  violet: {
    rgb: { red: 238, green: 130, blue: 238 },
    hsl: { hue: 300, saturation: 0.760563, lightness: 0.721569 },
    hsv: { hue: 300, saturation: 0.453782, value: 0.933333 },
    cieXyz: { x: 0.586741, y: 0.403185, z: 0.85564 },
    lab: { L: 69.6958, a: 56.3566, b: -36.8098 }
  },
  wheat: {
    rgb: { red: 245, green: 222, blue: 179 },
    hsl: { hue: 39.091, saturation: 0.767442, lightness: 0.831373 },
    hsv: { hue: 39.091, saturation: 0.269388, value: 0.960784 },
    cieXyz: { x: 0.719147, y: 0.749117, z: 0.533102 },
    lab: { L: 89.3517, a: 1.5115, b: 24.0078 }
  },
  whitesmoke: {
    rgb: { red: 245, green: 245, blue: 245 },
    hsl: { hue: 0, saturation: 0, lightness: 0.960784 },
    hsv: { hue: 0, saturation: 0, value: 0.960784 },
    cieXyz: { x: 0.867873, y: 0.913099, z: 0.994209 },
    lab: { L: 96.5375, a: 0, b: 0 }
  },
  yellowgreen: {
    rgb: { red: 154, green: 205, blue: 50 },
    hsl: { hue: 79.742, saturation: 0.607843, lightness: 0.5 },
    hsv: { hue: 79.742, saturation: 0.756098, value: 0.803922 },
    cieXyz: { x: 0.357336, y: 0.507623, z: 0.109325 },
    lab: { L: 76.5348, a: -37.988, b: 66.5856 }
  }
};
