import { getAllPosts } from "../utils/mdx";
import { Heading, VStack } from "@chakra-ui/react";
import Layout, { siteTitle } from "../components/Layout/Layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { Divider } from "@chakra-ui/react";
import BlogCard from "../components/BlogCard";

const Home: React.FC<{ posts: AllPosts[] }> = ({ posts }) => {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hello World. Software Developer.</p>
			</section>
			<br />
			<Divider />
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
