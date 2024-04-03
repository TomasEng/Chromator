import type { Rgb } from '../types/Rgb';

export const rgb1ToRgb255 = (rgb1: Rgb): Rgb => {
  const { red, green, blue } = rgb1;
  return {
    red: red * 255,
    green: green * 255,
    blue: blue * 255
  };
};

export const rgb255ToRgb1 = (rgb255: Rgb): Rgb => {
  const { red, green, blue } = rgb255;
  return {
    red: red / 255,
    green: green / 255,
    blue: blue / 255
  };
};
