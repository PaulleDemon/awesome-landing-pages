/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/law/lawfire/*.{html,jsx, js}",
		"./src/law/lawfire/*.js",
		"./src/law/lawfire/*.html",
		
		"!.hoverpreview.temp.html"
		// "*.{html,jsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#282E3F',
				secondary: "#CF9455", 
				primaryLight: "#3A4053"	
			}
		},
	},
	plugins: [],
}

