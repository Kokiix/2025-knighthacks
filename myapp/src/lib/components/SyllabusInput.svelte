<script lang="ts">
	import { goto } from "$app/navigation";
	import { CloudArrowUp } from "svelte-heros-v2";
	import Page from "../../routes/+page.svelte";

	let files: File[] = [];
	let errorMessage = "";
	const MAX_SIZE_TOTAL = 20 * 1024 * 1024; // 20 MB in bytes

	// This function will handle the form submission logic
	const submitForm = async () => {
		const formData = new FormData();
		files.forEach((file) => {
			formData.append("pdfs", file);
		});

		console.log("Submitting files...", files);

		try {
			const response = await fetch("/fileUpload", {
				method: "POST",
				body: formData,
			});
			if (response.ok) {
				console.log("Files successfully uploaded");
				document.cookie = JSON.stringify(await response.json());

				// console.log("cookie is " + document.cookie);
				goto("/dashboard");
			} else {
				console.error("File upload failed");
			}
		} catch (error) {
			console.error("An error occurred: ", error);
		}
	};

	const handleFileSelection = (selectedFiles: FileList | null) => {
		errorMessage = "";
		if (!selectedFiles) return;

		let totalSize = 0;
		for (const file of selectedFiles) {
			if (file.type !== "application/pdf") {
				errorMessage =
					"Invalid file type. Only PDF files are accepted.";
				files = []; // Clear selection
				return;
			}
			totalSize += file.size;
			files.push(file);
		}

		if (totalSize > MAX_SIZE_TOTAL) {
			errorMessage = "Total file size exceeds 20MB.";
			files = []; // Clear selection
			return;
		}

		submitForm();
	};

	function handleChange(event: Event & { currentTarget: HTMLInputElement }) {
		handleFileSelection(event.currentTarget.files);
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		if (event.dataTransfer) {
			handleFileSelection(event.dataTransfer.files);
		}
	}
</script>

<!-- The form element is added to handle the submission -->
<form
	on:submit|preventDefault={submitForm}
	class="flex items-center justify-center w-full"
>
	<label
		for="dropzone-file"
		class="flex flex-col items-center justify-center w-full h-64 border-2 border-indigo-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
		on:dragover|preventDefault
		on:drop={handleDrop}
	>
		<div class="flex flex-col items-center justify-center pt-5 pb-6">
			<CloudArrowUp class="w-16 h-16 text-indigo-400" />
			<p class="mb-2 text-sm text-gray-500">
				<span class="font-semibold text-indigo-400"
					>Click to upload</span
				> or drag and drop
			</p>
			<p class="text-xs text-gray-500">Accepts PDF files (MAX. 20mb)</p>
			{#if errorMessage}
				<p class="text-xs text-red-500 mt-2">{errorMessage}</p>
			{/if}
		</div>
		<!-- Note: added 'multiple' to the input -->
		<input
			id="dropzone-file"
			type="file"
			class="hidden"
			accept="application/pdf"
			multiple
			on:change={handleChange}
		/>
	</label>
</form>
