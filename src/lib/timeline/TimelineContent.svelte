<script lang="ts">
	import { getContext } from 'svelte';
	import type { TimelineConfig, TimelinePosition } from '../types/timeline.type';
	export let classes: string = "";
	export let opposite: boolean = false;

	const config = getContext<TimelineConfig>('TimelineConfig');
	const parentPosition = getContext<TimelinePosition>('ParentPosition');

	const itemPosition = parentPosition ? parentPosition : config.rootPosition;
	
	const baseClasses = "m-0 flex-1 my-1 mx-4";
	const defaultAlign = opposite ? "text-right" : "text-left";
	const responsiveAlign = itemPosition === "right" 
		? (opposite ? "md:text-left" : "md:text-right")
		: "";
</script>

<div class={`${baseClasses} ${defaultAlign} ${responsiveAlign} ${classes}`}>
	<slot />
</div>