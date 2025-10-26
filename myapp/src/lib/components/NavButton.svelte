<script>
	export let text = "";
	export let onClick = () => {};
</script>

<button
	class="flex items-center gap-2 px-4 py-2 border border-solid border-gray-200 hover:bg-gray-100 rounded-md transition-all duration-200"
	on:click={onClick}
>
	<span>{text}</span>
</button>
