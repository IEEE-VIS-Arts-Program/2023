import styles from "./Dates.module.scss";
import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";

export default function Dates() {
	return (
		<>
			<Row>
				<Col xs={12} md={4}>
					<p className={classNames("mb-sm-0", "fw-bold")}>Call opening:</p>
				</Col>
				<Col xs={12} md={4}>
					<p>April, 2023</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={4}>
					<p className={classNames("mb-sm-0", "fw-bold")}>Submissions deadline:</p>
				</Col>
				<Col xs={12} md={4}>
					<p>June 2, 2022</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={4}>
					<p className={classNames("mb-sm-0", "fw-bold")}>Acceptance notifications:</p>
				</Col>
				<Col xs={12} md={4}>
					<p>July 14, 2022</p>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={4}>
					<p className={classNames("mb-sm-0", "fw-bold")}>Camera ready deadline:</p>
				</Col>
				<Col xs={12} md={4}>
					<p>August 14, 2022</p>
				</Col>
			</Row>
			<Row>
				<p>
					All submissions are due by June 2, 2022{" "}
					<a href="https://www.worldtimeserver.com/time-zones/aoe/#:~:text=The%20current%20time%20and%20date%20right%20now&text=Anywhere%20on%20Earth%20or%20AoE,offset%20of%20%2D%2012%3A00">
						AOE
					</a>
					, using the Precision Conference System (PCS) (the system will open for submissions mid April).
				</p>
			</Row>
		</>
	);
}
