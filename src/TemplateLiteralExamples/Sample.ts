import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("sample-element")
export class SampleComponent extends LitElement {
    @property({ type: String }) name: string = "Jane";
    @property({ type: String }) email?: string;
    @state() private showData: boolean = false;

    willUpdate() {
        const container = this.renderRoot.querySelector("#template-container");
        const template = this.renderRoot.querySelector<HTMLTemplateElement>("#content-template");

        if (!container || !template) return;
        

        container.innerHTML = "";
        
        if (this.showData) {
            const content = template.content.cloneNode(true);
            container.appendChild(content);
        }
    }
    render() {
        return html`
            <p>Welcome ${this.name}</p>
            <p>Your email is: ${ifDefined(this.email)}</p>
            <p>Your email is: ${this.email ?? ""}</p>
            <button @click=${this.toggleData}>${this.showData ? "Hide" : "Show"} Data</button>

            <template id="content-template">
                <p>This is the data content inside a template tag.</p>
                <p>It is now shown because 'showData' is true.</p>
            </template>
 
            <div id="template-container"></div>
        `;
    }


    private toggleData() {
        this.showData = !this.showData;
    }
}