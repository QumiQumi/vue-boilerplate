export function setCssRootVar(name: string, value: string) {
	document.documentElement.style.setProperty(name, value);
}
