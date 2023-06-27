import styles from "./Dates.module.scss";
import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

export default function Dates() {
	return (
		<>
			<Row>
				<Col xs={12} md={6}>
					<p className={classNames("mb-1", "fw-bold")}>Call opening:</p>
				</Col>
				<Col xs={12} md={6}>
					<p>April, 2023</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={6}>
					<p className={classNames("mb-1", "fw-bold")}>Submissions deadline:</p>
				</Col>
				<Col xs={12} md={6}>
					<p><del>June 2, 2023</del> June 6, 2023</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={6}>
					<p className={classNames("mb-1", "fw-bold")}>Acceptance notifications:</p>
				</Col>
				<Col xs={12} md={6}>
					<p>July 14, 2023</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={6}>
					<p className={classNames("mb-1", "fw-bold")}>Camera ready deadline:</p>
				</Col>
				<Col xs={12} md={6}>
					<p>August 14, 2023</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={6}>
					<p className={classNames("mb-1", "fw-bold")}>Exhibition materials submission:</p>
				</Col>
				<Col xs={12} md={6}>
					<p>August 14, 2023</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={6}>
					<p className={classNames("mb-1", "fw-bold")}>VISAP exhibition</p>
				</Col>
				<Col xs={12} md={6}>
					<p>
						Wednesday 4 October - Sunday 29 October 2023 <br/>
						<a href="https://www.melbourne.vic.gov.au/community/hubs-bookable-spaces/the-dock/library-at-the-dock/Pages/library-at-the-dock.aspx">
							Library at the Doc Gallery
						</a>
					</p>
				</Col>
			</Row>
			<Row>
				<p className={classNames("mt-2", "mb-3")}>
					All submissions are due by June 2, 2023; 11:59pm (23:59){" "}
					<a href="https://time.is/Anywhere_on_Earth">Anywhere On Earth (AOE)</a>, using the{" "}
					<a href="https://new.precisionconference.com/submissions">Precision Conference System (PCS)</a>. Please see
					the <Link href="/call-for-entries">Call for Entries</Link> for more details on how to submit a paper,
					pictorial or artwork.
				</p>
			</Row>
		</>
	);
}
