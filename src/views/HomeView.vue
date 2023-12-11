<script setup lang="ts">
import LoaderWrap from "@/components/ui/LoaderWrap.vue";
import IconBase from "@/components/ui/icons/IconBase.vue";
import { HomeService } from "@/services/HomeService";
import { ref, shallowRef } from "vue";

const loading = ref(true);

const home = shallowRef();
HomeService.getHome()
	.then((resp) => (home.value = resp))
	.finally(() => (loading.value = false));
</script>

<template>
	<LoaderWrap :loading="loading" class="abs-center">
		<h1 class="flex items-center gap-2">
			<span>{{ home.title }}</span>
			<IconBase icon="i-svg-box" />
			<IconBase icon="i-ri-arrow-up-line" />
		</h1>
		<p>{{ home.text }}</p>
	</LoaderWrap>
</template>
