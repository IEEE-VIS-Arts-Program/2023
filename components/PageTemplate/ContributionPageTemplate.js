import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./PageTemplate.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import classNames from "classnames";

export default function ContributionPageTemplate({ metaTitle, metaContent, children, submenu }) {
	return (
		<>
			<Head>
				<title>{metaTitle + " | VISAP 2023"}</title>
				<meta name="description" content={metaContent} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</>
	);
}

ContributionPageTemplate.defaultProps = {
	submenu: [],
	metaContent:
		"The VIS Arts Program (VISAP) is a mini-conference and exhibition where visualization researchers, designers, and artists come together to discuss works at the intersection of data visualization, art and design.",
};
