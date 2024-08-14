/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'starwars-visualguide.com'
      },
    ]
  },
};

export default nextConfig;
