/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'rest-vanna.ru' },
    ],
  },
};

export default nextConfig;