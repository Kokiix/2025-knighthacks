<script>
  export let text = "Label"
  export let percentage = "50"
</script>

<div>
  <div class="flex justify-between mb-1">
    <span>{text}</span>
    <span>{percentage}%</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div class="bg-indigo-500 h-2.5 rounded-full" style="width: {percentage}%"></div>
  </div>
</div>
