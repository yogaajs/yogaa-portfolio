/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
