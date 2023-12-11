<script setup lang="ts">
defineProps<{
	icon?: string;
}>();
</script>

<template>
	<i v-if="icon" class="icon" :class="icon"></i>
</template>

<style lang="scss">
.icon {
	display: inline-flex;
	vertical-align: baseline;
	min-width: 1em;
}
</style>
