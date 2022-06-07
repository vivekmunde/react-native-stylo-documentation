/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/react-native-stylo-documentation/' : '',
  basePath: isProd ? '/react-native-stylo-documentation' : ''
}

module.exports = nextConfig
