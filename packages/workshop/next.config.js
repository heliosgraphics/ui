/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  productionBrowserSourceMaps: false,
  reactStrictMode: false,
  transpilePackages: [
    '@heliosgraphics/ui',
    '@heliosgraphics/icons',
    '@heliosgraphics/utils'
  ],
  webpack: (config, _options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config
  },
};

module.exports = nextConfig
