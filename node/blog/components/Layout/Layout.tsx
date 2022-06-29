import Head from "next/head";
import Link from "../Link";
import styles from "./Layout.module.css";
import Image from "../Image";
import utilStyles from "../../styles/utils.module.css";
import DarkModeSwitch from "../DarkModeSwitch";

interface LayoutProps {
	children: React.ReactNode;
	home?: boolean;
}

const name = "Ariito";
export const siteTitle = "Ariito";

/**
 * Shared across all pages
 * @returns {JSX.Element} Wrapper component
 */
const Layout = ({ children, home }: LayoutProps): JSX.Element => {
	const renderBlogLayout = () => {
		return (
			<>
				<Link href="/">
					<a>
						<Image priority src="images/profile.png" circle height={108} width={108} alt={name} />
					</a>
				</Link>
				<h2 className={utilStyles.headingLg}>
					<Link href="/">
						<a className={utilStyles.colorInherit}>{name}</a>
					</Link>
				</h2>
			</>
		);
	};

	const renderHomeLayout = () => {
		return (
			<>
				<Image priority src="images/profile.png" circle height={144} width={144} alt={name} />
				<h1 className={utilStyles.heading2Xl}>{name}</h1>
			</>
		);
	};

	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="og:title" content={siteTitle} />
			</Head>
			<DarkModeSwitch />
			<header className={styles.header}>{home ? renderHomeLayout() : renderBlogLayout()}</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back</a>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Layout;
