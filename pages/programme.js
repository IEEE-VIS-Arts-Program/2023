import PageTemplate from "../components/PageTemplate/PageTemplate";
import programmeData from "../data/programme.json";
import contributionsData from "../data/contributions.json";
import { groups as d3Groups } from "d3";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt as LocalIcon } from "react-icons/fa";
import { BiWorld as RemoteIcon } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa6";
import Link from "next/link";
import styles from "../styles/Programme.module.scss";
import { BsArrowLeftCircle as LeftIcon, BsArrowRightCircle as RightIcon } from "react-icons/bs";

export default function Programme() {
	const [programme, setProgramme] = useState([]);
	useEffect(() => {
		const dataWithSlug = programmeData.map((d) => {
			const contribution = contributionsData.find((c) => c["Contribution ID"].toString() === d.pc_id.toString());
			d.contribution_slug = convertToSlug(contribution["Title"]);
			return d;
		});
		const temp = d3Groups(dataWithSlug, (d) => d.session_name);
		setProgramme(temp);
	}, []);
	return (
		<PageTemplate metaTitle="Programme">
			<h1 className={classNames("page-title")}>Programme</h1>
			<p>
				VISAP 2023 takes place in Melbourne (Vic), Australia.
				<br />
				Presenters (TBA) are identified by an asterisk (*).
			</p>
			{programme.map((session) => (
				<div key={session[0]} className={classNames(styles.session, "p-3", "my-4")}>
					<h3 className={classNames("m-0", "mb-3")}>{session[0]}</h3>
					<p className={classNames(styles.sessionInfo, "my-3")}>
						<RemoteIcon />
						{session[1][0].session_date} — {session[1][0].session_time}
						<br />
						<LocalIcon /> {session[1][0].session_location}
						<br />
						<FaMicrophone />
						Hosted by {session[1][0].session_hosts}
					</p>
					{session[1].map((presentation, i) => (
						<div key={i} className={classNames("my-3")}>
							<h6 className={classNames(styles.presentationTitle)}>
								{presentation.title}{" "}
								<Link href={"contributions/" + presentation.contribution_slug}>
									<RightIcon className="react-icons" />
								</Link>
							</h6>
							<p>{presentation.authors}</p>
						</div>
					))}
				</div>
			))}
		</PageTemplate>
	);
}

export function convertToSlug(Text) {
	return Text.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
}
