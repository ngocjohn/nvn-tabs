var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';
let NvnTabBar = class NvnTabBar extends LitElement {
    constructor() {
        super(...arguments);
        this.narrow = false;
        this._onTabActivated = (ev) => {
            const tab = ev.target;
            tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        };
    }
    render() {
        return html `
			<div class="scroll-container">
				<slot></slot>
			</div>
		`;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('tab-activated', this._onTabActivated);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('tab-activated', this._onTabActivated);
    }
};
NvnTabBar.styles = css `
		:host {
			display: block;
			width: 100%;
		}

		.scroll-container {
			display: flex;
			flex-direction: row;
			align-items: stretch;
			height: var(--header-height);
			overflow-x: auto;
			overflow-y: hidden;
			-webkit-overflow-scrolling: touch;
			scroll-behavior: smooth;
			width: 100%;
		}

		::-webkit-scrollbar {
			display: none;
		}

		::slotted(nvn-tab) {
			flex: 1 1 0; /* Allow tabs to stretch if there's room */
			min-width: max-content; /* Prevent squishing tabs too much */
		}
	`;
__decorate([
    property({ type: Boolean })
], NvnTabBar.prototype, "narrow", void 0);
NvnTabBar = __decorate([
    customElement('nvn-tab-bar')
], NvnTabBar);
export { NvnTabBar };
