import { useColorMode, IconButton, Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { isDarkMode, setIsDarkMode } from "../store/slices/interfaceSlice";

const DarkModeSwitch = () => {
	const dispatch = useAppDispatch();
	const darkMode = useAppSelector(isDarkMode);

	const { colorMode, toggleColorMode } = useColorMode();

	useEffect(() => {
		if (colorMode === "light" && darkMode) {
			toggleColorMode();
		} else if (colorMode === "dark" && !darkMode) {
			toggleColorMode();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [darkMode]);

	const handleOnClick = () => {
		dispatch(setIsDarkMode(!darkMode));
	};

	return (
		<IconButton
			position="fixed"
			top={4}
			right={4}
			icon={darkMode ? <Icon as={FaSun} /> : <Icon as={FaMoon} />}
			aria-label="Toggle Theme"
			onClick={handleOnClick}
		/>
	);
};

export default DarkModeSwitch;
