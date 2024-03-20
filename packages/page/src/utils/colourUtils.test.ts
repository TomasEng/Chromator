import { Chromator } from 'chromator';
import { oppositeColours, shades } from './colourUtils';

describe('colourUtils', () => {
  describe('oppositeColours', () => {
    it('Returns an array with the given base colour when the number is 1', () => {
      const baseColour = new Chromator('#39C6BC');
      const result = oppositeColours(1, baseColour);
      expect(result).toEqual([baseColour]);
    });

    it('Returns an array with the base colour and its opposite when the number is 2', () => {
      const baseColour = new Chromator('#39C6BC');
      const result = oppositeColours(2, baseColour);
      expect(result).toEqual([baseColour, baseColour.copy().addHue(180)]);
    });

    it('Returns an array with the base colour and its two opposites when the number is 3', () => {
      const baseColour = new Chromator('#39C6BC');
      const result = oppositeColours(3, baseColour);
      expect(result).toEqual([baseColour, baseColour.copy().addHue(120), baseColour.copy().addHue(240)]);
    });

    it('Returns an array with the base colour and its three opposites when the number is 4', () => {
      const baseColour = new Chromator('#39C6BC');
      const result = oppositeColours(4, baseColour);
      expect(result).toEqual([baseColour, baseColour.copy().addHue(90), baseColour.copy().addHue(180), baseColour.copy().addHue(270)]);
    });
  });

  describe('shades', () => {
    it('Returns an array with lightness set to 0.5 when the number is 1', () => {
      const baseColour = new Chromator('#39C6BC');
      const result = shades(1, baseColour);
      expect(result).toHaveLength(1);
      expect(result[0].getHsl()).toEqual({
        hue: baseColour.getHsl().hue,
        saturation: baseColour.getHsl().saturation,
        lightness: 0.5
      });
    });

    it('Returns an array with the expected shades when the number is 2', () => {
      const baseHsl = { hue: 302, saturation: 0.59, lightness: 0.65 };
      const baseColour = new Chromator(baseHsl);
      const result = shades(2, baseColour);
      expect(result).toHaveLength(2);
      expect(result[0].getHsl()).toEqual({ ...baseHsl, lightness: expect.closeTo(0.33) });
      expect(result[1].getHsl()).toEqual({ ...baseHsl, lightness: expect.closeTo(0.67) });
    });

    it('Returns an array with the expected shades when the number is 3', () => {
      const baseHsl = { hue: 302, saturation: 0.59, lightness: 0.65 };
      const baseColour = new Chromator(baseHsl);
      const result = shades(3, baseColour);
      expect(result).toHaveLength(3);
      expect(result[0].getHsl()).toEqual({ ...baseHsl, lightness: 0.25 });
      expect(result[1].getHsl()).toEqual({ ...baseHsl, lightness: 0.5 });
      expect(result[2].getHsl()).toEqual({ ...baseHsl, lightness: 0.75 });
    });

    it('Returns an array with the expected shades when the number is 4', () => {
      const baseHsl = { hue: 302, saturation: 0.59, lightness: 0.65 };
      const baseColour = new Chromator(baseHsl);
      const result = shades(4, baseColour);
      expect(result).toHaveLength(4);
      expect(result[0].getHsl()).toEqual({ ...baseHsl, lightness: expect.closeTo(0.2) });
      expect(result[1].getHsl()).toEqual({ ...baseHsl, lightness: expect.closeTo(0.4) });
      expect(result[2].getHsl()).toEqual({ ...baseHsl, lightness: expect.closeTo(0.6) });
      expect(result[3].getHsl()).toEqual({ ...baseHsl, lightness: expect.closeTo(0.8) });
    });
  });
});
