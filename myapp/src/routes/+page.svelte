<script>
	import logo from "$lib/assets/logo.png";
	import SyllabusInput from "$lib/components/SyllabusInput.svelte";
</script>

<div class="max-w-4xl m-auto py-16 flex flex-col text-center gap-8">
	<img src={logo} alt="SyllaBook Logo" class="m-auto w-32 h-32" />
	<div class="flex flex-col gap-4">
		<h1 class="text-4xl font-semibold text-indigo-500">
			Welcome to Syllabook!
		</h1>
		<h2 class="text-gray-500">
			Upload your course syllabi and get organized instantly.
		</h2>
	</div>
	<SyllabusInput />
</div>
