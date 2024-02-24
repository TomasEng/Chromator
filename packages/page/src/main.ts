import './components/ColourCircle';
import './components/ColourPicker';
import { Chromator } from 'chromator';
import { Hsl } from 'chromator';
import { ColourPicker } from './components/ColourPicker';
import { ColourCircle } from './components/ColourCircle';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .root {
      width: 600px;
      margin: auto;
      font-family: Calibri, Arial, sans-serif;
      font-size: 1rem;
    }
  
    .colour-pickers {
      display: flex;
      gap: 1em;
      flex-direction: column;
      width: 100%;
    }
  </style>
  <div class="root">
    <h1>Colour picker</h1>
    <div class="colour-pickers">
      <colour-picker id="colour-picker"></colour-picker>
      <colour-circle id="colour-circle" size="100%"></colour-circle>
    </div>
    <p>&copy; Tomas Engebretsen | <a href="https://github.com/TomasEng/Chromator">See repository on Github</a></p>
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
    this.colour = new Chromator('#39C6BC');
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