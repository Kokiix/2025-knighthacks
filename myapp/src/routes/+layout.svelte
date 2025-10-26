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

<div class="flex flex-col min-h-screen">
	<div class="flex-grow">
		{@render children?.()}
	</div>
	<p class="text-gray-400 pl-2 pb-1 mt-auto">
		Created with ♥ for KnightHacks 2025 by Stefan, Kenny, & Frank!
	</p>
</div>
