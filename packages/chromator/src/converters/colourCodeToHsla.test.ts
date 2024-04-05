import { colourCodeToHsla } from './colourCodeToHsla';
import { testColours } from '../test-data/namedColourList';
import { type Rgba } from '../types/Rgba';
import { type Hsva } from '../types/Hsva';
import { type Xyza } from '../types/Xyza.ts';
import { type Laba } from '../types/Laba.ts';
import { type Lcha } from '../types/Lcha.ts';
import { type ColourCode } from '../types/ColourCode.ts';

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

  it('Converts a CIE XYZ object to an HSLA object', () => {
    const { orchid } = testColours;
    expect(colourCodeToHsla(orchid.cieXyz)).toEqual({
      hue: expect.closeTo(orchid.hsl.hue, 2),
      saturation: expect.closeTo(orchid.hsl.saturation, 4),
      lightness: expect.closeTo(orchid.hsl.lightness, 4),
      alpha: 1
    });
  });

  it('Converts a CIE XYZA object to an HSLA object', () => {
    const { orchid } = testColours;
    const alpha = 0.2;
    const transparentOrchid: Xyza = { ...orchid.cieXyz, alpha };
    expect(colourCodeToHsla(transparentOrchid)).toEqual({
      hue: expect.closeTo(orchid.hsl.hue, 2),
      saturation: expect.closeTo(orchid.hsl.saturation, 4),
      lightness: expect.closeTo(orchid.hsl.lightness, 4),
      alpha
    });
  });

  it('Converts an LAB object to an HSLA object', () => {
    const { orchid } = testColours;
    expect(colourCodeToHsla(orchid.lab)).toEqual({
      hue: expect.closeTo(orchid.hsl.hue, 2),
      saturation: expect.closeTo(orchid.hsl.saturation, 4),
      lightness: expect.closeTo(orchid.hsl.lightness, 4),
      alpha: 1
    });
  });

  it('Converts an LABA object to an HSLA object', () => {
    const { orchid } = testColours;
    const alpha = 0.2;
    const transparentOrchid: Laba = { ...orchid.lab, alpha };
    expect(colourCodeToHsla(transparentOrchid)).toEqual({
      hue: expect.closeTo(orchid.hsl.hue, 2),
      saturation: expect.closeTo(orchid.hsl.saturation, 4),
      lightness: expect.closeTo(orchid.hsl.lightness, 4),
      alpha
    });
  });

  it('Converts an LHC object to an HSLA object', () => {
    const { orchid } = testColours;
    expect(colourCodeToHsla(orchid.lch)).toEqual({
      hue: expect.closeTo(orchid.hsl.hue, 2),
      saturation: expect.closeTo(orchid.hsl.saturation, 4),
      lightness: expect.closeTo(orchid.hsl.lightness, 4),
      alpha: 1
    });
  });

  it('Converts an LCHA object to an HSLA object', () => {
    const { orchid } = testColours;
    const alpha = 0.2;
    const transparentOrchid: Lcha = { ...orchid.lch, alpha };
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

  it('Converts an LAB string to an HSLA object', () => {
    expect(colourCodeToHsla('lab(63 55 -34)')).toEqual({
      hue: expect.closeTo(303, 0),
      saturation: expect.closeTo(0.59, 2),
      lightness: expect.closeTo(0.65, 2),
      alpha: 1
    });
  });

  it('Converts an LCH string to an HSLA object', () => {
    expect(colourCodeToHsla('lch(63 50 180)')).toEqual({
      hue: expect.closeTo(172, 0),
      saturation: expect.closeTo(1, 2),
      lightness: expect.closeTo(0.34, 2),
      alpha: 1
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

  it('Throws an error if given an invalid object', () => {
    expect(() => colourCodeToHsla({ something: 'invalid' } as unknown as ColourCode)).toThrow();
  });
});
