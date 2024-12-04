/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    experimental: {
        turbo: false, // Disable Turbopack
        optimizeFonts: true,
    },

};

export default nextConfig;
