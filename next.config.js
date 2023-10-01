/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "media.licdn.com",
      port: "",
    }]
  },
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '2mb',
  },
}

module.exports = nextConfig
