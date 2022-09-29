/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
		},
		fontFamily: {
			sans: ["Manrope", "sans-serif"],
		},
	},
	plugins: [],
};
