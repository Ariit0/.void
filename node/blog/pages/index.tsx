import { getAllPosts } from "../utils/mdx";
import { Box, Heading, HStack, Icon, IconButton, VStack } from "@chakra-ui/react";
import Layout, { siteTitle } from "../components/Layout/Layout";
import Head from "next/head";
import { Divider } from "@chakra-ui/react";
import BlogCard from "../components/BlogCard";
import { FaLinkedin, FaYoutube, FaTwitch, FaGithub } from "react-icons/fa";
import Link from "../components/Link";

const Home: React.FC<{ posts: AllPosts[] }> = ({ posts }) => {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<VStack>
				<Box as="section" color="gray.600" fontSize="sm">
					<p>Software Developer.</p>
					<p> A jack of all trades is a master of none, but oftentimes better than a master of one.</p>
				</Box>
				<Box>
					<HStack justifyContent={"center"}>
						<Link href={"https://github.com/Ariit0"}>
							<a target="_blank">
								<IconButton
									variant={"link"}
									aria-label="Github"
									icon={<Icon as={FaGithub} color="gray.600" w={6} h={6} />}
								/>
							</a>
						</Link>
						<Link href={"https://au.linkedin.com/in/ariluangamath"}>
							<a target="_blank">
								<IconButton
									variant={"link"}
									aria-label="LinkedIn"
									icon={<Icon as={FaLinkedin} color="gray.600" w={6} h={6} />}
								/>
							</a>
						</Link>
						<Link href={"https://www.youtube.com/c/Ariito"}>
							<a target="_blank">
								<IconButton
									variant={"link"}
									aria-label="YouTube"
									icon={<Icon as={FaYoutube} color="gray.600" w={6} h={6} />}
								/>
							</a>
						</Link>
						<Link href={"https://www.twitch.tv/ariit0"}>
							<a target="_blank">
								<IconButton
									variant={"link"}
									aria-label="Twitch"
									icon={<Icon as={FaTwitch} color="gray.600" w={6} h={6} />}
								/>
							</a>
						</Link>
					</HStack>
				</Box>
			</VStack>
			<Divider paddingTop={2} />
			<br />

			<VStack spacing={"12px"} align={"stretch"}>
				<Heading>✍️ All latest Posts</Heading>
				{posts.map((post, index) => (
					<BlogCard
						key={`${index}_blogCard`}
						href={`posts/${post.slug}`}
						title={post.frontmatter.title}
						description={post.frontmatter.description}
						tags={post.frontmatter.tags}
					/>
				))}
			</VStack>
		</Layout>
	);
};

/**
 * Executed on the server-side. Runs at build time.
 * Never runs on the client-side and not included in the JS bundle for the browser
 * @returns
 */
export const getStaticProps = async () => {
	const posts = getAllPosts();

	return {
		props: { posts }
	};
};

export default Home;
