<script setup lang="ts">
defineProps({
	loading: {
		type: Boolean,
		default: true,
	},
	fullPage: {
		type: Boolean,
		default: true,
	},
	size: String,
});
</script>
<template>
	<div
		v-bind="$attrs"
		v-if="loading"
		class="loader-wrap"
		:class="{
			'loader-wrap_full-page': fullPage,
		}"
	>
		<i class="ri-loader-3-line pi-spin text-blue text-20"></i>
	</div>
	<slot v-else></slot>
</template>

<style lang="scss">
.loader-wrap {
	display: flex;
	align-items: center;
	min-height: 40px;
	width: 100%;
}
.loader-wrap_full-page {
	@apply absolute inset-0;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
