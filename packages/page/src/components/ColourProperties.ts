import {Chromator} from 'chromator';
import './ColourBox';
import {ColourBox} from "./ColourBox";
import './LayoutColumn';
import {oppositeColours} from "../utils/colourUtils";

const template = document.createElement('template');
template.innerHTML = `
  <layout-column>
    <div>
      <label for="opposites">Number of opposites:</label>
      <input type="number" id="opposites" value="3" min="1" max="144"/>
    </div>
    <layout-column id="boxes">
      <colour-box id="maincolour"></colour-box>
    </layout-column>
  </layout-column>
`;

export class ColourProperties extends HTMLElement {
    private _colour: Chromator = new Chromator({hue: 0, saturation: 1, lightness: 0.5});
    private _numberOfOpposites = 3;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }

    get mainColourBox(): ColourBox {
        return this.shadowRoot!.querySelector('#maincolour') as ColourBox;
    }

    get oppositesInput(): HTMLInputElement {
        return this.shadowRoot!.querySelector('input') as HTMLInputElement;
    }

    get boxes(): HTMLElement {
        return this.shadowRoot!.querySelector('#boxes') as HTMLElement;
    }

    get colour(): Chromator {
        return this._colour;
    }

    set colour(c: Chromator) {
        this._colour = c;
        this.mainColourBox.colour = c;
        this.setOpposites();
    }

    get numberOfOpposites(): number {
        return this._numberOfOpposites;
    }

    set numberOfOpposites(value: number) {
        this._numberOfOpposites = value;
        this.setOpposites();
    }

    private otherColourBoxes: ColourBox[] = [];

    private setOpposites(): void {
        const opposites = oppositeColours(this.numberOfOpposites, this.colour);
        opposites.splice(0, 1);
        this.otherColourBoxes.forEach(box => box.remove());
        opposites.forEach(colour => {
            const box = document.createElement('colour-box') as ColourBox;
            box.colour = colour;
            this.boxes.appendChild(box);
            this.otherColourBoxes.push(box);
        });
    }

    connectedCallback(): void {
        const initialValue = this.getAttribute('value');
        if (initialValue != null) {
            this.colour = new Chromator(initialValue);
        }

        this.setOpposites();

        this.oppositesInput.addEventListener('input', () => {
            this.numberOfOpposites = parseInt(this.oppositesInput.value);
            this.dispatchEvent(new CustomEvent('oppositeschange', {detail: this.numberOfOpposites}));
        });
    }
}

window.customElements.define('colour-properties', ColourProperties);
