/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
    },
    reactStrictMode: true,
    transpilePackages: ['react-tweet'],
    images: {
      domains: ['blog.thepromptmaster.it','thepromptmaster.it'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'blog.thepromptmaster.it'
        },
        {
          protocol: 'http',
          hostname: 'blog.thepromptmaster.it'
        },
        {
          protocol: 'https',
          hostname: 'www.thepromptmaster.it'
        },      
        {
          protocol: 'http',
          hostname: 'www.thepromptmaster.it'
        },
      ],
    },
};

export default nextConfig;
