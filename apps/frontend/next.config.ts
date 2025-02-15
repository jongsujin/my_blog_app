import type { NextConfig } from 'next'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({
  dest: 'public',
})
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ['@my-blog/types'],
  output: 'standalone',
}

export default withPWA(nextConfig)
