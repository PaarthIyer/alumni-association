/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            heading: ['Libre Baskerville', 'serif'],
            montserrat: ['Montserrat', 'sans-serif'],
            ubuntu: ['Ubuntu', 'sans-serif'],
            body: ['Open Sans', 'sans-serif']
        },
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            'corporate',
            {
                // mytheme: {
                //     'base-100': '#000000'
                // }
            }
        ]
    }
}
