import NextImage, { ImageLoaderProps, ImageProps as NextImageProps } from "next/image";
import utilStyles from "../styles/utils.module.css";

interface ImageProps extends NextImageProps {
	circle?: boolean;
}

const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
	// Generate a reasonably unique base folder. Doesn't have to be perfectly unique,
	const [path, extension] = src.split(/\.([^.]*$)/) || [];
	// We cannot optimise SVGs via jimp
	if (extension === "svg") throw new Error(`SVGs are not supported!`);

	// Do not bother to optimize images in development
	if (process.env.NODE_ENV === "development") {
		return `${src}?width=${width}`;
	}

	if (!path || !extension) {
		throw new Error(`Invalid path or no file extension: ${src}`);
	}

	const filename = path.match(/([^\/]+)$/)?.[1] || "";

	const output = `/_optimized${path}/${filename}_${width}_${quality || 75}.${extension}`;

	if (typeof window === "undefined") {
		const json = { output, src, width, quality: quality || 75 };
		const fs = require("fs");
		const path = require("path");
		fs.appendFileSync(
			path.join(process.env.DIRNAME, ".next/custom-optimised-images.nd.json"),
			JSON.stringify(json) + "\n"
		);
	}

	return output;
};

const Image = (props: ImageProps) => {
	let _className = "";
	if (props.circle) _className = utilStyles.borderCircle;

	return <NextImage className={`${props.className} ${_className}`} {...props} loader={customLoader} />;
};

export default Image;
