<script setup lang="ts">
import { computed, type PropType } from "vue";
import IconBase from "../icon/IconBase.vue";
type Theme = "primary" | "secondary";
type Color = "green";
type Size = "sm" | "md" | "lg";
const props = defineProps({
	type: {
		type: String,
		default: "button",
	},
	theme: {
		type: String as PropType<Theme>,
	},
	color: {
		type: String as PropType<Color>,
	},
	customColor: {
		type: String,
	},
	size: {
		type: String as PropType<Size>,
		default: "md",
	},
	customSize: {
		type: String,
	},
	square: Boolean,
	selected: Boolean,
	loading: Boolean,
	disabled: Boolean,
	fullWidth: Boolean,
});
const styleObj = computed(() => {
	return {
		"--btn-color-main": props.customColor,
		"--btn-color-hover": props.customColor,
		"--btn-color-active": props.customColor,
		"--btn-height": props.customSize,
	};
});
const classObj = computed(() => {
	return {
		[`button_${props.theme}`]: props.theme,
		[`button_color_${props.color}`]: props.color,
		[`button_size_${props.size}`]: !props.customSize && props.size,
		button_square: props.square,
		"button_full-width": props.fullWidth,
	};
});
</script>

<template>
	<Component
		:is="$attrs.href ? 'a' : $attrs.to ? 'router-link' : 'button'"
		class="button"
		:type="type"
		:class="classObj"
		:style="styleObj"
		:disabled="loading || disabled"
	>
		<slot></slot>
		<div v-if="loading" class="button__loader" :class="classObj">
			<IconBase
				icon="ri-loader-2-line"
				class="button__loader-icon"
			></IconBase>
		</div>
	</Component>
</template>

<style lang="scss">
.button,
a.button {
	--btn-color-main: transparent;
	--btn-color-hover: transparent;
	--btn-color-active: transparent;

	--btn-height: #{rem(44px)};

	box-sizing: border-box;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	user-select: none;
	height: var(--btn-height);
	font-weight: 700;
	font-size: rem(16px);
	width: fit-content;
	border: 1px solid transparent;
	border-radius: rem(4px);
	appearance: none;
	cursor: pointer;
	padding: 0 rem(16px);
	white-space: nowrap;
	overflow: hidden;
	position: relative;
	text-decoration: none;

	background-color: var(--btn-color-main);
	&:not(:disabled) {
		&:hover {
			background: var(--btn-color-hover);
		}
		&:active {
			background: var(--btn-color-active);
		}
	}

	> * + * {
		margin-left: rem(14px);
	}
	.icon {
		font-size: rem(20px);
	}
	&:disabled {
		cursor: default;
		opacity: 0.5;
		pointer-events: none;
	}
	&_primary {
		--btn-color-main: #2198df;
		--btn-color-hover: #1fcbec;
		--btn-color-active: #1fcbec;

		color: color(white);

		&.button_color_green {
			--btn-color-main: #65c439;
			--btn-color-hover: #5bee27;
			--btn-color-active: #5bee27;
		}
	}
	&_secondary {
		color: #727272;
		background-color: color(white);
		border-color: #d5d5d5;
		&:not(:disabled) {
			&:hover,
			&:active {
				background: #fafafa;
			}
		}
	}
	&_outline {
		--btn-color-main: #727272;

		color: var(--btn-color-main);
		background-color: color(white);
		border-color: var(--btn-color-main);
		&:not(:disabled) {
			&:hover,
			&:active {
				background: var(--btn-color-main);
				color: color(white);
			}
		}
		&.button_color_green {
			--btn-color-main: #65c439;
		}
	}
	&_facebook {
		color: color(white);
		background-color: #4267b2;
	}

	&_full-width {
		width: 100%;
	}

	&_square {
		width: var(--btn-height);
	}

	@mixin size-2xs {
		--btn-height: 24px;
		padding: 0 10px;
		font-size: 12px;
		> * + * {
			margin-left: 6px;
		}
	}
	@mixin size-xs {
		--btn-height: #{rem(30px)};
		padding: 0 rem(12px);
		font-size: rem(14px);
		> * + * {
			margin-left: rem(8px);
		}
	}
	@mixin size-sm {
		--btn-height: #{rem(36px)};
		padding: 0 rem(14px);
		font-size: rem(14px);
		> * + * {
			margin-left: rem(8px);
		}
	}
	@mixin size-md {
		--btn-height: #{rem(40px)};
		padding: 0 rem(16px);
	}
	@mixin size-lg {
		--btn-height: #{rem(44px)};
		padding: 0 rem(18px);
	}

	&_size_2xs {
		@include size-2xs;
	}
	&_size_xs {
		@include size-xs;
	}
	&_size_sm {
		@include size-sm;
	}
	&_size_sm {
		@include size-sm;
	}
	&_size_md {
		@include size-md;
	}
	&_size_lg {
		@include size-lg;
	}

	&__loader {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 0;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		border: none;
		height: auto;
		box-sizing: border-box;
		font-size: rem(20px);
		&-icon {
			animation-name: rotate;
			animation-duration: 1.5s;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
		}
	}
}

@keyframes rotate {
	from {
		transform: rotateZ(0deg);
	}

	to {
		transform: rotateZ(360deg);
	}
}
</style>
