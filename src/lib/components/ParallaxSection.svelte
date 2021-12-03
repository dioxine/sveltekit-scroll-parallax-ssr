<script lang="ts">
	import { scrollerCurrentY } from '../../stores/store';
	export let speed: number;
	export let color: string;
	export let height: string;
	export let cutBottom: boolean = false;
</script>

<div style="transform: translate3d(0,{$scrollerCurrentY * speed}px, 0); background-color: {color}; height: {height}; clip-path: inset(0 0 {cutBottom ? $scrollerCurrentY * speed : 0 }px 0);" />

<style>
	div {
		width: 100%;
	}
</style>
