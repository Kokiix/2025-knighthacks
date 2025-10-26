<script lang="ts">
	import ClassWidget from "$lib/components/ClassWidget.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	import { onMount } from "svelte";

	let classes: Array<Object> = [];
	onMount(() => {
		try {
			const cookieValue = document.cookie;
			const parsedCookie = JSON.parse(
				cookieValue.substring(cookieValue.indexOf("=") + 1)
			);
			if (parsedCookie && parsedCookie.originalData) {
				classes = parsedCookie.originalData;
			}
			console.log(classes);
		} catch (error) {
			console.error("Error parsing cookie:", error);
		}
	});
</script>

<Navbar />

<div class="p-8 flex flex-col gap-4 max-w-7xl m-auto">
	<p>My Classes</p>
	<div>
		{#if classes.length > 0}
			{#each classes as c}
				<ClassWidget
					classCode={c.num}
					classTitle={c.name}
					professor={c.prof}
					email={c.profEmail}
					attendance={c.attendancePolicy}
					officeHours={c.officeHours}
					gradingBreakdown={c.gradingWeights}
					exams={c.exams}
					assignments={c.assignments}
				/>
			{/each}
		{:else}
			<p class="text-gray-500">
				No classes found. Upload a syllabus to get started.
			</p>
		{/if}
	</div>
</div>
