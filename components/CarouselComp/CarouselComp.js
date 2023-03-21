import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselComp.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";

export default function CarouselComp({ images, height, className }) {
	const { basePath } = useRouter();
	return (
		<>
			<Carousel className={classNames(styles.carousel, className)} style={{ paddingBottom: height }} interval={null}>
				{images.map((image, i) => (
					<Carousel.Item key={i} className={styles.carouselItem}>
						{/* <div className={styles.carouselImage} style={{ backgroundImage: `url('${basePath}/${image.src}')` }} /> */}
						<ExportedImage src={`${basePath}/${image.src}`} alt={image.caption} fill style={{ objectFit: "cover" }} />
						{image.caption && (
							<Carousel.Caption className={styles.carouselCaption}>
								<p>{image.caption}</p>
							</Carousel.Caption>
						)}
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
}

CarouselComp.defaultProps = {
	height: "75%",
};
