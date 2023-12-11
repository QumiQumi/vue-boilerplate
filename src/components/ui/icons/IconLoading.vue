<script setup lang="ts"></script>
<template>
	<span class="loading animate-spin" />
</template>
<style lang="scss" scoped>
.loading {
	animation: rotation 1s linear infinite;
	border-radius: 100%;
	border-right: 5px solid transparent;
	border-top: 5px solid currentColor;
	box-sizing: border-box;
	display: inline-block;
	height: 70px;
	width: 70px;
}

@keyframes rotation {
	0% {
		transform: rotate(0);
	}

	to {
		transform: rotate(1turn);
	}
}
</style>
