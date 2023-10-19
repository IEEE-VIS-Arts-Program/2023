import classNames from "classnames";
import styles from "../../styles/Contributions.module.scss";
import { ContributionPageTemplate } from "../../components/PageTemplate";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getIds, getSingleData } from "../../lib/contributions";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";
import Zoom from "react-medium-image-zoom";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { BsArrowLeftCircle as LeftIcon, BsArrowRightCircle as RightIcon } from "react-icons/bs";

export default function Contribution({ data }) {
	const { basePath } = useRouter();
	const masonryBreakpoints = {
		default: 4,
		1400: 3,
		1200: 3,
		992: 2,
		768: 2,
		576: 1,
	};

	return (
		<ContributionPageTemplate metaTitle={data["Title"]}>
			<Row>
				<Col
					sm={{ span: 12, offset: 0 }}
					md={{ span: 1, offset: 0 }}
					lg={{ span: 2, offset: 0 }}
					xl={{ span: 2, offset: 0 }}
					className={classNames(styles.pageTitle, "my-0", "d-flex", "align-items-center", "justify-content-start")}
				>
					<p>
						<Link href={"/contributions/" + data.prev}>
							<LeftIcon />{" "}
							Prev
						</Link>
						<span className="d-block d-md-none">
							{" / "}
							<Link href={"/contributions/" + data.next}>
								Next <RightIcon />
							</Link>
						</span>
					</p>
				</Col>
				<Col
					sm={{ span: 12, offset: 0 }}
					md={{ span: 10, offset: 1 }}
					lg={{ span: 8, offset: 0 }}
					xl={{ span: 8, offset: 0 }}
					className={classNames(styles.pageTitle, "my-5")}
				>
					<p className={classNames(styles.pageTitle, "mb-0")}>{data["Contribution Type"]}</p>
					<h1 className={classNames(styles.pageTitle, "my-0", "mb-1")}>{data["Title"]}</h1>
					<p className={classNames(styles.pageTitle, "mt-0")}>
						{data.authors.map((author) => author.nameSurname).join(", ")}
					</p>
				</Col>
				<Col
					sm={{ span: 12, offset: 0 }}
					md={{ span: 1, offset: 0 }}
					lg={{ span: 2, offset: 0 }}
					xl={{ span: 2, offset: 0 }}
					className={classNames(styles.pageTitle, "my-0", "d-flex", "align-items-center", "justify-content-end")}
				>
					<p>
						<Link href={"/contributions/" + data.next}>
							Next <RightIcon />
						</Link>
					</p>
				</Col>
				<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} className={classNames(styles.pageTitle, "mb-5")}>
					<ResponsiveMasonry
						columnsCountBreakPoints={masonryBreakpoints}
						className={classNames(styles.contributionGallery)}
					>
						<Masonry gutter={"1.5rem"}>
							{data.images.map((d, i) => (
								// <Zoom key={"img-" + i} zoomMargin={20}>
								<div key={"img-" + i} className={classNames(styles.thumbnail)}>
									<ExportedImage
										key={"img-" + i}
										src={basePath + "/" + d.src}
										alt={"Image of " + data.title}
										layout="responsive"
										width={d.width}
										height={d.height}
										placeholder="blur"
									/>
								</div>
								// </Zoom>
							))}
						</Masonry>
					</ResponsiveMasonry>
				</Col>
				<Col
					sm={{ span: 12, offset: 0 }}
					md={{ span: 10, offset: 1 }}
					lg={{ span: 8, offset: 2 }}
					xl={{ span: 8, offset: 2 }}
				>
					<p className={classNames(styles.lineBreaks)}>{data["Description"]}</p>
					{data["Webpage"] && (
						<p className={classNames("mb-5", styles.bio)}>
							Webpage:{" "}
							<a className={classNames(styles.projectLink)} href={data["Webpage"]}>
								{data["Webpage"].replace("https://", "").replace("http://", "").replace("www.", "")}
							</a>
						</p>
					)}
					<h5 className={classNames("mt-5 mb-3")}>Artist{data.authors.length > 1 ? "s" : ""} bio</h5>
				</Col>
				<Row>
					{data.authors.map((author, i) => (
						<Col key={"auth" + i} sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: (i % 3) + 1 }}>
							<Row className={classNames("d-flex", "align-items-center", "mb-5")}>
								<Col sm={2}>
									{author.image && (
										<div
											className={classNames({ "mt-3": i > 0 })}
											key={"img-author-" + author.image}
											style={{ maxWidth: "30vw" }}
										>
											<ExportedImage
												src={basePath + "/" + author.image.src}
												alt={"Image of " + data.nameSurname}
												layout="responsive"
												width={author.image.width}
												height={author.image.height}
												placeholder="blur"
												className="rounded"
											/>
										</div>
									)}
								</Col>
								<Col sm={7}>
									<p className={classNames("mt-0", "mb-0", "fw-semibold", styles.bio)}>
										{!author.website && <>{author.nameSurname}</>}
										{author.website && <a href={author.website}>{author.nameSurname}</a>}
									</p>

									{author.bio && <p className={classNames(styles.bio, "mb-0", styles.lineBreaks)}>{author.bio}</p>}
								</Col>
							</Row>
						</Col>
					))}
				</Row>
			</Row>
		</ContributionPageTemplate>
	);
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	const paths = getIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	const data = getSingleData(params.id);
	return {
		props: {
			data,
		},
	};
}
