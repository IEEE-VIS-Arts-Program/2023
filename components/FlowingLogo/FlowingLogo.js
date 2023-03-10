import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
	ssr: false,
});

// Original code by The Wizard Bear

const string = "VISAP23"; //words to be displayed
const size = 100; //font size
const showText = true; //whether or not to have an overlay of the original text (in the background color)
const bgColor = "#e6ebef";
const fillColor = "#ecf0f3"; //kinda self-explanatory
const fillAlpha = 255;
const strokeColor = "#7a4cff"; //'#00ff55'; //the line color
const strokeAlpha = 255; //the alpha of the lines (lower numbers are more transparent)
let p5FillColor, p5StrokeColor;

const fontSampleFactor = 0.2; //How many points there are: the higher the number, the closer together they are (more detail)
const noiseZoom = 0.006; //how zoomed in the perlin noise is
const noiseOctaves = 3; //The number of octaves for the noise
const noiseFalloff = 0.5; //The falloff for the noise layers
const zOffsetChange = 0; //How much the noise field changes in the z direction each frame
const individualZOffset = 0; //how far away the points/lines are from each other in the z noise axies (the bigger the number, the more chaotic)
const lineSpeed = 0.3; //the maximum amount each point can move each frame
const newPointsCount = 0; //the number of new points added when the mouse is dragged

let font,
	fontRegular,
	points = [],
	startingPoints,
	img;

export default function FlowingLogo() {
	const { basePath } = useRouter();

	const preload = (p5) => {
		font = p5.loadFont(basePath + "/fonts/SoraOTF/Sora-Bold.otf");
		fontRegular = p5.loadFont(basePath + "/fonts/SoraOTF/Sora-Regular.otf");
	};

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(p5.windowWidth * 0.5, p5.windowHeight * 0.5).parent(canvasParentRef);

		p5FillColor = p5.color(fillColor);
		p5FillColor.setAlpha(fillAlpha);
		p5StrokeColor = p5.color(strokeColor);
		p5StrokeColor.setAlpha(strokeAlpha);
		p5.background(bgColor);

		p5.textSize(size);
		p5.noiseDetail(noiseOctaves, noiseFalloff);

		p5.textAlign(p5.CENTER);
		p5.textFont(font);
		startingPoints = font.textToPoints(string, -p5.textWidth(string) / 2, 0, size, { sampleFactor: fontSampleFactor });

		for (let p = 0; p < startingPoints.length; p++) {
			points[p] = startingPoints[p];
			points[p].zOffset = p5.random();
		}

		p5.push();
		p5.textSize(size / 4);
		p5.translate(p5.width / 2, p5.height * 0.5);
		p5.fill(strokeColor);
		p5.textFont(fontRegular);
		p5.textAlign(p5.CENTER);
		p5.text("perpetual presence", 0, 33);
		p5.pop();
	};

	const draw = (p5) => {
		//p5.background('#e6ebef01')
		p5.push();
		p5.translate(p5.width / 2, p5.height * 0.5);
		p5.noFill();
		p5.stroke(p5StrokeColor);
		p5.strokeWeight(1);
		for (let pt = 0; pt < points.length; pt++) {
			let p = points[pt];
			let noiseX = p.x * noiseZoom;
			let noiseY = p.y * noiseZoom;
			let noiseZ = p5.frameCount * zOffsetChange + p.zOffset * individualZOffset;
			let newPX = p.x + p5.map(p5.noise(noiseX, noiseY, noiseZ), 0, 1, -lineSpeed, lineSpeed);
			let newPY = p.y + p5.map(p5.noise(noiseX, noiseY, noiseZ + 214), 0, 1, -lineSpeed, lineSpeed);
			p5.line(p.x, p.y, newPX, newPY);
			p.x = newPX;
			p.y = newPY;
		}
		p5.pop();
		if (showText) {
			p5.push();
			p5.translate(p5.width / 2, p5.height * 0.5);
			p5.textAlign(p5.CENTER);
			p5.textFont(fontRegular);
			p5.noStroke();
			p5.fill(p5FillColor);
			p5.textFont(font);
			p5.text(string, 0, 0);
			p5.pop();
		}
	};

	const windowResized = (p5) => {
		p5.resizeCanvas(window.innerWidth, window.innerHeight);
	};

	return (
		<>
			<Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized} />
		</>
	);
}
