/**
 * Rendered only on the server - overrides the default `Document`
 * https://nextjs.org/docs/advanced-features/custom-document
 */
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
