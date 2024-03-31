import { Chromator } from 'chromator';
import { round } from 'chromator/dist/utils';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      aspect-ratio: 1;
      border-radius: 0.5em;
      box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px;
    }
  </style>
  <span id="hex"></span>
`;

export class ColourBox extends HTMLElement {
  private _colour: Chromator;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get colour(): Chromator {
    return this._colour;
  }

  set colour(c: Chromator) {
    this._colour = c;
    const hex = c.getHexCode();
    const { hue, saturation, lightness } = c.getHsl();
    const relativeLuminance = c.getRelativeLuminance();
    const hueRounded = round(hue, 0);
    const saturationRounded = round(saturation, 2);
    const lightnessRounded = round(lightness, 2);
    const relativeLuminanceRounded = round(relativeLuminance, 2);
    const hueStr = Intl.NumberFormat().format(hueRounded);
    const saturationStr = Intl.NumberFormat().format(saturationRounded);
    const lightnessStr = Intl.NumberFormat().format(lightnessRounded);
    const relativeLuminanceStr = Intl.NumberFormat().format(relativeLuminanceRounded);
    this.style.backgroundColor = hex;
    this.style.color = relativeLuminance > 0.18 ? 'black' : 'white';
    this.title = `Hue: ${hueStr}°; Saturation: ${saturationStr}; Lightness: ${lightnessStr}; Relative luminance: ${relativeLuminanceStr}`;
    this.hexElement.textContent = hex;
  }

  get hexElement(): HTMLElement {
    return this.shadowRoot!.querySelector('#hex')!;
  }

  connectedCallback(): void {
    const initialValue = this.getAttribute('value');
    if (initialValue != null) {
      this.colour = new Chromator(initialValue);
    }
  }
}

window.customElements.define('colour-box', ColourBox);
