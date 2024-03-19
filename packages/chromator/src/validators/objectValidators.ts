import { type ColourCode } from '../types/ColourCode';
import { type Rgb } from '../types/Rgb';
import { type Rgba } from '../types/Rgba';
import { type Hsl } from '../types/Hsl';
import { type Hsla } from '../types/Hsla';
import { type Hsv } from '../types/Hsv';
import { type Hsva } from '../types/Hsva';
import { type Xyz } from '../types/Xyz';
import { type Xyza } from '../types/Xyza';

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

export const isXyz = (value: ColourCode): value is Xyz =>
  (value as Xyz).x !== undefined &&
    (value as Xyz).y !== undefined &&
    (value as Xyz).z !== undefined &&
    (value as Xyza).alpha === undefined;

export const isXyza = (value: ColourCode): value is Xyza =>
  (value as Xyza).x !== undefined &&
    (value as Xyza).y !== undefined &&
    (value as Xyza).z !== undefined &&
    (value as Xyza).alpha !== undefined;
