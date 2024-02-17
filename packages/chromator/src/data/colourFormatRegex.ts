import { ColourCodeFormat } from '../enums/ColourCodeFormat';
import { type StringColourFormat } from '../types/StringColourFormat';

export const colourFormatRegex: { [key in StringColourFormat]: RegExp } = {
  [ColourCodeFormat.HslString]: /^hsl\s*\(\s*(?<hue>\d*\.?\d*)\s*,\s*(?<saturation>\d*\.?\d*%?)\s*,\s*(?<lightness>\d*\.?\d*%?)\s*\)$/,
  [ColourCodeFormat.HslaString]: /^hsla\s*\(\s*(?<hue>\d*\.?\d*)\s*,\s*(?<saturation>\d*\.?\d*%?)\s*,\s*(?<lightness>\d*\.?\d*%?)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/,
  [ColourCodeFormat.NamedColour]: /[\w-]+/,
  [ColourCodeFormat.NamedTransparent]: /transparent/,
  [ColourCodeFormat.Rgb255String]: /^rgb\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*\)$/,
  [ColourCodeFormat.RgbHexLongWithHash]: /^#[0-9a-fA-F]{6}$/,
  [ColourCodeFormat.RgbHexLongWithoutHash]: /^[0-9a-fA-F]{6}$/,
  [ColourCodeFormat.RgbHexShortWithHash]: /^#[0-9a-fA-F]{3}$/,
  [ColourCodeFormat.RgbHexShortWithoutHash]: /^[0-9a-fA-F]{3}$/,
  [ColourCodeFormat.Rgba255String]: /^rgba\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/,
  [ColourCodeFormat.RgbaHexLongWithHash]: /^#[0-9a-fA-F]{8}$/,
  [ColourCodeFormat.RgbaHexLongWithoutHash]: /^[0-9a-fA-F]{8}$/,
  [ColourCodeFormat.RgbaHexShortWithHash]: /^#[0-9a-fA-F]{4}$/,
  [ColourCodeFormat.RgbaHexShortWithoutHash]: /^[0-9a-fA-F]{4}$/
};
