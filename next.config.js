/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'akamai',
        path: '',
        unoptimized: true
      },
}

module.exports = nextConfig
