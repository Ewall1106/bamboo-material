/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')
const { withAxiom } = require('next-axiom')

const nextConfig = {
  i18n,
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['s3.bmp.ovh', 'imgse.com']
  }
}

module.exports = withAxiom(nextConfig)
