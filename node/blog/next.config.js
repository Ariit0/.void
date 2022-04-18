/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		DIRNAME: __dirname
	},
	images: {
		loader: "custom"
	}
};

module.exports = nextConfig;