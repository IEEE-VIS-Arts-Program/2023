import styles from "./Footer.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import previousEditions from "./previous-editions.json";
import logoVis from "../../public/images/logo-vis.svg";
import logoTwitter from "../../public/images/logo-twitter dark.png";

import classNames from "classnames";
import Link from "next/link";

import ExportedImage from "next-image-export-optimizer";

export default function Footer() {
	const hostName = "https://visap.net";
	previousEditions.map((d) => {
		d.fullUrl = d.url.includes("https://") ? d.url : hostName + d.url;
	});
	return (
		<Container className={classNames(styles.footer, "pt-4")} fluid>
			<Container>
				<Row>
					<Col xs={12} md={4} lg={3} xl={3} className={classNames("mb-5")}>
						<div className={classNames("")}>
							<h6 className={classNames("mb-3")}>IEEE VISAP 2023</h6>
							<div className={classNames(styles.navigation, "mb-3")}>
								<Link href="/">Home</Link>
								<Link href="/call-for-entries">Call for Entries</Link>
								<Link href="/submission">Submission instructions</Link>
								<Link href="/contributions">Contributions</Link>
								{/* <Link href="/programme">Programme</Link> */}
								<Link href="/organizers">Organizers</Link>
							</div>
						</div>
					</Col>
					<Col xs={12} md={4} lg={4} xl={6} className={classNames("mb-5")}>
						{/* <h6 className={classNames("mb-3")}>Supporters</h6>
						<p>TBA</p>
						<div className="logos mb-3">
							<a className="logo" href="https://www.autodesk.com/" target="_blank" rel="noreferrer">
								<ExportedImage src={logoAutodesk} alt="Autodesk Logo" layout="fill" objectFit="contain" objectPosition="left center" />
							</a>
						</div>
						<div className="logos mb-3">
							<a className="logo" href="https://www.uvic.ca/ecs/computerscience" target="_blank" rel="noreferrer">
								<ExportedImage
									src={logoUniVictoria}
									alt="Logo of Department of computer science, University of Victoria"
									layout="fill"
									objectFit="contain"
									objectPosition="left center"
								/>
							</a>
						</div>
						<div className="logos mb-3">
							<a className="logo" href="https://www.ou.edu/finearts/visual-arts" target="_blank" rel="noreferrer">
								<ExportedImage
									src={logoSchoolVisualArts}
									alt="Logo of School of Visual Arts, University of Oklahoma"
									layout="fill"
									objectFit="contain"
									objectPosition="left center"
								/>
							</a>
						</div>
						<div className="logos mb-3">
							<a className="logo" href="http://ieeevis.org/year/2022/welcome" target="_blank" rel="noreferrer">
								<ExportedImage src={logoIEEE} alt="Logo of IEEE" layout="fill" objectFit="contain" objectPosition="left center" />
							</a>
						</div>
						<div className="logos mb-3">
							<a className="logo" href="https://creativeinformatics.org/" target="_blank" rel="noreferrer">
								<ExportedImage
									src={logoCreativeInformatics}
									alt="Logo of Creative Informatics"
									layout="fill"
									objectFit="contain"
									objectPosition="left center"
								/>
							</a>
						</div> */}
					</Col>
					<Col xs={12} md={4} lg={3} xl={3} className={classNames("mb-5")}>
						<h6 className={classNames("mb-3")}>Previous editions</h6>
						<p>
							{previousEditions.map((d, i) => (
								<span key={d.label}>
									<a href={d.fullUrl} className={classNames("")}>
										{d.label}
									</a>
									{i < previousEditions.length - 1 && <>, </>}
								</span>
							))}
						</p>
						<p><a href="mailto:art@ieeevis.org">art@ieeevis.org</a></p>
						<div className={classNames("mt-2")}>
							<a
								href="http://ieeevis.org/year/2023/welcome"
								target="_blank"
								rel="noreferrer"
								style={{ display: "inline-block", width: "2rem" }}
								className={classNames("me-2")}
							>
								<ExportedImage
									src={logoVis.src}
									layout="responsive"
									width={logoVis.width}
									height={logoVis.height}
									alt="IEEE VIS logo"
								/>
							</a>
							<a
								href="https://twitter.com/visapnet"
								target="_blank"
								rel="noreferrer"
								style={{ display: "inline-block", width: "2rem" }}
							>
								<ExportedImage
									src={logoTwitter.src}
									width={logoTwitter.width}
									height={logoTwitter.height}
									layout="responsive"
									alt="Twitter logo"
								/>
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
