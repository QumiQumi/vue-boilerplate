import { notify } from "@kyvg/vue3-notification";
import { createFetch, type CreateFetchOptions } from "@vueuse/core";

const config: CreateFetchOptions = {
	baseUrl: import.meta.env.BASE_URL,
	fetchOptions: {
		headers: {},
	},
	options: {
		onFetchError(ctx) {
			notify({
				type: "error",
				title: "Error",
				text: ctx.error,
			});
			return ctx;
		},
	},
};
export const useFetch = createFetch(config);
