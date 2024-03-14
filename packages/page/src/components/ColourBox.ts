import { Chromator } from 'chromator';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      width: 4rem;
      aspect-ratio: 1;
      border-radius: 0.5em;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  </style>
  <slot></slot>
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
    this.style.backgroundColor = c.getHexCode();
  }

  connectedCallback(): void {
    const initialValue = this.getAttribute('value');
    if (initialValue != null) {
      this.colour = new Chromator(initialValue);
    }
  }
}

window.customElements.define('colour-box', ColourBox);
