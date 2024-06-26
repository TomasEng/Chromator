import { Chromator } from './Chromator';
import { type NamedColour } from './types/NamedColour.ts';
import { type HueProfile } from './types/HueProfile.ts';
import { isOklchWithinSrgb } from './converters/object-converters/oklch.ts';
import { isLchWithinSrgb } from './converters/object-converters/lch.ts';

describe('Chromator', () => {
  it('Creates a Chromator from a string', () => {
    const chromator = new Chromator('rgb(255, 0, 0)');
    expect(chromator).toBeDefined();
  });

  describe('copy', () => {
    it('Creates a copy of the Chromator', () => {
      const chromator = new Chromator('rgb(255, 0, 0)');
      const copy = chromator.copy();
      expect(copy).toBeDefined();
      expect(copy).not.toBe(chromator);
      expect(copy.getHsl()).not.toBe(chromator.getHsl());
      expect(copy.getHsl()).toEqual(chromator.getHsl());
      expect(copy.getHsla()).not.toBe(chromator.getHsla());
      expect(copy.getHsla()).toEqual(chromator.getHsla());
    });
  });

  test('getHsl', () => {
    const chromator = new Chromator('rgb(255, 0, 0)');
    expect(chromator.getHsl()).toEqual({ hue: 0, saturation: 1, lightness: 0.5 });
  });

  test('getHsla', () => {
    const chromator = new Chromator('rgb(255, 0, 0)');
    expect(chromator.getHsla()).toEqual({ hue: 0, saturation: 1, lightness: 0.5, alpha: 1 });
  });

  test('getAlpha', () => {
    const chromator = new Chromator('rgb(255, 0, 0)');
    expect(chromator.getAlpha()).toBe(1);
  });

  test('getRgb', () => {
    const chromator = new Chromator('rgb(255, 0, 0)');
    expect(chromator.getRgb()).toEqual({ red: 255, green: 0, blue: 0 });
  });

  test('getRgba', () => {
    const chromator = new Chromator('rgb(255, 0, 0)');
    expect(chromator.getRgba()).toEqual({ red: 255, green: 0, blue: 0, alpha: 1 });
  });

  test('getHsv', () => {
    const chromator = new Chromator('rgb(255, 0, 0)');
    expect(chromator.getHsv()).toEqual({ hue: 0, saturation: 1, value: 1 });
  });

  test('getHsva', () => {
    const chromator = new Chromator('rgb(255, 0, 0)');
    expect(chromator.getHsva()).toEqual({ hue: 0, saturation: 1, value: 1, alpha: 1 });
  });

  test('getCieXyz', () => {
    const orchid = new Chromator('rgb(218, 112, 214)');
    expect(orchid.getCieXyz()).toEqual({
      x: expect.closeTo(0.468446, 6),
      y: expect.closeTo(0.313515, 6),
      z: expect.closeTo(0.671893, 6)
    });
  });

  test('getCieXyza', () => {
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getCieXyza()).toEqual({
      x: expect.closeTo(0.468446, 6),
      y: expect.closeTo(0.313515, 6),
      z: expect.closeTo(0.671893, 6),
      alpha: 0.5
    });
  });

  test('getLab', () => {
    const orchid = new Chromator('rgb(218, 112, 214)');
    expect(orchid.getLab()).toEqual({
      L: expect.closeTo(62.8032, 3),
      a: expect.closeTo(55.2824, 3),
      b: expect.closeTo(-34.4046, 3)
    });
  });

  test('getLaba', () => {
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getLaba()).toEqual({
      L: expect.closeTo(62.8032, 3),
      a: expect.closeTo(55.2824, 3),
      b: expect.closeTo(-34.4046, 3),
      alpha: 0.5
    });
  });

  test('getLch', () => {
    const orchid = new Chromator('rgb(218, 112, 214)');
    expect(orchid.getLch()).toEqual({
      L: expect.closeTo(62.8032, 3),
      chroma: expect.closeTo(65.1139, 3),
      hue: expect.closeTo(328.104, 3)
    });
  });

  test('getLcha', () => {
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getLcha()).toEqual({
      L: expect.closeTo(62.8032, 3),
      chroma: expect.closeTo(65.1139, 3),
      hue: expect.closeTo(328.104, 3),
      alpha: 0.5
    });
  });

  test('getOklab', () => {
    const orchid = new Chromator('orchid');
    expect(orchid.getOklab()).toEqual({
      l: expect.closeTo(0.7021, 4),
      a: expect.closeTo(0.1549, 4),
      b: expect.closeTo(-0.0942, 4)
    });
  });

  test('getOklaba', () => {
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getOklaba()).toEqual({
      l: expect.closeTo(0.7021, 4),
      a: expect.closeTo(0.1549, 4),
      b: expect.closeTo(-0.0942, 4),
      alpha: 0.5
    });
  });

  test('getOklch', () => {
    const orchid = new Chromator('orchid');
    expect(orchid.getOklch()).toEqual({
      l: expect.closeTo(0.7021, 4),
      chroma: expect.closeTo(0.1813, 4),
      hue: expect.closeTo(328.7, 1)
    });
  });

  test('getOklcha', () => {
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getOklcha()).toEqual({
      l: expect.closeTo(0.7021, 4),
      chroma: expect.closeTo(0.1813, 4),
      hue: expect.closeTo(328.7, 1),
      alpha: 0.5
    });
  });

  test('getRgbCode', () => {
    const orchid = new Chromator('orchid');
    expect(orchid.getRgbCode()).toBe('rgb(218, 112, 214)');
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getRgbCode()).toBe('rgba(218, 112, 214, 0.5)');
  });

  test('getHexCode', () => {
    const orchid = new Chromator('orchid');
    expect(orchid.getHexCode()).toBe('#DA70D6');
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getHexCode()).toBe('#DA70D680');
  });

  test('getHslCode', () => {
    const orchid = new Chromator('orchid');
    expect(orchid.getHslCode()).toBe('hsl(302deg, 59%, 65%)');
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getHslCode()).toBe('hsla(302deg, 59%, 65%, 0.5)');
  });

  test('getLabCode', () => {
    const orchid = new Chromator('orchid');
    expect(orchid.getLabCode()).toBe('lab(63 55 -34)');
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getLabCode()).toBe('lab(63 55 -34 / 0.5)');
  });

  test('getLchCode', () => {
    const orchid = new Chromator('orchid');
    expect(orchid.getLchCode()).toBe('lch(63 65 328deg)');
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getLchCode()).toBe('lch(63 65 328deg / 0.5)');
  });

  test('getOklabCode', () => {
    const orchid = new Chromator('orchid');
    expect(orchid.getOklabCode()).toBe('oklab(0.7 0.15 -0.09)');
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getOklabCode()).toBe('oklab(0.7 0.15 -0.09 / 0.5)');
  });

  test('getOklchCode', () => {
    const orchid = new Chromator('orchid');
    expect(orchid.getOklchCode()).toBe('oklch(0.7 0.18 329deg)');
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getOklchCode()).toBe('oklch(0.7 0.18 329deg / 0.5)');
  });

  describe('lighten', () => {
    it('Lightens the colour by the given amount', () => {
      const chromator = new Chromator('rgb(255, 0, 0)');
      chromator.lighten(0.5);
      expect(chromator.getHsl()).toEqual({ hue: 0, saturation: 1, lightness: 0.75 });
    });

    it('Makes the colour white if the amount is 1', () => {
      const chromator = new Chromator('rgb(255, 0, 0)');
      chromator.lighten(1);
      expect(chromator.getRgb()).toEqual({ red: 255, green: 255, blue: 255 });
    });
  });

  describe('darken', () => {
    it('Darkens the colour by the given amount', () => {
      const chromator = new Chromator('rgb(255, 0, 0)');
      chromator.darken(0.5);
      expect(chromator.getHsl()).toEqual({ hue: 0, saturation: 1, lightness: 0.25 });
    });

    it('Makes the colour black if the amount is 1', () => {
      const chromator = new Chromator('rgb(255, 0, 0)');
      chromator.darken(1);
      expect(chromator.getRgb()).toEqual({ red: 0, green: 0, blue: 0 });
    });
  });

  describe('invertLightness', () => {
    it('Inverts the lightness of the colour', () => {
      const chromator = new Chromator({ hue: 302, saturation: 0.59, lightness: 0.65 });
      chromator.invertLightness();
      expect(chromator.getHsl()).toEqual({ hue: 302, saturation: 0.59, lightness: 0.35 });
    });

    it('Returns the initial colour if inverted twice', () => {
      const initialHsl = { hue: 302, saturation: 0.59, lightness: 0.65 };
      const chromator = new Chromator(initialHsl);
      chromator.invertLightness().invertLightness();
      expect(chromator.getHsl()).not.toBe(initialHsl);
      expect(chromator.getHsl()).toEqual(initialHsl);
    });
  });

  describe('addHue', () => {
    it('Adds the given amount to the hue', () => {
      const initialHsl = { hue: 10, saturation: 1, lightness: 0.5 };
      const chromator = new Chromator(initialHsl);
      chromator.addHue(20);
      expect(chromator.getHsl()).toEqual({ hue: 30, saturation: 1, lightness: 0.5 });
    });

    it('Wraps the hue around if it goes over 360', () => {
      const initialHsl = { hue: 350, saturation: 1, lightness: 0.5 };
      const chromator = new Chromator(initialHsl);
      chromator.addHue(20);
      expect(chromator.getHsl()).toEqual({ hue: 10, saturation: 1, lightness: 0.5 });
    });
  });

  describe('subtractHue', () => {
    it('Subtracts the given amount from the hue', () => {
      const initialHsl = { hue: 30, saturation: 1, lightness: 0.5 };
      const chromator = new Chromator(initialHsl);
      chromator.subtractHue(20);
      expect(chromator.getHsl()).toEqual({ hue: 10, saturation: 1, lightness: 0.5 });
    });

    it('Wraps the hue around if it goes under 0', () => {
      const initialHsl = { hue: 10, saturation: 1, lightness: 0.5 };
      const chromator = new Chromator(initialHsl);
      chromator.subtractHue(20);
      expect(chromator.getHsl()).toEqual({ hue: 350, saturation: 1, lightness: 0.5 });
    });
  });

  describe('complementarise', () => {
    it('Transforms the colour to its complimentary colour', () => {
      const chromator = new Chromator({ hue: 302, saturation: 0.59, lightness: 0.65 });
      chromator.complementarise();
      expect(chromator.getHsl()).toEqual({ hue: 122, saturation: 0.59, lightness: 0.65 });
    });
  });

  describe('invert', () => {
    it('Inverts the colour', () => {
      const chromator = new Chromator({ hue: 302, saturation: 0.59, lightness: 0.65 });
      chromator.invert();
      expect(chromator.getHsl()).toEqual({ hue: 122, saturation: 0.59, lightness: 0.35 });
    });
  });

  describe('getRelativeLuminance', () => {
    it('Returns the relative luminance of the colour', () => {
      const chromator = new Chromator('rgb(218, 112, 214)');
      expect(chromator.getRelativeLuminance()).toBeCloseTo(0.313515, 6);
    });
  });

  describe('setRelativeLuminance', () => {
    const testColours: NamedColour[] = ['orchid', 'black', 'white'];
    const profiles: HueProfile[] = ['hsl', 'lch', 'oklch'];
    describe.each(profiles)('When the given profile is %s', (profile) => {
      describe.each(testColours)('When the given colour is %s', (colourName) => {
        it.each([0, 0.01, 0.1, 0.25, 0.33, 0.5, 0.67, 0.75, 0.9, 0.99, 1])('Sets the relative luminance to %f', (luminance) => {
          const colour = new Chromator(colourName);
          const initialColour = colour.copy();
          colour.setRelativeLuminance(luminance, profile);
          expect(colour.getRelativeLuminance()).toBeCloseTo(luminance, 3);

          /* eslint-disable no-case-declarations */
          switch (profile) {
            case 'hsl':
              const initialHsl = initialColour.getHsl();
              const newHsl = colour.getHsl();
              expect(newHsl.hue).toBe(initialHsl.hue);
              expect(newHsl.saturation).toBe(initialHsl.saturation);
              break;
            case 'lch':
              const initialLab = initialColour.getLch();
              const newLab = colour.getLch();
              if (newLab.chroma > 0.2) {
                expect(newLab.hue).toBeCloseTo(initialLab.hue, 2);
              }
              expect(isLchWithinSrgb(newLab)).toBe(true);
              if (Math.abs(initialLab.chroma - newLab.chroma) > 0.01) {
                expect(isLchWithinSrgb({ ...newLab, chroma: initialLab.chroma })).toBe(false);
              }
              break;
            case 'oklch':
              const initialOklch = initialColour.getOklch();
              const newOklch = colour.getOklch();
              if (newOklch.chroma > 0.002) {
                expect(newOklch.hue).toBeCloseTo(initialOklch.hue, 2);
              }
              expect(isOklchWithinSrgb(newOklch)).toBe(true);
              if (Math.abs(initialOklch.chroma - newOklch.chroma) > 0.0001) {
                expect(isOklchWithinSrgb({ ...newOklch, chroma: initialOklch.chroma })).toBe(false);
              }
              break;
          }
        });
      });
    });

    it('Throws an error when the luminance is less than 0', () => {
      const chromator = new Chromator('rgb(218, 112, 214)');
      expect(() => chromator.setRelativeLuminance(-0.1)).toThrow();
    });

    it('Throws an error when the luminance is greater than 1', () => {
      const chromator = new Chromator('rgb(218, 112, 214)');
      expect(() => chromator.setRelativeLuminance(1.1)).toThrow();
    });
  });

  describe('findContrast', () => {
    const colour1Hex = '#437B89';
    const colour2Hex = '#EEDEC9';
    const expectedContrast = 3.59;

    it('Returns the contrast ratio between the two colours', () => {
      const colour1 = new Chromator(colour1Hex);
      const colour2 = new Chromator(colour2Hex);
      expect(colour1.findContrast(colour2)).toBeCloseTo(expectedContrast, 2);
    });

    it('Returns the same contrast ratio regardless of the order of the colours', () => {
      const colour1 = new Chromator(colour1Hex);
      const colour2 = new Chromator(colour2Hex);
      expect(colour2.findContrast(colour1)).toBeCloseTo(expectedContrast, 2);
    });

    it('Accepts a simple colour code as the second argument', () => {
      const colour1 = new Chromator(colour1Hex);
      expect(colour1.findContrast(colour2Hex)).toBeCloseTo(expectedContrast, 2);
    });

    it('Returns 1 when the two colours are the same', () => {
      const colour1 = new Chromator(colour1Hex);
      const colour2 = new Chromator(colour1Hex);
      expect(colour1.findContrast(colour2)).toBe(1);
    });

    it('Returns 21 for black and white', () => {
      const black = new Chromator('black');
      const white = new Chromator('white');
      expect(black.findContrast(white)).toBeCloseTo(21, 5);
    });

    it('Returns 2 for black and white when the offset is set to 1', () => {
      const black = new Chromator('black');
      const white = new Chromator('white');
      expect(black.findContrast(white, 1)).toBeCloseTo(2, 6);
    });

    it('Throws an error when the offset is set to 0', () => {
      const black = new Chromator('black');
      const white = new Chromator('white');
      expect(() => black.findContrast(white, 0)).toThrow();
    });
  });

  describe('increaseLuminanceByContrast', () => {
    const colourHex = '#437B89';
    const colour = new Chromator(colourHex);

    it('Increases the luminance of the colour by the given contrast', () => {
      const contrast = 3.59;
      const newColour = colour.copy().increaseLuminanceByContrast(contrast);
      expect(newColour).toBeDefined();
      expect(newColour!.getRelativeLuminance()).toBeCloseTo(0.75, 2);
      expect(newColour!.findContrast(colour)).toBeCloseTo(contrast, 2);
    });

    const hueProfiles: HueProfile[] = ['hsl', 'lch', 'oklch'];
    it.each(hueProfiles)('Keeps the hue when the profile is %s', (profile) => {
      const contrast = 3.59;
      const newColour = colour.copy().increaseLuminanceByContrast(contrast, profile);
      expect(newColour).toBeDefined();
      expect(newColour!.getRelativeLuminance()).toBeCloseTo(0.75, 2);
      expect(newColour!.findContrast(colour)).toBeCloseTo(contrast, 2);
      switch (profile) {
        case 'hsl':
          expect(newColour!.getHsl().hue).toBe(colour.getHsl().hue);
          break;
        case 'lch':
          expect(newColour!.getLch().hue).toBeCloseTo(colour.getLch().hue, 2);
          break;
        case 'oklch':
          expect(newColour!.getOklch().hue).toBeCloseTo(colour.getOklch().hue, 2);
          break;
      }
    });

    it('Returns undefined when the contrast is too high', () => {
      const contrast = 10;
      const newColour = colour.copy().increaseLuminanceByContrast(contrast);
      expect(newColour).toBeUndefined();
    });

    it('Takes the offset value into account', () => {
      const contrast = 3.59;
      const offset = 0.01;
      const newColour = colour.copy().increaseLuminanceByContrast(contrast, 'hsl', offset);
      expect(newColour).toBeDefined();
      expect(newColour!.getRelativeLuminance()).toBeCloseTo(0.64, 2);
      expect(newColour!.findContrast(colour, offset)).toBeCloseTo(contrast, 2);
    });

    it('Throws an error when the offset is 0', () => {
      expect(() => colour.increaseLuminanceByContrast(3.59, 'hsl', 0)).toThrow();
    });

    it('Throws an error when the contrast is less than 1', () => {
      expect(() => colour.increaseLuminanceByContrast(0.5)).toThrow();
    });
  });

  describe('decreaseLuminanceByContrast', () => {
    const colourHex = '#daeaee';
    const colour = new Chromator(colourHex);

    it('Decreases the luminance of the colour by the given contrast', () => {
      const contrast = 3.59;
      const newColour = colour.copy().decreaseLuminanceByContrast(contrast);
      expect(newColour).toBeDefined();
      expect(newColour!.getRelativeLuminance()).toBeCloseTo(0.19, 2);
      expect(newColour!.findContrast(colour)).toBeCloseTo(contrast, 2);
    });

    const hueProfiles: HueProfile[] = ['hsl', 'lch', 'oklch'];
    it.each(hueProfiles)('Keeps the hue when the profile is %s', (profile) => {
      const contrast = 3.59;
      const newColour = colour.copy().decreaseLuminanceByContrast(contrast, profile);
      expect(newColour).toBeDefined();
      expect(newColour!.getRelativeLuminance()).toBeCloseTo(0.19, 2);
      expect(newColour!.findContrast(colour)).toBeCloseTo(contrast, 2);
      switch (profile) {
        case 'hsl':
          expect(newColour!.getHsl().hue).toBe(colour.getHsl().hue);
          break;
        case 'lch':
          expect(newColour!.getLch().hue).toBeCloseTo(colour.getLch().hue, 2);
          break;
        case 'oklch':
          expect(newColour!.getOklch().hue).toBeCloseTo(colour.getOklch().hue, 2);
          break;
      }
    });

    it('Returns undefined when the contrast is too high', () => {
      const contrast = 100;
      const newColour = colour.copy().decreaseLuminanceByContrast(contrast);
      expect(newColour).toBeUndefined();
    });

    it('Takes the offset value into account', () => {
      const contrast = 3.59;
      const offset = 0.01;
      const newColour = colour.copy().decreaseLuminanceByContrast(contrast, 'hsl', offset);
      expect(newColour).toBeDefined();
      expect(newColour!.getRelativeLuminance()).toBeCloseTo(0.22, 2);
      expect(newColour!.findContrast(colour, offset)).toBeCloseTo(contrast, 2);
    });

    it('Throws an error when the offset is 0', () => {
      expect(() => colour.decreaseLuminanceByContrast(3.59, 'hsl', 0)).toThrow();
    });

    it('Throws an error when the contrast is less than 1', () => {
      expect(() => colour.decreaseLuminanceByContrast(0.5)).toThrow();
    });
  });
});
