import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";
import utilStyles from "../styles/utils.module.css";

interface ImageProps extends ExportedImageProps {
	circle?: boolean;
}

const Image = (props: ImageProps) => {
	let { circle, src, ...rest } = props;
	let _className = "";
	if (circle) _className = utilStyles.borderCircle;

	return <ExportedImage className={`${props.className} ${_className}`} src={src} {...rest} />;
};

export default Image;
