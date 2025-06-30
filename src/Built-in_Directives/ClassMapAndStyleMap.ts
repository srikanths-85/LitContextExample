import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('my-box')
export class MyBox extends LitElement {
    @state() private showStyle: boolean = true;
    @state() private isDarkTheme: boolean = false;

    static styles = css`
    .box {
      padding: 20px;
      margin: 10px 0;
      transition: all 0.3s ease;
      border-radius: 8px;
    }

    .dark {
      color: white;
      background-color: #222;
    }

    .light {
      color: black;
      background-color: #f9f9f9;
    }

  `;

    private toggleStyle = () => (this.showStyle = !this.showStyle);
    private toggleTheme = () => (this.isDarkTheme = !this.isDarkTheme);


    render() {
        const getBoxClasses = {
            box: true,
            dark: this.isDarkTheme,
            light: !this.isDarkTheme,
        }
        const getDynamicStyles = {
            backgroundColor: this.showStyle ? 'lightgreen' : 'red',
            border: this.showStyle ? '2px solid blue' : '2px solid black',
        }
        return html`
      <p class="box" style=${styleMap(getDynamicStyles)}>
        Paragraph with styleMap (color/border).
      </p>

      <p class=${classMap(getBoxClasses)}>
        Paragraph with classMap (theme/layout/responsive).
      </p>

      <div style="margin-top: 20px;">
        <button @click=${this.toggleStyle}>Toggle Style</button>
        <button @click=${this.toggleTheme}>Toggle Theme</button>
      </div>
    `;
    }
}