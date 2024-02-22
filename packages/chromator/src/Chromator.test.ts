import { Chromator } from './Chromator';

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
    expect(orchid.getHslCode()).toBe('hsl(302, 59%, 65%)');
    const transparentOrchid = new Chromator('rgba(218, 112, 214, 0.5)');
    expect(transparentOrchid.getHslCode()).toBe('hsla(302, 59%, 65%, 0.5)');
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
});
