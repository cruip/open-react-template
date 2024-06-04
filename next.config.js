
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "media.licdn.com",
      port: "",
    }]
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "tw-elements":
        "tw-elements/js/tw-elements.umd.min.js",
    };
    return config;
  },
}

module.exports = nextConfig
