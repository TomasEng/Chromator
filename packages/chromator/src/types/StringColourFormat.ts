import { ColourCodeFormat } from '../enums/ColourCodeFormat';

export type StringColourFormat = Extract<
  ColourCodeFormat,
  | ColourCodeFormat.HslString
  | ColourCodeFormat.HslaString
  | ColourCodeFormat.NamedColour
  | ColourCodeFormat.NamedTransparent
  | ColourCodeFormat.Rgb255String
  | ColourCodeFormat.RgbHexLongWithHash
  | ColourCodeFormat.RgbHexLongWithoutHash
  | ColourCodeFormat.RgbHexShortWithHash
  | ColourCodeFormat.RgbHexShortWithoutHash
  | ColourCodeFormat.Rgba255String
  | ColourCodeFormat.RgbaHexLongWithHash
  | ColourCodeFormat.RgbaHexLongWithoutHash
  | ColourCodeFormat.RgbaHexShortWithHash
  | ColourCodeFormat.RgbaHexShortWithoutHash
>;