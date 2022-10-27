<script lang="ts">
	import { getContext } from 'svelte';
	import type { TimelineConfig, TimelinePosition } from '../types/timeline.type';
	export let classes: string = "";

	const config = getContext<TimelineConfig>('TimelineConfig');
	const parentPosition = getContext<TimelinePosition>('ParentPosition');

	const itemPosition = parentPosition ? parentPosition : config.rootPosition;
</script>

<div class={`m-0 flex flex-1 my-1 mx-4 text-left ${itemPosition === "right" && "md:text-right" } ${classes}`}>
	<slot />
</div>