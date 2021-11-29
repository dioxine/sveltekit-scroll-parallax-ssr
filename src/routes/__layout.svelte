<script>
	// import 'uno.css';
	// import '@unocss/reset/tailwind.css';

	let y;

	function actionFunc(node) {
		const Butter = function () {
			let self = this;

			this.defaults = {
				wrapperId: 'butter',
				wrapperDamper: 0.07,
				cancelOnTouch: false
			};

			this.validateOptions = function (ops) {
				for (let prop in ops) {
					if (self.defaults.hasOwnProperty(prop)) {
						Object.defineProperty(self.defaults, prop, {
							value: Object.getOwnPropertyDescriptor(ops, prop).value
						});
					}
				}
			};

			this.wrapperDamper;
			this.wrapperId;
			this.cancelOnTouch;
			this.wrapper;
			this.wrapperOffset = 0;
			this.animateId;
			this.resizing = false;
			this.active = false;
			this.wrapperHeight;
			this.bodyHeight;
		};

		Butter.prototype = {
			init: function (options) {
				if (options) {
					this.validateOptions(options);
				}

				this.active = true;
				this.resizing = false;
				this.wrapperDamper = this.defaults.wrapperDamper;
				this.wrapperId = this.defaults.wrapperId;
				this.cancelOnTouch = this.defaults.cancelOnTouch;

				this.wrapper = document.getElementById(this.wrapperId);
				this.wrapper.style.position = 'fixed';
				this.wrapper.style.width = '100%';

				this.wrapperHeight = this.wrapper.clientHeight;
				document.body.style.height = this.wrapperHeight + 'px';

				window.addEventListener('resize', this.resize.bind(this));
				if (this.cancelOnTouch) {
					window.addEventListener('touchstart', this.cancel.bind(this));
				}
				this.wrapperOffset = 0.0;
				this.animateId = window.requestAnimationFrame(this.animate.bind(this));
			},

			wrapperUpdate: function () {
				let scrollY =
					document.scrollingElement != undefined
						? document.scrollingElement.scrollTop
						: document.documentElement.scrollTop || 0.0;
				this.wrapperOffset += (scrollY - this.wrapperOffset) * this.wrapperDamper;
				this.wrapper.style.transform = 'translate3d(0,' + -this.wrapperOffset.toFixed(2) + 'px, 0)';
				// console.log(this.wrapperOffset.toFixed(2));
				y = this.wrapperOffset.toFixed(2);
			},

			checkResize: function () {
				if (this.wrapperHeight != this.wrapper.clientHeight) {
					this.resize();
				}
			},

			resize: function () {
				let self = this;
				if (!self.resizing) {
					self.resizing = true;
					window.cancelAnimationFrame(self.animateId);
					window.setTimeout(function () {
						self.wrapperHeight = self.wrapper.clientHeight;
						if (parseInt(document.body.style.height) != parseInt(self.wrapperHeight)) {
							document.body.style.height = self.wrapperHeight + 'px';
						}
						self.animateId = window.requestAnimationFrame(self.animate.bind(self));
						self.resizing = false;
					}, 150);
				}
			},

			animate: function () {
				this.checkResize();
				this.wrapperUpdate();
				this.animateId = window.requestAnimationFrame(this.animate.bind(this));
			},

			cancel: function () {
				if (this.active) {
					window.cancelAnimationFrame(this.animateId);

					window.removeEventListener('resize', this.resize);
					window.removeEventListener('touchstart', this.cancel);
					this.wrapper.removeAttribute('style');
					document.body.removeAttribute('style');

					this.active = false;
					this.wrapper = '';
					this.wrapperOffset = 0;
					this.resizing = true;
					this.animateId = '';
				}
			}
		};

		node.butter = new Butter();
		node.butter.init();
	}

	let backdropToggle = false;
</script>

