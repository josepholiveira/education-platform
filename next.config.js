/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['./content/**/*'],
    },
  },
}

module.exports = nextConfig
