/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'musicboxtheatre.com',
          },{
            protocol: 'https',
            hostname: 'silentlondon.co.uk',
          },
          {
            protocol: 'https',
            hostname: 'substackcdn.com',
          },
          {
            protocol: 'https',
            hostname: 'www.thephuketnews.com',
          },
          {
            protocol: 'https',
            hostname: 'savethecat.com',
          },
          {
            protocol: 'https',
            hostname: 'img.imageboss.me',
          },
          {
            protocol: 'https',
            hostname: 'www.thesiff.com',
          },
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
          },
          {
            protocol: 'https',
            hostname: 'vhx.imgix.net',
          },
          {
            protocol: 'https',
            hostname: 'files.metropoles.com',
          },
          {
            protocol: 'https',
            hostname: 'culturaemcronicas.wordpress.com',
          },
          {
            protocol: 'https',
            hostname: 'cdn.thefpsreview.com',
          }
        ],
      },
};

export default nextConfig;
