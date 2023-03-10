import styles from "../styles/Home.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import classNames from "classnames";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExportedImage from "next-image-export-optimizer";
import FlowingLogo from "../components/FlowingLogo/FlowingLogo";

export default function Home() {
	return (
		<>
			<Head>
				<title>VISAP23</title>
				<meta
					name="description"
					content={
						"VISAP is a mini-conference and exhibition that showcases and discusses works at the intersection of data visualization, art and design."
					}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Container>
				<Row>
					<Col
						sm={{ span: 12, offset: 0 }}
						md={{ span: 10, offset: 1 }}
						lg={{ span: 8, offset: 2 }}
						xl={{ span: 8, offset: 2 }}
						className={classNames("mb-5")}
					>
						<FlowingLogo className={classNames("mb-3")} />
						<h4 className={classNames("mb-3")}>Melbourne (VIC), Australia, October 2023</h4>
						<h5 className={classNames("mt-4")}>
							The theme for VISAP’23 is <strong>Perpetual Presence</strong>
						</h5>
						<p>
							The VIS Arts Program (VISAP) is a mini-conference and exhibition where visualization researchers,
							designers, and artists come together to showcase and discuss works at the intersection of data
							visualization, art and design. It is the biggest associated event in the{" "}
							<a href="http://ieeevis.org/year/2022/welcome">IEEE VIS conference</a>, and its main goal is to foster new
							thinking, discussion, and collaboration across and between fields of research and practice.
						</p>
						<p>
							VISAP welcomes a wide range of submissions, including interactive artworks, design projects, novel
							visualization tools and applications, art-science or artist-in-lab projects, critical interpretations and
							evaluations of data visualizations, and philosophical meditations on the intersections between art and
							research. These can either be submitted to a paper track, or to an exhibition track (see details below).
						</p>
						<p>ADD IMAGES OF LAST YEAR CONTRIBUTIONS</p>
						
					</Col>
				</Row>
			</Container>
			{/* <Footer /> */}
		</>
	);
}
