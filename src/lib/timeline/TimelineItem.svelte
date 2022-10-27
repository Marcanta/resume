<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { TimelinePosition, ParentPosition, TimelineConfig } from '../types/timeline.type';

	export let position: ParentPosition | null = null;
	export let classes: string = "";

	const config = getContext<TimelineConfig>('TimelineConfig');
	const itemPosition = position ? position : config.rootPosition;
	setContext<TimelinePosition>('ParentPosition', itemPosition);
</script>

<li class={`list-none flex relative min-h-[70px] flex-row ${itemPosition === "right" && "md:flex-row-reverse"}  ${classes}`}>
	{#if !$$slots['opposite-content']}
		<div class="flex-1 hidden md:block my-[6px] mx-4" />
	{:else}
		<slot name="opposite-content" />
	{/if}
	<slot />
</li>

<style>
	:global(.alternate:nth-of-type(even) > .timeline-content) {
		text-align: right;
	}

	:global(.alternate:nth-of-type(odd) > .timeline-opposite-content) {
		text-align: right;
	}

	.alternate:nth-of-type(even) {
		flex-direction: row-reverse;
	}

	.alternate:nth-of-type(odd) {
		flex-direction: row;
	}
</style>