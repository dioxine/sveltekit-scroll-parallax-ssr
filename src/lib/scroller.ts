import { scrollerCurrentY } from '../stores/store';

export class Scroller {
	defaults: { wrapperDamper: number; cancelOnTouch: boolean };

	active: boolean;
	animateId: number;
	cancelOnTouch: boolean;
	resizing: boolean;
	wrapper: HTMLElement;
	wrapperDamper: number;
	wrapperOffset: number;
	wrapperHeight: number;

	validateOptions: (ops: any) => void;

	constructor(wrapper: HTMLElement) {
		this.defaults = {
			wrapperDamper: 0.07,
			cancelOnTouch: false
		};

		this.validateOptions = function (ops) {
			for (let prop in ops) {
				if (this.defaults.hasOwnProperty(prop)) {
					Object.defineProperty(this.defaults, prop, {
						value: Object.getOwnPropertyDescriptor(ops, prop).value
					});
				}
			}
		};

		this.cancelOnTouch;
		this.wrapperDamper;

		this.wrapper = wrapper;

		this.wrapperOffset = 0;
		this.animateId;
		this.resizing = false;
		this.active = false;
		this.wrapperHeight;
	}

	init(options: any) {
		if (options) {
			this.validateOptions(options);
		}

		this.active = true;
		this.resizing = false;
		this.wrapperDamper = this.defaults.wrapperDamper;
		this.cancelOnTouch = this.defaults.cancelOnTouch;

		this.wrapper.style.position = 'fixed';
		this.wrapper.style.width = '100%';

		this.wrapperHeight = this.wrapper.clientHeight;
		document.body.style.height = this.wrapperHeight + 'px';

		addEventListener('resize', this.resize.bind(this));
		if (this.cancelOnTouch) {
			addEventListener('touchstart', this.cancel.bind(this));
		}
		this.wrapperOffset = 0.0;
		this.animateId = requestAnimationFrame(this.animate.bind(this));
	}

	wrapperUpdate() {
		let scrollY =
			document.scrollingElement != undefined
				? document.scrollingElement.scrollTop
				: document.documentElement.scrollTop || 0.0;
		this.wrapperOffset += (scrollY - this.wrapperOffset) * this.wrapperDamper;
		this.wrapper.style.transform = 'translate3d(0,' + -this.wrapperOffset.toFixed(2) + 'px, 0)';

		scrollerCurrentY.set(parseFloat(this.wrapperOffset.toFixed(2))); // Export state of current Y position to stores
	}

	checkResize() {
		if (this.wrapperHeight != this.wrapper.clientHeight) {
			this.resize();
		}
	}

	resize() {
		if (!this.resizing) {
			this.resizing = true;
			cancelAnimationFrame(this.animateId);
			setTimeout(() => {
				this.wrapperHeight = this.wrapper.clientHeight;
				if (parseInt(document.body.style.height) != this.wrapperHeight) {
					document.body.style.height = this.wrapperHeight + 'px';
				}
				this.animateId = requestAnimationFrame(this.animate.bind(this));
				this.resizing = false;
			}, 150);
		}
	}

	animate() {
		this.checkResize();
		this.wrapperUpdate();
		this.animateId = requestAnimationFrame(this.animate.bind(this));
	}

	cancel() {
		if (this.active) {
			cancelAnimationFrame(this.animateId);

			removeEventListener('resize', this.resize);
			removeEventListener('touchstart', this.cancel);
			this.wrapper.removeAttribute('style');
			document.body.removeAttribute('style');

			this.active = false;
			this.wrapper = undefined;
			this.wrapperOffset = 0;
			this.resizing = true;
			this.animateId = 0;
		}
	}
}
