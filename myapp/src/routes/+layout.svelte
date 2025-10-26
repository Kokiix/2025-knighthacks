<script lang="ts">
	import logo from "$lib/assets/logo.png";
	import Navbar from "$lib/components/navbar.svelte";
	import "../app.css";
	import Page from "./+page.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
	<title>SyllaBook</title>
</svelte:head>

{@render children?.()}

<p class="text-gray-400 pl-2 pb-1">
	Created with ♥ for KnightHacks 2025 by Stefan, Kenny, & Frank!
</p>
