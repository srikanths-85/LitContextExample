import { html, type TemplateResult } from 'lit';
import {
    directive,
    Directive,
    PartType,
    type ChildPart
} from 'lit/directive.js';

class CheckBalanceDirective extends Directive {
    private color: string = 'black';
    private message: string = '';

    update(part: ChildPart, [value]: [number]) {
        if (part.type !== PartType.CHILD) {
            throw new Error('Check Balance directive can only be used in child expressions');
        }
        this.color = value < 0 ? 'red' : 'black';
        this.message = value < 0
            ? `Balance in negative: $`
            : `Balance: $`;

        return this.render(value);
    }

    render(value: number): TemplateResult {
        return html`<span style="color: ${this.color}">${this.message} ${value}</span>`;
    }
}

export const checkBalance = directive(CheckBalanceDirective);
