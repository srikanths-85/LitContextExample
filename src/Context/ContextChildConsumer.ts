import { consume } from "@lit-labs/context";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { appContext, type AppContextType } from "./ContextStore";

@customElement('app-child-consumer')
export class ContextChildConsumer extends LitElement {
    @consume({ context: appContext})
    private consumeContext?: AppContextType;

    render() {
        return html`
        <div style="border: 1px solid green; padding: 10px; margin: 10px;">
      <h2>Child Consumer Component</h2>
      <p>Name: ${this.consumeContext?.user.name}</p>
      <p>Status: ${this.consumeContext?.auth.isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <button @click=${() => this.consumeContext?.auth.loginwithdata('Called form the consumer 2')}>Login With Data</button>
      <button @click=${() => this.consumeContext?.auth.login()}>Login</button>
      <button @click=${() => this.consumeContext?.auth.logout()}>Logout</button>
      </div>
    `;
    }
}