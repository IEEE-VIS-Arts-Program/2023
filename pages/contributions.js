import { getContributionsData } from "../lib/contributions";
import { useRouter } from "next/router";
import classNames from "classnames";
import styles from "../styles/Contributions.module.scss";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ExportedImage from "next-image-export-optimizer";

export default function Contributions({ allContributionsData, metaContent }) {
	const { basePath } = useRouter();
	const masonryBreakpoints = {
		default: 4,
		1400: 4,
		1200: 3,
		992: 2,
		768: 2,
		576: 2,
	};
	return (
		<PageTemplate metaTitle="Contributions">
			<h1 className={classNames("page-title")}>Contributions</h1>
			<h6>Artworks, Pictorials, and Papers</h6>
			<p>Browse the online exhibit or download the <a href={basePath + "/visap-catalogue-2023-web.pdf"} download={"visap-2023-catalogue.pdf"}>Visap'23 Catalogue</a>.</p>
			<ResponsiveMasonry columnsCountBreakPoints={masonryBreakpoints}>
				<Masonry gutter={"1.5rem"}>
					{allContributionsData.map((d, i) => (
						<Link key={d.id} className={classNames(styles.contribution)} href={"/contributions/" + d.id} passHref>
							<div key={d.id} dataname={d.id}>
								<div className={classNames(styles.thumbnail)}>
									<ExportedImage
										src={basePath + "/" + d.image.src}
										alt={"Preview image of " + d.title}
										sizes="(max-width: 576px) 50vw, (max-width: 768px) 33vw, 25vw"
										style={{
											width: "100%",
											height: "auto",
										}}
										width={d.image.width}
										height={d.image.height}
										placeholder="blur"
									/>
								</div>
								<div className="p-2">
									<p className={classNames(styles.category, "m-0")}>{d["Contribution Type"]}</p>
									<h6 className={classNames(styles.title, "m-0", "mb-1")}>{d["Title"]}</h6>
									<p className={classNames(styles.authors, "m-0")}>
										{d.authors.map((d) => `${d.nameSurname}`).join(", ")}
									</p>
								</div>
							</div>
						</Link>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</PageTemplate>
	);
}

Contributions.defaultProps = {
	submenu: [],
};

export async function getStaticProps() {
	const allContributionsData = getContributionsData();
	return {
		props: {
			allContributionsData,
		},
	};
}
