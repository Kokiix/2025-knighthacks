<script>
	import SyllabusInput from "$lib/components/SyllabusInput.svelte";
	import Loading from "$lib/components/Loading.svelte";
	let loading = false;
	function set_load_on() {
		loading = true;
	}
</script>

{#if loading}
<Loading />
{/if}
<SyllabusInput setLoading={set_load_on}/>
