import classNames from "classnames";
import FlowingLogo from "../components/FlowingLogo/FlowingLogo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FlowGenerator() {
	const router = useRouter();
	const [phrase, setPhrase] = useState("PERLIN NOISE");
	const [noiseZoom, setNoiseZoom] = useState();
	const [fontSize, setFontSize] = useState();
	const [noiseOctaves, setNoiseOctaves] = useState();
	const [dY, setDY] = useState();
	useEffect(() => {
		const help = `
👉 HOW TO USE THE GENERATOR
You can customize lettering and flowfield from URL query parameters.

E.g., http://visap.net/2023/logo?phrase=PERLIN%20NOISE&noiseZoom=0.01&fontSize=100&noiseOctaves=2&dY=30

🍽 Available Settings:
- phrase (string)
- fontSize (number)
- dY (number)
- noiseZoom (numer between 0 and 1)
- noiseOctave (integer number)

🌸 Use the device toolbar embedded in your browser to set the dimension of your artboard, then export it as picture.

Bye 😶‍🌫️`;
		console.log(help);
	}, []);

	useEffect(() => {
		// Get the query parameter from the URL
		const { phrase, noiseZoom, fontSize, noiseOctaves, dY } = router.query;
		if (phrase) {
			setPhrase(phrase);
		}
		if (noiseZoom) {
			setNoiseZoom(Number(noiseZoom));
		}
		if (fontSize) {
			setFontSize(Number(fontSize));
		}
		if (noiseOctaves) {
			setNoiseOctaves(Number(noiseOctaves));
		}
		if (dY) {
			setDY(Number(dY));
		}
	}, [router.query]);
	return (
		<>
			<FlowingLogo
				phrase={phrase}
				noiseZoomProp={noiseZoom}
				fontSizeProp={fontSize}
				noiseOctavesProp={noiseOctaves}
				dYProp={dY}
				widthProp={100}
				heightProp={100}
			/>
		</>
	);
}
