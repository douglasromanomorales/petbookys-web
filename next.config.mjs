// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  images: {
    domains: ['api.dicebear.com', 'ui-avatars.com'],
  },
}

export default nextConfig
