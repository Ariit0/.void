import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../utils/mdx";
import Layout from "../../components/Layout/Layout";

const Post = ({ code, frontmatter }: Post) => {
	const Component = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<Layout>
			<Component />
		</Layout>
	);
};

export const getStaticProps = async ({ params }: any) => {
	const post = await getSinglePost(params.slug);
	return {
		props: { ...post }
	};
};

export const getStaticPaths = async () => {
	const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
	return {
		paths,
		fallback: false
	};
};

export default Post;
