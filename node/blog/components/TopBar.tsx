import { Button, HStack } from "@chakra-ui/react";
import Link from "./Link";

export const TopBar = () => {
	let menuOptions = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "/about" }
		// { label: "Playground", url: "/playground" }
	];

	return (
		<HStack padding={"12px"} justifyContent={"center"}>
			{menuOptions.map((opt, index) => {
				return (
					<Link key={`${index}_navBtn`} href={opt.url}>
						<Button variant={"link"}>{opt.label}</Button>
					</Link>
				);
			})}
		</HStack>
	);
};
