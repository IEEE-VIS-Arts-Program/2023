import CarouselComp from "../CarouselComp";
export default function GalleryHome({ className }) {
	const images = [
		{
			src: "images/home-gallery/001_still_videoinstallation.jpg",
			caption: <>Beyond Human Perception</>,
		},
		{
			src: "images/home-gallery/01.png",
			caption: <>Quaran.tiles</>,
		},
		{
			src: "images/home-gallery/ColorCompare (1).png",
			caption: <>Affective, Hand-Sculpted Glyph Forms for Engaging and Expressive Scientific Visualization</>,
		},
		{
			src: "images/home-gallery/FRANCIS GALTON (Widest and Tallest) 8.jpg",
			caption: <>Shifting winds: Gendered structures of academic mentorship</>,
		},
		{
			src: "images/home-gallery/image002.jpg",
			caption: <>RAY</>,
		},
		{
			src: "images/home-gallery/metoo-reports-lg.png",
			caption: <>#MeToo Anti-Network</>,
		},
		{
			src: "images/home-gallery/Mingling.png",
			caption: <>Under the Green: Visual data storytelling the process of urban CO2 neutralization by forests</>,
		},
		{
			src: "images/home-gallery/molecular-planets4.png",
			caption: <>Molecular Planets</>,
		},
		{
			src: "images/home-gallery/OctoAnemone-1.png",
			caption: <>OctoAnemone</>,
		},
		{
			src: "images/home-gallery/proj_robotdance-01.jpg",
			caption: <>Presentation of Self in Machine Life</>,
		},
		{
			src: "images/home-gallery/SiftingStrands-0.png",
			caption: <>Sifting Strands</>,
		},
		{
			src: "images/home-gallery/skyglyphs_visap_2022-rep-images-04.png",
			caption: <>Skyglyphs</>,
		},
		{
			src: "images/home-gallery/SoftVoss-1.png",
			caption: <>SoftVoss</>,
		},
	];

	return <CarouselComp className={className} images={images} height="56.03%" />;
}
