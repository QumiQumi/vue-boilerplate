<template v-if="icon">
	<div>
		<Component v-if="type === 'svg'" class="icon" :is="iconSvg"></Component>
		<i v-else class="icon" :class="icon"></i>
	</div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
	inheritAttrs: false,
	props: {
		icon: {
			type: String,
		},
	},
	computed: {
		type() {
			return this.icon?.split("-")[0];
		},
		iconSvg() {
			let stringArray = this.icon?.split("-");
			stringArray.shift();
			let iconName = stringArray.reduce(
				(acc, current) => acc + firstLetterUppercase(current)
			);
			iconName = "Icon" + iconName;
			return defineAsyncComponent(() => import(`./svg/${iconName}.vue`));
		},
	},
});
function firstLetterUppercase(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<style lang="scss">
.icon {
	display: inline-flex;
	vertical-align: baseline;
	font-size: inherit;
	line-height: 1;
	flex: 1;
	width: 1em;
	height: 1em;
}
</style>
