<script>
    import ClassWidget from "$lib/components/ClassWidget.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    // console.log(document.cookie);
</script>

<Navbar />

<div class="p-8 flex flex-col gap-4">
    <p>My Classes</p>
    <hr class="border-gray-200 border-1"/>
    <div>
        <ClassWidget />
    </div>
</div>
