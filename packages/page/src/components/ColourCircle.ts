import { HsPoint } from '../types/HsPoint';
import './ColourCirclePoint';
import { ColourCirclePoint } from './ColourCirclePoint';
import { Chromator } from 'chromator';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .circle {
      --lightness: 50%;
      aspect-ratio: 1;
      border-radius: 50%;
      width: 400px;
      background: radial-gradient(hsl(0, 0%, var(--lightness)), transparent 71%), conic-gradient(
        hsl(90, 100%, var(--lightness)) 0deg,
        hsl(60, 100%, var(--lightness)) 30deg,
        hsl(30, 100%, var(--lightness)) 60deg,
        hsl(0, 100%, var(--lightness)) 90deg,
        hsl(330, 100%, var(--lightness)) 120deg,
        hsl(300, 100%, var(--lightness)) 150deg,
        hsl(270, 100%, var(--lightness)) 180deg,
        hsl(240, 100%, var(--lightness)) 210deg,
        hsl(210, 100%, var(--lightness)) 240deg,
        hsl(180, 100%, var(--lightness)) 270deg,
        hsl(150, 100%, var(--lightness)) 300deg,
        hsl(120, 100%, var(--lightness)) 330deg,
        hsl(90, 100%, var(--lightness))
      );
    }
  </style>
  <div class="circle">
    <colour-circle-point class="point"></colour-circle-point>
  </div>
`;

export class ColourCircle extends HTMLElement {
  private _lightness: number;
  private _point: HsPoint;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get lightness(): number {
    return this._lightness;
  }

  set lightness(value: number) {
    this._lightness = value;
    this.circle.style.setProperty('--lightness', `${value * 100}%`);
  }

  get point(): HsPoint {
    return this._point;
  }

  set point(value: HsPoint) {
    this._point = value;
    const c = new Chromator({ ...value, lightness: this.lightness });
    this.pointElement.colour = c;
  }

  get circle() {
    return this.shadowRoot!.querySelector('.circle') as HTMLDivElement;
  }

  get pointElement(): ColourCirclePoint {
    return this.shadowRoot!.querySelector('.point') as ColourCirclePoint;
  }

  connectedCallback() {
    const size = this.getAttribute('size');
    if (size) {
      this.circle.style.width = size;
    }
  }
}

window.customElements.define('colour-circle', ColourCircle);