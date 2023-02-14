<script setup lang="ts">
function getIcon(str: string) {
	if (str.includes("success")) {
		return "ri-check-line";
	} else if (str.includes("error")) {
		return "ri-close-circle-line";
	} else if (str.includes("info")) {
		return "ri-information-line";
	}
}
</script>

<template>
	<RouterView />
	<Notifications
		style="right: 12px"
		position="bottom right"
		classes="notification"
		:pause-on-hover="true"
	>
		<template #body="props">
			<div :class="props.class">
				<div class="flex items-center p-4">
					<IconBase
						:icon="getIcon(props.class)"
						class="mr-4 text-2xl"
					/>
					<div>
						<p>
							<b>{{ props.item.title }}</b>
						</p>
						<div v-html="props.item.text" />
					</div>
				</div>
			</div>
		</template>
	</Notifications>
</template>
