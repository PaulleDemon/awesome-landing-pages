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
				// primary: "#155eef",
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				
				buttonFg: 'var(--color-btn-text)'
			}
		},
	},
	plugins: [],
}

