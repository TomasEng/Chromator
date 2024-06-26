import { type ColourCode } from './types/ColourCode';
import { type Hsl } from './types/Hsl';
import { colourCodeToHsla } from './converters/colourCodeToHsla';
import { type Rgb } from './types/Rgb';
import { type Hsla } from './types/Hsla';
import {
  hslaToCieXyza,
  hslToCieXyz,
  relativeLuminanceFromHsl
} from './converters/object-converters/xyz';
import { type Rgba } from './types/Rgba';
import { type Hsv } from './types/Hsv';
import { type Hsva } from './types/Hsva';
import {
  hslaObjectToHslString,
  labaObjectToLabString,
  lchaObjectToLchString,
  oklabaObjectToOklabString,
  oklchaObjectToOklchString,
  rgbaObjectToRgbDecimalString,
  rgbaObjectToRgbHexString
} from './converters/object-to-string';
import { findInputToAlwaysIncreasingFunc, modulo } from './utils';
import { type Xyz } from './types/Xyz';
import { type Xyza } from './types/Xyza';
import { hslaToRgba, hslToRgb } from './converters/object-converters/rgb';
import { hslaToHsva, hslToHsv } from './converters/object-converters/hsv';
import { type Lab } from './types/Lab';
import { hslaToLaba, hslToLab } from './converters/object-converters/lab';
import { type Laba } from './types/Laba';
import {
  hslaToLcha,
  hslToLch,
  lchToHsl,
  adjustLchLightnessForRelativeLuminance
} from './converters/object-converters/lch';
import { type Lch } from './types/Lch';
import { type Lcha } from './types/Lcha';
import { type Oklab } from './types/Oklab';
import { hslaToOklaba, hslToOklab } from './converters/object-converters/oklab';
import { type Oklaba } from './types/Oklaba';
import { type Oklch } from './types/Oklch';
import {
  adjustOklchLightnessForRelativeLuminance,
  hslaToOklcha,
  hslToOklch,
  oklchToHsl
} from './converters/object-converters/oklch';
import { type Oklcha } from './types/Oklcha';
import { type HueProfile } from './types/HueProfile';
import { RELATIVE_LUMINANCE_ALGORITHM_PRECISION } from './constants';

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
     * Returns the Oklab representation of the colour.
     */
  public getOklab(): Oklab {
    return hslToOklab(this.getHsl());
  }

  /**
     * Returns the Oklab representation of the colour including the alpha value.
     */
  public getOklaba(): Oklaba {
    return hslaToOklaba(this.getHsla());
  }

  /**
     * Returns the Oklch representation of the colour.
     */
  public getOklch(): Oklch {
    return hslToOklch(this.getHsla());
  }

  /**
     * Returns the Oklch representation of the colour including the alpha value.
     */
  public getOklcha(): Oklcha {
    return hslaToOklcha(this.getHsla());
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
     * Returns the Oklab CSS code of the colour.
     * @example
     * const blue = new Chromator('blue');
     * blue.getOklabCode(); // 'oklab(0.45 -0.03 -0.31)'
     */
  public getOklabCode(): string {
    return oklabaObjectToOklabString(this.getOklaba());
  }

  /**
     * Returns the Oklch CSS code of the colour.
     * @example
     * const blue = new Chromator('blue');
     * blue.getOklchCode(); // 'oklch(0.45 0.31 264deg)'
     */
  public getOklchCode(): string {
    return oklchaObjectToOklchString(this.getOklcha());
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
     * Does not change the hue or chroma/saturation, unless if the colour is outside the SRGB gamut.
     * Then the chroma is adjusted so that it is within the SRGB gamut.
     * @param luminance - The relative luminance to obtain. Must be between 0 and 1.
     * @param profile - The colour profile to use for the transformation. Valid profiles are 'hsl', 'lch', and 'oklch'. Default is 'hsl'.
     */
  public setRelativeLuminance(luminance: number, profile: HueProfile = 'hsl'): this {
    if (luminance < 0 || luminance > 1) {
      throw new Error('Relative luminance must be between 0 and 1. Received ' + luminance + '.');
    }
    if (luminance === 1) {
      this.hsl.lightness = 1;
      return this;
    }
    if (luminance === 0) {
      this.hsl.lightness = 0;
      return this;
    }
    switch (profile) {
      case 'hsl':
        return this.setRelativeLuminanceByAdjustingHSLLightness(luminance);
      case 'lch':
        return this.setRelativeLuminanceByAdjustingLchLightness(luminance);
      case 'oklch':
        return this.setRelativeLuminanceByAdjustingOklabLightness(luminance);
    }
  }

  private setRelativeLuminanceByAdjustingHSLLightness(luminance: number): this {
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
      RELATIVE_LUMINANCE_ALGORITHM_PRECISION,
      {
        start: -0.5,
        end: 1.5
      }
    );
    return this;
  }

  private setRelativeLuminanceByAdjustingLchLightness(luminance: number): this {
    const lch: Lch = adjustLchLightnessForRelativeLuminance(this.getLch(), luminance);
    const hsl: Hsl = lchToHsl(lch);
    return this.updateHsl(hsl);
  }

  private setRelativeLuminanceByAdjustingOklabLightness(luminance: number): this {
    const oklch = adjustOklchLightnessForRelativeLuminance(this.getOklch(), luminance);
    const hsl = oklchToHsl(oklch);
    return this.updateHsl(hsl);
  }

  private updateHsl(hsl: Hsl): this {
    this.hsl.hue = hsl.hue;
    this.hsl.saturation = hsl.saturation;
    this.hsl.lightness = hsl.lightness;
    return this;
  }

  /**
   * Finds the contrast between this colour and another colour based on the relative luminance and some offset value.
   * contrast = (lightest colour luminance + offset) / (darkest colour luminance + offset)
   * @param otherColour The colour to compare with.
   * @param offset The offset to use for the relative luminance. Defaults to 0.05, which is the value used by the WCAG definition of contrast.
   * @returns The contrast between the two colours. The minimum value is 1, which means that the colours have the same luminance. With an offset of 0.05, the maximum contrast is 21 (1.05/0.05).
   */
  public findContrast(otherColour: Chromator | ColourCode, offset: number = 0.05): number {
    if (offset === 0) throw Error('Offset must be non-zero.');
    const otherChromator = Chromator.getChromatorObject(otherColour);
    const thisRelativeLuminanceWithOffset = this.getRelativeLuminance() + offset;
    const otherRelativeLuminanceWithOffset = otherChromator.getRelativeLuminance() + offset;
    const lightest = Math.max(thisRelativeLuminanceWithOffset, otherRelativeLuminanceWithOffset);
    const darkest = Math.min(thisRelativeLuminanceWithOffset, otherRelativeLuminanceWithOffset);
    return lightest / darkest;
  }

  /**
   * Increases the luminance of the colour by a given contrast value.
   * @param contrast The target contrast of the new colour compared to the current colour. Must be greater than 1.
   * @param profile The colour profile to use for the transformation. Valid profiles are 'hsl', 'lch', and 'oklch'. Default is 'hsl'. The hue of the given profile will be kept constant. So will the saturation/chroma, given that it is possible within the SRGB gamut.
   * @param offset The offset value to use for the contrast calculation. Defaults to 0.05, which is the value used by the WCAG definition of contrast.
   * @returns The Chromator instance with the increased luminance. If the target luminance is greater than 1, undefined is returned.
   */
  public increaseLuminanceByContrast(contrast: number, profile: HueProfile = 'hsl', offset: number = 0.05): this | undefined {
    if (contrast < 1) throw Error('Contrast must be greater than or equal to 1.');
    if (offset === 0) throw Error('Offset must be non-zero.');
    const targetLuminance = contrast * (this.getRelativeLuminance() + offset) - offset;
    if (targetLuminance > 1) return undefined;
    return this.setRelativeLuminance(targetLuminance, profile);
  }

  /**
   * Decreases the luminance of the colour by a given contrast value.
   * @param contrast The target contrast of the new colour compared to the current colour. Must be greater than 1.
   * @param profile The colour profile to use for the transformation. Valid profiles are 'hsl', 'lch', and 'oklch'. Default is 'hsl'. The hue of the given profile will be kept constant. So will the saturation/chroma, given that it is possible within the SRGB gamut.
   * @param offset The offset value to use for the contrast calculation. Defaults to 0.05, which is the value used by the WCAG definition of contrast.
   * @returns The Chromator instance with the decreased luminance. If the target luminance is less than 0, undefined is returned.
   */
  public decreaseLuminanceByContrast(contrast: number, profile: HueProfile = 'hsl', offset: number = 0.05): this | undefined {
    if (contrast < 1) throw Error('Contrast must be greater than or equal to 1.');
    if (offset === 0) throw Error('Offset must be non-zero.');
    const targetLuminance = (this.getRelativeLuminance() + offset) / contrast - offset;
    if (targetLuminance < 0) return undefined;
    return this.setRelativeLuminance(targetLuminance, profile);
  }

  private static getChromatorObject(colour: Chromator | ColourCode): Chromator {
    return colour instanceof Chromator ? colour : new Chromator(colour);
  }
}
