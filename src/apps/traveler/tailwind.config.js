/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#fff',
				secondary: "#000",
			}
		},
	},
	plugins: [],
}

