import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                arcade: {
                    cyan: "#00FFFF",
                    magenta: "#FF00FF",
                    green: "#00FF00",
                    yellow: "#FFFF00",
                    red: "#FF0040",
                    dark: "#0a0a0a",
                    darker: "#050505",
                    purple: "#1a1a2e",
                },
            },
            fontFamily: {
                pixel: ['"Press Start 2P"', "cursive"],
                mono: ['"VT323"', "monospace"],
            },
            animation: {
                blink: "blink 1s step-end infinite",
                flicker: "flicker 0.15s infinite",
                scanline: "scanline 8s linear infinite",
                glow: "glow 2s ease-in-out infinite alternate",
                "float": "float 3s ease-in-out infinite",
            },
            keyframes: {
                blink: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
                flicker: {
                    "0%": { opacity: "0.97" },
                    "5%": { opacity: "0.95" },
                    "10%": { opacity: "0.97" },
                    "15%": { opacity: "0.94" },
                    "20%": { opacity: "0.98" },
                    "50%": { opacity: "0.95" },
                    "80%": { opacity: "0.96" },
                    "100%": { opacity: "0.98" },
                },
                scanline: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(100%)" },
                },
                glow: {
                    "0%": { textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF" },
                    "100%": { textShadow: "0 0 20px #00FFFF, 0 0 30px #00FFFF, 0 0 40px #00FFFF, 0 0 50px #00FFFF" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            boxShadow: {
                neon: "0 0 5px theme('colors.arcade.cyan'), 0 0 20px theme('colors.arcade.cyan')",
                "neon-magenta": "0 0 5px theme('colors.arcade.magenta'), 0 0 20px theme('colors.arcade.magenta')",
                "neon-green": "0 0 5px theme('colors.arcade.green'), 0 0 20px theme('colors.arcade.green')",
            },
        },
    },
    plugins: [],
};

export default config;
