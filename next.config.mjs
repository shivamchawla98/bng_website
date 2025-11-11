/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)'
            }
        ]
    }
};

export default nextConfig;

