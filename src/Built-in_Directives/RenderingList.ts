import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

@customElement('render-list')
export class RenderList extends LitElement {
  // Using @state to make items reactive and private
  @state()
  private items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
  ];

  render() {
    return html`
      <h3>Rendered with repeat()</h3>
      <ul>
        ${repeat(
      this.items,
      item => item.id,
      item => html`<li>${item.name}</li>`
    )}
      </ul>
      <hr/>
      <h3>Rendered with map</h3>
      <ul>
        ${this.items.map(
      (item) => html`<li>${item.name}</li>`
    )}
      </ul>
    `;
  }
}
