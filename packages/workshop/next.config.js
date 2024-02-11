/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	productionBrowserSourceMaps: false,
	reactStrictMode: false,
	transpilePackages: ["@heliosgraphics/ui"]
}

module.exports = nextConfig
