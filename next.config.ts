import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // Enable importing SVG images as React _components
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

// Enable internationalization
const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
