import Link from "next/link";
import { getAllPosts } from "../utils/mdx";
import Image from "../components/Image";
import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import Layout, { siteTitle } from "../components/Layout/Layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { Divider } from "@chakra-ui/react";

export type Frontmatter = {
	slug: string;
	title: string;
	description: string;
};

type Post = {
	code: string;
	slug: string;
	frontmatter: Frontmatter;
};
const Home: React.FC<{ posts: Post[] }> = ({ posts }) => {
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
						<Link href={`posts/${post.slug}`}>{post.frontmatter.title}</Link>
					</ListItem>
				))}
			</UnorderedList>
		</Layout>
	);
};

export const getStaticProps = async () => {
	const posts = getAllPosts();

	return {
		props: { posts }
	};
};

export default Home;
