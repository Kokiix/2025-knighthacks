<script>
	import {
		Swatch,
		User,
		Envelope,
		Calendar,
		ExclamationCircle,
		ChartPie,
		Clock,
	} from "svelte-heros-v2";
	import ProgressBar from "./ProgressBar.svelte";

	export let classCode = "Class Code";
	export let classTitle = "Class Title";
	export let professor = "Professor Name";
	export let email = "Professor Email";
	export let attendance = "This is the class's attendance policy.";
	export let officeHours = "This is your professor's office hours.";
</script>

<div
	class="flex flex-col gap-4 p-4 rounded-lg border-2 border-solid border-gray-200 mb-4"
>
	<div class="flex flex-row justify-between">
		<p>{classCode}: {classTitle}</p>
		<Swatch class="w-4" />
	</div>
	<div class="flex flex-col gap-2">
		<div class="flex flex-row gap-2">
			<User class="w-4" />
			<p class="text-gray-600">{professor}</p>
		</div>
		<div class="flex flex-row gap-2">
			<Envelope class="w-4" />
			<p class="text-gray-600">{email}</p>
		</div>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<p>Attendance Policy:</p>
				<p class="w-full p-4 rounded-lg bg-gray-100 text-gray-600">
					{attendance}
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<div class="flex flex-row gap-2">
					<Clock class="w-4" />
					<p>Office Hours:</p>
				</div>
				<div class="w-full p-4 rounded-lg bg-gray-100">
					<p class="text-gray-600">{officeHours}</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<div class="flex flex-row gap-2">
				<ChartPie class="w-4" />
				<p>Grading Breakdown:</p>
			</div>
			<div class="flex flex-col gap-2">
				<ProgressBar text="Assignments" percentage="30" />
				<ProgressBar text="Midterm" percentage="25" />
				<ProgressBar text="Final Exam" percentage="30" />
				<ProgressBar text="Participation" percentage="15" />
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div class="flex flex-row gap-2">
			<Calendar class="w-4" />
			<p>Exams and Tests:</p>
		</div>
		<div class="w-full p-4 rounded-lg bg-gray-100">
			<p>Midterm Exam</p>
			<p class="text-gray-600">November 14, 2025</p>
		</div>
		<div class="w-full p-4 rounded-lg bg-gray-100">
			<p>Final Exam</p>
			<p class="text-gray-600">October 30, 2025</p>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div class="flex flex-row gap-2">
			<ExclamationCircle class="w-4" />
			<p>Assignments and Projects:</p>
		</div>
		<div class="w-full p-4 rounded-lg bg-gray-100">
			<p>Programming Assignment 1</p>
			<p class="text-gray-600">October 10, 2025</p>
		</div>
	</div>
</div>
