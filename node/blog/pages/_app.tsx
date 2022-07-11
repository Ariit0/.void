import "../styles/globals.css";
import { ChakraProvider, ColorModeProvider, Spinner } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { TopBar } from "../components/TopBar";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";
import { theme } from "../styles/themes";
import { useAppSelector } from "../store/hooks/hooks";
import { isDarkMode } from "../store/slices/interfaceSlice";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";

/**
 * Provides context for the color mode based on config in theme Returns the color mode and function to toggle the color mode
 */
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const darkMode = useAppSelector(isDarkMode);

	return (
		<ColorModeProvider
			options={{
				initialColorMode: darkMode ? "dark" : "light",
				useSystemColorMode: false
			}}
		>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</ColorModeProvider>
	);
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<PersistGate loading={<Spinner size="xl" />} persistor={persistor}>
				<ThemeProvider>
					<TopBar />
					<Component {...pageProps} />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
};

export default MyApp;
