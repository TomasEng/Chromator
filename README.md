# Chromator

Chromator is a colour tool for websites. It provides functions for converting between colour code formats, and for computing relative luminance and contrast.

## Installation
If using NPM, run the following command:
```bash
npm install chromator
```

## Demo
Se [the colour picker demo](https://tomaseng.github.io/Chromator/) for an example on how this package may be used.

## Usage

### Instantiation
Start by instantiating a new Chromator object:
```typescript
import { Chromator } from 'chromator';
const blue = new Chromator('blue');
```

Any colour code that is valid in CSS (except from `currentColour`) can be used to instantiate a new Chromator object. Here are some examples:
```typescript
const red = new Chromator('#ff0000');
const green = new Chromator('rgb(0, 255, 0)');
const yellow = new Chromator('hsl(60deg, 1, 0.5)');
const transparent = new Chromator('transparent');
const cyan = new Chromator('#0FF');
const transparentMagenta = new Chromator('rgba(255, 0, 255, 0.5)');
```

It also accepts objects in RGB(A), HSL(A), HSV(A), XYZ(A), L\*a\*b\*(A), L\*ch(A), Oklab(A) and Oklch(A) formats:
```typescript
const red = new Chromator({red: 255, green: 0, blue: 0});
const green = new Chromator({hue: 120, saturation: 1, lightness: 0.5});
const blue = new Chromator({hue: 240, saturation: 1, value: 1, alpha: 1});
const yellow = new Chromator({ x: 0.77003, y: 0.92783, z: 0.13853 });
const cyan = new Chromator({ L: 91.1132, a: -48.0875, b: -14.1312 });
const magenta = new Chromator({ L: 60.3242, chroma: 115.5407, hue: 328.235 });
const purple = new Chromator({ l: 0.420919, a: 0.164712, b: -0.101508 });
const orange = new Chromator({ l: 0.792709, chroma: 0.170958, hue: 70.668 });
```
Be aware that the only difference between the L\*a\*b*/L\*ch and Oklab/Oklch types is the case of the letter L.
Uppercase L represents the L\* in the L\*a\*b\*/L\*ch colour space, while lowercase L represents the L in the Oklab/Oklch colour space.

### Conversion
The object may then be used to convert the colour to any other format:
```typescript
const red = new Chromator('#ff0000');

console.log(red.getRgbCode()); // rgb(255, 0, 0)
console.log(red.getHexCode()); // #FF0000
console.log(red.getHslCode()); // hsl(0deg, 100%, 50%)
console.log(red.getLabCode()) // lab(53, 80, 67)
console.log(red.getLchCode()) // lch(53, 104, 40deg)
console.log(red.getOklabCode()) // oklab(0.63, 0.22, 0.126)
console.log(red.getOklchCode()) // oklch(0.63, 0.26, 29deg)

console.log(red.getRgb()); // {red: 255, green: 0, blue: 0}
console.log(red.getHsl()); // {hue: 0, saturation: 1, lightness: 0.5}
console.log(red.getHsv()); // {hue: 0, saturation: 1, value: 1}
console.log(red.getCieXyz()); // {x: 0.41246, y: 0.21267, z: 0.01933}
console.log(red.getLab()); // {L: 53.2408, a: 80.0925, b: 67.2032}
console.log(red.getLch()); // {L: 53.2408, chroma: 104.5518, hue: 39.999}
console.log(red.getOklab()) // {l: 0.627987, a: 0.22484, b: 0.125799}
console.log(red.getOklch()) // {l: 0.627987, chroma: 0.25764, hue: 29.227}

console.log(red.getRgba()); // {red: 255, green: 0, blue: 0, alpha: 1}
console.log(red.getHsla()); // {hue: 0, saturation: 1, lightness: 0.5, alpha: 1}
console.log(red.getHsva()); // {hue: 0, saturation: 1, value: 1, alpha: 1}
console.log(red.getCieXyza()); // {x: 0.41246, y: 0.21267, z: 0.01933, alpha: 1}
console.log(red.getLaba()); // {L: 53.2408, a: 80.0925, b: 67.2032, alpha: 1}
console.log(red.getLcha()); // {L: 53.2408, chroma: 104.5518, hue: 39.999, alpha: 1}
console.log(red.getOklaba()) // {l: 0.627987, a: 0.22484, b: 0.125799, alpha: 1}
console.log(red.getOklcha()) // {l: 0.627987, chroma: 0.25764, hue: 29.227, alpha: 1}
```

### Relative luminance
Relative luminance is a measure of the brightness of a colour, and is used in the calculation of contrast ratios.
It corresponds to the `Y` value in the CIE XYZ colour space. Chromator provides tools for both calculating the relative luminance of a colour and for adjusting the lightness of a colour to match a desired relative luminance.

#### Computing relative luminance
The `Chromator.getRelativeLuminance` method returns the relative luminance of the colour.
```typescript
const colour = new Chromator('#FF0000');
console.log(colour.getRelativeLuminance()); // 0.21267
```

#### Manipulating the colour to match a desired relative luminance
It is possible to set a desired relative luminance value using the `Chromator.setRelativeLuminance` method.
This changes the lightness of the colour in order to obtain the desired luminance while keeping the hue and saturation constant.
```typescript
const hsl = { hue: 302, saturation: 0.59, lightness: 0.65 };
const colour = new Chromator(hsl);
colour.setRelativeLuminance(0.5);
const newHsl = colour.getHsl(); // { hue: 302, saturation: 0.59, lightness: 0.78 }
```
By default, the function adjusts the HSL lightness value to match the desired luminance.
It is possible to make it adjust the lightness values of the L\*ch and Oklch colour spaces instead, by passing `'lch'` or `'oklch'` respectively as the second argument:
```typescript
const oklch: Oklch = { l: 0.68, chroma: 0.11, hue: 222 };
const colour = new Chromator(oklch);
colour.setRelativeLuminance(0.5, 'oklch');
const newOklch = colour.getOklch(); // { l: 0.7852, chroma: 0.11, hue: 222 }
```
In general, the hue and chroma values are kept constant when adjusting the lightness value.
However, this is not always possible while keeping the colour inside the SRGB gamut.
Therefore, when there is no such colour inside the SRGB gamut, the chroma value is also adjusted.
This does not apply to the HSL colour space, since it is limited to the SRGB gamut.

### Contrast ratio
There may be several ways to define the contrast ratio between two colours, but the Web Content Accessibility Guidelines defines it like this:
> (L1 + 0.05) / (L2 + 0.05), where L1 is the relative luminance of the lightest of the colours and L2 is the relative luminance of the darkest of the colours.

This measure is important for ensuring that text is readable on a background, and for satisfying [accessibility requirements](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum).

Chromator provides tools for calculating the contrast as well as for adjusting the lightness of a colour to match a desired contrast ratio.

#### Computing contrast ratio
The `Chromator.getContrastRatio` method returns the contrast ratio between two colours.
```typescript
const red = new Chromator('red');
const blue = new Chromator('blue');
console.log(red.getContrastRatio(blue)); // 2.14
```
The colour code of the second colour can also be passed directly as in the class constructor:
```typescript
const red = new Chromator('red');
console.log(red.getContrastRatio('blue')); // 2.14
```

#### Manipulating the colour to match a desired contrast ratio
It is possible to set a desired contrast ratio value using the `Chromator.increaseLuminanceByContrast` and `Chromator.decreaseLuminanceByContrast` methods.
This changes the lightness of the colour in order to obtain the desired contrast ratio while keeping the hue constant.
Here is an example with the `decreaseLuminanceByContrast` method:
```typescript
const hsl: Hsl = { hue: 147, saturation: 0.72, lightness: 0.7 };
const backgroundColour = new Chromator(hsl);
const textColour = colour.copy().decreaseLuminanceByContrast(4.5);
console.log(textColour.getHsl()); // { hue: 147, saturation: 0.72, lightness: 0.24 }
```
The methods can be used in the same way with respect to the L\*ch or Oklch colour spaces by passing `'lch'` or `'oklch'` as the second argument respectively.
This will not change the hue in the desired colour space, but it may reduce the chroma value to keep the colour inside SRGB the gamut.
```typescript
const oklch: Oklch = { l: 0.773, chroma: 0.197, hue: 329 };
const backgroundColour = new Chromator(oklch);
const textColour = colour.copy().decreaseLuminanceByContrast(4.5, 'oklch');
console.log(textColour!.getOklch()); // { l: 0.402, chroma: 0.177, hue: 329 }
```
Note that the chroma value in the example above is reduced by a small amount to keep the colour inside the SRGB gamut.

### Lightness manipulation
The `Chromator.lighten` and `Chromator.darken` methods can be used to lighten or darken the colour respectively:
```typescript
const red = new Chromator('#FF0000');
console.log(red.lighten(0.5).getHexCode()); // #FF8080
console.log(red.darken(0.5).getHexCode()); // #800000
```
There is also a method called `Chromator.invertLightness` that inverts the lightness of the colour:
```typescript
const hsl = { hue: 302, saturation: 0.59, lightness: 0.65 };
const colour = new Chromator(hsl);
colour.invertLightness();
const invertedHsl = colour.getHsl(); // { hue: 302, saturation: 0.59, lightness: 0.35 }
```

### Hue manipulation
The hue is represented as an angle in degrees, representing the position of the colour on the colour wheel.
The `Chromator.addHue` and `Chromator.subtractHue` methods can be used to rotate the hue of the colour:
```typescript
const colour = new Chromator('#FF0000');
console.log(colour.addHue(120).getHexCode()); // #00FF00
console.log(colour.subtractHue(120).getHexCode()); // #FF0000
```
There is also an `Chromator.complementarise` method that transforms the colour to its complementary colour by adding 180 degrees to the hue:
```typescript
const colour = new Chromator('#FF0000');
console.log(colour.complementarise().getHexCode()); // #00FFFF
```

### Colour inversion
The `Chromator.invert` method is a combination of `Chromator.invertLightness` and `Chromator.complementarise` and can be used to invert the colour:
```typescript
const colour = new Chromator('#FFCCCC');
console.log(colour.invert().getHexCode()); // #003333
```
