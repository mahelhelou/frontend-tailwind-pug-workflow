// Plugins
const defaultTheme = require('tailwindcss/defaultTheme')
const flowbite = require('flowbite/plugin')
const prose = require('@tailwindcss/typography')
const tailwindRTL = require('tailwindcss-rtl')

const config = {
	content: [
		'./src/**/*.{pug,js}',
		'./public/**/*.html',
		'./node_modules/flowbite/**/*.js',
	],
	// content: ['./*.html', './js/*.js'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				iugBlue: '#0396E9',
				jetBlack: '#2b2b2b',
				deepBlack: '#0b0b0b',
				lightOrange: '#EA8E37',
				deepOrange: '#E44E3E',
				accentCyan: 'hsl(176, 68%, 64%)',
				lightRed: 'hsl(0, 100%, 63%)',
				fbColor: '#1877f2',
				twitterColor: '#1da1f2',
				instaColor: '#c13584',
				youtubeColor: '#ff0000',
				pinterestColor: '#bd081c',
				linkedinColor: '#0077b5',
				whatsappColor: '#43d854',
			},
		},
		fontFamily: {
			// sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
			sans: ['Open Sans', 'sans-serif'],
			// droid: ['Droid', 'sans-serif'],
			tajawal: ['Tajawal', 'sans-serif'],
		},
	},
	plugins: [flowbite, prose, tailwindRTL],
}

module.exports = config
