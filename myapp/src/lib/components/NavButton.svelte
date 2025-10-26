<script lang="ts">
	import { goto } from "$app/navigation";

	export let text: string = "";
	export let href: string | null = null;
	export let onClick: (() => void) | null = null;

	function handleClick(event: MouseEvent) {
		if (href) {
			event.preventDefault();
			goto(href);
		} else if (onClick) {
			onClick();
		}
	}
</script>

{#if href}
	<a
		{href}
		class="flex items-center gap-2 px-4 py-2 border border-solid border-gray-200 hover:bg-gray-100 rounded-md transition-all duration-200"
		on:click|preventDefault={handleClick}
	>
		<span>{text}</span>
	</a>
{:else}
	<button
		class="flex items-center gap-2 px-4 py-2 border border-solid border-gray-200 hover:bg-gray-100 rounded-md transition-all duration-200"
		on:click={handleClick}
	>
		<span>{text}</span>
	</button>
{/if}
