import SiteLayout from "@/layouts/SiteLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: SiteLayout,
			children: [
				{
					path: "",
					name: "home",
					component: () => import("@/views/HomeView.vue")
				}
			]
		}
	]
});

export default router;
