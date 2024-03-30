import { Chromator } from 'chromator';
import { shades } from '../utils/colourUtils';
import { type ColourBox } from './ColourBox';
import './ColourBox';
import './LayoutColumn';
import { type ShadesProfile } from '../types/ShadesProfile';

const template = document.createElement('template');
template.innerHTML = `
  <layout-column id="wrapper"></layout-column>
`;

export class ColourRow extends HTMLElement {
  private _colour: Chromator = new Chromator({ hue: 0, saturation: 1, lightness: 0.5 });
  private _numberOfShades = 6;
  private _shadesProfile: ShadesProfile = 'luminance';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get wrapper(): HTMLElement {
    return this.shadowRoot!.querySelector('#wrapper')!;
  }

  get colour(): Chromator {
    return this._colour;
  }

  set colour(c: Chromator) {
    this._colour = c;
    this.setBoxes();
  }

  get numberOfShades(): number {
    return this._numberOfShades;
  }

  set numberOfShades(value: number) {
    this._numberOfShades = value;
    this.setBoxes();
  }

  get shadesProfile(): ShadesProfile {
    return this._shadesProfile;
  }

  set shadesProfile(value: ShadesProfile) {
    this._shadesProfile = value;
    this.setBoxes();
  }

  private readonly boxes: ColourBox[] = [];

  private setBoxes(): void {
    const colours = shades(this.numberOfShades, this.colour, this.shadesProfile);
    if (this.boxes.length !== colours.length) {
      this.boxes.forEach(box => { box.remove(); });
      colours.forEach(colour => {
        const box = document.createElement('colour-box') as ColourBox;
        box.colour = colour;
        this.wrapper.appendChild(box);
        this.boxes.push(box);
      });
    } else {
      this.boxes.forEach((box, index) => {
        box.colour = colours[index];
      });
    }
  }

  connectedCallback(): void {
    const initialValue = this.getAttribute('value');
    if (initialValue != null) {
      this.colour = new Chromator(initialValue);
    }
    this.setBoxes();
  }
}

window.customElements.define('colour-row', ColourRow);
