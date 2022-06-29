import { useColorMode, IconButton, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useAppDispatch } from "../store/hooks/hooks";
import { setIsDarkMode } from "../store/slices/interfaceSlice";

const DarkModeSwitch = () => {
	const dispatch = useAppDispatch();
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";

	// useEffect(() => {
	// 	if (localStorage.getItem("chakra-ui-color-mode") === "light" && colorMode === "dark") {
	// 		setTimeout(() => toggleColorMode(), 1000);
	// 	} else if (localStorage.getItem("chakra-ui-color-mode") === "dark" && colorMode === "light") {
	// 		setTimeout(() => toggleColorMode(), 1000);
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	// TODO: need a way to persist selected theme (on refresh), currently chakrai uis current apis dont work.........
	const handleOnClick = () => {
		// dispatch(setIsDarkMode(isDark));
		toggleColorMode();
	};

	return (
		<IconButton
			position="fixed"
			top={4}
			right={4}
			icon={isDark ? <Icon as={FaSun} /> : <Icon as={FaMoon} />}
			aria-label="Toggle Theme"
			onClick={handleOnClick}
		/>
	);
};

export default DarkModeSwitch;
