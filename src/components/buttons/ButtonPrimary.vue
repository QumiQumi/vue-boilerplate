<script lang="ts">
import { defineComponent, h } from "vue";
import ButtonBase from "./ButtonBase.vue";

export default defineComponent({
	extends: ButtonBase,
	setup(props, { slots }) {
		return () => h(ButtonBase, { ...props, theme: "primary" }, slots);
	},
});
</script>
