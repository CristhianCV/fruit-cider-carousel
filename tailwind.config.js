/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                "header-font": "#1a1b3a",
                "nav-back": "#262626f7",
            },
            minWidth: ({ theme }) => ({
                ...theme("spacing"),
            }),
            maxWidth: ({ theme }) => ({
                ...theme("spacing"),
            }),
        },
    },
    plugins: [],
};
