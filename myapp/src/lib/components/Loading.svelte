<script lang="ts">
	import { onMount, onDestroy } from "svelte";

	const loadingMessages = [
		"Reading your syllabus...",
		"Extracting key dates...",
		"Organizing assignments...",
		"Building your schedule...",
		"Almost there...",
	];

	let currentMessageIndex = 0;
	let intervalId: ReturnType<typeof setInterval>;

	onMount(() => {
		intervalId = setInterval(() => {
			currentMessageIndex =
				(currentMessageIndex + 1) % loadingMessages.length;
		}, 7500);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div
	class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm"
>
	<!-- The container for the spinner and text -->
	<div class="flex flex-col items-center gap-4">
		<!-- The spinner element -->
		<div class="spinner"></div>
		<!-- The cycling text -->
		<p class="text-lg text-gray-600 font-medium">
			{loadingMessages[currentMessageIndex]}
		</p>
	</div>
</div>

<style>
	.spinner {
		width: 48px;
		height: 48px;
		border: 5px solid #e2e8f0; /* gray-200 */
		border-top-color: #6366f1; /* indigo-500 */
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
