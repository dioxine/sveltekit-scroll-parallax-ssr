<script>
	import { Scroller } from '$lib/scroller';

	let y = 0;

	function actionFunc(node) {
		node = new Scroller();
		node.init();
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
	<slot />
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
