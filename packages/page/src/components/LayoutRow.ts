const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  </style>
  <slot></slot>
`;

export class LayoutRow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('layout-row', LayoutRow);
