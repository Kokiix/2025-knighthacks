<script>
	import { User } from "svelte-heros-v2";
	import SyllabusInput from "$lib/components/SyllabusInput.svelte";
</script>

<div class="max-w-4xl m-auto py-16 flex flex-col text-center gap-8">
	<User class="m-auto bg-gray-200 p-16 rounded-full" />
	<div class="flex flex-col gap-4">
		<h1 class="text-4xl font-semibold">Welcome to Syllabook!</h1>
		<h2 class="text-gray-600">
			Upload your course syllabi and get organized instantly.
		</h2>
	</div>
	<SyllabusInput />
</div>
