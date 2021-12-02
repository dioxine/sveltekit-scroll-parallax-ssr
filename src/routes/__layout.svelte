<script lang="ts">
	import { Scroller } from '$lib/scroller';

	function scrollerAction(node: HTMLElement) {
		const scroller = new Scroller(node);
		scroller.init({ wrapperDamper: 0.07, cancelOnTouch: false });

		return {
			destroy() {
				scroller.cancel();
			}
		};
	}

</script>

<div use:scrollerAction>
	<slot />
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>