import {Chromator} from 'chromator';
import './ColourRow';
import './LayoutColumn';
import {oppositeColours} from "../utils/colourUtils";
import {ColourRow} from "./ColourRow";
import './ShadowBox';

const template = document.createElement('template');
template.innerHTML = `
  <shadow-box>
    <layout-column>
        <div>
          <label for="opposites">Number of opposites:</label>
          <input type="number" id="opposites" value="3" min="1" max="144"/>
        </div>
        <div>
          <label for="shades">Number of shades:</label>
          <input type="number" id="shades" value="8" min="1" max="144"/>
        </div>
        <layout-row id="boxes">
          <colour-row id="maincolour"></colour-row>
        </layout-row>
    </layout-column>
  </shadow-box>
`;

export class ColourProperties extends HTMLElement {
    private _colour: Chromator = new Chromator({hue: 0, saturation: 1, lightness: 0.5});
    private _numberOfOpposites = 3;
    private _numberOfShades = 8;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }

    get mainColourRow(): ColourRow {
        return this.shadowRoot!.querySelector('#maincolour') as ColourRow;
    }

    get oppositesInput(): HTMLInputElement {
        return this.shadowRoot!.querySelector('#opposites') as HTMLInputElement;
    }

    get shadesInput(): HTMLInputElement {
        return this.shadowRoot!.querySelector('#shades') as HTMLInputElement;
    }

    get boxes(): HTMLElement {
        return this.shadowRoot!.querySelector('#boxes') as HTMLElement;
    }

    get colour(): Chromator {
        return this._colour;
    }

    set colour(c: Chromator) {
        this._colour = c;
        this.mainColourRow.colour = c;
        this.setOpposites();
    }

    get numberOfOpposites(): number {
        return this._numberOfOpposites;
    }

    set numberOfOpposites(value: number) {
        this._numberOfOpposites = value;
        this.setOpposites();
    }

    get numberOfShades(): number {
        return this._numberOfShades;
    }

    set numberOfShades(value: number) {
        this._numberOfShades = value;
        this.mainColourRow.numberOfShades = value;
        this.otherColourRows.forEach(row => row.numberOfShades = value);
    }

    private otherColourRows: ColourRow[] = [];

    private setOpposites(): void {
        const opposites = oppositeColours(this.numberOfOpposites, this.colour);
        opposites.splice(0, 1);
        if (this.otherColourRows.length !== opposites.length) {
            this.otherColourRows.forEach(box => box.remove());
            opposites.forEach(colour => {
                const row = document.createElement('colour-row') as ColourRow;
                row.colour = colour;
                row.numberOfShades = this.numberOfShades;
                this.boxes.appendChild(row);
                this.otherColourRows.push(row);
            });
        } else {
            opposites.forEach((colour, index) => {
                const row = this.otherColourRows[index];
                row.colour = colour;
                row.numberOfShades = this.numberOfShades;
            });
        }
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

        this.shadesInput.addEventListener('input', () => {
            this.numberOfShades = parseInt(this.shadesInput.value);
        });
    }
}

window.customElements.define('colour-properties', ColourProperties);
