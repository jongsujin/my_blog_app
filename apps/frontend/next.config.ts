import type { NextConfig } from 'next'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({
  dest: 'public',
})
const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@my-blog/types'],
  output: 'standalone',
  distDir: '.next',
}

export default withPWA(nextConfig)