<div id="butter" use:actionFunc>
	<div class="square4" style="transform: translate3d({500 + -y * 0.5}px,{y * 1.5}px,0);" />
	<div class="square1" style="transform: translate3d(100px,{y * 1.5}px,0);" />
	<div class="square2" style="transform: translate3d({y / 3}px,0,0);" />
	<div class="square3" style="transform: translate3d({700 - y / 3}px,0,0);" />
	<div
		class="square5"
		style="transform: translate3d(0px,{y}px,0); {backdropToggle
			? 'backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);'
			: ''}"
	/>
	<div class="check" style="transform: translate3d(0px,{y}px,0);">
		<label for="">Backdrop filter</label>
		<input type="checkbox" name="" id="" bind:checked={backdropToggle} />
	</div>
	<div>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati, incidunt
		repellendus ut qui ullam quam praesentium molestiae dignissimos pariatur beatae autem doloremque
		corrupti saepe voluptatibus? Officia temporibus excepturi adipisci consequatur quaerat.
		Perspiciatis libero, quae nobis dolor omnis quo, inventore obcaecati, possimus molestias
		similique voluptatum est vel dignissimos voluptatibus sit iure praesentium facilis sequi saepe
		aperiam vero nesciunt. Atque voluptatem sint tenetur, cum distinctio quod accusantium quos dolor
		expedita in voluptate. Sit, praesentium rerum fugit totam esse repellat, sed hic veniam omnis,
		est quos repellendus ad. Atque, possimus quidem doloribus unde sequi dolorem quisquam
		reprehenderit nemo quae distinctio quia blanditiis ratione perferendis, alias quaerat accusamus
		ullam, porro rem! Repellendus, accusantium sapiente quas doloremque exercitationem sed commodi,
		nisi mollitia hic, dolorem corrupti? Exercitationem et possimus perspiciatis excepturi
		doloremque magni voluptas officia nisi unde ratione ea ut reiciendis rem eum tenetur expedita
		odit fugiat quasi ad, itaque asperiores magnam? Sed, dolorem mollitia esse ex modi nemo ad saepe
		facilis architecto dolore? Facilis veniam harum laboriosam, nulla quidem, minus molestias
		incidunt culpa ad nisi natus fuga, animi eaque cupiditate. Quos quas quaerat dolorem, ducimus
		iste fugiat velit earum accusantium ea, libero doloribus nisi reprehenderit cupiditate. Quo
		dicta in deserunt quis explicabo nisi, incidunt provident optio, facilis velit porro vel alias
		officia mollitia, molestiae odit. Mollitia nulla architecto quis neque est quo, fuga, delectus,
		voluptatibus eligendi obcaecati a possimus minus quaerat voluptates totam placeat debitis
		reiciendis corrupti voluptas perspiciatis quisquam pariatur rerum vitae exercitationem. Eius
		ipsum, voluptatum ducimus harum, possimus cupiditate expedita eaque molestias fuga totam labore
		illo delectus natus aspernatur odio? Tempore dolores praesentium, vitae laboriosam voluptatem
		unde impedit accusamus enim quasi sapiente sunt provident inventore a ex dolore ratione pariatur
		nemo. Molestias officiis architecto doloribus sequi quaerat? Laboriosam quas debitis enim quia
		nulla dicta inventore ex iure aliquid molestiae. Aperiam eum ducimus numquam nihil asperiores
		aliquid saepe, tempore corporis soluta praesentium eveniet odio commodi officiis culpa libero ex
		nisi ullam incidunt porro laboriosam ratione deleniti harum voluptatibus. Labore aliquid
		corporis tenetur sequi aliquam pariatur quidem magni suscipit nesciunt error possimus accusamus
		voluptatem, delectus harum quis repudiandae doloremque cum. Facilis, doloremque. Accusamus
		aliquam eligendi, velit voluptate quis qui sequi commodi illo atque rerum temporibus, dicta
		mollitia minus aut ratione laborum maiores accusantium voluptates tempore similique. Adipisci
		harum fugit, quisquam enim architecto mollitia quasi excepturi distinctio, sint rerum
		consequuntur reiciendis officia? Vero soluta tempore doloremque explicabo reiciendis veritatis
		ducimus saepe repellendus deleniti velit aut fugit odio possimus, nam ex quasi autem ea pariatur
		ut necessitatibus suscipit exercitationem sapiente. Deleniti quidem ipsum at perspiciatis ullam
		atque, autem totam tempore, aut eveniet vel, iste praesentium pariatur temporibus neque porro
		facilis ex repellat alias? Iusto architecto et ducimus odit error aperiam unde aliquid
		doloremque, autem odio reprehenderit, hic, temporibus amet accusantium dolore ratione eligendi
		iste nisi eos! Eius reprehenderit hic voluptatum! Molestiae dolore amet praesentium laudantium
		quidem id, autem obcaecati mollitia atque magni quam deleniti, ipsam laboriosam cum. Ratione,
		corrupti ipsam blanditiis quas sit nesciunt corporis repellat asperiores eligendi quae dolorum
		quasi aut optio, laborum maiores perspiciatis?
	</div>
</div>

<style>
	.square1,
	.square2,
	.square3,
	.square4 {
		width: 400px;
		height: 300px;
	}
	.square5 {
		width: 800px;
		height: 800px;
		position: absolute;
		top: 0;
	}

	.square1 {
		background-color: red;
	}
	.square2 {
		background-color: green;
	}
	.square3 {
		background-color: blue;
	}
	.square4 {
		background-color: yellow;
	}
	.square5 {
		background-color: rgba(78, 78, 78, 0.473);
	}
	.check {
		position: absolute;
		top: 0;
	}
</style>
