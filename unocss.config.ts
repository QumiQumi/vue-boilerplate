import { Theme } from "@unocss/preset-wind";
import { defineConfig, presetWind, transformerDirectives } from "unocss";

export default defineConfig({
	presets: [presetWind({})],
	transformers: [transformerDirectives()],
	theme: {},
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
