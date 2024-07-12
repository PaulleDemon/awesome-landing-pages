/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	theme: {
		extend: {
			colors: {
				primary: "#00006f",
				secondary: "#dc2626"
			}
		},
	},
	plugins: [],
}

