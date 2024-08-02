/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/portfolio/notion/*.{html,jsx, js}",
		"./src/portfolio/notion/*.js",
		"./src/portfolio/notion/*.html",
		"./src/portfolio/notion/**/*.html",
		
		"!.hoverpreview.temp.html"
		// "*.{html,jsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#fff',
				secondary: "#f7f7f5",
				hoverColor: "#efefed",
				textColor: "#1F2123"
			}
		},
	},
	plugins: [],
}

