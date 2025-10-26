<script>
	import NavButton from "./NavButton.svelte";
	 export let ical;

	function download_cal() {
		console.log(ical);
		const href = URL.createObjectURL(ical);

		// Create a temporary anchor element
		const a = document.createElement('a');
		a.href = href;
		a.download = ical.name;

		// Append the anchor to the body, click it, and then remove it
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);

		// Release the object URL
		URL.revokeObjectURL(href);
	}
</script>

<div
	class="py-4 px-8 border-solid border-b border-gray-200 flex flex-row items-center justify-between"
>
	<p>SyllaBook</p>

	<div class="flex flex-row gap-4">
		<NavButton text="Export to Calendar" onClick={download_cal} />
		<NavButton text="Upload More" href="/" />
	</div>
</div>
