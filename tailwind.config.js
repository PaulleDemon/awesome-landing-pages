/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/law/**/*.{html,jsx, js}",
		"./src/law/**/*.js",
		"./src/law/**/*.html",
		
		"!.hoverpreview.temp.html"
		// "*.{html,jsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#282E3F',
				secondary: "#CF9455", 	
			}
		},
	},
	plugins: [],
}

