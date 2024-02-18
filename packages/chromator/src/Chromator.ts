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

  /**
   * Returns the HSL representation of the colour.
   */
  public getHsl (): Hsl {
    return this.hsl;
  }

  /**
   * Returns the alpha value of the colour on a scale from 0 (completely transparent) to 1 (no transparency).
   */
  public getAlpha (): number {
    return this.alpha;
  }

  /**
   * Returns the HSLA representation of the colour.
   */
  public getHsla (): Hsla {
    return { ...this.hsl, alpha: this.alpha };
  }

  /**
   * Returns the RGB representation of the colour.
   */
  public getRgb (): Rgb {
    return hslToRgb(this.hsl);
  }

  /**
   * Returns the RGBA representation of the colour.
   */
  public getRgba (): Rgba {
    return { ...this.getRgb(), alpha: this.alpha };
  }

  /**
   * Returns the HSV representation of the colour.
   */
  public getHsv (): Hsv {
    return hslToHsv(this.hsl);
  }

  /**
   * Returns the HSVA representation of the colour.
   */
  public getHsva (): Hsva {
    return hslaToHsva(this.getHsla());
  }

  /**
   * Returns the RGB CSS code of the colour.
   * @example
   * const red = new Chromator('red');
   * red.getRgbCode(); // 'rgb(255, 0, 0)'
   */
  public getRgbCode (): string {
    return rgbaObjectToRgbDecimalString(this.getRgba());
  }

  /**
   * Returns the hexadecimal CSS code of the colour.
   * @example
   * const red = new Chromator('green');
   * red.getHexCode(); // '#00FF00'
   */
  public getHexCode (): string {
    return rgbaObjectToRgbHexString(this.getRgba());
  }

  /**
   * Returns the HSL CSS code of the colour.
   * @example
   * const red = new Chromator('blue');
   * red.getHslCode(); // 'hsl(240, 100%, 50%)'
   */
  public getHslCode (): string {
    return hslaObjectToHslString(this.getHsla());
  }
}
