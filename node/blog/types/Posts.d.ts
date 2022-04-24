interface Post {
	/**
	 * The bundle of the mdx as a string
	 */
	code: string;
	/**
	 * The frontmatter fields defined in the mdx
	 */
	frontmatter: FrontMatter;
}

interface AllPosts extends Post {
	slug: string;
}

/**
 * Metadata of the page
 */
interface FrontMatter {
	title: string;
	isPublished: boolean;
	publishedOn: Date;
	layout: "Article" | string;
	tags: string[];
}
