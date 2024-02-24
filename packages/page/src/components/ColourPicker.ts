import { Chromator } from 'chromator';
import './ColourPickerHsl';
import { ColourPickerHsl } from './ColourPickerHsl';
import './ColourPickerRgb';
import { ColourPickerRgb } from './ColourPickerRgb';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1em;
    }
    
    .input-wrapper {
      display: flex;
      gap: 1em;
      align-items: center;
    }
    
    label, p {
      font-size: 1.5em;
      padding: 0;
      margin: 0;
    }
  
    .sliders {
      display: flex;
      gap: 1em;
      width: 100%;
    }
    
    .slider {
      flex: 1;
    }
  </style>
  <shadow-box class="input-wrapper">
    <label for="input">Colour:</label>
    <input type="color" id="input"/>
    <p id="hexcode"></p>
  </shadow-box>
  <div class="sliders">
    <colour-picker-hsl id="hsl" class="slider"></colour-picker-hsl>
    <colour-picker-rgb id="rgb" class="slider"></colour-picker-rgb>
  </div>
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

  get hexcode(): HTMLParagraphElement {
    return this.shadowRoot!.getElementById('hexcode') as HTMLParagraphElement;
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
    this.hexcode.textContent = c.getHexCode();
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