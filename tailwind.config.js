/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/restaurant/nutri/*.{html,jsx, js}",
		"./src/restaurant/nutri/*.js",
		"./src/restaurant/nutri/*.html",
		"./src/restaurant/nutri/**/*.html",
		
		"!.hoverpreview.temp.html"
		// "*.{html,jsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#f3c776',
				secondary: '#ed7a36'
			}
		},
	},
	plugins: [],
}

