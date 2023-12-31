/** @type {import('next').NextConfig} */
module.exports = {
  optimizeFonts: true,

  swcMinify: true,

  reactStrictMode: true,

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

    return config;
  },
};
