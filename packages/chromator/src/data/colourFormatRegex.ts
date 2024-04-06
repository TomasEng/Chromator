import { type StringColourFormat } from '../types/StringColourFormat';

export const colourFormatRegex: { [key in StringColourFormat]: RegExp } = {
  hsl: /^hsl\s*\(\s*(?<hue>(-?\d*\.?\d*(|deg|turn|rad|grad))|none)\s*,\s*(?<saturation>(\d*\.?\d*%?)|none)\s*,\s*(?<lightness>(\d*\.?\d*%?)|none)\s*\)$/i,
  hsla: /^hsla\s*\(\s*(?<hue>(-?\d*\.?\d*(|deg|turn|rad|grad))|none)\s*,\s*(?<saturation>(\d*\.?\d*%?)|none)\s*,\s*(?<lightness>(\d*\.?\d*%?)|none)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,
  lab: /^lab\s*\(\s*(?<L>(\d*\.?\d*%?)|none)\s+(?<a>(-?\d*\.?\d*%?)|none)\s+(?<b>(-?\d*\.?\d*%?)|none)\s*(\/\s*(?<alpha>(\+?\d*\.?\d*%?)|none)\s*)?\)$/i,
  lch: /^lch\s*\(\s*(?<L>(\d*\.?\d*%?)|none)\s+(?<chroma>(\d*\.?\d*%?)|none)\s+(?<hue>(-?\d*\.?\d*(|deg|turn|grad|rad))|none)\s*(\/\s*(?<alpha>(\+?\d*\.?\d*%?)|none)\s*)?\)$/i,
  oklab: /^oklab\s*\(\s*(?<l>(\+?\d*\.?\d*%?)|none)\s+(?<a>([+-]?\d*\.?\d*%?)|none)\s+(?<b>([+-]?\d*\.?\d*%?)|none)\s*(\/\s*(?<alpha>(\+?\d*\.?\d*%?)|none)\s*)?\)$/i,
  oklch: /^oklch\s*\(\s*(?<l>(\+?\d*\.?\d*%?)|none)\s+(?<chroma>(\+?\d*\.?\d*%?)|none)\s+(?<hue>([+-]?\d*\.?\d*(|deg|turn|grad|rad))|none)\s*(\/\s*(?<alpha>(\+?\d*\.?\d*%?)|none)\s*)?\)$/i,
  namedColour: /[\w-]+/i,
  namedTransparent: /transparent/i,
  rgbDecimal: /^rgb\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*\)$/i,
  rgbHexLongWithHash: /^#[0-9a-fA-F]{6}$/i,
  rgbHexLongWithoutHash: /^[0-9a-fA-F]{6}$/i,
  rgbHexShortWithHash: /^#[0-9a-f]{3}$/i,
  rgbHexShortWithoutHash: /^[0-9a-f]{3}$/i,
  rgbaDecimal: /^rgba\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,
  rgbaHexLongWithHash: /^#[0-9a-f]{8}$/i,
  rgbaHexLongWithoutHash: /^[0-9a-f]{8}$/i,
  rgbaHexShortWithHash: /^#[0-9a-fA-F]{4}$/i,
  rgbaHexShortWithoutHash: /^[0-9a-fA-F]{4}$/i
};
