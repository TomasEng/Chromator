import './components/ColourCircle';
import './components/ColourPicker';
import './components/LayoutColumn';
import {Chromator} from 'chromator';
import {Hsl} from 'chromator';
import {ColourPicker} from './components/ColourPicker';
import {ColourCircle} from './components/ColourCircle';
import './components/ColourProperties';
import {ColourProperties} from "./components/ColourProperties";

const template = document.createElement('template');
template.innerHTML = `
  <style>
    h1 {
      margin: 0;
    }
  
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
  <layout-column class="root">
    <h1>Colour picker</h1>
    <layout-row>
      <layout-column>
        <colour-picker id="colour-picker"></colour-picker>
        <colour-circle id="colour-circle" size="100%"></colour-circle>
      </layout-column>
      <colour-properties id="properties"></colour-properties>
    </layout-row>
    <p>&copy; Tomas Engebretsen | <a href="https://github.com/TomasEng/Chromator">See repository on Github</a></p>
  </div>
`;

class MainComponent extends HTMLElement {
    private _colour: Chromator = new Chromator({hue: 0, saturation: 1, lightness: 0.5});
    private _numberOfOpposites = 3;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }

    get colour(): Chromator {
        return this._colour;
    }

    set colour(c: Chromator) {
        this._colour = c;
        this.colourPicker.colour = c;
        this.colourCircle.colour = c;
        this.colourProperties.colour = c;
    }

    get numberOfOpposites(): number {
        return this._numberOfOpposites;
    }

    set numberOfOpposites(value: number) {
        this._numberOfOpposites = value;
        this.colourCircle.numberOfOpposites = value;
    }

    get colourPicker(): ColourPicker {
        return this.shadowRoot!.querySelector('#colour-picker') as ColourPicker;
    }

    get colourCircle(): ColourCircle {
        return this.shadowRoot!.querySelector('#colour-circle') as ColourCircle;
    }

    get colourProperties(): ColourProperties {
        return this.shadowRoot!.querySelector('#properties') as ColourProperties;
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
        this.colourProperties.addEventListener('oppositeschange', (event: CustomEvent<number>) => {
            this.numberOfOpposites = event.detail;
        });
    }
}

window.customElements.define('main-component', MainComponent);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main-component></main-component>
`;