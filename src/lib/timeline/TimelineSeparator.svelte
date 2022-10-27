<script lang="ts">
	export let classes: string = "";
</script>

<div class={`flex flex-col flex-[0] items-center ${classes}`}>
	<slot />
</div>