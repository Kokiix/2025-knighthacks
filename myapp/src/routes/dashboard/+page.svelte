<script>
	import ClassWidget from "$lib/components/ClassWidget.svelte";
	import Navbar from "$lib/components/navbar.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        // console.log(document.cookie);
    })
</script>

<Navbar />

<div class="p-8 flex flex-col gap-4">
	<p>My Classes</p>
	<hr class="border-gray-200 border-1" />
	<div>
		<ClassWidget
			classTitle="Programming 1"
			professor="Ashish Aggarwal"
			email="a.aggarwal@ufl.edu"
			attendance="Attendance is mandatory."
		/>
		<ClassWidget />
	</div>
</div>
