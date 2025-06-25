import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextProvider } from '@lit/context';
import { userContext, type User } from './user-context';

@customElement('user-provider')
export class UserProvider extends LitElement {
  private _user: User = { name: 'Alice', role: 'admin' };

  private _provider = new ContextProvider(this, {
    context: userContext, 
    initialValue: this._user,
  });

  private _toggleRole() {
    this._user = {
      ...this._user,
      role: this._user.role === 'admin' ? 'editor' : 'admin',
    };
    this._provider.setValue(this._user, true);
  }

  render() {
    console.log('Rendering UserProvider with user:', this._user);
    return html`
      <div>
        <button @click=${this._toggleRole}>Toggle Role</button>
        <slot></slot>
      </div>
    `;
  }
}