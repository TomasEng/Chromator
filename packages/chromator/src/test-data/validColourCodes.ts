import { ColourCodeFormat } from '../enums/ColourCodeFormat';
import { ColourCode } from '../types/ColourCode';

export const validColourCodes: { [format in ColourCodeFormat]: ColourCode[] } = {
  [ColourCodeFormat.Rgb255Object]: [
    { red: 0, green: 0, blue: 0 },
    { red: 255, green: 255, blue: 255 },
    { red: 0, green: 0, blue: 255 },
    { red: 255, green: 255, blue: 0 },
  ],
  [ColourCodeFormat.Rgba255Object]: [
    { red: 0, green: 0, blue: 0, alpha: 0 },
    { red: 255, green: 255, blue: 255, alpha: 1 },
    { red: 0, green: 0, blue: 255, alpha: 0.5 },
    { red: 255, green: 255, blue: 0, alpha: 0.25 },
  ],
  [ColourCodeFormat.HslObject]: [
    { hue: 0, saturation: 0, lightness: 0 },
    { hue: 360, saturation: 100, lightness: 100 },
    { hue: 240, saturation: 100, lightness: 50 },
    { hue: 120, saturation: 100, lightness: 50 },
  ],
  [ColourCodeFormat.HslaObject]: [
    { hue: 0, saturation: 0, lightness: 0, alpha: 0 },
    { hue: 360, saturation: 100, lightness: 100, alpha: 1 },
    { hue: 240, saturation: 100, lightness: 50, alpha: 0.5 },
    { hue: 120, saturation: 100, lightness: 50, alpha: 0.25 },
  ],
  [ColourCodeFormat.HsvObject]: [
    { hue: 0, saturation: 0, value: 0 },
    { hue: 360, saturation: 100, value: 100 },
    { hue: 240, saturation: 100, value: 100 },
    { hue: 120, saturation: 100, value: 100 },
  ],
  [ColourCodeFormat.HsvaObject]: [
    { hue: 0, saturation: 0, value: 0, alpha: 0 },
    { hue: 360, saturation: 100, value: 100, alpha: 1 },
    { hue: 240, saturation: 100, value: 100, alpha: 0.5 },
    { hue: 120, saturation: 100, value: 100, alpha: 0.25 },
  ],
  [ColourCodeFormat.NamedColour]: ['red', 'green', 'blue', 'yellow'],
  [ColourCodeFormat.NamedTransparent]: ['transparent'],
  [ColourCodeFormat.Rgb255String]: [
    'rgb(0, 0, 0)',
    'rgb(255, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
  ],
  [ColourCodeFormat.RgbHexLongWithHash]: ['#000000', '#ffffff', '#0000ff', '#ffff00'],
  [ColourCodeFormat.RgbHexLongWithoutHash]: ['000000', 'ffffff', '0000ff', 'ffff00'],
  [ColourCodeFormat.RgbHexShortWithHash]: ['#000', '#fff', '#00f', '#ff0'],
  [ColourCodeFormat.RgbHexShortWithoutHash]: ['000', 'fff', '00f', 'ff0'],
  [ColourCodeFormat.Rgba255String]: [
    'rgba(0, 0, 0, 0)',
    'rgba(255, 255, 255, 1)',
    'rgba(0, 0, 255, 0.5)',
    'rgba(255, 255, 0, 0.25)',
  ],
  [ColourCodeFormat.RgbaHexLongWithHash]: ['#00000000', '#ffffffff', '#0000ffff', '#ffff00ff'],
  [ColourCodeFormat.RgbaHexLongWithoutHash]: ['00000000', 'ffffffff', '0000ffff', 'ffff00ff'],
  [ColourCodeFormat.RgbaHexShortWithHash]: ['#0000', '#ffff', '#00ff', '#ff00'],
  [ColourCodeFormat.RgbaHexShortWithoutHash]: ['0000', 'ffff', '00ff', 'ff00'],
  [ColourCodeFormat.HslString]: [
    'hsl(0, 0%, 0%)',
    'hsl(360, 100%, 100%)',
    'hsl(240, 100%, 50%)',
    'hsl(120, 100%, 50%)',
  ],
  [ColourCodeFormat.HslaString]: [
    'hsla(0, 0%, 0%, 0)',
    'hsla(360, 100%, 100%, 1)',
    'hsla(240, 100%, 50%, 0.5)',
    'hsla(120, 100%, 50%, 0.25)',
  ],
};