import { type ColourCode } from './types/ColourCode';
import { type Hsl } from './types/Hsl';
import { colourCodeToHsla } from './converters/colourCodeToHsla';
import { type Rgb } from './types/Rgb';
import { type Hsla } from './types/Hsla';
import { hslaToHsva, hslToHsv, hslToRgb } from './converters/colour-object-converters';
import { type Rgba } from './types/Rgba';
import { type Hsv } from './types/Hsv';
import { type Hsva } from './types/Hsva';
import {
  hslaObjectToHslString,
  rgbaObjectToRgbDecimalString,
  rgbaObjectToRgbHexString
} from './converters/hsla-to-string';

export class Chromator {
  private readonly hsl: Hsl; // HSL is used as the base since all conversion functions from the HSL space are mathematically surjective.
  private readonly alpha: number;

  constructor (code: ColourCode) {
    const { hue, saturation, lightness, alpha } = colourCodeToHsla(code);
    this.hsl = { hue, saturation, lightness };
    this.alpha = alpha;
  }

  public getHsl (): Hsl {
    return this.hsl;
  }

  public getAlpha (): number {
    return this.alpha;
  }

  public getHsla (): Hsla {
    return { ...this.hsl, alpha: this.alpha };
  }

  public getRgb (): Rgb {
    return hslToRgb(this.hsl);
  }

  public getRgba (): Rgba {
    return { ...this.getRgb(), alpha: this.alpha };
  }

  public getHsv (): Hsv {
    return hslToHsv(this.hsl);
  }

  public getHsva (): Hsva {
    return hslaToHsva(this.getHsla());
  }

  public getRgbCode (): string {
    return rgbaObjectToRgbDecimalString(this.getRgba());
  }

  public getHexCode (): string {
    return rgbaObjectToRgbHexString(this.getRgba());
  }

  public getHslCode (): string {
    return hslaObjectToHslString(this.getHsla());
  }
}
