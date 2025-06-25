import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { appContext, type AppContextType } from './ContextStore.ts';

@customElement('app-consumer')
export class ContextConsumer extends LitElement {
  @consume({ context: appContext, subscribe: true })
  private consumeContext?: AppContextType;

  render() {
    return html`
      <h2>User Info</h2>
      <p>Name: ${this.consumeContext?.user.name}</p>
      <p>Age: ${this.consumeContext?.user.age}</p>

      <h2>List Items</h2>
      <ul>
        ${this.consumeContext?.list.items.map(item => html`<li>${item}</li>`)}
      </ul>

      <h2>Authentication</h2>
      <p>Status: ${this.consumeContext?.auth.isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <button @click=${() => this.consumeContext?.auth.loginwithdata('Called form the consumer 1')}>Login With Data</button>
      <button @click=${() => this.consumeContext?.auth.login()}>Login</button>
      <button @click=${() => this.consumeContext?.auth.logout()}>Logout</button>
      <slot></slot>
    `;
  }
}
