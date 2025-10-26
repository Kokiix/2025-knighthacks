<script>
	import ClassWidget from "$lib/components/ClassWidget.svelte";
	import Navbar from "$lib/components/navbar.svelte";
</script>

<Navbar />

<div class="p-8 flex flex-col gap-4 max-w-7xl m-auto">
	<p>My Classes</p>
	<div>
		<ClassWidget
			classCode="MAC2311"
			classTitle="Programming 1"
			professor="Ashish Aggarwal"
			email="a.aggarwal@ufl.edu"
			attendance="Attendance is mandatory."
		/>
		<ClassWidget />
	</div>
</div>
