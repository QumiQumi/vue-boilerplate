<script setup lang="ts">
import ButtonPrimary from "@/components/button/ButtonPrimary.vue";
import ButtonSecondary from "@/components/button/ButtonSecondary.vue";
import ThemeToggler from "@/components/ThemeToggler.vue";
</script>
<template>
	<header class="p-4">
		<div class="wrapper">
			<nav class="flex items-center gap-4">
				<ButtonPrimary to="/">Home</ButtonPrimary>
				<ButtonSecondary to="/about">About</ButtonSecondary>
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
