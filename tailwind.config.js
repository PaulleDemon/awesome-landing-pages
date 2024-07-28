/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/ngo/project-africa/*.{html,jsx, js}",
		"./src/ngo/project-africa/*.js",
		"./src/ngo/project-africa/*.html",
		
		"!.hoverpreview.temp.html"
		// "*.{html,jsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#094c3b',
				secondary: "#ffe353",
			}
		},
	},
	plugins: [],
}

