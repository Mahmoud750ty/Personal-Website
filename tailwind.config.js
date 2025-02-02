/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // changed to 'class'
    theme: {
        extend: {
            fontFamily: {
                'anek': ['"Anek Latin"', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}