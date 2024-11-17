/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				"noto-sans-tamil": ["Noto Sans Tamil", "sans-serif"]
			},
			screens: {
				"3xl": "1620px",
				"4xl": "1800px",
				"5xl": "2048px",
				"6xl": "2100px",
				"7xl": "2400px",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
