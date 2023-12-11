<script setup lang="ts">
import fallbackImg from "@/assets/images/fallback-image.svg";
import { computed } from "vue";

export interface Props {
	src?: string;
	fallback?: string;
	alt?: string;
	lazy?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
	alt: "",
	fallback: fallbackImg
});
const url = computed(() => props.src ?? props.fallback);
</script>
<template>
	<img
		:src="url"
		:alt="alt"
		:loading="lazy ? 'lazy' : 'eager'"
		onerror="this.src = fallback"
	/>
</template>
<style lang="scss"></style>
