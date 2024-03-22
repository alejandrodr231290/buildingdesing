/** @type {import('next').NextConfig} */
const nextConfig = {
  /* experimental: {
     appDir: true,
   },*/
 /* images: {
    domains: ['assets.maccarianagency.com', 'localhost:3000', 'localhost', 'builddesigninc.org'],
  },*/
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.maccarianagency.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'builddesigninc.org',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig;
