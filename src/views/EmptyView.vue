<script setup lang="ts">
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary.vue";
import IconBase from "@/components/ui/icons/IconBase.vue";

export interface EmptyViewProps {
	text?: string;
}
withDefaults(defineProps<EmptyViewProps>(), {
	text: "Упс! Тут пока пусто."
});
</script>
<template>
	<div class="flex h-full flex-col items-center gap-8 justify-center">
		<IconBase icon="i-svg-search" class="text-100px" />
		<h2 class="text-5">{{ text }}</h2>
		<ButtonPrimary text="Назад" class="w-200px" @click="$router.back()" />
	</div>
</template>
