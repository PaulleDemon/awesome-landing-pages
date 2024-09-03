/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/restaurant/nutrio/*.{html,jsx, js}",
		"./src/restaurant/nutrio/*.js",
		"./src/restaurant/nutrio/*.html",
		"./src/restaurant/nutrio/**/*.html",
		
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

