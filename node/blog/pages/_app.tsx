import "../styles/globals.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { TopBar } from "../components/TopBar";
import { Provider } from "react-redux";
import store from "../store/store";
import { BaseTheme } from "../styles/themes";
import { useAppSelector } from "../store/hooks/hooks";
import { isDarkMode } from "../store/slices/interfaceSlice";
import React from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const darkMode = useAppSelector(isDarkMode);

	return (
		<ColorModeProvider
			options={{
				initialColorMode: darkMode ? "dark" : "light",
				useSystemColorMode: false
			}}
		>
			<ChakraProvider theme={BaseTheme}>{children}</ChakraProvider>
		</ColorModeProvider>
	);
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<TopBar />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	);
};

export default MyApp;
