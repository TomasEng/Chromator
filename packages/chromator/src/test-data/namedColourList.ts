import { NamedColour } from '../types/NamedColour';
import { Rgb } from '../types/Rgb';
import { Hsl } from '../types/Hsl';
import { Hsv } from '../types/Hsv';

type TestData = {
  [colour in NamedColour]: {
    rgb: Rgb;
    hsl: Hsl;
    hsv: Hsv;
  }
};

export const testColours: TestData = {
  black: {
    rgb: { red: 0, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 0, lightness: 0 },
    hsv: { hue: 0, saturation: 0, value: 0 },
  },
  silver: {
    rgb: { red: 192, green: 192, blue: 192 },
    hsl: { hue: 0, saturation: 0, lightness: 0.752941 },
    hsv: { hue: 0, saturation: 0, value: 0.752941 },
  },
  grey: {
    rgb: { red: 128, green: 128, blue: 128 },
    hsl: { hue: 0, saturation: 0, lightness: 0.501961 },
    hsv: { hue: 0, saturation: 0, value: 0.501961 },
  },
  white: {
    rgb: { red: 255, green: 255, blue: 255 },
    hsl: { hue: 0, saturation: 0, lightness: 1 },
    hsv: { hue: 0, saturation: 0, value: 1 },
  },
  maroon: {
    rgb: { red: 128, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 0, saturation: 1, value: 0.501961 },
  },
  red: {
    rgb: { red: 255, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 1, lightness: 0.5 },
    hsv: { hue: 0, saturation: 1, value: 1 },
  },
  purple: {
    rgb: { red: 128, green: 0, blue: 128 },
    hsl: { hue: 300, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 300, saturation: 1, value: 0.501961 },
  },
  magenta: {
    rgb: { red: 255, green: 0, blue: 255 },
    hsl: { hue: 300, saturation: 1, lightness: 0.5 },
    hsv: { hue: 300, saturation: 1, value: 1 },
  },
  green: {
    rgb: { red: 0, green: 128, blue: 0 },
    hsl: { hue: 120, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 120, saturation: 1, value: 0.501961 },
  },
  lime: {
    rgb: { red: 0, green: 255, blue: 0 },
    hsl: { hue: 120, saturation: 1, lightness: 0.5 },
    hsv: { hue: 120, saturation: 1, value: 1 },
  },
  olive: {
    rgb: { red: 128, green: 128, blue: 0 },
    hsl: { hue: 60, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 60, saturation: 1, value: 0.501961 },
  },
  yellow: {
    rgb: { red: 255, green: 255, blue: 0 },
    hsl: { hue: 60, saturation: 1, lightness: 0.5 },
    hsv: { hue: 60, saturation: 1, value: 1 },
  },
  navy: {
    rgb: { red: 0, green: 0, blue: 128 },
    hsl: { hue: 240, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 240, saturation: 1, value: 0.501961 },
  },
  blue: {
    rgb: { red: 0, green: 0, blue: 255 },
    hsl: { hue: 240, saturation: 1, lightness: 0.5 },
    hsv: { hue: 240, saturation: 1, value: 1 },
  },
  teal: {
    rgb: { red: 0, green: 128, blue: 128 },
    hsl: { hue: 180, saturation: 1, lightness: 0.25098 },
    hsv: { hue: 180, saturation: 1, value: 0.501961 },
  },
  cyan: {
    rgb: { red: 0, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.5 },
    hsv: { hue: 180, saturation: 1, value: 1 },
  },
  aliceblue: {
    rgb: { red: 240, green: 248, blue: 255 },
    hsl: { hue: 208, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 208, saturation: 0.058824, value: 1 },
  },
  antiquewhite: {
    rgb: { red: 250, green: 235, blue: 215 },
    hsl: { hue: 34.286, saturation: 0.777778, lightness: 0.911765 },
    hsv: { hue: 34.286, saturation: 0.14, value: 0.980392 },
  },
  aqua: {
    rgb: { red: 0, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.5 },
    hsv: { hue: 180, saturation: 1, value: 1 },
  },
  aquamarine: {
    rgb: { red: 127, green: 255, blue: 212 },
    hsl: { hue: 159.844, saturation: 1, lightness: 0.74902 },
    hsv: { hue: 159.844, saturation: 0.501961, value: 1 },
  },
  azure: {
    rgb: { red: 240, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 180, saturation: 0.058824, value: 1 },
  },
  beige: {
    rgb: { red: 245, green: 245, blue: 220 },
    hsl: { hue: 60, saturation: 0.555556, lightness: 0.911765 },
    hsv: { hue: 60, saturation: 0.102041, value: 0.960784 },
  },
  bisque: {
    rgb: { red: 255, green: 228, blue: 196 },
    hsl: { hue: 32.542, saturation: 1, lightness: 0.884314 },
    hsv: { hue: 32.542, saturation: 0.231373, value: 1 },
  },
  blanchedalmond: {
    rgb: { red: 255, green: 235, blue: 205 },
    hsl: { hue: 36, saturation: 1, lightness: 0.901961 },
    hsv: { hue: 36, saturation: 0.196078, value: 1 },
  },
  blueviolet: {
    rgb: { red: 138, green: 43, blue: 226 },
    hsl: { hue: 271.148, saturation: 0.759336, lightness: 0.527451 },
    hsv: { hue: 271.148, saturation: 0.809735, value: 0.886275 },
  },
  brown: {
    rgb: { red: 165, green: 42, blue: 42 },
    hsl: { hue: 0, saturation: 0.594203, lightness: 0.405882 },
    hsv: { hue: 0, saturation: 0.745455, value: 0.647059 },
  },
  burlywood: {
    rgb: { red: 222, green: 184, blue: 135 },
    hsl: { hue: 33.793, saturation: 0.568627, lightness: 0.7 },
    hsv: { hue: 33.793, saturation: 0.391892, value: 0.870588 },
  },
  cadetblue: {
    rgb: { red: 95, green: 158, blue: 160 },
    hsl: { hue: 181.846, saturation: 0.254902, lightness: 0.5 },
    hsv: { hue: 181.846, saturation: 0.40625, value: 0.627451 },
  },
  chartreuse: {
    rgb: { red: 127, green: 255, blue: 0 },
    hsl: { hue: 90.118, saturation: 1, lightness: 0.5 },
    hsv: { hue: 90.118, saturation: 1, value: 1 },
  },
  chocolate: {
    rgb: { red: 210, green: 105, blue: 30 },
    hsl: { hue: 25, saturation: 0.75, lightness: 0.470588 },
    hsv: { hue: 25, saturation: 0.857143, value: 0.823529 },
  },
  coral: {
    rgb: { red: 255, green: 127, blue: 80 },
    hsl: { hue: 16.114, saturation: 1, lightness: 0.656863 },
    hsv: { hue: 16.114, saturation: 0.686275, value: 1 },
  },
  cornflowerblue: {
    rgb: { red: 100, green: 149, blue: 237 },
    hsl: { hue: 218.54, saturation: 0.791908, lightness: 0.660784 },
    hsv: { hue: 218.54, saturation: 0.578059, value: 0.929412 },
  },
  cornsilk: {
    rgb: { red: 255, green: 248, blue: 220 },
    hsl: { hue: 48, saturation: 1, lightness: 0.931373 },
    hsv: { hue: 48, saturation: 0.137255, value: 1 },
  },
  crimson: {
    rgb: { red: 220, green: 20, blue: 60 },
    hsl: { hue: 348, saturation: 0.833333, lightness: 0.470588 },
    hsv: { hue: 348, saturation: 0.909091, value: 0.862745 },
  },
  darkblue: {
    rgb: { red: 0, green: 0, blue: 139 },
    hsl: { hue: 240, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 240, saturation: 1, value: 0.545098 },
  },
  darkcyan: {
    rgb: { red: 0, green: 139, blue: 139 },
    hsl: { hue: 180, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 180, saturation: 1, value: 0.545098 },
  },
  darkgoldenrod: {
    rgb: { red: 184, green: 134, blue: 11 },
    hsl: { hue: 42.659, saturation: 0.887179, lightness: 0.382353 },
    hsv: { hue: 42.659, saturation: 0.940217, value: 0.721569 },
  },
  darkgray: {
    rgb: { red: 169, green: 169, blue: 169 },
    hsl: { hue: 0, saturation: 0, lightness: 0.662745 },
    hsv: { hue: 0, saturation: 0, value: 0.662745 },
  },
  darkgreen: {
    rgb: { red: 0, green: 100, blue: 0 },
    hsl: { hue: 120, saturation: 1, lightness: 0.196078 },
    hsv: { hue: 120, saturation: 1, value: 0.392157 },
  },
  darkgrey: {
    rgb: { red: 169, green: 169, blue: 169 },
    hsl: { hue: 0, saturation: 0, lightness: 0.662745 },
    hsv: { hue: 0, saturation: 0, value: 0.662745 },
  },
  darkkhaki: {
    rgb: { red: 189, green: 183, blue: 107 },
    hsl: { hue: 55.61, saturation: 0.383178, lightness: 0.580392 },
    hsv: { hue: 55.61, saturation: 0.433862, value: 0.741176 },
  },
  darkmagenta: {
    rgb: { red: 139, green: 0, blue: 139 },
    hsl: { hue: 300, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 300, saturation: 1, value: 0.545098 },
  },
  darkolivegreen: {
    rgb: { red: 85, green: 107, blue: 47 },
    hsl: { hue: 82, saturation: 0.38961, lightness: 0.301961 },
    hsv: { hue: 82, saturation: 0.560748, value: 0.419608 },
  },
  darkorange: {
    rgb: { red: 255, green: 140, blue: 0 },
    hsl: { hue: 32.941, saturation: 1, lightness: 0.5 },
    hsv: { hue: 32.941, saturation: 1, value: 1 },
  },
  darkorchid: {
    rgb: { red: 153, green: 50, blue: 204 },
    hsl: { hue: 280.13, saturation: 0.606299, lightness: 0.498039 },
    hsv: { hue: 280.13, saturation: 0.754902, value: 0.8 },
  },
  darkred: {
    rgb: { red: 139, green: 0, blue: 0 },
    hsl: { hue: 0, saturation: 1, lightness: 0.272549 },
    hsv: { hue: 0, saturation: 1, value: 0.545098 },
  },
  darksalmon: {
    rgb: { red: 233, green: 150, blue: 122 },
    hsl: { hue: 15.135, saturation: 0.716129, lightness: 0.696078 },
    hsv: { hue: 15.135, saturation: 0.476395, value: 0.913725 },
  },
  darkseagreen: {
    rgb: { red: 143, green: 188, blue: 143 },
    hsl: { hue: 120, saturation: 0.251397, lightness: 0.64902 },
    hsv: { hue: 120, saturation: 0.239362, value: 0.737255 },
  },
  darkslateblue: {
    rgb: { red: 72, green: 61, blue: 139 },
    hsl: { hue: 248.462, saturation: 0.39, lightness: 0.392157 },
    hsv: { hue: 248.462, saturation: 0.561151, value: 0.545098 },
  },
  darkslategray: {
    rgb: { red: 47, green: 79, blue: 79 },
    hsl: { hue: 180, saturation: 0.253968, lightness: 0.247059 },
    hsv: { hue: 180, saturation: 0.405063, value: 0.309804 },
  },
  darkslategrey: {
    rgb: { red: 47, green: 79, blue: 79 },
    hsl: { hue: 180, saturation: 0.253968, lightness: 0.247059 },
    hsv: { hue: 180, saturation: 0.405063, value: 0.309804 },
  },
  darkturquoise: {
    rgb: { red: 0, green: 206, blue: 209 },
    hsl: { hue: 180.861, saturation: 1, lightness: 0.409804 },
    hsv: { hue: 180.861, saturation: 1, value: 0.819608 },
  },
  darkviolet: {
    rgb: { red: 148, green: 0, blue: 211 },
    hsl: { hue: 282.085, saturation: 1, lightness: 0.413725 },
    hsv: { hue: 282.085, saturation: 1, value: 0.827451 },
  },
  deeppink: {
    rgb: { red: 255, green: 20, blue: 147 },
    hsl: { hue: 327.574, saturation: 1, lightness: 0.539216 },
    hsv: { hue: 327.574, saturation: 0.921569, value: 1 },
  },
  deepskyblue: {
    rgb: { red: 0, green: 191, blue: 255 },
    hsl: { hue: 195.059, saturation: 1, lightness: 0.5 },
    hsv: { hue: 195.059, saturation: 1, value: 1 },
  },
  dimgray: {
    rgb: { red: 105, green: 105, blue: 105 },
    hsl: { hue: 0, saturation: 0, lightness: 0.411765 },
    hsv: { hue: 0, saturation: 0, value: 0.411765 },
  },
  dimgrey: {
    rgb: { red: 105, green: 105, blue: 105 },
    hsl: { hue: 0, saturation: 0, lightness: 0.411765 },
    hsv: { hue: 0, saturation: 0, value: 0.411765 },
  },
  dodgerblue: {
    rgb: { red: 30, green: 144, blue: 255 },
    hsl: { hue: 209.6, saturation: 1, lightness: 0.558824 },
    hsv: { hue: 209.6, saturation: 0.882353, value: 1 },
  },
  firebrick: {
    rgb: { red: 178, green: 34, blue: 34 },
    hsl: { hue: 0, saturation: 0.679245, lightness: 0.415686 },
    hsv: { hue: 0, saturation: 0.808989, value: 0.698039 },
  },
  floralwhite: {
    rgb: { red: 255, green: 250, blue: 240 },
    hsl: { hue: 40, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 40, saturation: 0.058824, value: 1 },
  },
  forestgreen: {
    rgb: { red: 34, green: 139, blue: 34 },
    hsl: { hue: 120, saturation: 0.606936, lightness: 0.339216 },
    hsv: { hue: 120, saturation: 0.755396, value: 0.545098 },
  },
  fuchsia: {
    rgb: { red: 255, green: 0, blue: 255 },
    hsl: { hue: 300, saturation: 1, lightness: 0.5 },
    hsv: { hue: 300, saturation: 1, value: 1 },
  },
  gainsboro: {
    rgb: { red: 220, green: 220, blue: 220 },
    hsl: { hue: 0, saturation: 0, lightness: 0.862745 },
    hsv: { hue: 0, saturation: 0, value: 0.862745 },
  },
  ghostwhite: {
    rgb: { red: 248, green: 248, blue: 255 },
    hsl: { hue: 240, saturation: 1, lightness: 0.986275 },
    hsv: { hue: 240, saturation: 0.027451, value: 1 },
  },
  gold: {
    rgb: { red: 255, green: 215, blue: 0 },
    hsl: { hue: 50.588, saturation: 1, lightness: 0.5 },
    hsv: { hue: 50.588, saturation: 1, value: 1 },
  },
  goldenrod: {
    rgb: { red: 218, green: 165, blue: 32 },
    hsl: { hue: 42.903, saturation: 0.744, lightness: 0.490196 },
    hsv: { hue: 42.903, saturation: 0.853211, value: 0.854902 },
  },
  gray: {
    rgb: { red: 128, green: 128, blue: 128 },
    hsl: { hue: 0, saturation: 0, lightness: 0.501961 },
    hsv: { hue: 0, saturation: 0, value: 0.501961 },
  },
  greenyellow: {
    rgb: { red: 173, green: 255, blue: 47 },
    hsl: { hue: 83.654, saturation: 1, lightness: 0.592157 },
    hsv: { hue: 83.654, saturation: 0.815686, value: 1 },
  },
  honeydew: {
    rgb: { red: 240, green: 255, blue: 240 },
    hsl: { hue: 120, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 120, saturation: 0.058824, value: 1 },
  },
  hotpink: {
    rgb: { red: 255, green: 105, blue: 180 },
    hsl: { hue: 330, saturation: 1, lightness: 0.705882 },
    hsv: { hue: 330, saturation: 0.588235, value: 1 },
  },
  indianred: {
    rgb: { red: 205, green: 92, blue: 92 },
    hsl: { hue: 0, saturation: 0.530516, lightness: 0.582353 },
    hsv: { hue: 0, saturation: 0.55122, value: 0.803922 },
  },
  indigo: {
    rgb: { red: 75, green: 0, blue: 130 },
    hsl: { hue: 274.615, saturation: 1, lightness: 0.254902 },
    hsv: { hue: 274.615, saturation: 1, value: 0.509804 },
  },
  ivory: {
    rgb: { red: 255, green: 255, blue: 240 },
    hsl: { hue: 60, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 60, saturation: 0.058824, value: 1 },
  },
  khaki: {
    rgb: { red: 240, green: 230, blue: 140 },
    hsl: { hue: 54, saturation: 0.769231, lightness: 0.745098 },
    hsv: { hue: 54, saturation: 0.416667, value: 0.941176 },
  },
  lavender: {
    rgb: { red: 230, green: 230, blue: 250 },
    hsl: { hue: 240, saturation: 0.666667, lightness: 0.941176 },
    hsv: { hue: 240, saturation: 0.08, value: 0.980392 },
  },
  lavenderblush: {
    rgb: { red: 255, green: 240, blue: 245 },
    hsl: { hue: 340, saturation: 1, lightness: 0.970588 },
    hsv: { hue: 340, saturation: 0.058824, value: 1 },
  },
  lawngreen: {
    rgb: { red: 124, green: 252, blue: 0 },
    hsl: { hue: 90.476, saturation: 1, lightness: 0.494118 },
    hsv: { hue: 90.476, saturation: 1, value: 0.988235 },
  },
  lemonchiffon: {
    rgb: { red: 255, green: 250, blue: 205 },
    hsl: { hue: 54, saturation: 1, lightness: 0.901961 },
    hsv: { hue: 54, saturation: 0.196078, value: 1 },
  },
  lightblue: {
    rgb: { red: 173, green: 216, blue: 230 },
    hsl: { hue: 194.737, saturation: 0.53271, lightness: 0.790196 },
    hsv: { hue: 194.737, saturation: 0.247826, value: 0.901961 },
  },
  lightcoral: {
    rgb: { red: 240, green: 128, blue: 128 },
    hsl: { hue: 0, saturation: 0.788732, lightness: 0.721569 },
    hsv: { hue: 0, saturation: 0.466667, value: 0.941176 },
  },
  lightcyan: {
    rgb: { red: 224, green: 255, blue: 255 },
    hsl: { hue: 180, saturation: 1, lightness: 0.939216 },
    hsv: { hue: 180, saturation: 0.121569, value: 1 },
  },
  lightgoldenrodyellow: {
    rgb: { red: 250, green: 250, blue: 210 },
    hsl: { hue: 60, saturation: 0.8, lightness: 0.901961 },
    hsv: { hue: 60, saturation: 0.16, value: 0.980392 },
  },
  lightgray: {
    rgb: { red: 211, green: 211, blue: 211 },
    hsl: { hue: 0, saturation: 0, lightness: 0.827451 },
    hsv: { hue: 0, saturation: 0, value: 0.827451 },
  },
  lightgreen: {
    rgb: { red: 144, green: 238, blue: 144 },
    hsl: { hue: 120, saturation: 0.734375, lightness: 0.74902 },
    hsv: { hue: 120, saturation: 0.394958, value: 0.933333 },
  },
  lightgrey: {
    rgb: { red: 211, green: 211, blue: 211 },
    hsl: { hue: 0, saturation: 0, lightness: 0.827451 },
    hsv: { hue: 0, saturation: 0, value: 0.827451 },
  },
  lightpink: {
    rgb: { red: 255, green: 182, blue: 193 },
    hsl: { hue: 350.959, saturation: 1, lightness: 0.856863 },
    hsv: { hue: 350.959, saturation: 0.286275, value: 1 },
  },
  lightsalmon: {
    rgb: { red: 255, green: 160, blue: 122 },
    hsl: { hue: 17.143, saturation: 1, lightness: 0.739216 },
    hsv: { hue: 17.143, saturation: 0.521569, value: 1 },
  },
  lightseagreen: {
    rgb: { red: 32, green: 178, blue: 170 },
    hsl: { hue: 176.712, saturation: 0.695238, lightness: 0.411765 },
    hsv: { hue: 176.712, saturation: 0.820225, value: 0.698039 },
  },
  lightskyblue: {
    rgb: { red: 135, green: 206, blue: 250 },
    hsl: { hue: 202.957, saturation: 0.92, lightness: 0.754902 },
    hsv: { hue: 202.957, saturation: 0.46, value: 0.980392 },
  },
  lightslategray: {
    rgb: { red: 119, green: 136, blue: 153 },
    hsl: { hue: 210, saturation: 0.142857, lightness: 0.533333 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.6 },
  },
  lightslategrey: {
    rgb: { red: 119, green: 136, blue: 153 },
    hsl: { hue: 210, saturation: 0.142857, lightness: 0.533333 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.6 },
  },
  lightsteelblue: {
    rgb: { red: 176, green: 196, blue: 222 },
    hsl: { hue: 213.913, saturation: 0.410714, lightness: 0.780392 },
    hsv: { hue: 213.913, saturation: 0.207207, value: 0.870588 },
  },
  lightyellow: {
    rgb: { red: 255, green: 255, blue: 224 },
    hsl: { hue: 60, saturation: 1, lightness: 0.939216 },
    hsv: { hue: 60, saturation: 0.121569, value: 1 },
  },
  limegreen: {
    rgb: { red: 50, green: 205, blue: 50 },
    hsl: { hue: 120, saturation: 0.607843, lightness: 0.5 },
    hsv: { hue: 120, saturation: 0.756098, value: 0.803922 },
  },
  linen: {
    rgb: { red: 250, green: 240, blue: 230 },
    hsl: { hue: 30, saturation: 0.666667, lightness: 0.941176 },
    hsv: { hue: 30, saturation: 0.08, value: 0.980392 },
  },
  mediumaquamarine: {
    rgb: { red: 102, green: 205, blue: 170 },
    hsl: { hue: 159.612, saturation: 0.507389, lightness: 0.601961 },
    hsv: { hue: 159.612, saturation: 0.502439, value: 0.803922 },
  },
  mediumblue: {
    rgb: { red: 0, green: 0, blue: 205 },
    hsl: { hue: 240, saturation: 1, lightness: 0.401961 },
    hsv: { hue: 240, saturation: 1, value: 0.803922 },
  },
  mediumorchid: {
    rgb: { red: 186, green: 85, blue: 211 },
    hsl: { hue: 288.095, saturation: 0.588785, lightness: 0.580392 },
    hsv: { hue: 288.095, saturation: 0.597156, value: 0.827451 },
  },
  mediumpurple: {
    rgb: { red: 147, green: 112, blue: 219 },
    hsl: { hue: 259.626, saturation: 0.597765, lightness: 0.64902 },
    hsv: { hue: 259.626, saturation: 0.488584, value: 0.858824 },
  },
  mediumseagreen: {
    rgb: { red: 60, green: 179, blue: 113 },
    hsl: { hue: 146.723, saturation: 0.497908, lightness: 0.468627 },
    hsv: { hue: 146.723, saturation: 0.664804, value: 0.701961 },
  },
  mediumslateblue: {
    rgb: { red: 123, green: 104, blue: 238 },
    hsl: { hue: 248.507, saturation: 0.797619, lightness: 0.670588 },
    hsv: { hue: 248.507, saturation: 0.563025, value: 0.933333 },
  },
  mediumspringgreen: {
    rgb: { red: 0, green: 250, blue: 154 },
    hsl: { hue: 156.96, saturation: 1, lightness: 0.490196 },
    hsv: { hue: 156.96, saturation: 1, value: 0.980392 },
  },
  mediumturquoise: {
    rgb: { red: 72, green: 209, blue: 204 },
    hsl: { hue: 177.81, saturation: 0.598253, lightness: 0.55098 },
    hsv: { hue: 177.81, saturation: 0.655502, value: 0.819608 },
  },
  mediumvioletred: {
    rgb: { red: 199, green: 21, blue: 133 },
    hsl: { hue: 322.247, saturation: 0.809091, lightness: 0.431373 },
    hsv: { hue: 322.247, saturation: 0.894472, value: 0.780392 },
  },
  midnightblue: {
    rgb: { red: 25, green: 25, blue: 112 },
    hsl: { hue: 240, saturation: 0.635036, lightness: 0.268627 },
    hsv: { hue: 240, saturation: 0.776786, value: 0.439216 },
  },
  mintcream: {
    rgb: { red: 245, green: 255, blue: 250 },
    hsl: { hue: 150, saturation: 1, lightness: 0.980392 },
    hsv: { hue: 150, saturation: 0.039216, value: 1 },
  },
  mistyrose: {
    rgb: { red: 255, green: 228, blue: 225 },
    hsl: { hue: 6, saturation: 1, lightness: 0.941176 },
    hsv: { hue: 6, saturation: 0.117647, value: 1 },
  },
  moccasin: {
    rgb: { red: 255, green: 228, blue: 181 },
    hsl: { hue: 38.108, saturation: 1, lightness: 0.854902 },
    hsv: { hue: 38.108, saturation: 0.290196, value: 1 },
  },
  navajowhite: {
    rgb: { red: 255, green: 222, blue: 173 },
    hsl: { hue: 35.854, saturation: 1, lightness: 0.839216 },
    hsv: { hue: 35.854, saturation: 0.321569, value: 1 },
  },
  oldlace: {
    rgb: { red: 253, green: 245, blue: 230 },
    hsl: { hue: 39.13, saturation: 0.851852, lightness: 0.947059 },
    hsv: { hue: 39.13, saturation: 0.090909, value: 0.992157 },
  },
  olivedrab: {
    rgb: { red: 107, green: 142, blue: 35 },
    hsl: { hue: 79.626, saturation: 0.60452, lightness: 0.347059 },
    hsv: { hue: 79.626, saturation: 0.753521, value: 0.556863 },
  },
  orange: {
    rgb: { red: 255, green: 165, blue: 0 },
    hsl: { hue: 38.824, saturation: 1, lightness: 0.5 },
    hsv: { hue: 38.824, saturation: 1, value: 1 },
  },
  orangered: {
    rgb: { red: 255, green: 69, blue: 0 },
    hsl: { hue: 16.235, saturation: 1, lightness: 0.5 },
    hsv: { hue: 16.235, saturation: 1, value: 1 },
  },
  orchid: {
    rgb: { red: 218, green: 112, blue: 214 },
    hsl: { hue: 302.264, saturation: 0.588889, lightness: 0.647059 },
    hsv: { hue: 302.264, saturation: 0.486239, value: 0.854902 },
  },
  palegoldenrod: {
    rgb: { red: 238, green: 232, blue: 170 },
    hsl: { hue: 54.706, saturation: 0.666667, lightness: 0.8 },
    hsv: { hue: 54.706, saturation: 0.285714, value: 0.933333 },
  },
  palegreen: {
    rgb: { red: 152, green: 251, blue: 152 },
    hsl: { hue: 120, saturation: 0.925234, lightness: 0.790196 },
    hsv: { hue: 120, saturation: 0.394422, value: 0.984314 },
  },
  paleturquoise: {
    rgb: { red: 175, green: 238, blue: 238 },
    hsl: { hue: 180, saturation: 0.649485, lightness: 0.809804 },
    hsv: { hue: 180, saturation: 0.264706, value: 0.933333 },
  },
  palevioletred: {
    rgb: { red: 219, green: 112, blue: 147 },
    hsl: { hue: 340.374, saturation: 0.597765, lightness: 0.64902 },
    hsv: { hue: 340.374, saturation: 0.488584, value: 0.858824 },
  },
  papayawhip: {
    rgb: { red: 255, green: 239, blue: 213 },
    hsl: { hue: 37.143, saturation: 1, lightness: 0.917647 },
    hsv: { hue: 37.143, saturation: 0.164706, value: 1 },
  },
  peachpuff: {
    rgb: { red: 255, green: 218, blue: 185 },
    hsl: { hue: 28.286, saturation: 1, lightness: 0.862745 },
    hsv: { hue: 28.286, saturation: 0.27451, value: 1 },
  },
  peru: {
    rgb: { red: 205, green: 133, blue: 63 },
    hsl: { hue: 29.577, saturation: 0.586777, lightness: 0.52549 },
    hsv: { hue: 29.577, saturation: 0.692683, value: 0.803922 },
  },
  pink: {
    rgb: { red: 255, green: 192, blue: 203 },
    hsl: { hue: 349.524, saturation: 1, lightness: 0.876471 },
    hsv: { hue: 349.524, saturation: 0.247059, value: 1 },
  },
  plum: {
    rgb: { red: 221, green: 160, blue: 221 },
    hsl: { hue: 300, saturation: 0.472868, lightness: 0.747059 },
    hsv: { hue: 300, saturation: 0.276018, value: 0.866667 },
  },
  powderblue: {
    rgb: { red: 176, green: 224, blue: 230 },
    hsl: { hue: 186.667, saturation: 0.519231, lightness: 0.796078 },
    hsv: { hue: 186.667, saturation: 0.234783, value: 0.901961 },
  },
  rebeccapurple: {
    rgb: { red: 102, green: 51, blue: 153 },
    hsl: { hue: 270, saturation: 0.5, lightness: 0.4 },
    hsv: { hue: 270, saturation: 0.666667, value: 0.6 },
  },
  rosybrown: {
    rgb: { red: 188, green: 143, blue: 143 },
    hsl: { hue: 0, saturation: 0.251397, lightness: 0.64902 },
    hsv: { hue: 0, saturation: 0.239362, value: 0.737255 },
  },
  royalblue: {
    rgb: { red: 65, green: 105, blue: 225 },
    hsl: { hue: 225, saturation: 0.727273, lightness: 0.568627 },
    hsv: { hue: 225, saturation: 0.711111, value: 0.882353 },
  },
  saddlebrown: {
    rgb: { red: 139, green: 69, blue: 19 },
    hsl: { hue: 25, saturation: 0.759494, lightness: 0.309804 },
    hsv: { hue: 25, saturation: 0.863309, value: 0.545098 },
  },
  salmon: {
    rgb: { red: 250, green: 128, blue: 114 },
    hsl: { hue: 6.176, saturation: 0.931507, lightness: 0.713725 },
    hsv: { hue: 6.176, saturation: 0.544, value: 0.980392 },
  },
  sandybrown: {
    rgb: { red: 244, green: 164, blue: 96 },
    hsl: { hue: 27.568, saturation: 0.870588, lightness: 0.666667 },
    hsv: { hue: 27.568, saturation: 0.606557, value: 0.956863 },
  },
  seagreen: {
    rgb: { red: 46, green: 139, blue: 87 },
    hsl: { hue: 146.452, saturation: 0.502703, lightness: 0.362745 },
    hsv: { hue: 146.452, saturation: 0.669065, value: 0.545098 },
  },
  seashell: {
    rgb: { red: 255, green: 245, blue: 238 },
    hsl: { hue: 24.706, saturation: 1, lightness: 0.966667 },
    hsv: { hue: 24.706, saturation: 0.066667, value: 1 },
  },
  sienna: {
    rgb: { red: 160, green: 82, blue: 45 },
    hsl: { hue: 19.304, saturation: 0.560976, lightness: 0.401961 },
    hsv: { hue: 19.304, saturation: 0.71875, value: 0.627451 },
  },
  skyblue: {
    rgb: { red: 135, green: 206, blue: 235 },
    hsl: { hue: 197.4, saturation: 0.714286, lightness: 0.72549 },
    hsv: { hue: 197.4, saturation: 0.425532, value: 0.921569 },
  },
  slateblue: {
    rgb: { red: 106, green: 90, blue: 205 },
    hsl: { hue: 248.348, saturation: 0.534884, lightness: 0.578431 },
    hsv: { hue: 248.348, saturation: 0.560976, value: 0.803922 },
  },
  slategray: {
    rgb: { red: 112, green: 128, blue: 144 },
    hsl: { hue: 210, saturation: 0.125984, lightness: 0.501961 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.564706 },
  },
  slategrey: {
    rgb: { red: 112, green: 128, blue: 144 },
    hsl: { hue: 210, saturation: 0.125984, lightness: 0.501961 },
    hsv: { hue: 210, saturation: 0.222222, value: 0.564706 },
  },
  snow: {
    rgb: { red: 255, green: 250, blue: 250 },
    hsl: { hue: 0, saturation: 1, lightness: 0.990196 },
    hsv: { hue: 0, saturation: 0.019608, value: 1 },
  },
  springgreen: {
    rgb: { red: 0, green: 255, blue: 127 },
    hsl: { hue: 149.882, saturation: 1, lightness: 0.5 },
    hsv: { hue: 149.882, saturation: 1, value: 1 },
  },
  steelblue: {
    rgb: { red: 70, green: 130, blue: 180 },
    hsl: { hue: 207.273, saturation: 0.44, lightness: 0.490196 },
    hsv: { hue: 207.273, saturation: 0.611111, value: 0.705882 },
  },
  tan: {
    rgb: { red: 210, green: 180, blue: 140 },
    hsl: { hue: 34.286, saturation: 0.4375, lightness: 0.686275 },
    hsv: { hue: 34.286, saturation: 0.333333, value: 0.823529 },
  },
  thistle: {
    rgb: { red: 216, green: 191, blue: 216 },
    hsl: { hue: 300, saturation: 0.242718, lightness: 0.798039 },
    hsv: { hue: 300, saturation: 0.115741, value: 0.847059 },
  },
  tomato: {
    rgb: { red: 255, green: 99, blue: 71 },
    hsl: { hue: 9.13, saturation: 1, lightness: 0.639216 },
    hsv: { hue: 9.13, saturation: 0.721569, value: 1 },
  },
  turquoise: {
    rgb: { red: 64, green: 224, blue: 208 },
    hsl: { hue: 174, saturation: 0.720721, lightness: 0.564706 },
    hsv: { hue: 174, saturation: 0.714286, value: 0.878431 },
  },
  violet: {
    rgb: { red: 238, green: 130, blue: 238 },
    hsl: { hue: 300, saturation: 0.760563, lightness: 0.721569 },
    hsv: { hue: 300, saturation: 0.453782, value: 0.933333 },
  },
  wheat: {
    rgb: { red: 245, green: 222, blue: 179 },
    hsl: { hue: 39.091, saturation: 0.767442, lightness: 0.831373 },
    hsv: { hue: 39.091, saturation: 0.269388, value: 0.960784 },
  },
  whitesmoke: {
    rgb: { red: 245, green: 245, blue: 245 },
    hsl: { hue: 0, saturation: 0, lightness: 0.960784 },
    hsv: { hue: 0, saturation: 0, value: 0.960784 },
  },
  yellowgreen: {
    rgb: { red: 154, green: 205, blue: 50 },
    hsl: { hue: 79.742, saturation: 0.607843, lightness: 0.5 },
    hsv: { hue: 79.742, saturation: 0.756098, value: 0.803922 },
  },
};
