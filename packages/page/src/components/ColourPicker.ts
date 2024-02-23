import { Chromator } from 'chromator';
import './ColourPickerHsl';
import { ColourPickerHsl } from './ColourPickerHsl';
import './ColourPickerRgb';
import { ColourPickerRgb } from './ColourPickerRgb';

const template = document.createElement('template');
template.innerHTML = `
  <input type="color" id="input"/>
  <colour-picker-hsl id="hsl"></colour-picker-hsl>
  <colour-picker-rgb id="rgb"></colour-picker-rgb>
`;

export class ColourPicker extends HTMLElement {
  private _colour: Chromator;

  constructor() {
    super();
    this._colour = new Chromator({ hue: 0, saturation: 0, lightness: 0.5 });
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get input(): HTMLInputElement {
    return this.shadowRoot!.getElementById('input') as HTMLInputElement;
  }

  get hsl(): ColourPickerHsl {
    return this.shadowRoot!.getElementById('hsl') as ColourPickerHsl;
  }

  get rgb(): ColourPickerRgb {
    return this.shadowRoot!.getElementById('rgb') as ColourPickerRgb;
  }

  get colour(): Chromator {
    return this._colour;
  }

  set colour(c: Chromator) {
    this._colour = c;
    this.input.value = c.getHexCode();
    this.hsl.colour = c;
    this.rgb.colour = c;
  }

  connectedCallback() {

    this.input.addEventListener('input', () => {
      this.dispatchEvent(new CustomEvent<Chromator>('colour-change', {
        detail: new Chromator(this.input.value)
      }));
    });

    this.hsl.addEventListener('hsl-change', (event: CustomEvent<Chromator>) => {
      this.dispatchEvent(new CustomEvent<Chromator>('colour-change', {
        detail: event.detail
      }));
    });

    this.rgb.addEventListener('rgb-change', (event: CustomEvent<Chromator>) => {
      this.dispatchEvent(new CustomEvent<Chromator>('colour-change', {
        detail: event.detail
      }));
    });

    this.addEventListener('colour-change', (event: CustomEvent<Chromator>) => {
      this.colour = event.detail;
    });
  }
}

window.customElements.define('colour-picker', ColourPicker);