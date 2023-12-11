<script setup lang="ts"></script>
<template>
	<main class="main">
		<RouterView />
	</main>
</template>
<style lang="scss" scoped>
.main {
	height: 100%;
	// display: flex;
	// flex-direction: column;
	// align-items: stretch;
	background: color("bg.secondary");
	position: relative;
	overflow: hidden;
}
</style>
