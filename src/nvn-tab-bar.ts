import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class NvnTabBar extends LitElement {
	@property({ type: Boolean }) public narrow = false;

	protected render() {
		return html`
			<div class="scroll-container">
				<slot></slot>
			</div>
		`;
	}

	connectedCallback(): void {
		super.connectedCallback();
		this.addEventListener('tab-activated', this._onTabActivated as EventListener);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		this.removeEventListener('tab-activated', this._onTabActivated as EventListener);
	}

	private _onTabActivated = (ev: Event): void => {
		const tab = ev.target as HTMLElement;
		tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
	};

	static styles = css`
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
}

if (!customElements.get('nvn-tab-bar')) {
	customElements.define('nvn-tab-bar', NvnTabBar);
}
declare global {
	interface HTMLElementTagNameMap {
		'nvn-tab-bar': NvnTabBar;
	}
}
