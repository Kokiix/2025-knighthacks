<script lang="ts">
	import logo from "$lib/assets/logo.png";
	import "../app.css";
	import Page from "./+page.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

{@render children?.()}
