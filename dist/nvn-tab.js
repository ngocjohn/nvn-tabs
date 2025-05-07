var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
let NvnTab = class NvnTab extends LitElement {
    constructor() {
        super(...arguments);
        this.active = false;
        this.narrow = false;
    }
    render() {
        return html `
			<div
				tabindex="0"
				role="tab"
				aria-selected=${this.active}
				aria-label=${ifDefined(this.name)}
				@click=${this._handleClick}
				@keydown=${this._handleKeyDown}>
				${this.narrow ? html `<slot name="icon"></slot>` : ''}
				<span class="name">${this.name}</span>
				<ha-ripple></ha-ripple>
			</div>
		`;
    }
    _handleClick() {
        this.dispatchEvent(new CustomEvent('tab-activated', { bubbles: true, composed: true }));
    }
    _handleKeyDown(ev) {
        if (ev.key === 'Enter') {
            this._handleClick();
        }
    }
};
NvnTab.styles = css `
		:host {
			display: flex;
			flex: 0 0 auto;
		}
		div {
			padding: 0 24px;
			display: flex;
			flex-direction: column;
			text-align: center;
			box-sizing: border-box;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: var(--header-height);
			cursor: pointer;
			position: relative;
			outline: none;
		}

		.name {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			max-width: 100%;
			text-transform: uppercase;
		}

		:host([active]) {
			color: var(--primary-color);
		}

		:host(:not([narrow])[active]) div {
			border-bottom: 2px solid var(--primary-color);
		}

		:host([narrow]) {
			min-width: 0;
			display: flex;
			justify-content: center;
			overflow: hidden;
		}

		:host([narrow]) div {
			padding: 0 4px;
		}

		div:focus-visible:before {
			position: absolute;
			display: block;
			content: '';
			inset: 0;
			background-color: var(--secondary-text-color);
			opacity: 0.08;
		}
	`;
__decorate([
    property({ type: Boolean, reflect: true })
], NvnTab.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], NvnTab.prototype, "narrow", void 0);
__decorate([
    property()
], NvnTab.prototype, "name", void 0);
NvnTab = __decorate([
    customElement('nvn-tab')
], NvnTab);
export { NvnTab };
