import PageTemplate from "../components/PageTemplate/PageTemplate";
import Dates from "../components/Dates";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Submission() {
	const [sections, setSections] = useState();
	useEffect(() => {
		let _sections = Array.from(document.querySelectorAll("h3")).filter((d) =>
			d.hasAttribute("id")
		);
		setSections(
			_sections.map((d) => ({
				innerText: d.innerText,
				id: d.attributes.id.nodeValue,
			}))
		);
	}, []);
	return (
		<PageTemplate metaTitle="Submission" submenu={sections}>
			<h1 className={classNames("page-title")}>Submitting to VISAP 2023</h1>
			<Dates/>
		</PageTemplate>
	);
}
