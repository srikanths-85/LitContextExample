import { LitElement, html, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { appContext, type AppContextType } from './ContextStore';

@customElement('app-provider')
export class AppProvider extends LitElement {
    @property({ type: String }) name: string = 'Srikanth S';
    @property({ type: Number }) age: number = 25;

    @state() private isLoggedIn = false;

    @provide({ context: appContext })
    @state()
    private contextData!: AppContextType;

    connectedCallback() {
        super.connectedCallback();
        this.updateContext();
    }

    willUpdate(changedProps: PropertyValues) {
        console.log('willUpdate called with changed properties:', changedProps);
        if (changedProps.has('name') || changedProps.has('age') || changedProps.has('isLoggedIn')) {
            this.updateContext();
        }
    }


    logout = () => {
        this.isLoggedIn = false;
    };
    login = () => {
        this.isLoggedIn = true;
    };

    private updateContext() {
        console.log('Updating the context.');

        this.contextData = {
            user: {
                name: this.name,
                age: this.age,
            },
            list: {
                items: ['Item A', 'Item B', 'Item C'],
            },
            auth: {
                isLoggedIn: this.isLoggedIn,
                loginwithdata: (data: string) => {
                   console.log(data);
                },
                login : this.login, 
                logout: this.logout,
            },
        };
    }

    render() {
        return html`
    <p>This is a provider component</p>
    <slot></slot>
    <p>This is a provider component</p>`;
    }
}