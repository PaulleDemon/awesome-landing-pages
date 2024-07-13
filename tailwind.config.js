/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/law/**/*.{html,jsx, js}",
		"./src/law/**/*.js",
		"./src/law/**/*.html",
	
		// "*.{html,jsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// primary: "#155eef",
				primary: '#00006F',
				
			}
		},
	},
	plugins: [],
}

