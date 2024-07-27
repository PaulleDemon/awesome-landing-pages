/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/law/lawgroup/*.{html,jsx, js}",
		"./src/law/lawgroup/*.js",
		"./src/law/lawgroup/*.html",
		
		"!.hoverpreview.temp.html"
		// "*.{html,jsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#00006F',
				secondary: "#a59451fb",
			}
		},
	},
	plugins: [],
}

