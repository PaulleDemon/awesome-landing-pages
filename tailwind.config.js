/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/apps/**/*.{html,jsx, js}",
		"./src/apps/**/*.js",
		"./src/apps/**/*.html",
	
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

