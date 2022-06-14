import { Badge, Box, Heading, Text, BoxProps, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Link from "./Link";

interface BlogCardProps extends BoxProps {
	title: string;
	description: string;
	tags?: string[];
	href?: string;
}

const BlogCard = ({ title, description, tags, href, ...rest }: BlogCardProps) => {
	const renderCard = () => {
		return (
			<Box _hover={{ bg: "hover" }} p={5} shadow="md" borderWidth="1px" borderRadius="lg" {...rest}>
				<VStack alignItems={"flex-start"}>
					<Heading fontSize="xl">{title}</Heading>
					<Text mt={4}>{description}</Text>
					<HStack spacing={"6px"}>
						{tags?.map((tag, index) => {
							return (
								<Badge borderRadius="full" px="2" colorScheme="teal" key={`${index}_tag`}>
									{tag}
								</Badge>
							);
						})}
					</HStack>
				</VStack>
			</Box>
		);
	};

	return href ? <Link href={href}>{renderCard()}</Link> : renderCard();
};

export default BlogCard;
