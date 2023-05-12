import PageTemplate from "../components/PageTemplate/PageTemplate";
import Dates from "../components/Dates";
import classNames from "classnames";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlurredSeparator from "../components/BlurredSeparator/BlurredSeparator";
import { useRouter } from "next/router";

export default function Submission() {
	const { basePath } = useRouter();
	const [sections, setSections] = useState();
	useEffect(() => {
		let _sections = Array.from(document.querySelectorAll("h3")).filter((d) => d.hasAttribute("id"));
		setSections(
			_sections.map((d) => ({
				innerText: d.innerText,
				id: d.attributes.id.nodeValue,
			}))
		);
	}, []);
	return (
		<PageTemplate metaTitle="Submission" submenu={sections}>
			<h1 className={classNames("page-title")}>Submitting to VISAP 2023</h1>
			<h3 className={classNames("pt-3")} id="important-dates">
				Important Dates
			</h3>
			<Dates />
			<h3 className={classNames("pt-3")} id="paper-submission">
				Paper Submission
			</h3>
			<p>
				We invite researchers, scholars, and creative practitioners to submit papers related to the theme{" "}
				<i>Perpetual Presence</i>. Submissions can include, but are not limited to technical descriptions of creative
				visualization projects and techniques, reflections on the impact of data visualization techniques on art and
				design practice, philosophical meditations on art-science methodology, expanded descriptions and discussions of
				specific (media) art projects (including design case studies), and critical interpretations of visualization
				approaches and practices. We are open to any submission that relates in some way to art or design and to this
				year’s theme (see <Link href="/call-for-entries">Call for Entries</Link>).
			</p>
			<h6>Paper Format</h6>
			<p>
				Authors are required to use the{" "}
				<a href="https://tc.computer.org/vgtc/publications/conference/">IEEE Conference format</a> for paper
				submissions. <a href="https://www.cspaul.com/vgtc/vgtc_conference_word.zip">Word</a> and{" "}
				<a href="https://www.cspaul.com/vgtc/vgtc_conference_latex.zip">LaTeX</a> templates are available. It is
				mandatory to use this format. However, including keywords and index terms is optional.
			</p>
			<p>Paper submissions must not exceed 10 pages—including all figures and references.</p>
			<p>
				Submitting supplementary material and/or links to external materials is encouraged to help reviewers evaluate
				the submission.
			</p>
			<h6>Acceptance</h6>
			<p>
				Accepted authors will present their work in-person in one of the two VISAP Papers sessions during the
				conference. All accepted papers will be published online in the IEEE VIS 2023 Arts Program proceedings, and
				indexed in the IEEE Xplore digital library.
			</p>
			<h6>Previous Visap Papers</h6>
			<p>
				Please see the online proceedings from previous years (
				<a href="https://ieeexplore.ieee.org/xpl/conhome/9975351/proceeding">2022</a>,{" "}
				<a href="https://ieeexplore.ieee.org/xpl/conhome/9622893/proceeding">2021</a>,{" "}
				<a href="https://ieeexplore.ieee.org/xpl/conhome/9307976/proceeding">2020</a>,{" "}
				<a href="https://visap.net/2019/program">2019</a>, <a href="http://visap.net/2018/program">2018</a>,{" "}
				<a href="http://visap.uic.edu/2017/papers.html">2017</a>,{" "}
				<a href="http://visap.uic.edu/2016/papers.html">2016</a>,{" "}
				<a href="http://visap.uic.edu/2015/papers.html">2015</a>,{" "}
				<a href="http://visap.uic.edu/2014/program.html#papers">2014</a>,{" "}
				<a href="http://visap.uic.edu/2013/#program">2013</a>) for examples of accepted submissions. (Selected VISAP
				papers have also been featured in IEEE Computer Graphics and Applications and Leonardo).
			</p>
			<BlurredSeparator />
			<h3 className={classNames("pt-3")} id="pictorial-submission">
				Pictorial Submission
			</h3>
			<p>
				We invite artists and designers to submit pictorials and annotated portfolios related to the theme{" "}
				<i>Perpetual Presence</i>. Artists, designers, and researchers all make creative choices based on practical
				knowledge, generally acquired through experience. Unfortunately, this knowledge is seldom shared in
				publications. VISAP Pictorials aim to foster discussions about this reflection-in-action when creating
				visualizations or data-driven art pieces.
			</p>
			<p>
				Pictorial submissions reflect either on shared concepts among a selection of visualizations, or on the design
				process of a single work. Whether in the case of a single artifact, or, in the case of a series of artifacts,
				the designer is in a unique position to provide valuable insights into the design intentions, the design space
				explorations, and the design process (Löwgren 2013). Through pictorials and annotated portfolios, we invite
				submissions that communicate the visualization practices in rich, heavily visual ways.
			</p>
			<h6>What to Consider</h6>
			<p>Elements that reviewers will look for include:</p>
			<ul>
				<li>The quality of the description of the design process and reflections on this process</li>
				<li>The appropriateness and richness of the visual style</li>
				<li>The quality of presentation</li>
				<li>The production value of images, photos and diagrams</li>
			</ul>
			<h6>What is a Pictorial / Annotated Portfolio?</h6>
			<p>
				A pictorial is a visual description and reflection of the design process of a single visualization project. It
				is intended to capture the situated and rich nature of design. See DIS Pictorials for inspiration.
			</p>
			<p>
				An annotated portfolio is a collection of design works with brief textual annotations. It has been proposed by
				Gaver and Bowers (2012) as a “way to communicate design research”. The systematic selection and annotation of
				the artifacts are part of the contribution. Submitters are encouraged to highlight important features, discuss
				how ideas were developed, and reflect on recurring topics through their series of works.
			</p>
			<h6>Pictorial Format</h6>
			<p>
				Artists and designers are required to use the VISAP Pictorials format for pictorial and annotated portfolio
				submissions. <a href={`${basePath}/VISAP_pictorial_Indd.zip`}>InDesign</a> and{" "}
				<a href={`${basePath}/https://visap.net/VISAP_pictorial_Word.zip`}>Word</a> templates are available. It is mandatory to use
				this format.
			</p>
			<p>
				Pictorials and annotated portfolios must not exceed 16 pages. We encourage submitters to use the space in the
				most creative and visual way.
			</p>
			<p>
				Submitting supplementary material and/or links to external material is encouraged to help reviewers evaluate the
				submission.
			</p>
			<h6>Previous Accepted Works</h6>
			<p>
				Please see the five pictorials (<a href="http://visap.net/2018/media/Cruz-VISAP18-AP.pdf">1</a>,{" "}
				<a href="http://visap.net/2018/media/Bihanic-VISAP18-AP.pdf">2</a>,{" "}
				<a href="http://visap.net/2018/media/Perin-VISAP18-AP.pdf">3</a>,{" "}
				<a href="http://visap.net/2018/media/Glissmann-VISAP18-AP.pdf">4</a>,{" "}
				<a href="http://visap.net/2018/media/Hunter-VISAP18-AP.pdf">5</a>) from the inaugural edition of this format in
				the <a href="http://visap.net/2018/program">2018 program</a>, the three pictorials (
				<a href="https://visap.net/media/Offenhuber-VISAP19.pdf">1</a>,{" "}
				<a href="https://visap.net/media/Richardson-VISAP19.pdf">2</a>,{" "}
				<a href="https://visap.net/media/Samsel-VISAP19.pdf">3</a>) in the{" "}
				<a href="https://visap.net/2019/index.html">2019 program</a>, the two pictorials (
				<a href="https://visap.net/media/vis20m-sub1033-cam-i7.pdf">1</a> and{" "}
				<a href="https://visap.net/media/vis20m-sub1047-cam-i7.pdf">2</a>) in the{" "}
				<a href="https://visap.net/2020/program.html">2020 program</a> the five pictorials (
				<a href="https://ieeexplore.ieee.org/document/9623013">1</a>,{" "}
				<a href="https://ieeexplore.ieee.org/document/9622972">2</a>,{" "}
				<a href="https://ieeexplore.ieee.org/document/9622946">3</a>,{" "}
				<a href="https://ieeexplore.ieee.org/document/9622987">4</a>,{" "}
				<a href="https://ieeexplore.ieee.org/document/9623000">5</a>) in the{" "}
				<a href="https://visap.net/2021/program.html">2021 program</a>, and and three pictorials (
				<a href="https://ieeexplore.ieee.org/document/9975687">1</a>,{" "}
				<a href="https://ieeexplore.ieee.org/document/9975449">2</a>,{" "}
				<a href="https://ieeexplore.ieee.org/document/9975443">3</a>) in the{" "}
				<a href="https://visap.net/2022/programme">2022 program</a>.
			</p>
			<h6>Pictorial Acceptance</h6>
			<p>
				All accepted Pictorials will be published online in the IEEE VIS 2023 Arts Program proceedings, and indexed in
				the IEEE Xplore digital library. Pictorials will be part of the VISAP 2023 exhibition as printed booklets and
				showcased in the VISAP 2023 catalog, which will be available both online and in print. Selected submissions will
				be invited to present their work in-person in one of the VISAP Papers sessions during the conference.
			</p>
			<BlurredSeparator />
			<h3 className={classNames("pt-3")} id="artwork-submission">
				Artwork Submission
			</h3>
			<p>
				We invite artists and designers to submit data-driven artworks related to the theme Perpetual Presence. We
				welcome submissions in any medium, e.g., interactive projections, multimedia sculptures, mobile devices,
				illustrations, physicalizations, video game art, digital prints, screen-based art, fixed audio-visual pieces,
				etc.
			</p>
			<h6>What to include in your proposal</h6>
			<p>
				While the proposal is free-form, the following information must be included (consider structuring your proposal
				based on these headings):
			</p>
			<ol>
				<li>
					<strong>General Information</strong>: Title of the work, Year, Authors (and roles), Medium and Dimensions of
					the work
				</li>
				<li>
					<strong>Description</strong>: Description of the work and any interactive elements. Explain how your work
					relates to this year’s theme and how it links to information visualization, scientific visualization, and/or
					visual analytics. Discuss the reception of your work at previous exhibitions (if it has been exhibited before)
				</li>
				<li>
					<strong>Technical Requirements</strong>: Given that VISAP’ 23 is an in-person event, describe how the work
					will be presented at the gallery space. Provide technical details of the project. For example, what technical
					equipment is required? Does the project require the audience to interact with it live? Are there any time of
					day requirements or specific lighting conditions needed? Does it require any specific space or technical setup
					(e.g. VR gadgets or audiovisual equipment)? Consider how your artwork could be integrated in both a physical
					and virtual art exhibition.
				</li>
				<li>
					<strong>Supporting Material</strong>: Provide links to high-resolution images, audio, webpages and/or videos
					that will help give the reviewers a clear sense of your work
				</li>
			</ol>
			<p>Artworks could involve any of the following forms:</p>
			<ul>
				<li>Visualization that emphasizes visual and performative aesthetics</li>
				<li>Visualization that encourages creative and/or collaborative interactions</li>
				<li>Speculative visualizations</li>
				<li>Visualization as tactical media</li>
				<li>New data paradigms</li>
				<li>Live coding and streaming data</li>
				<li>Complex systems</li>
				<li>Exploratory data semantics</li>
				<li>3D visualization, VR/AR/XR environments, and immersive analytics</li>
				<li>Computational photography</li>
				<li>Ambient information displays</li>
				<li>Visualization as storytelling</li>
				<li>Design studies</li>
				<li>Data sonification</li>
				<li>Conversation theory</li>
				<li>Digital humanities visualization</li>
				<li>Physical visualization and sculptural design</li>
			</ul>
			<h6>Submission Format (Exhibition)</h6>
			<p>
				Artists and designers are required to submit a 2 page .pdf file describing the work they wish to exhibit. No
				specific format is imposed.
			</p>
			<p>
				Submitting additional images, videos, or audio files as supplementary material is strongly encouraged to help
				reviewers evaluate the submission.
			</p>
			<h6>Previous accepted work</h6>
			<p>
				Please see the <a href="https://visap.net/2022/VISAP22_catalogue_v6.pdf">2022</a> and{" "}
				<a href="https://visap.net/2021/media/VISAP21-Catalogue.pdf">2021 catalogues</a> (designed by Bon Adriel
				Aseniero), the <a href="https://visap.net/2020/media/IEEE_VISAP_20_Catalog_Final.pdf">2020 catalog</a> (designed
				by Christy Cheung), the <a href="https://visap.net/2019/media/VISAP19-Catalogue.pdf">2019 catalog</a> (designed
				by Damla Çay), <a href="http://visap.net/2018/media/VISAP18-Catalogue.pdf">2018 catalog</a> (designed by Density
				Design), the <a href="http://visap.uic.edu/2017/materials/ExhibitionCatalog-Sustain&Decay.pdf">2017 catalog</a>{" "}
				(designed by Yoon Chung Han), the{" "}
				<a href="http://visap.uic.edu/2016/materials/VISAP2016_ExhibitionCatalog_Metamorphoses.pdf">2016 catalog</a>{" "}
				(designed by Jeremy Boy), the{" "}
				<a href="http://visap.uic.edu/2015/DataImprovisations_Catalog.pdf">2015 catalog</a> (designed by Jack Henrie
				Fisher), the <a href="http://visap.uic.edu/2014/art/VISAP2014_ArtShowCatalog.pdf">2014 catalog</a>, or the{" "}
				<a href="http://visap.uic.edu/2013/VISAP_ArtShow_Catalog_2013.pdf">2013 catalog</a> (both designed by Lauren
				Thorson) to get a sense of the range of artworks that have been accepted previously. Please feel welcome to
				contact the chairs if you have questions about whether or not your work is an appropriate submission to VISAP.
			</p>
			<h6>Acceptance</h6>
			<p>
				All accepted artworks will be included in the online proceedings of VISAP on the{" "}
				<a href="https://visap.net/2023/">visap.net</a> website, as well as in a VISAP 2023 catalog that will be shared
				on the VISAP website. All accepted artworks will be presented in the gallery space of the{" "}
				<a href="https://www.melbourne.vic.gov.au/community/hubs-bookable-spaces/the-dock/library-at-the-dock/Pages/library-at-the-dock.aspx">
					Library at the Docs
				</a>
				from October 2 to October 29, 2023. This means that, in contrast to previous years, the VISAP exhibition will be
				open prior to the conference, and remain open for almost one month.
			</p>
			<p>
				The official opening of the exhibition will take place during the week of the VIS conference (presumably
				Tuesday, October 24, 2023. Some artworks may be selected for artist talks during the week of the IEEE VIS
				conference. Performance submissions may also be scheduled for specific times during the exhibition. Artists will
				work with the VISAP organizers on the details for showcasing their artworks. Artists and authors are strongly
				encouraged to participate in the VISAP program throughout the week.
			</p>
			<p>
				No artist fees or travel costs are provided. There are some complimentary registrations available for selected
				artists. Priority will be given to exhibiting artists who are independent artists and not affiliated with
				institutions.
			</p>
			<p>The VISAP 2023 exhibition chairs will contact the exhibitors upon acceptance.</p>
			<BlurredSeparator />
			<h3 className={classNames("pt-3")} id="submission-procedure">
				Submission Procedure (for all tracks)
			</h3>
			<p>
				All submissions must be made using the{" "}
				<a href="https://new.precisionconference.com/submissions">IEEE VGTC Electronic Conference System (on PCS)</a>.
				After creating an account or signing in, submitters will find the VISAP 2023 Papers and Exhibition submissions
				by:
			</p>
			<ol>
				<li>Clicking on the “Submissions” tab</li>
				<li>
					Selecting VTGC (in “Society”); VIS 2023 (for “Conference/Journal”), and VIS 2023 Arts Program (for “Track”),
					and
				</li>
				<li>Clicking on “Go”</li>
			</ol>
			<p>VISAP uses a single-blind review process: submitted material is not required to be anonymized.</p>
			<p>
				At least one author per accepted paper and pictorial is required to register to the IEEE VIS conference to
				present the work in-person. Submitters of accepted exhibits are also strongly encouraged to attend the
				conference to set up their work for the opening reception, and to participate in the program throughout the week
				in-person.
			</p>
			<p>
				We invite students to apply to the IEEE VIS student volunteer program to help cover registration fees. We also
				invite authors and artists who demonstrate financial need to apply for the IEEE VIS Inclusivity & Diversity
				Scholarship.
			</p>
		</PageTemplate>
	);
}
