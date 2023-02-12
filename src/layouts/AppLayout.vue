<script setup lang="ts">
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
</script>
<template>
	<div class="flex min-h-[100vh] flex-col">
		<AppHeader />
		<main class="flex-1 p-4">
			<RouterView />
		</main>
		<AppFooter />
	</div>
</template>
<style lang="scss">
.link {
	padding: 4px;
	background-color: antiquewhite;
	border: 1px solid theme("colors.gray.300");
	border-radius: 4px;
}
</style>
