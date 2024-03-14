import {HsPoint} from '../types/HsPoint';
import './ColourCirclePoint';
import {ColourCirclePoint} from './ColourCirclePoint';
import {Chromator} from 'chromator';
import {ScreenCoords} from '../types/ScreenCoords';
import {screenCoordsToPolarDegreeCoords} from '../utils/numberUtils';
import {oppositeColours} from "../utils/colourUtils";

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
      position: relative;
    }
  </style>
  <div class="circle">
    <colour-circle-point class="point" base></colour-circle-point>
  </div>
`;

export class ColourCircle extends HTMLElement {
    private _colour: Chromator = new Chromator({hue: 0, saturation: 1, lightness: 0.5})
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
        this.pointElement.colour = c;
        const {hue, saturation, lightness} = c.getHsl();
        this.circle.style.setProperty('--lightness', `${lightness * 100}%`);
        this.pointElement.colour = c;
        this.setOpposites();
    }

    get numberOfOpposites(): number {
        return this._numberOfOpposites;
    }

    set numberOfOpposites(value: number) {
        this._numberOfOpposites = value;
        this.setOpposites();
    }

    get lightness(): number {
        return this.colour.getHsl().lightness;
    }

    set lightness(value: number) {
        this.colour = new Chromator({...this.colour.getHsl(), lightness: value});
    }

    get point(): HsPoint {
        const {hue, saturation} = this.colour.getHsl();
        return {hue, saturation};
    }

    set point(value: HsPoint) {
        const {lightness} = this.colour.getHsl();
        this.colour = new Chromator({...value, lightness});
    }

    get circle() {
        return this.shadowRoot!.querySelector('.circle') as HTMLDivElement;
    }

    get pointElement(): ColourCirclePoint {
        return this.shadowRoot!.querySelector('.point') as ColourCirclePoint;
    }

    private otherPoints: ColourCirclePoint[] = [];

    private setOpposites() {
        const opposites = oppositeColours(this.numberOfOpposites, this.colour);
        opposites.splice(0, 1);
        this.otherPoints.forEach(point => point.remove());
        this.otherPoints = opposites.map(colour => {
            const point = document.createElement('colour-circle-point') as ColourCirclePoint;
            point.colour = colour;
            this.circle.appendChild(point);
            return point;
        });
    }

    connectedCallback() {
        const size = this.getAttribute('size');
        if (size) {
            this.circle.style.width = size;
        }

        this.setOpposites();

        this.addEventListener('dragover', (event: DragEvent) => {
            event.preventDefault();
        });

        this.addEventListener('click', (event: MouseEvent) => {
            const positionWithinCircle: ScreenCoords = this.getPositionWithinCircle({
                top: event.clientY,
                left: event.clientX
            });
            const polarCoords = screenCoordsToPolarDegreeCoords(positionWithinCircle);
            if (polarCoords.radius <= 1) {
                this.point = {hue: polarCoords.angle, saturation: polarCoords.radius};
                this.dispatchEvent(new CustomEvent<HsPoint>('point-change', {
                    detail: this.point
                }));
            }
        });

        this.pointElement.addEventListener('point-drag', (event: CustomEvent<ScreenCoords>) => {
            const positionWithinCircle = this.getPositionWithinCircle(event.detail);
            const polarCoords = screenCoordsToPolarDegreeCoords(positionWithinCircle);
            this.point = {hue: polarCoords.angle, saturation: Math.min(polarCoords.radius, 1)};
            this.dispatchEvent(new CustomEvent<HsPoint>('point-change', {
                detail: this.point
            }));
        });
    };

    private getPositionWithinCircle(clientCoords: ScreenCoords): ScreenCoords {
        const circleRect = this.circle.getBoundingClientRect();
        return {
            top: (clientCoords.top - circleRect.top) / circleRect.height,
            left: (clientCoords.left - circleRect.left) / circleRect.width
        };
    };
}

window.customElements.define('colour-circle', ColourCircle);