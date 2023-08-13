/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  optimizeFonts: true,

  swcMinify: true,

  compiler: {
    styledComponents: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: { esmExternals: true },

  // images: {
  //   domains: [process.env.SERVER_HOSTNAME],
  // },

  output: "standalone",

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
  },
};

module.exports = nextConfig;
