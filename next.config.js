/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow importing components from parent directory
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/main': '../src',
    };
    return config;
  },
};

export default nextConfig;