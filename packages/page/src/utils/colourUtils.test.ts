import { Chromator } from 'chromator';
import { oppositeColours } from './colourUtils';

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
});
