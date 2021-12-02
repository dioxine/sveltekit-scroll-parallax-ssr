<script lang="ts">
	import { scrollerCurrentY } from '../../stores/store';
	export let speed: number;
	export let color: string;
</script>

<div style="transform: translate3d(0,{$scrollerCurrentY * speed}px, 0); background-color: {color}" />

<style>
	div {
		width: 100%;
		height: 300px;
	}
</style>
