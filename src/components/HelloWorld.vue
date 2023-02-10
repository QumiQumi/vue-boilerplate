<script setup lang="ts">
defineProps<{
	msg: string;
}>();
</script>

<template>
	<div class="greetings">
		<h1>
			{{ msg }}
			<span v-tooltip="'Balsaflo'">I am tooltip</span>
		</h1>
		<h3>
			You’ve successfully created a project with
			<a href="https://vitejs.dev/" target="_blank" rel="noopener"
				>Vite</a
			>
			+
			<a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a
			>. What's next?
		</h3>
	</div>
</template>

<style lang="scss">
h1 {
	box-shadow: shadow("none");
	color: color("blue.DEFAULT");
	font-weight: 500;
	font-size: 2.6rem;
}

h3 {
	font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
	text-align: center;
}

@media (min-width: 1024px) {
	.greetings h1,
	.greetings h3 {
		text-align: left;
	}
}
</style>
