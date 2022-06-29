/**
 * Using Chakra UI colour definitions, we define the semantic tokens only
 */
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false
};

export const BaseTheme = extendTheme({
	config,
	semanticTokens: {
		colors: {
			error: "red.500",
			success: "green.500",
			text: {
				default: "gray.900"
			},
			hover: {
				default: "blackAlpha.100",
				_dark: "blackAlpha.300"
			}
		}
	}
});
