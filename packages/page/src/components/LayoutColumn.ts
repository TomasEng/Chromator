const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
  <slot></slot>
`;

export class LayoutColumn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('layout-column', LayoutColumn);