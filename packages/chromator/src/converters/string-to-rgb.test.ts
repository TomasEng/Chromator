import { hexWithHashToRgb, hexWithoutHashToRgb } from './string-to-rgb';

describe('String to RGB(A) converters', () => {
  describe('hexWithoutHashToRgb', () => {
    it('Converts a hex string to an RGB object', () => {
      expect(hexWithoutHashToRgb('000000')).toEqual({ red: 0, green: 0, blue: 0 });
      expect(hexWithoutHashToRgb('ffffff')).toEqual({ red: 255, green: 255, blue: 255 });
      expect(hexWithoutHashToRgb('0010ff')).toEqual({ red: 0, green: 16, blue: 255 });
      expect(hexWithoutHashToRgb('ffff00')).toEqual({ red: 255, green: 255, blue: 0 });
    });
  });

  describe('hexWithHashToRgb', () => {
    it('Converts a hex string to an RGB object', () => {
      expect(hexWithHashToRgb('#000000')).toEqual({ red: 0, green: 0, blue: 0 });
      expect(hexWithHashToRgb('#ffffff')).toEqual({ red: 255, green: 255, blue: 255 });
      expect(hexWithHashToRgb('#0010ff')).toEqual({ red: 0, green: 16, blue: 255 });
      expect(hexWithHashToRgb('#ffff00')).toEqual({ red: 255, green: 255, blue: 0 });
    });
  });
});
