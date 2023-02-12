<script setup lang="ts">
import { Tooltip } from "floating-vue";
import IconBase from "./IconBase.vue";
</script>
<template>
	<Tooltip class="inline-flex">
		<IconBase
			v-if="$slots.default"
			icon="info"
			class="text-icon cursor-help text-base"
		/>
		<template #popper>
			<slot></slot>
		</template>
	</Tooltip>
</template>
