// import { notify } from "@kyvg/vue3-notification";
import {
	createFetch,
	type CreateFetchOptions,
	type MaybeRefOrGetter,
	type UseFetchOptions,
	type UseFetchReturn
} from "@vueuse/core";
import qs from "qs";

export type ServiceFunction<T> = UseFetchReturn<T> &
	PromiseLike<UseFetchReturn<T>>;
const config: CreateFetchOptions = {
	// baseUrl: import.meta.env.VITE_API_URL,
	fetchOptions: {
		headers: {
			Accept: "application/json"
			// "X-CSRFToken": getCsrf(),
		},
		mode: "cors"
	},
	options: {
		// onFetchError(ctx) {
		// notify({
		// 	type: "error",
		// 	title: "Error",
		// 	text: ctx.error
		// });
		// return ctx;
		// }
	}
};
export const useFetch = createFetch(config);

export function fetchData<T>(url: MaybeRefOrGetter<string>): Promise<T>;
export function fetchData<T>(
	url: MaybeRefOrGetter<string>,
	useFetchOptions: UseFetchOptions
): Promise<T>;
export function fetchData<T>(
	url: MaybeRefOrGetter<string>,
	options: RequestInit,
	useFetchOptions?: UseFetchOptions
): Promise<T>;

export async function fetchData(...args: any[]) {
	// @ts-ignore
	const { data } = await useFetch(...args).json();
	return data.value;
}
export function urlParams(url: string, params?: object) {
	const query = qs.stringify(params, {
		addQueryPrefix: true,
		skipNulls: true
	});
	return url + query;
}

const http = {
	async get<T>(url: string, params?: object) {
		if (params) {
			url = urlParams(url, params);
		}
		const { data } = await useFetch(url).get().json<T>();
		return data.value;
	},
	async post<T>(url: string, body: object) {
		const { data, onFetchError, onFetchResponse } = useFetch(url)
			.post(body)
			.json<T>();
		// if (error.value) {
		// 	throw Error(error.value);
		// } else {
		// 	return data.value;
		// }
		return new Promise<T | null>((resolve, reject) => {
			onFetchError((error) => {
				reject(Error(error.message));
			});
			onFetchResponse(() => {
				resolve(data.value);
			});
		});
		// return data.value;
	},
	async put<T>(url: string, body: any) {
		const { data } = await useFetch(url).put(body).json<T>();
		return data.value;
	},
	async delete<T>(url: string) {
		const { data } = await useFetch(url).delete().json<T>();
		return data.value;
	}
};
export default http;
