import { Chromator } from 'chromator';
import './ColourPickerHsl';
import { ColourPickerHsl } from './ColourPickerHsl';

const template = document.createElement('template');
template.innerHTML = `
  <input type="color" id="input" value="#F00"/>
  <colour-picker-hsl id="hsl" value="#F00"></colour-picker-hsl>
`;

export class ColourPicker extends HTMLElement {
  private _colour: Chromator;

  constructor() {
    super();
    this._colour = new Chromator('#000');
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get input(): HTMLInputElement {
    return this.shadowRoot!.getElementById('input') as HTMLInputElement;
  }

  get hsl(): ColourPickerHsl {
    return this.shadowRoot!.getElementById('hsl') as ColourPickerHsl;
  }

  get colour(): Chromator {
    return this._colour;
  }

  set colour(c: Chromator) {
    this._colour = c;
    this.input.value = c.getHexCode();
    this.hsl.colour = c;
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

    this.addEventListener('colour-change', (event: CustomEvent<Chromator>) => {
      this.colour = event.detail;
    });
  }
}

window.customElements.define('colour-picker', ColourPicker);