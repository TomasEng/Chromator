import { Chromator } from 'chromator';
import { type ShadesProfile } from '../types/ShadesProfile';

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

export const shades = (num: number, baseColour: Chromator, profile: ShadesProfile): Chromator[] => {
  switch (profile) {
    case 'lightness': return lightnessShades(num, baseColour);
    case 'luminance': return luminanceShades(num, baseColour);
  }
};

export const lightnessShades = (num: number, baseColour: Chromator): Chromator[] => {
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

export const luminanceShades = (num: number, baseColour: Chromator): Chromator[] => {
  const step = 1 / (num + 1);
  const colours = [];
  for (let i = 1; i <= num; i++) {
    const luminance = i * step;
    const colour = baseColour.copy();
    colour.setRelativeLuminance(luminance);
    colours.push(colour);
  }
  return colours;
};
