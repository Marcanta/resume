<script lang="ts">
	import TimelineContent from './TimelineContent.svelte';
	export let classes = '';
</script>

<TimelineContent opposite={true} {classes}>
	<slot />
</TimelineContent>
