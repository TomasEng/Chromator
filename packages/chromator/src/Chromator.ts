import { type ColourCode } from './types/ColourCode';
import { type Hsl } from './types/Hsl';
import { colourCodeToHsla } from './converters/colourCodeToHsla';
import { type Rgb } from './types/Rgb';
import { type Hsla } from './types/Hsla';
import {
  hslaToCieXyza,
  hslToCieXyz,
  relativeLuminanceFromHsl
} from './converters/hsl-xyz';
import { type Rgba } from './types/Rgba';
import { type Hsv } from './types/Hsv';
import { type Hsva } from './types/Hsva';
import {
  hslaObjectToHslString, labaObjectToLabString, lchaObjectToLchString,
  rgbaObjectToRgbDecimalString,
  rgbaObjectToRgbHexString
} from './converters/object-to-string';
import { findInputToAlwaysIncreasingFunc, modulo } from './utils';
import { type Xyz } from './types/Xyz';
import { type Xyza } from './types/Xyza';
import { hslaToRgba, hslToRgb } from './converters/hsl-rgb';
import { hslaToHsva, hslToHsv } from './converters/hsl-hsv';
import { type Lab } from './types/Lab';
import { hslaToLaba, hslToLab } from './converters/hsl-lab';
import { type Laba } from './types/Laba';
import { hslaToLcha, hslToLch } from './converters/hsl-lch';
import { type Lch } from './types/Lch';
import { type Lcha } from './types/Lcha';

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
    return hslaToRgba(this.getHsla());
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
     * Returns the CIE XYZ representation of the colour including the alpha value.
     */
  public getCieXyza(): Xyza {
    return hslaToCieXyza(this.getHsla());
  }

  /**
     * Returns the CIE L*a*b* representation of the colour.
     */
  public getLab(): Lab {
    return hslToLab(this.hsl);
  }

  /**
     * Returns the CIE L*a*b* representation of the colour including the alpha value.
     */
  public getLaba(): Laba {
    return hslaToLaba(this.getHsla());
  }

  /**
     * Returns the CIE LCH representation of the colour.
     */
  public getLch(): Lch {
    return hslToLch(this.hsl);
  }

  /**
     * Returns the CIE LCH representation of the colour including the alpha value.
     */
  public getLcha(): Lcha {
    return hslaToLcha(this.getHsla());
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
     * Returns the CIE L*a*b* CSS code of the colour.
     * @example
     * const red = new Chromator('blue');
     * red.getLabCode(); // 'lab(53 80 67)'
     */
  public getLabCode(): string {
    return labaObjectToLabString(this.getLaba());
  }

  /**
     * Returns the CIE LCH CSS code of the colour.
     * @example
     * const blue = new Chromator('blue');
     * blue.getLchCode(); // 'lch(32 134 306deg)'
     */
  public getLchCode(): string {
    return lchaObjectToLchString(this.getLcha());
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

  /**
     * Transforms the lightness of the colour in order to obtain the given relative luminance.
     * Does not change the hue or saturation.
     */
  public setRelativeLuminance(luminance: number): this {
    if (luminance < 0 || luminance > 1) {
      throw new Error('Relative luminance must be between 0 and 1. Received ' + luminance + '.');
    }
    const lumFunc = (lightness: number): number => {
      const hsl: Hsl = {
        ...this.hsl,
        lightness
      };
      return relativeLuminanceFromHsl(hsl);
    };
    this.hsl.lightness = findInputToAlwaysIncreasingFunc(
      lumFunc,
      luminance,
      0.00001
    );
    return this;
  }
}
