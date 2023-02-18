import { Theme } from "@unocss/preset-wind";
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetWind,
	transformerDirectives,
} from "unocss";
export default defineConfig({
	presets: [
		presetWind(),
		presetIcons({
			prefix: "",
			extraProperties: {
				"inline-flex": "inline-flex",
				"vertical-align": "baseline",
				"min-width": "1em",
			},
		}),
		presetAttributify(),
	],
	transformers: [transformerDirectives()],
	theme: {
		colors: {
			inherit: "inherit",
			current: "currentColor",
			transparent: "transparent",
			black: "#000000",
			white: "#ffffff",

			text: {
				primary: "var(--color--text-primary)",
				secondary: "var(--color--text-secondary)",
				disabled: "var(--color--text-disabled)",
			},
			bg: {
				primary: "var(--color--bg-primary)",
				secondary: "var(--color--bg-secondary)",
			},

			divider: "var(--color--divider)",
			border: "var(--color--border)",
			card: "var(--color--card)",
			icon: "var(--color--icon)",

			tooltip: {
				DEFAULT: "var(--color--tooltip)",
				text: "var(--color--tooltip-text)",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
			},
		},
	},
	preflights: [
		// If you want to inline colors and shadows to css vars
		// {
		// 	getCSS: ({ theme }) => getStringVars(theme),
		// },
	],
});

type VarType = "color" | "shadow";

function extractVars(type: VarType, varObj: any, group = ""): any {
	if (varObj) {
		return Object.keys(varObj).reduce((vars, varKey) => {
			const value = varObj[varKey];
			if (value.toString().includes("var(--")) return { ...vars };

			const key =
				varKey.toLocaleLowerCase() === "default" ? "" : "-" + varKey;
			const newVars =
				typeof value === "string"
					? { [`--${type}-${group}${key}`]: value }
					: extractVars(type, value, `${key}`);
			return { ...vars, ...newVars };
		}, {});
	}
}

function getStringVars(theme: Theme) {
	const colors = extractVars("color", theme.colors);
	const shadows = extractVars("shadow", theme.boxShadow);

	return `
	:root {${toString(colors)} ${toString(shadows)}}`;

	function toString(obj: any) {
		if (obj) {
			return Object.keys(obj).reduce(
				(all, key) => all + `${key}:${obj[key]};`,
				""
			);
		}
	}
}
