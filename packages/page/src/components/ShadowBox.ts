const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      padding: 1em;
      border-radius: 0.5em;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  </style>
  <slot></slot>
`;

export class ShadowBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('shadow-box', ShadowBox);