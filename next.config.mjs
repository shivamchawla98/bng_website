/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex, nofollow'
                    }
                ],
                env: {
                    API_KEY: process.env.API_KEY,
                    GRAPHQL_URI: process.env.GRAPHQL_URI,
                    API_ACCESS_EMAIL: process.env.API_ACCESS_EMAIL,
                },
            }
        ]
    }
};

export default nextConfig;

