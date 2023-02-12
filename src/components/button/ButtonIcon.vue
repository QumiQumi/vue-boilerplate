<script setup lang="ts">
import IconBase from "@/components/icon/IconBase.vue";
defineProps({
	icon: String,
	isSvg: Boolean,
});
</script>
<template>
	<button class="inline-flex cursor-pointer bg-transparent">
		<IconBase :icon="icon" />
	</button>
</template>
