import { Chromator } from './Chromator';

describe('Chromator', () => {
  it('Creates a Chromator from a string', () => {
    const chromator = new Chromator('rgb(255, 0, 0)');
    expect(chromator).toBeDefined();
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
});
