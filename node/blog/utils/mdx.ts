import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { PluggableList } from "unified";

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), "content/posts");

/**
 * Synchronously reads the entire contents of a file
 * @param filename
 * @returns
 */
export const getFileContent = (filename: string) => {
	return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

/**
 * Documentation: https://github.com/kentcdodds/mdx-bundler
 * @param content
 * @returns
 */
const getCompiledMDX = async (content: string) => {
	// Next.JS esbuild ENOENT Issue
	if (process.platform === "win32") {
		process.env.ESBUILD_BINARY_PATH = path.join(ROOT, "node_modules", "esbuild", "esbuild.exe");
	} else {
		process.env.ESBUILD_BINARY_PATH = path.join(ROOT, "node_modules", "esbuild", "bin", "esbuild");
	}
	// Add your remark and rehype plugins here
	const remarkPlugins: PluggableList = [];
	const rehypePlugins: PluggableList = [];

	try {
		return await bundleMDX({
			source: content,
			mdxOptions(options, frontmatter) {
				// this is the recommended way to add custom remark/rehype plugins:
				// The syntax might look weird, but it protects you in case we add/remove
				// plugins in the future.
				options.remarkPlugins = [...(options.remarkPlugins ?? []), ...remarkPlugins];
				options.rehypePlugins = [...(options.rehypePlugins ?? []), ...rehypePlugins];

				return options;
			}
		});
	} catch (error: any) {
		throw new Error(error);
	}
};

/**
 * Parses markdown file and returns content to be consumed via props
 * @param slug
 * @returns
 */
export const getSinglePost = async (slug: string): Promise<Post> => {
	const source = getFileContent(`${slug}.mdx`);
	const { code, frontmatter } = await getCompiledMDX(source);

	return {
		code: code,
		frontmatter: frontmatter as FrontMatter
	};
};

export const getAllPosts = (): AllPosts[] => {
	return fs
		.readdirSync(POSTS_PATH)
		.filter((path) => /\.mdx?$/.test(path))
		.map((fileName) => {
			const source = getFileContent(fileName);
			const slug = fileName.replace(/\.mdx?$/, "");
			const { data } = matter(source);

			return {
				code: source,
				frontmatter: data as FrontMatter,
				slug: slug
			};
		});
};
