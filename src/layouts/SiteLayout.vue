<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
	<!-- Main -->
	<main id="main" class="main">
		<RouterView />
	</main>
</template>
<style lang="scss">
.main {
	position: relative;
	height: 100%;
}
</style>
