<script lang="ts">
	import ClassWidget from "$lib/components/ClassWidget.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	import { onMount } from "svelte";

	let courses: Array<Object>;
	onMount(() => {
		courses = JSON.parse(document.cookie).originalData;
		console.log(courses);
	});
</script>

<Navbar />

<div class="p-8 flex flex-col gap-4 max-w-7xl m-auto">
	<p>My Classes</p>
	<div>
		{#each courses as course}
			<ClassWidget
				classTitle={course.name}
				professor={course.prof}
				email={course.profEmail}
				attendance={course.attendancePolicy}
				officeHours={course.officeHours}
			/>
		{/each}
	</div>
</div>
