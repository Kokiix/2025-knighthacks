<script>
	import NavButton from "./NavButton.svelte";
	import logo from "$lib/assets/logo.png";
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

<div class="py-4 border-solid border-b border-gray-200">
	<div
		class="max-w-7xl px-8 flex flex-row justify-between items-center m-auto"
	>
		<div class="flex flex-row items-center gap-2">
			<img src={logo} alt="SyllaBook Logo" class="w-10 h-10" />
			<p class="text-xl font-semibold text-indigo-500">SyllaBook</p>
		</div>

		<div class="flex flex-row gap-4">
			<NavButton text="Download Calendar" onClick={download_cal} />
			<NavButton text="← Back" href="/" />
		</div>
	</div>
</div>
