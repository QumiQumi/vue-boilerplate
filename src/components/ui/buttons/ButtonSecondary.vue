<script setup lang="ts">
import type { ButtonProps } from "./ButtonBase.vue";
import ButtonBase from "./ButtonBase.vue";

const props = withDefaults(defineProps<ButtonProps>(), {
	type: "secondary"
});
</script>
<template>
	<ButtonBase v-bind="props" />
</template>
