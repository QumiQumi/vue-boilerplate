import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";
import {
	defineConfig,
	presetIcons,
	presetWind,
	transformerDirectives
} from "unocss";
import unocssThemes from "unocss-themes";

export default defineConfig({
	content: {
		pipeline: {
			include: [
				// the default
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// include js/ts files
				"src/**/*.{js,ts,json}"
			]
			// exclude files
			// exclude: []
		}
	},
	presets: [
		presetWind(),
		presetIcons({
			prefix: "i-",
			collections: {
				svg: FileSystemIconLoader("./src/assets/icons")
			}
		})
	],
	transformers: [transformerDirectives()],
	shortcuts: {
		"flex-center": "flex items-center justify-center",
		"abs-center": "absolute left-1/2 top-1/2 -translate-1/2"
	},
	variants: [
		unocssThemes({
			themes: {
				buyer: ".buyer",
				client: ".client",
				beegz: ".beegz"
			}
		})
	],
	theme: {
		colors: {
			inherit: "inherit",
			current: "currentColor",
			transparent: "transparent",
			black: "#000000",
			white: "#ffffff",
			error: "#DC3838",
			success: "#0DA340",

			text: {
				primary: "var(--color--text-primary)",
				secondary: "var(--color--text-secondary)"
			},
			bg: {
				primary: "var(--color--bg-primary)",
				secondary: "var(--color--bg-secondary)"
			},

			border: "var(--color--border)"
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "16px"
			}
		}
	}
});
