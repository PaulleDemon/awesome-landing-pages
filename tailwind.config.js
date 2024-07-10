/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"./**/*.{html, jsx, js}",
		"./saas/**/*.{html,jsx, js}",
		"./saas/**/*.js",
		"./saas/**/*.html",
	
		// "*.{html,jsx}"
	],
	theme: {
		extend: {},
	},
	plugins: [],
}

