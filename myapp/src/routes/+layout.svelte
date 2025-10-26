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
