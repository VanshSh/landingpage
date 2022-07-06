/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['"Basier Circle"', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
}
