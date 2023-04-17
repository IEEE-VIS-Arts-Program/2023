import Link from "next/link";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import Dates from "../components/Dates";
import classNames from "classnames";

export default function Submission() {
	return (
		<PageTemplate metaTitle="Call for Entries">
			<h1 className={classNames("page-title")}>Call for Entries</h1>
			<h3>The Theme</h3>
			<p>
				<strong>
					The theme for IEEE VISAP 2023 is <i>Perpetual Presence</i>.
				</strong>{" "}
				Data is all around us, a perpetual and ubiquitous digital stream of meaning that permeates throughout the
				ambient informatic that backgrounds our societies. <i>Perpetual Presence</i> acknowledges the transformative
				potential of data as influencing cultural, economical and political landscapes. If ‘presence’ is a state of
				being, of becoming, and of responding to the intersectionality of realities, then Perpetual Presence is an
				aesthetic in which data abundantly flourishes in ways that extend our understanding of the world.
			</p>
			<p>
				We invite submissions that critically reflect on the multiple entanglements that humans and non-humans can form
				with digital data within physical and digital environments. This includes thinking beyond the immediate
				presence, as well as new thoughts and debates that transcend human capacities and experiences. Submissions can
				include new interactive artworks, data representation techniques, and creative methodologies, alongside critical
				and ethical research pertaining to data as <i>Perpetual Presence</i> that contribute to building a more
				equitable world for all.
			</p>
			<p>
				VISAP 2023 <i>Perpetual Presence</i> seeks research papers, artwork submissions and pictorials for presentation
				in two interrelated tracks during the conference and exhibition in October 2023. Flowing through different
				concepts and contexts, we seek original work examining new aesthetics and critical cultures at the intersection
				of art, science and technology that engage with the theme <i>Perpetual Presence</i> in one way or the other.
				Submissions might explore topics related, but not limited to:
			</p>
			<ul>
				<li>Data and algorithms as co-composers to artistic and aesthetic experiences,</li>
				<li>Critical, reflective and/or playful interactions spanning digital and physical topologies,</li>
				<li>Critical explorations of co-presence in physically remote environments,</li>
				<li>
					The ‘more-than-human’ experience and how it may contribute to an understanding of nature, eco-ethical
					perspectives and sustainability,
				</li>
				<li>
					Data-driven and technological interventions (e.g., sensors, robotics, AR/XR/VR) to human social, cultural and
					spatial capacity,
				</li>
				<li>Ethical challenges concerning sentience and personhood,</li>
				<li>Manifestations of inclusive practices.</li>
			</ul>
			<p>Visualization projects explored through artworks, pictorials or papers might include:</p>
			<ul>
				<li>Visualization that emphasizes aesthetics</li>
				<li>Visualization that encourages creative interaction</li>
				<li>Speculative visualizations</li>
				<li>Critical visualization</li>
				<li>Visualization as tactical media</li>
				<li>New data paradigms</li>
				<li>Live coding and streaming data</li>
				<li>Complex systems</li>
				<li>Explorations of the history of visualization</li>
				<li>Software studies, creative coding, custom-built software</li>
				<li>Temporal dynamics and affective motion</li>
				<li>Explo-temporal dynamics and affective data semantics</li>
				<li>3D visualization, VR environments, and immersive analytics</li>
				<li>Computational photography</li>
				<li>Ambient information displays</li>
				<li>Visualization for storytelling</li>
				<li>Design studies</li>
				<li>Data sonification</li>
				<li>Conversation theory</li>
				<li>Artist-in-lab projects</li>
				<li>Digital humanities visualization</li>
				<li>Ethics of data and data visualization</li>
			</ul>
			<h3>Submission Instructions</h3>
			<Dates />
			<p>
				Go the <Link href="/submission">Submission Instructions</Link> for further details.
			</p>
			<p>
				Note: VISAP aims to foster discussions of the relationships between the design process and the final artifact.
				We encourage all artists and designers to showcase and describe the process of research creation when producing
				visualizations or data-driven art pieces.
			</p>
			<p>
				Accepted submissions to the paper and to the pictorial tracks will be presented during the IEEE VIS conference
				VISAP sessions. Accepted exhibits will be displayed from October 4 - October 29, 2023 at the{" "}
				<a href="https://www.melbourne.vic.gov.au/community/hubs-bookable-spaces/the-dock/library-at-the-dock/Pages/library-at-the-dock.aspx">
					Library at the Dock
				</a>
				gallery space. Pictorials may be displayed in printed forms at the opening reception; and exhibits may be
				offered an opportunity to be presented during the IEEE VIS conference VISAP sessions.
			</p>
			<p>We look forward to your participation!</p>
			<p className={classNames("fst-italic")} style={{ fontWeight: 500 }}>
				Uta Hinrichs, Xavier Ho, and Rebecca Ruige Xu
				<br />
				VISAP 2023 General Chairs
			</p>
			<p>
				Contact: <a href="mailto:art@ieeevis.org">art@ieeevis.org</a>
			</p>
			<p>
				Twitter: <a href="https://twitter.com/visapnet">@visapnet</a>
			</p>
			<p>
				Mastodon: <a href="https://vis.social/@visapt">@visap@vis.social</a>
			</p>
		</PageTemplate>
	);
}
