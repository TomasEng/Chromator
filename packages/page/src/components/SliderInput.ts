const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      flex-direction: column;
    }
    
    .label-wrapper {
      display: flex;
      gap: 1em;
      align-items: center;
      margin-bottom: .5rem;
    }
    
    .label-wrapper > * {
      padding: 0;
      margin: 0;
    }
    
    label {
      font-weight: bold;
    }
    
    input {
      --height: 1rem;
      -webkit-appearance: none;
      appearance: none;
      height: var(--height);
      background-color: grey;
      border-radius: calc(var(--height) / 2);
    }
    
    input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: var(--height);
      aspect-ratio: 1;
      background-color: transparent;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 0 2px #fff, 0 0 0 4px #000;
    }
  </style>
  <div class="label-wrapper">
    <label for="slider" id="label"></label>
    <p id="value"></p>
  </div>
  <input type="range" id="slider" min="0" max="1" step="0.01"/>
`;

export class SliderInput extends HTMLElement {
  private _value: number = 0.5;
  private _max: number = 1;
  private _min: number = 0;
  private _step: number = 0.01;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  get slider(): HTMLInputElement {
    return this.shadowRoot!.getElementById('slider') as HTMLInputElement;
  }

  get label(): HTMLLabelElement {
    return this.shadowRoot!.getElementById('label') as HTMLLabelElement;
  }

  get valueElement(): HTMLParagraphElement {
    return this.shadowRoot!.getElementById('value') as HTMLParagraphElement;
  }

  get value(): number {
    return this._value;
  }

  set value(v: number) {
    this._value = v;
    const rounded = Math.round(v / this.step) * this.step;
    const stringValue = Intl.NumberFormat().format(rounded);
    this.slider.value = String(rounded);
    this.valueElement.textContent = stringValue;
  }

  get max(): number {
    return this._max;
  }

  set max(v: number) {
    this._max = v;
    this.slider.max = String(v);
  }

  get min(): number {
    return this._min;
  }

  set min(v: number) {
    this._min = v;
    this.slider.min = String(v);
  }

  get step(): number {
    return this._step;
  }

  set step(v: number) {
    this._step = v;
    this.slider.step = String(v);
  }

  connectedCallback() {
    const stringValue: string = this.getAttribute('value');
    if (stringValue) {
      this.value = Number(stringValue);
    }

    const label = this.getAttribute('label');
    if (label) {
      this.label.innerHTML = label;
    }

    const stringMax: string = this.getAttribute('max') || '1';
    this.max = Number(stringMax);

    const stringMin: string = this.getAttribute('min') || '0';
    this.min = Number(stringMin);

    const stringStep: string = this.getAttribute('step') || '0.01';
    this.step = Number(stringStep);

    const background = this.getAttribute('background');
    if (background) {
      this.slider.style.background = background;
    }

    this.slider.addEventListener('input', () => {
      const newValue = Number(this.slider.value);
      this.dispatchEvent(new CustomEvent<number>('slider-change', {
        detail: newValue
      }));
      this.value = newValue;
    });

    this.slider.addEventListener('change', () => {
      const newValue = Number(this.slider.value);
      this.dispatchEvent(new CustomEvent<number>('slider-change', {
        detail: newValue
      }));
      this.value = newValue;
    });
  }
}

window.customElements.define('slider-input', SliderInput);