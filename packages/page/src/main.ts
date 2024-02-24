import './components/ColourCircle';
import './components/ColourPicker';
import { Chromator } from 'chromator';
import { Hsl } from 'chromator';
import { ColourPicker } from './components/ColourPicker';
import { ColourCircle } from './components/ColourCircle';

const template = document.createElement('template');
template.innerHTML = `
  <div>
    <h1>Colour picker</h1>
    <colour-picker id="colour-picker"></colour-picker>
    <colour-circle id="colour-circle" size="500px"></colour-circle>
  </div>
`;

class MainComponent extends HTMLElement {
  private _colour: Chromator = new Chromator({ hue: 0, saturation: 1, lightness: 0.5 });

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
    this.colourPicker.colour = c;
    this.colourCircle.colour = c;
  }

  get colourPicker(): ColourPicker {
    return this.shadowRoot!.querySelector('#colour-picker') as ColourPicker;
  }

  get colourCircle(): ColourCircle {
    return this.shadowRoot!.querySelector('#colour-circle') as ColourCircle;
  }

  getHsl(): Hsl {
    return this.colour.getHsl();
  }

  connectedCallback() {
    this.colour = new Chromator({ hue: 0, saturation: 1, lightness: 0.5 });
    this.colourPicker.addEventListener('colour-change', (event: CustomEvent<Chromator>) => {
      this.colour = event.detail;
    });
    this.colourCircle.addEventListener('point-change', (event: CustomEvent<Hsl>) => {
      this.colour = new Chromator({...event.detail, lightness: this.colour.getHsl().lightness});
    });
  }
}
window.customElements.define('main-component', MainComponent);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main-component></main-component>
`;