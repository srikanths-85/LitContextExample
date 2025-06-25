import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextConsumer } from '@lit/context';
import { userContext, type User } from './user-context';

@customElement('user-consumer')
export class UserConsumer extends LitElement {
  private _user: User = { name: '', role: '' };

  _consumer = new ContextConsumer(this, {
    context: userContext,
    subscribe: true,
    callback: (value: User) => {
      this._user = value;
    },
  });

  render() {
    return html`
      <div>
        <p>Name: ${this._user?.name}</p>
        <p>Role: ${this._user?.role}</p>
      </div>
    `;
  }
}




// import { LitElement, html } from 'lit';
// import { customElement } from 'lit/decorators.js';
// import { contextProvided, type ContextCallback } from '@lit/context';
// import { userContext, type User } from './user-context';

// @customElement('user-consumer')
// export class UserConsumer extends LitElement {
//   private _user: User = { name: '', role: '' };
//   private _unsubscribe?: () => void;

//   connectedCallback() {
//     super.connectedCallback();

//     const callback: ContextCallback<User> = (value, unsubscribe) => {
//       this._user = value;
//       this._unsubscribe = unsubscribe;
//       this.requestUpdate();
//     };

//     contextProvided(this, userContext, callback);
//   }

//   disconnectedCallback() {
//     super.disconnectedCallback();
//     // Clean up when element is removed
//     this._unsubscribe?.();
//   }

//   render() {
//     return html`
//       <div>
//         <p>Name: ${this._user.name}</p>
//         <p>Role: ${this._user.role}</p>
//       </div>
//     `;
//   }
// }

// // user-consumer.ts
// import { LitElement, html } from 'lit';
// import { customElement } from 'lit/decorators.js';
// import { contextProvided, type ContextCallback } from '@lit/context';
// import { userContext, type User } from './user-context';

// @customElement('user-consumer')
// export class UserConsumer extends LitElement {
//   private _user: User = { name: '', role: '' };
//   private _unsubscribe?: () => void;

//   connectedCallback() {
//     super.connectedCallback();

//     // This is the ContextCallback<User>
//     const callback: ContextCallback<User> = (value, unsubscribe) => {
//       this._user = value;           // Update local state
//       this._unsubscribe = unsubscribe; // Save unsubscribe function
//       this.requestUpdate();         // Trigger re-render
//     };

//     contextProvided(this, userContext, callback);
//   }

//   disconnectedCallback() {
//     super.disconnectedCallback();
//     this._unsubscribe?.(); // Stop listening for updates
//   }

//   render() {
//     return html`
//       <div>
//         <p>Name: ${this._user.name}</p>
//         <p>Role: ${this._user.role}</p>
//       </div>
//     `;
//   }
// }