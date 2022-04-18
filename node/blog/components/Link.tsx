import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { UrlObject } from "url";
import { ReactNode } from "react";

declare type Url = string | UrlObject;

interface LinkProps {
	href: Url;
	text?: string;
	children?: ReactNode;
}

/**
 * Link component using Next.js routing
 * @returns
 */
const Link = ({ href, text, children }: LinkProps): JSX.Element => {
	let _children: ReactNode = children;

	if (text) _children = <ChakraLink color={"teal.500"}>{text}</ChakraLink>;

	if (!_children) throw new Error("Either text or children prop is required");

	return (
		<NextLink href={href} passHref>
			{_children}
		</NextLink>
	);
};

export default Link;
