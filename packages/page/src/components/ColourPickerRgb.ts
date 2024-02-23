import { Chromator } from 'chromator';
import './SliderInput';
import { SliderInput } from './SliderInput';
import './ShadowBox';

const template = document.createElement('template');
template.innerHTML = `
   <style>
      shadow-box {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }
  </style>
  <shadow-box>
    <slider-input
      id="red"
      label="Red"
      min="0"
      max="255"
      step="1"
      value="0"
      background="linear-gradient(to right, #000, #f00)"
     ></slider-input>
    <slider-input
      id="green"
      label="Green"
      min="0"
      max="255"
      step="1"
      value="0"
      background="linear-gradient(to right, #000, #0f0)"
    ></slider-input>
    <slider-input
      id="blue"
      label="Blue"
      min="0"
      max="255"
      step="1"
      value="0"
      background="linear-gradient(to right, #000, #00f)"
    ></slider-input>
  </shadow-box>
`;

export class ColourPickerRgb extends HTMLElement {
  private _colour: Chromator;

  constructor() {
    super();
    this._colour = new Chromator({ hue: 0, saturation: 0, lightness: 0.5 });
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get redRange(): SliderInput {
    return this.shadowRoot!.getElementById('red') as SliderInput;
  }

  get greenRange(): SliderInput {
    return this.shadowRoot!.getElementById('green') as SliderInput;
  }

  get blueRange(): SliderInput {
    return this.shadowRoot!.getElementById('blue') as SliderInput;
  }

  get colour(): Chromator {
    return this._colour;
  }

  set colour(c: Chromator) {
    this._colour = c;
    const rgb = c.getRgb();
    this.redRange.value = rgb.red;
    this.greenRange.value = rgb.green;
    this.blueRange.value = rgb.blue;
  }

  connectedCallback() {

    const initialValue = this.getAttribute('value');
    if (initialValue) {
      this.colour = new Chromator(initialValue);
    }

    this.redRange.addEventListener('slider-change', () => {
      this.dispatchEvent(new CustomEvent<Chromator>('rgb-change', {
        detail: new Chromator({ ...this.colour.getRgb(), red: this.redRange.value })
      }));
    });

    this.greenRange.addEventListener('slider-change', () => {
      this.dispatchEvent(new CustomEvent<Chromator>('rgb-change', {
        detail: new Chromator({ ...this.colour.getRgb(), green: this.greenRange.value })
      }));
    });

    this.blueRange.addEventListener('slider-change', () => {
      this.dispatchEvent(new CustomEvent<Chromator>('rgb-change', {
        detail: new Chromator({ ...this.colour.getRgb(), blue: this.blueRange.value })
      }));
    });

    this.addEventListener('rgb-change', (event: CustomEvent<Chromator>) => {
      this.colour = event.detail;
    });
  }
}

window.customElements.define('colour-picker-rgb', ColourPickerRgb);