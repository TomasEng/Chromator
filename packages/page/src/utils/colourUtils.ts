import { type Chromator } from 'chromator';

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
