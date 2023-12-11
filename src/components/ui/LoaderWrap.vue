<script setup lang="ts">
import type { EmptyViewProps } from "@/views/EmptyView.vue";
import EmptyView from "@/views/EmptyView.vue";
import type { PropType } from "vue";
import IconLoading from "./icons/IconLoading.vue";

defineProps({
	loading: {
		type: Boolean,
		default: true
	},
	fullPage: {
		type: Boolean,
		default: true
	},
	size: String,
	text: String,
	isEmpty: Boolean,
	emptyProps: Object as PropType<EmptyViewProps>
});
</script>
<template>
	<div
		v-if="loading"
		class="loader-wrap"
		:class="{
			'loader-wrap_full-page': fullPage
		}"
	>
		<IconLoading class="text-primary text-20" />
	</div>
	<EmptyView v-else-if="isEmpty" class="h-full" v-bind="emptyProps" />
	<div v-else>
		<slot></slot>
	</div>
</template>

<style lang="scss">
.loader-wrap {
	display: flex;
	justify-content: center;
	flex-direction: column;
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
