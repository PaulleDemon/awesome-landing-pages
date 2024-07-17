/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/apps/AISales/**/*.{html,jsx, js}",
		"./src/apps/AISales/**/*.js",
		"./src/apps/AISales/**/*.html",
	
		// "*.{html,jsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: "#BFFE66",
				secondary: "#BDB8FF", 
				
			}
		},
	},
	plugins: [],
}

