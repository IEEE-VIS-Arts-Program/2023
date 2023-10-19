import styles from "./Footer.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import previousEditions from "./previous-editions.json";
import logoVis from "../../public/images/logo-vis.svg";
import logoMastodon from "../../public/images/logo-mastodon.svg";
import logoTwitter from "../../public/images/logo-twitter-dark.png";

import classNames from "classnames";
import Link from "next/link";

import ExportedImage from "next-image-export-optimizer";

export default function Footer() {
	const hostName = "https://visap.net";
	previousEditions.map((d) => {
		d.fullUrl = d.url.includes("https://") ? d.url : hostName + d.url;
	});
	return (
		<Container className={classNames(styles.footer, "pt-5", "pb-4")} fluid>
			<Container className="pt-3">
				<Row>
					<Col xs={12} md={4} lg={4} xl={4} className={classNames("mb-5")}>
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

					<Col xs={12} md={4} lg={4} xl={4} className={classNames("mb-5")}>
						<h6 className={classNames("mb-3")}>Contacts</h6>
						<p>
							Email: <a href="mailto:art@ieeevis.org">art@ieeevis.org</a>
							<br />
							Twitter: <a href="https://twitter.com/visapnet">@visapnet</a>
							<br />
							Mastodon: <a href="https://vis.social/@visap">@visap@vis.social</a>
						</p>
						<div className={classNames("mt-3")}>
							<a
								href="http://ieeevis.org/year/2023/welcome"
								target="_blank"
								rel="noreferrer"
								style={{ display: "inline-block", width: "2rem", height: "2rem", position: "relative" }}
								className={classNames("me-2")}
							>
								<ExportedImage src={logoVis.src} fill={true} sizes="128px" style={{ objectFit: "contain" }} alt="IEEE VIS logo" />
							</a>
							<a
								href="https://twitter.com/visapnet"
								target="_blank"
								rel="noreferrer"
								style={{ display: "inline-block", width: "2rem", height: "2rem", position: "relative" }}
								className={classNames("me-2")}
							>
								<ExportedImage src={logoTwitter.src} fill={true} sizes="128px" style={{ objectFit: "contain" }} alt="Twitter logo" />
							</a>
							<a
								href="https://vis.social/@visap"
								target="_blank"
								rel="noreferrer"
								style={{ display: "inline-block", width: "2rem", height: "2rem", position: "relative" }}
								className={classNames("me-2")}
							>
								<ExportedImage src={logoMastodon.src} fill={true} sizes="128px" style={{ objectFit: "contain" }} alt="Twitter logo" />
							</a>
						</div>
					</Col>

					<Col xs={12} md={4} lg={4} xl={4} className={classNames("mb-5")}>
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
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
