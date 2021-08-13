module.exports = {
    reactStrictMode: false,
    async rewrites() {
        return [
            { source: '/(.*)', destination: '/' },
        ];
    },
};