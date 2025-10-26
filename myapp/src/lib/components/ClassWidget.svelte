<script>
    import { Swatch } from "svelte-heros-v2";
    import { User } from "svelte-heros-v2";
    import { Envelope } from "svelte-heros-v2";

    export let classTitle = "Class Title";
    export let professor = "Professor Name";
    export let email = "Professor Email";
    export let attendance = "This is the class's attendance policy."

</script>
<div class="flex flex-col gap-4 p-4 rounded-lg border-2 border-solid border-gray-200">
    <div class="flex flex-row justify-between">
        <p>{classTitle}</p>
        <Swatch class="w-4"/>
    </div>
    <div class="flex flex-row gap-2">
        <User class="w-4" />
        <p class="text-gray-600">{professor}</p>
    </div>
    <div class="flex flex-row gap-2">
        <Envelope class="w-4" />
        <p class="text-gray-600">{email}</p>
    </div>
    <div class="flex flex-col gap-4">
        <p>Attendance Policy:</p>
        <p class="w-full px-2 py-4 rounded-lg bg-gray-100">{attendance}</p>
    </div>
    
</div>