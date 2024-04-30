/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'musicboxtheatre.com',
          },
        ],
      },
};

export default nextConfig;
