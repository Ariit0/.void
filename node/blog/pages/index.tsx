import Link from "next/link";
import { getAllPosts } from "../utils/mdx";
import { Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import Layout, { siteTitle } from "../components/Layout/Layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { Divider } from "@chakra-ui/react";
import format from "date-fns/format";

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

			<Heading>✍️ All latest Posts</Heading>
			<UnorderedList>
				{posts.map((post, index) => (
					<ListItem key={index}>
						<Flex style={{ flexDirection: "column" }}>
							<Link href={`posts/${post.slug}`}>{post.frontmatter.title}</Link>
							<Link href={`posts/${post.slug}`}>
								{format(new Date(post.frontmatter.publishedOn), "PPP")}
							</Link>
						</Flex>
					</ListItem>
				))}
			</UnorderedList>
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
