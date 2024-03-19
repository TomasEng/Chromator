import { type ColourCode } from './types/ColourCode';
import { type Hsl } from './types/Hsl';
import { colourCodeToHsla } from './converters/colourCodeToHsla';
import { type Rgb } from './types/Rgb';
import { type Hsla } from './types/Hsla';
import { hslaToHsva, hslToCieXyz, hslToHsv, hslToRgb, rgbToCieXyz } from './converters/colour-object-converters';
import { type Rgba } from './types/Rgba';
import { type Hsv } from './types/Hsv';
import { type Hsva } from './types/Hsva';
import {
  hslaObjectToHslString,
  rgbaObjectToRgbDecimalString,
  rgbaObjectToRgbHexString
} from './converters/hsla-to-string';
import { modulo } from './utils';
import { type Xyz } from './types/Xyz';
import { type Xyza } from './types/Xyza';

export class Chromator {
  private readonly hsl: Hsl; // HSL is used as the base since all conversion functions from the HSL space are mathematically surjective.
  private readonly alpha: number;

  constructor(code: ColourCode) {
    const {
      hue,
      saturation,
      lightness,
      alpha
    } = colourCodeToHsla(code);
    this.hsl = {
      hue,
      saturation,
      lightness
    };
    this.alpha = alpha;
  }

  /**
     * Returns a new Chromator instance with the same colour.
     */
  public copy(): Chromator {
    return new Chromator(this.getHsla());
  }

  /**
     * Returns the HSL representation of the colour. Ignores the alpha value.
     */
  public getHsl(): Hsl {
    return this.hsl;
  }

  /**
     * Returns the alpha value of the colour on a scale from 0 (completely transparent) to 1 (no transparency).
     */
  public getAlpha(): number {
    return this.alpha;
  }

  /**
     * Returns the HSLA representation of the colour.
     */
  public getHsla(): Hsla {
    return {
      ...this.hsl,
      alpha: this.alpha
    };
  }

  /**
     * Returns the RGB representation of the colour. Ignores the alpha value.
     */
  public getRgb(): Rgb {
    return hslToRgb(this.hsl);
  }

  /**
     * Returns the RGBA representation of the colour.
     */
  public getRgba(): Rgba {
    return {
      ...this.getRgb(),
      alpha: this.alpha
    };
  }

  /**
     * Returns the HSV representation of the colour. Ignores the alpha value.
     */
  public getHsv(): Hsv {
    return hslToHsv(this.hsl);
  }

  /**
     * Returns the HSVA representation of the colour.
     */
  public getHsva(): Hsva {
    return hslaToHsva(this.getHsla());
  }

  /**
     * Returns the CIE XYZ representation of the colour.
     */
  public getCieXyz(): Xyz {
    return hslToCieXyz(this.hsl);
  }

  /**
     * Returns the CIE XYZA representation of the colour.
     */
  public getCieXyza(): Xyza {
    return {
      ...this.getCieXyz(),
      alpha: this.alpha
    };
  }

  /**
     * Returns the RGB CSS code of the colour.
     * @example
     * const red = new Chromator('red');
     * red.getRgbCode(); // 'rgb(255, 0, 0)'
     */
  public getRgbCode(): string {
    return rgbaObjectToRgbDecimalString(this.getRgba());
  }

  /**
     * Returns the hexadecimal CSS code of the colour.
     * @example
     * const red = new Chromator('green');
     * red.getHexCode(); // '#00FF00'
     */
  public getHexCode(): string {
    return rgbaObjectToRgbHexString(this.getRgba());
  }

  /**
     * Returns the HSL CSS code of the colour.
     * @example
     * const red = new Chromator('blue');
     * red.getHslCode(); // 'hsl(240, 100%, 50%)'
     */
  public getHslCode(): string {
    return hslaObjectToHslString(this.getHsla());
  }

  /**
     * Lightens the colour by a given amount.
     * @param amount - The amount of which to increase the lightness on a scale from 0 (nothing) to 1 (white).
     */
  public lighten(amount: number): this {
    const currentLightness = this.hsl.lightness;
    const distanceFromWhite = 1 - currentLightness;
    this.hsl.lightness = currentLightness + distanceFromWhite * amount;
    return this;
  }

  /**
     * Darkens the colour by a given amount.
     * @param amount - The amount of which to decrease the lightness on a scale from 0 (nothing) to 1 (black).
     */
  public darken(amount: number): this {
    const currentLightness = this.hsl.lightness;
    this.hsl.lightness = currentLightness * (1 - amount);
    return this;
  }

  /**
     * Inverts the lightness of the colour.
     * @example
     * const hsl = { hue: 302, saturation: 0.59, lightness: 0.65 };
     * const colour = new Chromator({ hue: 302, saturation: 0.59, lightness: 0.65 });
     * colour.invertLightness();
     * const invertedHsl = colour.getHsl(); // { hue: 302, saturation: 0.59, lightness: 0.35 }
     */
  public invertLightness(): this {
    this.hsl.lightness = 1 - this.hsl.lightness;
    return this;
  }

  /**
     * Adds the given amount to the hue.
     * @param amount The amount in degrees to add to the hue.
     */
  public addHue(amount: number): this {
    this.hsl.hue = modulo(this.hsl.hue + amount, 360);
    return this;
  }

  /**
     * Subtracts the given amount from the hue.
     * @param amount The amount in degrees to subtract from the hue.
     */
  public subtractHue(amount: number): this {
    this.hsl.hue = modulo(this.hsl.hue - amount, 360);
    return this;
  }

  /**
     * Transforms the colour to its complementary colour.
     */
  public complementarise(): this {
    this.addHue(180);
    return this;
  }

  /**
     * Inverts the colour.
     */
  public invert(): this {
    this.complementarise().invertLightness();
    return this;
  }

  /**
     * Returns the relative luminance of the colour.
     */
  public getRelativeLuminance(): number {
    const cieXyz = this.getCieXyz();
    return cieXyz.y;
  }
}
