// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["en", "kr"], // Add more locales if needed
        defaultLocale: "en",
        reactStrictMode: true,
    },
};

export default nextConfig;
