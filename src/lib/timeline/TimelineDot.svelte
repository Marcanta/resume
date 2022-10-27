<script lang="ts">
	export let classes: string = "";
</script>

<span class={`bg-[#121212] border-solid border-2 border-[#121212] flex self-baseline p-1 rounded-lg  m-3 ${classes}`}>
	<slot />
</span>