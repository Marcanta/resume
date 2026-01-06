<script lang="ts">
	import TimelineContent from './TimelineContent.svelte';
	export let classes: string = "";
</script>

<TimelineContent opposite={true} {classes}>
	<slot />
</TimelineContent>