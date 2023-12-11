<script setup lang="ts">
import { computed } from "vue";
import IconBase from "../icons/IconBase.vue";
import IconLoading from "../icons/IconLoading.vue";

export type Type = "primary" | "secondary";
export interface ButtonProps {
	text?: string;
	isSubmit?: boolean;
	type?: Type;
	loading?: boolean;
	disabled?: boolean;
	prependIcon?: string;
	appendIcon?: string;
	iconOnly?: boolean;
	full?: boolean;
	height?: string;
	fontSize?: string;
	fontWeight?: string;
	iconSize?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {});
const classObj = computed(() => {
	return {
		[`button_${props.type}`]: props.type,
		"button_icon-only": props.iconOnly,
		"w-full": props.full
	};
});
const styleObj = computed(() => ({
	["--btn-height"]: props.height,
	["--btn-font-size"]: props.fontSize,
	["--btn-font-weight"]: props.fontWeight,
	["--btn-icon-size"]: props.iconSize
}));
</script>
<template>
	<component
		:is="$attrs.to ? 'RouterLink' : $attrs.href ? 'a' : 'button'"
		class="button"
		:type="isSubmit ? 'sumbit' : 'button'"
		:class="classObj"
		:style="styleObj"
		:disabled="loading || disabled"
	>
		<IconLoading v-if="loading" />

		<template v-else>
			<IconBase :icon="prependIcon" />
			<slot>
				{{ text }}
			</slot>
			<IconBase :icon="appendIcon" />
		</template>
	</component>
</template>
<style lang="scss">
.button {
	--btn-height: 44px;
	--btn-padding: 8px;
	--btn-border-radius: 2px;
	--btn-font-size: 16px;
	--btn-font-weight: 600;
	--btn-icon-size: 24px;

	display: flex;
	appearance: none;
	cursor: pointer;
	white-space: nowrap;
	align-items: center;
	justify-content: center;
	user-select: none;
	border: 1px solid transparent;
	position: relative;
	gap: 8px;

	font-weight: var(--btn-font-weight);
	font-size: var(--btn-font-size);
	height: var(--btn-height);
	padding-left: var(--btn-padding);
	padding-right: var(--btn-padding);
	border-radius: var(--btn-border-radius);

	.icon {
		font-size: var(--btn-icon-size);
	}
	&:disabled {
		opacity: 0.3;
	}
	&_primary {
		border-color: transparent;

		&:active {
		}
	}
	&_secondary {
		border-color: transparent;

		&:active {
		}
	}
	&_icon-only {
		padding: 0;
		width: var(--btn-height);
	}
}
</style>
