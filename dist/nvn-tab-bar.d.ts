import { LitElement } from 'lit';
export declare class NvnTabBar extends LitElement {
    narrow: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onTabActivated;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'nvn-tab-bar': NvnTabBar;
    }
}
