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
		// { src: "images/home-gallery/IMG_20231003_175943.jpg", caption: <>The artwork "Infinite Colours"</> },
		{ src: "images/reception-photos/VISAP23-79.jpg", caption: <>A photo of Latent Prism</> },
		{ src: "images/reception-photos/VISAP23-4.jpg", caption: <>Catalogues of the exhibition</> },
		{ src: "images/reception-photos/VISAP23-12.jpg", caption: <>Visitors discussing an artwork</> },
		{ src: "images/reception-photos/VISAP23-19.jpg", caption: <>A photo of Posts with no Response</> },
		{ src: "images/reception-photos/VISAP23-29.jpg", caption: <>Two visitors looking at Associative Forms for Encoding Multivariate Climate Data</> },
		{ src: "images/reception-photos/VISAP23-34.jpg", caption: <>Visitors looking at Eco-Mending</> },
		{ src: "images/reception-photos/VISAP23-42.jpg", caption: <>Selfies at the exhibition</> },
		{ src: "images/reception-photos/VISAP23-74.jpg", caption: <>A visitor looking at Waiting for the Wave in Metaverse</> },
		{ src: "images/reception-photos/VISAP23-86.jpg", caption: <>Close-up of exhibition catalogue</> },
		{ src: "images/reception-photos/VISAP23-87.jpg", caption: <>Visitors testing the Spotlight artwork</> },
		{ src: "images/reception-photos/VISAP23-97.jpg", caption: <>Talk of Alison Bennett</> },
		{ src: "images/reception-photos/VISAP23-114.jpg", caption: <>Talk of Francesca Morini</> },
		{ src: "images/reception-photos/VISAP23-144.jpg", caption: <>The artwork Body Cosmos</> },
		{ src: "images/reception-photos/VISAP23-152.jpg", caption: <>Visitors looking at an artwork</> },
		// { src: "images/reception-photos/VISAP23-162.jpg", caption: <>A visitor taking a picture</> },
		{ src: "images/reception-photos/VISAP23-171.jpg", caption: <>Visitors looking at Posts with No Response</> },
		{ src: "images/reception-photos/VISAP23-174.jpg", caption: <>Visitors attending VISAP opening</> },
	];

	return <CarouselComp className={className} images={images} height="56.03%" />;
}
