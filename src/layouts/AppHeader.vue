<script setup lang="ts">
import ThemeToggler from "@/components/ThemeToggler.vue";
</script>
<template>
	<header class="p-4">
		<div class="wrapper">
			<nav class="flex items-center gap-4">
				<RouterLink class="link" to="/">Home</RouterLink>
				<RouterLink class="link" to="/about">About</RouterLink>
				<ThemeToggler />
			</nav>
		</div>
	</header>
</template>
<style lang="scss">
.link {
	padding: 4px;
	background-color: antiquewhite;
	border: 1px solid theme("colors.gray.300");
	border-radius: 4px;
}
</style>
