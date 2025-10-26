<script>
	import NavButton from "./NavButton.svelte";
</script>

<div
	class="py-4 px-8 border-solid border-b border-gray-200 flex flex-row items-center justify-between"
>
	<p>SyllaBook</p>

	<div class="flex flex-row gap-4">
		<NavButton text="Heatmap" />
		<NavButton text="Export to Calendar" />
		<NavButton text="Upload More" href="/" />
	</div>
</div>
