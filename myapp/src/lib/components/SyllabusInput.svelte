<script lang="ts">
    import Page from "../../routes/+page.svelte";

  let files: File[] = [];
  let errorMessage = '';
  const MAX_SIZE_TOTAL = 20 * 1024 * 1024; // 20 MB in bytes

  // This function will handle the form submission logic
  const submitForm = async () => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('pdfs', file);
    });

    console.log('Submitting files...', files);

    try {
        const response = await fetch('/fileUpload', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            console.log('Files successfully uploaded');
        } else {
            console.error('File upload failed')
        }
    } catch (error) {
        console.error('An error occurred: ', error);
    }
  };

  const handleFileSelection = (selectedFiles: FileList | null) => {
    errorMessage = '';
    if (!selectedFiles) return;

    let totalSize = 0;
    const validFiles: File[] = [];
    for (const file of selectedFiles) {
      if (file.type !== 'application/pdf') {
        errorMessage = 'Invalid file type. Only PDF files are accepted.';
        files = []; // Clear selection
        return;
      }
      totalSize += file.size;
      validFiles.push(file);
    }
    if (totalSize > MAX_SIZE_TOTAL) {
      errorMessage = 'Total file size exceeds 20MB.';
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
<form on:submit|preventDefault={submitForm} class="flex items-center justify-center w-full">
    <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        on:dragover|preventDefault
        on:drop={handleDrop}
    >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
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