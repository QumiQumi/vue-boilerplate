import { notify } from "@kyvg/vue3-notification";
import {
	createFetch,
	type CreateFetchOptions,
	type MaybeComputedRef,
	type UseFetchOptions,
	type UseFetchReturn,
} from "@vueuse/core";

export type ServiceFunction<T> = UseFetchReturn<T> &
	PromiseLike<UseFetchReturn<T>>;
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

export function useFetchJson<T>(
	url: MaybeComputedRef<string>
): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
export function useFetchJson<T>(
	url: MaybeComputedRef<string>,
	useFetchOptions: UseFetchOptions
): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;
export function useFetchJson<T>(
	url: MaybeComputedRef<string>,
	options: RequestInit,
	useFetchOptions?: UseFetchOptions
): UseFetchReturn<T> & PromiseLike<UseFetchReturn<T>>;

export function useFetchJson(test: any) {
	return useFetch(test).json();
}
