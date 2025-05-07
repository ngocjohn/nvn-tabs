import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
export declare class NvnTab extends LitElement {
    active: boolean;
    narrow: boolean;
    name?: string;
    protected render(): TemplateResult;
    private _handleClick;
    private _handleKeyDown;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'nvn-tab': NvnTab;
    }
}
