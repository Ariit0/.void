/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: "custom",
		imageSizes: [64, 128, 256, 384],
		deviceSizes: [1080, 1920, 2048, 3840],
		nextImageExportOptimizer: {
		  imageFolderPath: "public/images",
		  exportFolderPath: "out",
		  quality: 75,
		},
	},
	env: {
		storePicturesInWEBP: true,
		generateAndUseBlurImages: true,
	},
};

module.exports = nextConfig;