import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { checkBalance } from './check-balance';

@customElement('balance-input')
export class BalanceInput extends LitElement {
    @state() private balance: number = 0;

    private onInput(e: Event) {
        const value = Number((e.target as HTMLInputElement).value);
        this.balance = value;
    }

    render() {
        console.log('rendered')
        return html`
      <div>
        <label for="amount">Enter amount:</label>
        <input
          id="amount"
          type="number"
          @input=${this.onInput}
          .value=${this.balance}
        />
        <div>
          ${checkBalance(this.balance)}
        </div>
      </div>
    `;
    }
}