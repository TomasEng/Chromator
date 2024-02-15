import { ColourCode } from '../types/ColourCode';
import { Rgb } from '../types/Rgb';
import { Rgba } from '../types/Rgba';
import { Hsl } from '../types/Hsl';
import { Hsla } from '../types/Hsla';
import { Hsv } from '../types/Hsv';
import { Hsva } from '../types/Hsva';

export const isRgb = (value: ColourCode): value is Rgb =>
  (value as Rgb).red !== undefined &&
  (value as Rgb).green !== undefined &&
  (value as Rgb).blue !== undefined &&
  (value as Rgba).alpha === undefined;

export const isRgba = (value: ColourCode): value is Rgba =>
  (value as Rgba).red !== undefined &&
  (value as Rgba).green !== undefined &&
  (value as Rgba).blue !== undefined &&
  (value as Rgba).alpha !== undefined;

export const isHsl = (value: ColourCode): value is Hsl =>
  (value as Hsl).hue !== undefined &&
  (value as Hsl).saturation !== undefined &&
  (value as Hsl).lightness !== undefined &&
  (value as Hsla).alpha === undefined;

export const isHsla = (value: ColourCode): value is Hsla =>
  (value as Hsla).hue !== undefined &&
  (value as Hsla).saturation !== undefined &&
  (value as Hsla).lightness !== undefined &&
  (value as Hsla).alpha !== undefined;

export const isHsv = (value: ColourCode): value is Hsv =>
  (value as Hsv).hue !== undefined &&
  (value as Hsv).saturation !== undefined &&
  (value as Hsv).value !== undefined &&
  (value as Hsva).alpha === undefined;

export const isHsva = (value: ColourCode): value is Hsva =>
  (value as Hsva).hue !== undefined &&
  (value as Hsva).saturation !== undefined &&
  (value as Hsva).value !== undefined &&
  (value as Hsva).alpha !== undefined;