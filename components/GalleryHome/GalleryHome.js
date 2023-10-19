import CarouselComp from "../CarouselComp";
export default function GalleryHome({ className }) {
	const images = [
		{ src: "images/home-gallery/IMG_20231003_175952.jpg", caption: <>Exhibition of Visap 2023</> },
		{ src: "images/home-gallery/IMG_20231003_175958.jpg", caption: <>Catalogues in the exhibition space</> },
		// { src: "images/home-gallery/IMG_20231003_180005.jpg", caption: <>Beyond Human Perception</> },
		// { src: "images/home-gallery/IMG_20231003_180008.jpg", caption: <>Beyond Human Perception</> },
		{ src: "images/home-gallery/IMG_20231005_131530.jpg", caption: <>Visiting the 2023 exhibition</> },
		{ src: "images/home-gallery/IMG_20231005_131538.jpg", caption: <>Colophon of the exhibition</> },
		{ src: "images/home-gallery/IMG_20231005_131555.jpg", caption: <>Visiting the 2023 exhibition</> },
		{ src: "images/home-gallery/IMG_20231003_175943.jpg", caption: <>The artwork "Infinite Colours"</> },
	];

	return <CarouselComp className={className} images={images} height="56.03%" />;
}
