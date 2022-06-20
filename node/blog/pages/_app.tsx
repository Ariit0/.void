import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { TopBar } from "../components/TopBar";

const BaseTheme = extendTheme({
	semanticTokens: {
		colors: {
			error: "red.500",
			text: {
				default: "gray.900",
				_dark: "gray.50"
			},
			hover: {
				default: "gray.100"
			}
		}
	}
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={BaseTheme}>
			<TopBar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
