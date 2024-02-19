# Chromator

Chromator is a colour tool for websites. Currently it provides functions for converting between colour code formats.

## Installation
If using NPM, run the following command:
```bash
npm install chromator
```

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
const yellow = new Chromator('hsl(60, 100%, 50%)');
const transparent = new Chromator('transparent');
const cyan = new Chromator('#0FF');
const transparentMagenta = new Chromator('rgba(255, 0, 255, 0.5)');
```

It also accepts objects in RGB(A), HSL(A) and HSV(A) formats:
```typescript
const red = new Chromator({red: 255, green: 0, blue: 0});
const green = new Chromator({hue: 120, saturation: 1, lightness: 0.5});
const blue = new Chromator({hue: 240, saturation: 1, value: 1, alpha: 1});
```

### Conversion
The object may then be used to convert the colour to any other format:
```typescript
const red = new Chromator('#ff0000');
console.log(red.getRgbCode()); // rgb(255, 0, 0)
console.log(red.getHexCode()); // #FF0000
console.log(red.getHslCode()); // hsl(0, 100%, 50%)
console.log(red.getRgb()); // {red: 255, green: 0, blue: 0}
console.log(red.getHsl()); // {hue: 0, saturation: 1, lightness: 0.5}
console.log(red.getHsv()); // {hue: 0, saturation: 1, value: 1}
console.log(red.getRgba()); // {red: 255, green: 0, blue: 0, alpha: 1}
console.log(red.getHsla()); // {hue: 0, saturation: 1, lightness: 0.5, alpha: 1}
console.log(red.getHsva()); // {hue: 0, saturation: 1, value: 1, alpha: 1}
```

### Lightening and darkening
The `Chromator.lighten` and `Chromator.darken` methods can be used to lighten or darken the colour respectively:
```typescript
const red = new Chromator('#FF0000');
console.log(red.lighten(0.5).getHexCode()); // #FF8080
console.log(red.darken(0.5).getHexCode()); // #800000
```
