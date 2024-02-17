import { colourCodeToHsla } from './colourCodeToHsla.ts';
import { testColours } from '../test-data/namedColourList.ts';
import { Rgba } from '../types/Rgba.ts';
import { Hsva } from '../types/Hsva.ts';

describe('colourCodeToHsla', () => {
  it('Converts a HSL object to an HSLA object', () => {
    expect(colourCodeToHsla({ hue: 180, saturation: 0.5, lightness: 0.2 })).toEqual({
      hue: 180,
      saturation: 0.5,
      lightness: 0.2,
      alpha: 1
    });
  });

  it('Returns the HSLA object if given an HSLA object', () => {
    expect(colourCodeToHsla({ hue: 180, saturation: 0.5, lightness: 0.2, alpha: 0.5 })).toEqual({
      hue: 180,
      saturation: 0.5,
      lightness: 0.2,
      alpha: 0.5
    });
  });

  it('Converts an RGB object to an HSLA object', () => {
    const { orchid } = testColours;
    expect(colourCodeToHsla(orchid.rgb)).toEqual({
      hue: expect.closeTo(orchid.hsl.hue, 2),
      saturation: expect.closeTo(orchid.hsl.saturation, 4),
      lightness: expect.closeTo(orchid.hsl.lightness, 4),
      alpha: 1
    });
  });

  it('Converts an RGBA object to an HSLA object', () => {
    const { orchid } = testColours;
    const alpha = 0.2;
    const transparentOrchid: Rgba = { ...orchid.rgb, alpha };
    expect(colourCodeToHsla(transparentOrchid)).toEqual({
      hue: expect.closeTo(orchid.hsl.hue, 2),
      saturation: expect.closeTo(orchid.hsl.saturation, 4),
      lightness: expect.closeTo(orchid.hsl.lightness, 4),
      alpha
    });
  });

  it('Converts an HSV object to an HSLA object', () => {
    const { orchid } = testColours;
    expect(colourCodeToHsla(orchid.hsv)).toEqual({
      hue: expect.closeTo(orchid.hsl.hue, 2),
      saturation: expect.closeTo(orchid.hsl.saturation, 4),
      lightness: expect.closeTo(orchid.hsl.lightness, 4),
      alpha: 1
    });
  });

  it('Converts an HSVA object to an HSLA object', () => {
    const { orchid } = testColours;
    const alpha = 0.2;
    const transparentOrchid: Hsva = { ...orchid.hsv, alpha };
    expect(colourCodeToHsla(transparentOrchid)).toEqual({
      hue: expect.closeTo(orchid.hsl.hue, 2),
      saturation: expect.closeTo(orchid.hsl.saturation, 4),
      lightness: expect.closeTo(orchid.hsl.lightness, 4),
      alpha
    });
  });

  it('Converts an HSL string to an HSLA object', () => {
    expect(colourCodeToHsla('hsl(302, 0.59, 0.65)')).toEqual({
      hue: 302,
      saturation: 0.59,
      lightness: 0.65,
      alpha: 1
    });
  });

  it('Converts an HSLA string to an HSLA object', () => {
    expect(colourCodeToHsla('hsla(302, 0.59, 0.65, 0.2)')).toEqual({
      hue: 302,
      saturation: 0.59,
      lightness: 0.65,
      alpha: 0.2
    });
  });

  it('Converts an RGB decimal string to an HSLA object', () => {
    expect(colourCodeToHsla('rgb(218, 112, 214)')).toEqual({
      hue: expect.closeTo(302, 0),
      saturation: expect.closeTo(0.59, 2),
      lightness: expect.closeTo(0.65, 2),
      alpha: 1
    });
  });

  it('Converts an RGBA decimal string to an HSLA object', () => {
    expect(colourCodeToHsla('rgba(218, 112, 214, 0.2)')).toEqual({
      hue: expect.closeTo(302, 0),
      saturation: expect.closeTo(0.59, 2),
      lightness: expect.closeTo(0.65, 2),
      alpha: 0.2
    });
  });

  it('Converts a lowercase RGB long hex string with hash to an HSLA object', () => {
    expect(colourCodeToHsla('#da70d6')).toEqual({
      hue: expect.closeTo(302, 0),
      saturation: expect.closeTo(0.59, 2),
      lightness: expect.closeTo(0.65, 2),
      alpha: 1
    });
  });

  it('Converts an uppercase RGB long hex string with hash to an HSLA object', () => {
    expect(colourCodeToHsla('#DA70D6')).toEqual({
      hue: expect.closeTo(302, 0),
      saturation: expect.closeTo(0.59, 2),
      lightness: expect.closeTo(0.65, 2),
      alpha: 1
    });
  });

  it('Converts an RGB long hex string without hash to an HSLA object', () => {
    expect(colourCodeToHsla('da70d6')).toEqual({
      hue: expect.closeTo(302, 0),
      saturation: expect.closeTo(0.59, 2),
      lightness: expect.closeTo(0.65, 2),
      alpha: 1
    });
  });

  it('Converts an RGB short hex string with hash to an HSLA object', () => {
    expect(colourCodeToHsla('#789')).toEqual({
      hue: expect.closeTo(210, 0),
      saturation: expect.closeTo(0.14, 2),
      lightness: expect.closeTo(0.53, 2),
      alpha: 1
    });
  });

  it('Converts an RGB short hex string without hash to an HSLA object', () => {
    expect(colourCodeToHsla('789')).toEqual({
      hue: expect.closeTo(210, 0),
      saturation: expect.closeTo(0.14, 2),
      lightness: expect.closeTo(0.53, 2),
      alpha: 1
    });
  });

  it('Converts an RGBA long hex string with hash to an HSLA object', () => {
    expect(colourCodeToHsla('#da70d6cc')).toEqual({
      hue: expect.closeTo(302, 0),
      saturation: expect.closeTo(0.59, 2),
      lightness: expect.closeTo(0.65, 2),
      alpha: expect.closeTo(0.8, 2)
    });
  });

  it('Converts an RGBA long hex string without hash to an HSLA object', () => {
    expect(colourCodeToHsla('da70d6cc')).toEqual({
      hue: expect.closeTo(302, 0),
      saturation: expect.closeTo(0.59, 2),
      lightness: expect.closeTo(0.65, 2),
      alpha: expect.closeTo(0.8, 2)
    });
  });

  it('Converts an RGBA short hex string with hash to an HSLA object', () => {
    expect(colourCodeToHsla('#789c')).toEqual({
      hue: expect.closeTo(210, 0),
      saturation: expect.closeTo(0.14, 2),
      lightness: expect.closeTo(0.53, 2),
      alpha: expect.closeTo(0.8, 2)
    });
  });

  it('Converts an RGBA short hex string without hash to an HSLA object', () => {
    expect(colourCodeToHsla('789c')).toEqual({
      hue: expect.closeTo(210, 0),
      saturation: expect.closeTo(0.14, 2),
      lightness: expect.closeTo(0.53, 2),
      alpha: expect.closeTo(0.8, 2)
    });
  });

  it('Converts a named colour to an HSLA object', () => {
    expect(colourCodeToHsla('orchid')).toEqual({
      hue: expect.closeTo(302, 0),
      saturation: expect.closeTo(0.59, 2),
      lightness: expect.closeTo(0.65, 2),
      alpha: 1
    });
  });

  it('Converts the transparent keyword to an HSLA object', () => {
    expect(colourCodeToHsla('transparent')).toEqual({
      hue: 0,
      saturation: 0,
      lightness: 0,
      alpha: 0
    });
  });

  it('Throws an error if given an invalid colour code', () => {
    expect(() => colourCodeToHsla('invalid')).toThrow('Invalid colour code: invalid');
  });
});