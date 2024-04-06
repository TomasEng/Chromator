import { type Rgb } from './Rgb';
import { type Rgba } from './Rgba';
import { type Hsl } from './Hsl';
import { type Hsla } from './Hsla';
import { type Hsv } from './Hsv';
import { type Hsva } from './Hsva';
import { type Xyz } from './Xyz';
import { type Xyza } from './Xyza';
import { type Lab } from './Lab';
import { type Laba } from './Laba';
import { type Lch } from './Lch';
import { type Lcha } from './Lcha';
import { type Oklab } from './Oklab';
import { type Oklaba } from './Oklaba';
import { type Oklch } from './Oklch';
import { type Oklcha } from './Oklcha';

export type ColourCode =
    | Rgb
    | Rgba
    | Hsl
    | Hsla
    | Hsv
    | Hsva
    | Xyz
    | Xyza
    | Lab
    | Laba
    | Lch
    | Lcha
    | Oklab
    | Oklaba
    | Oklch
    | Oklcha
    | string;
