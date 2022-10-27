<script lang="ts">
	import { setContext } from 'svelte';
	import type { TimelinePosition, TimelineConfig } from '../types/timeline.type';
	export let position: TimelinePosition = 'right';
	export let classes: string = "";

	setContext<TimelineConfig>('TimelineConfig', { rootPosition: position });
</script>

<ul class={`flex flex-col py-2 px-4 flex-grow ${classes}`}>
	<slot />
</ul>