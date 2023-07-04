import styles from "../styles/Home.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import classNames from "classnames";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import ExportedImage from "next-image-export-optimizer";
import FlowingLogo from "../components/FlowingLogo/FlowingLogo";
import GalleryHome from "../components/GalleryHome";
import Dates from "../components/Dates";
import ExportedImage from "next-image-export-optimizer";
import logoMonashUni from "../public/images/logo-monash-university.png";
import logoSMU from "../public/images/logo-smu.png";

export default function Home() {
	return (
		<>
			<Head>
				<title>VISAP 2023</title>
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
						<FlowingLogo />
						<h2 className={classNames("mt-4", "mb-1")}>IEEE VISAP 2023 - Perpetual Presence</h2>
						<h6 className={classNames("mb-5")}>
							04—29 October 2023, Library at the Dock Gallery
							<br />
							Melbourne (VIC), Australia
						</h6>
						<p>
							The <a href="https://visap.net">VIS Arts Program (VISAP)</a> is a mini-conference and exhibition in the{" "}
							<a href="https://ieeevis.org/year/2023/welcome">IEEE VIS conference</a> program where visualization
							researchers, designers, and artists come together to showcase and discuss works at the intersection of
							data visualization, art and design. It links artists, practitioners, data scientists, and theoreticians,
							in order to foster discussion and collaboration between fields of research and practice.
						</p>
						<p>
							<strong>
								The theme for IEEE VISAP 2023 is <i>Perpetual Presence</i>.
							</strong>{" "}
							Data is all around us, a perpetual and ubiquitous digital stream of meaning that permeates throughout the
							ambient informatic which backgrounds our societies. <i>Perpetual Presence</i> acknowledges the
							transformative potential of data as influencing cultural, economical and political landscapes. If
							‘presence’ is a state of being, of becoming, and of responding to the intersectionality of realities, then{" "}
							<i>Perpetual Presence</i> is an aesthetic in which data abundantly flourishes in ways that extend our
							understanding of the world.
						</p>
						<p>
							VISAP’23 invites research papers, pictorials, and artwork submissions for presentation in two interrelated
							tracks during the conference and exhibition in October 2023. We seek original work examining new
							aesthetics and critical cultures at the intersection of art, science and technology that respond to the
							theme of perpetual presence.
						</p>
						<p>
							VISAP will be an in-person only event in 2023, in line with the broader IEEE VIS Conference. There will be
							an opportunity to connect with the VISAP and local artistic community via talks and/or workshops. As such,
							presenting artists are expected to attend in person and actively contribute to discussions. We understand
							this arrangement may not be suitable for some, and will review alternative arrangements.
						</p>
						<p>
							Accepted works will be published on the official VISAP website and in a dedicated exhibition catalogue.
							Papers and pictorials will be indexed in the IEEE Xplore digital library.
						</p>
						<h3>Important Dates</h3>
						<Dates />
						<h5 className={classNames("mt-4")}>Some works from VISAP 2022</h5>
						<GalleryHome className={classNames("mt-2", "mb-4")} />
						<h3>Supporters</h3>
						<p>VISAP 2023 is possible thanks to the support of:</p>
						<Container className="mb-3">
							<Row>
								<Col xs={10} md={6} className={classNames(styles.logo, "mb-4 py-2 rounded")}>
									<a className="logo" href="https://www.monash.edu/" target="_blank" rel="noreferrer">
										<ExportedImage src={logoMonashUni} alt="Logo of Monash University" layout="responsive" />
									</a>
								</Col>
							</Row>
							<Row>
								<Col xs={8} md={3} className={classNames(styles.logo, "mb-4 p-4 rounded")}>
									<a className="logo" href="https://smallmultiples.com.au/" target="_blank" rel="noreferrer">
										<ExportedImage src={logoSMU} alt="Logo of Small Multiple Studio" layout="responsive" />
									</a>
								</Col>
							</Row>
						</Container>
						https://www.monash.edu/
						<p>
							Contact: <a href="mailto:art@ieeevis.org">art@ieeevis.org</a>{" "}
						</p>
						<p>
							Twitter: <a href="https://twitter.com/visapnet">@visapnet</a>
						</p>
						<p>
							Mastodon: <a href="https://vis.social/@visap">@visap@vis.social</a>
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
