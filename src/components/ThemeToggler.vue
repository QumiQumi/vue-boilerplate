<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
	<button @click="toggleDark()" class="flex items-center gap-1 p-3">
		<i class="dark:i-ri-moon-line i-ri-sun-line"></i>
	</button>
</template>
