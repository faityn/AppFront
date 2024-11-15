import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: "340px",
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1280px",
            xxl: "1536px",
        },
        extend: {
            colors: {
                primary: "#276CF3",
                secondary: "#3042E4",
                third: "#759BF1",
                lightGray: "#EBEFF8",
                grayText: "#767676",
            },
            fontSize: {
                md: ["16px", "20px"],
            },
        },
    },
    plugins: [],
};
export default config;
