import { Chromator } from 'chromator';
import { PolarCoords } from '../types/PolarCoords';
import { polarDegreeCoordsToScreenCoords } from '../utils/numberUtils';
import { ScreenCoords } from '../types/ScreenCoords';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .point {
      --left: 0.5;
      --top: 0.5;
      --size: 1rem;
      width: var(--size);
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #000;
      box-shadow: 0 0 0 2px #fff, 0 0 0 4px #000;
      position: relative;
      top: calc(var(--top) * 100% - var(--size) / 2);
      left: calc(var(--left) * 100% - var(--size) / 2);
      cursor: pointer;
    }
  </style>
  <div class="point" draggable="true"></div>
`;

export class ColourCirclePoint extends HTMLElement {
  private _colour: Chromator;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get point(): HTMLDivElement {
    return this.shadowRoot!.querySelector('.point') as HTMLDivElement;
  }

  get colour(): Chromator {
    return this._colour;
  }

  set colour(c: Chromator) {
    this.point.style.background = c.getHexCode();
    const {hue, saturation} = c.getHsl();
    const polarCoords: PolarCoords = {angle: hue, radius: saturation};
    const screenCoords = polarDegreeCoordsToScreenCoords(polarCoords);
    this.point.style.setProperty('--left', `${screenCoords.left}`);
    this.point.style.setProperty('--top', `${screenCoords.top}`);
  }

  connectedCallback() {
    this.point.addEventListener('drag', (event: DragEvent) => {
      this.dispatchEvent(new CustomEvent<ScreenCoords>('point-drag', {
        detail: {
          left: event.x,
          top: event.y
        }
      }));
    });

    this.point.addEventListener('dragstart', (event: DragEvent) => {
      event.dataTransfer!.setDragImage(new Image(), 0, 0);
    });
  }
}

window.customElements.define('colour-circle-point', ColourCirclePoint);