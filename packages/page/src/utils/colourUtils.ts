import { Chromator } from 'chromator';

export const oppositeColours = (num: number, baseColour: Chromator): Chromator[] => {
  const step = 360 / num;
  const colours = [];
  for (let i = 0; i < num; i++) {
    const chromator = baseColour.copy();
    chromator.addHue(i * step);
    colours.push(chromator);
  }
  return colours;
};

export const shades = (num: number, baseColour: Chromator): Chromator[] => {
  const step = 1 / (num + 1);
  const baseHsl = baseColour.getHsl();
  const colours = [];
  for (let i = 1; i <= num; i++) {
    const lightness = i * step;
    const colour = new Chromator({ ...baseHsl, lightness });
    colours.push(colour);
  }
  return colours;
};
