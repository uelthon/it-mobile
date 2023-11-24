/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['www.lordsofit.com', 'www.lordsofit.com/es', 'www.lordsofit.com/en', 'localhost:3000', 'localhost:3015', 'localhost:3000/es', 'localhost:3015/es', 'localhost:3000/en', 'localhost:3015/en', 'phpstack-967373-4055673.cloudwaysapps.com']
    }
  }
}

const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
)

module.exports = withNextIntl(nextConfig)
