import { Chromator } from 'chromator';
import './SliderInput';
import { SliderInput } from './SliderInput';
import './ShadowBox';

const template = document.createElement('template');
template.innerHTML = `
   <style>
      :host {
        --hue: 180;
        --saturation: 1;
        --lightness: 0.5;
      }
      
      shadow-box {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }
  </style>
  <shadow-box>
    <slider-input
      id="hue"
      label="Hue"
      min="0"
      max="360"
      step="1"
      value="0"
      background="
        linear-gradient(
          to right,
          hsl(0, var(--saturation), var(--lightness)),
          hsl(60, var(--saturation), var(--lightness)),
          hsl(120, var(--saturation), var(--lightness)),
          hsl(180, var(--saturation), var(--lightness)),
          hsl(240, var(--saturation), var(--lightness)),
          hsl(300, var(--saturation), var(--lightness)),
          hsl(360, var(--saturation), var(--lightness))
        )
      "
     ></slider-input>
    <slider-input
      id="saturation"
      label="Saturation"
      value="0"
      background="linear-gradient(to right, hsl(var(--hue), 0%, var(--lightness)), hsl(var(--hue), 100%, var(--lightness)))"
    ></slider-input>
    <slider-input
      id="lightness"
      label="Lightness"
      value="0.5"
      background="linear-gradient(to right, #000, hsl(var(--hue), var(--saturation), 50%), #fff)"
    ></slider-input>
  </shadow-box>
`;

export class ColourPickerHsl extends HTMLElement {
  private _colour: Chromator;

  constructor() {
    super();
    this._colour = new Chromator({ hue: 0, saturation: 0, lightness: 0.5 });
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get hueRange(): SliderInput {
    return this.shadowRoot!.getElementById('hue') as SliderInput;
  }

  get saturationRange(): SliderInput {
    return this.shadowRoot!.getElementById('saturation') as SliderInput;
  }

  get lightnessRange(): SliderInput {
    return this.shadowRoot!.getElementById('lightness') as SliderInput;
  }

  get colour(): Chromator {
    return this._colour;
  }

  set colour(c: Chromator) {
    this._colour = c;
    this.hueRange.value = c.getHsl().hue;
    this.saturationRange.value = c.getHsl().saturation;
    this.lightnessRange.value = c.getHsl().lightness;
    this.style.setProperty('--hue', c.getHsl().hue.toString());
    this.style.setProperty('--saturation', (c.getHsl().saturation * 100).toString() + '%');
    this.style.setProperty('--lightness', (c.getHsl().lightness * 100).toString() + '%');
  }

  connectedCallback() {

    const initialValue = this.getAttribute('value');
    if (initialValue) {
      this.colour = new Chromator(initialValue);
    }

    this.hueRange.addEventListener('slider-change', () => {
      this.dispatchEvent(new CustomEvent<Chromator>('hsl-change', {
        detail: new Chromator({ ...this.colour.getHsl(), hue: this.hueRange.value })
      }));
    });

    this.saturationRange.addEventListener('slider-change', () => {
      this.dispatchEvent(new CustomEvent<Chromator>('hsl-change', {
        detail: new Chromator({ ...this.colour.getHsl(), saturation: this.saturationRange.value })
      }));
    });

    this.lightnessRange.addEventListener('slider-change', () => {
      this.dispatchEvent(new CustomEvent<Chromator>('hsl-change', {
        detail: new Chromator({ ...this.colour.getHsl(), lightness: this.lightnessRange.value })
      }));
    });

    this.addEventListener('hsl-change', (event: CustomEvent<Chromator>) => {
      this.colour = event.detail;
    });
  }
}

window.customElements.define('colour-picker-hsl', ColourPickerHsl);