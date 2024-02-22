import { Chromator } from 'chromator';

const template = document.createElement('template');
template.innerHTML = `
  <input type="range" id="hue" min="0" max="360" value="0" step="1"/>
  <input type="range" id="saturation" min="0" max="1" step="0.01"/>
  <input type="range" id="lightness" min="0" max="1" step="0.01"/>
`;

export class ColourPickerHsl extends HTMLElement {
  private _colour: Chromator;

  constructor() {
    super();
    this._colour = new Chromator('#000');
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get hueRange(): HTMLInputElement {
    return this.shadowRoot!.getElementById('hue') as HTMLInputElement;
  }

  get saturationRange(): HTMLInputElement {
    return this.shadowRoot!.getElementById('saturation') as HTMLInputElement;
  }

  get lightnessRange(): HTMLInputElement {
    return this.shadowRoot!.getElementById('lightness') as HTMLInputElement;
  }

  get colour(): Chromator {
    return this._colour;
  }

  set colour(c: Chromator) {
    this._colour = c;
    this.hueRange.value = String(c.getHsl().hue);
    this.saturationRange.value = String(c.getHsl().saturation);
    this.lightnessRange.value = String(c.getHsl().lightness);
  }

  connectedCallback() {

    const initialValue = this.getAttribute('value');
    if (initialValue) {
      this.colour = new Chromator(initialValue);
    }

    this.hueRange.addEventListener('input', () => {
      this.dispatchEvent(new CustomEvent<Chromator>('hsl-change', {
        detail: new Chromator({ ...this.colour.getHsl(), hue: Number(this.hueRange.value) })
      }));
    });

    this.saturationRange.addEventListener('input', () => {
      this.dispatchEvent(new CustomEvent<Chromator>('hsl-change', {
        detail: new Chromator({ ...this.colour.getHsl(), saturation: Number(this.saturationRange.value) })
      }));
    });

    this.lightnessRange.addEventListener('input', () => {
      this.dispatchEvent(new CustomEvent<Chromator>('hsl-change', {
        detail: new Chromator({ ...this.colour.getHsl(), lightness: Number(this.lightnessRange.value) })
      }));
    });

    this.addEventListener('colour-change', (event: CustomEvent<Chromator>) => {
      this.colour = event.detail;
    });
  }
}

window.customElements.define('colour-picker-hsl', ColourPickerHsl);