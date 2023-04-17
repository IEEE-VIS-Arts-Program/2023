import classNames from "classnames";
import FlowingLogo from "../components/FlowingLogo/FlowingLogo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FlowGenerator() {
	const router = useRouter();
	const [phrase, setPhrase] = useState("PERLIN NOISE");
	const [fontSize, setFontSize] = useState();
	const [dY, setDY] = useState();

	const [noiseZoom, setNoiseZoom] = useState();
	const [noiseOctaves, setNoiseOctaves] = useState();
	const [noiseFalloff, setNoiseFalloff] = useState();
	const [zOffsetChange, setZOffsetChange] = useState();
	const [individualZOffset, setIndividualZOffset] = useState();
	const [lineSpeed, setLineSpeed] = useState();
	
	useEffect(() => {
		const help = `
👉 HOW TO USE THE GENERATOR
You can customize lettering and flowfield from URL query parameters.

🍽 Available Settings:
- phrase (string)
- fontSize (number)
- dY (number)
- noiseZoom (default 0.005)
- noiseOctave (default 4)
- noiseFalloff (default 3)
- zOffsetChange (default 0)
- individualZOffset (default 0.001)
- lineSpeed (0.25)

🌸 Use the device toolbar embedded in your browser to set the dimension of your artboard, then export it as picture.

E.g., http://visap.net/2023/flow-generator?phrase=PERLIN%20NOISE&fontSize=100&dY=30&noiseZoom=0.01&noiseOctaves=2&noiseFalloff=3&zOffsetChange=0&individualZOffset=0.001&lineSpeed=0.25

Bye 😶‍🌫️`;
		console.log(help);
	}, []);

	useEffect(() => {
		// Get the query parameter from the URL
		const { phrase, fontSize, dY, noiseZoom, noiseOctaves, noiseFalloff, zOffsetChange, individualZOffset, lineSpeed } =
			router.query;

		if (phrase) {
			setPhrase(phrase);
		}
		if (fontSize) {
			setFontSize(Number(fontSize));
		}
		if (dY) {
			setDY(Number(dY));
		}
		if (noiseZoom) {
			setNoiseZoom(Number(noiseZoom));
		}
		if (noiseOctaves) {
			setNoiseOctaves(Number(noiseOctaves));
		}
		if (noiseFalloff) {
			setNoiseFalloff(Number(noiseFalloff));
		}
		if (zOffsetChange) {
			setZOffsetChange(Number(zOffsetChange));
		}
		if (individualZOffset) {
			setIndividualZOffset(Number(individualZOffset));
		}
		if (lineSpeed) {
			setLineSpeed(Number(lineSpeed));
		}
	}, [router.query]);
	return (
		<>
			<FlowingLogo
				phrase={phrase}
				fontSizeProp={fontSize}
				dYProp={dY}
				noiseZoomProp={noiseZoom}
				noiseOctavesProp={noiseOctaves}
				noiseFalloffProp={noiseFalloff}
				zOffsetChangeProp={zOffsetChange}
				individualZOffsetProp={individualZOffset}
				lineSpeedProp={lineSpeed}
				widthProp={100}
				heightProp={100}
			/>
		</>
	);
}
