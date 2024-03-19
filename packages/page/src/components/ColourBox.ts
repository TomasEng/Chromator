import { Chromator } from 'chromator';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      aspect-ratio: 1;
      border-radius: 0.5em;
      box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px;
    }
  </style>
  <span id="hex"></span>
`;

export class ColourBox extends HTMLElement {
  private _colour: Chromator;

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
    const hex = c.getHexCode();
    this.style.backgroundColor = hex;
    this.style.color = c.getHsl().lightness > 0.5 ? 'black' : 'white';
    this.hexElement.textContent = hex;
  }

  get hexElement(): HTMLElement {
    return this.shadowRoot!.querySelector('#hex')!;
  }

  connectedCallback(): void {
    const initialValue = this.getAttribute('value');
    if (initialValue != null) {
      this.colour = new Chromator(initialValue);
    }
  }
}

window.customElements.define('colour-box', ColourBox);
