import { type StringColourFormat } from '../types/StringColourFormat';

export const validColourCodes: { [format in StringColourFormat]: string[] } = {
  namedColour: ['red', 'green', 'blue', 'yellow', 'RED', 'Red'],
  namedTransparent: ['transparent', 'TRANSPARENT', 'Transparent'],
  rgbDecimal: [
    'rgb(0, 0, 0)',
    'rgb(255, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
    'RGB(1, 2, 3)'
  ],
  rgbHexLongWithHash: ['#000000', '#ffffff', '#0000ff', '#ffff00', '#5f9ea0', '#5F9EA0'],
  rgbHexLongWithoutHash: ['000000', 'ffffff', '0000ff', 'ffff00', '5f9ea0', '5F9EA0'],
  rgbHexShortWithHash: ['#000', '#fff', '#00f', '#ff0', '#FF0'],
  rgbHexShortWithoutHash: ['000', 'fff', '00f', 'ff0', 'FF0'],
  rgbaDecimal: [
    'rgba(0, 0, 0, 0)',
    'rgba(255, 255, 255, 1)',
    'rgba(0, 0, 255, 0.5)',
    'rgba(255, 255, 0, 0.25)',
    'RGBA(1, 2, 3, 0.5)'
  ],
  rgbaHexLongWithHash: ['#00000000', '#ffffffff', '#0000ffff', '#ffff00ff', '#5f9ea080', '#5F9EA080'],
  rgbaHexLongWithoutHash: ['00000000', 'ffffffff', '0000ffff', 'ffff00ff', '5f9ea080', '5F9EA080'],
  rgbaHexShortWithHash: ['#0000', '#ffff', '#00ff', '#ff00', '#FF00'],
  rgbaHexShortWithoutHash: ['0000', 'ffff', '00ff', 'ff00', 'FF00'],
  hsl: [
    'hsl(0, 0%, 0%)',
    'hsl(360, 100%, 100%)',
    'hsl(240, 100%, 50%)',
    'hsl(120, 100%, 50%)',
    'HSL(0, 0%, 0%)'
  ],
  hsla: [
    'hsla(0, 0%, 0%, 0)',
    'hsla(360, 100%, 100%, 1)',
    'hsla(240, 100%, 50%, 0.5)',
    'hsla(120, 100%, 50%, 0.25)',
    'HSLA(0, 0%, 0%, 0.5)'
  ]
};
