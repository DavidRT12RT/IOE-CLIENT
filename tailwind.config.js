// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.css", // Agrega tus estilos personalizados aquí
    ],
    theme: {
        extend: {
            colors:{
                "primary-color": "rgb(var(--primary-color))",
                "color-bkg": "rgb(var(--color-bkg))",
            },
            fontFamily:{
                "roboto":['Roboto', "sans-serif"]
            },
        colors:{

        }
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};