/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/benifits',
                destination: '/benefit',
                permanent: true, // 301 redirect
            },
        ]
    }
};

export default nextConfig;

