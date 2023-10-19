import fs from "fs";
import path from "path";
const sizeOf = require("image-size");
const probe = require("probe-image-size");

const dataDirectory = path.join(process.cwd(), "data");

export function getContributionsData() {
	const contributionsPath = path.join(dataDirectory, "contributions.json");
	let contributionsData = JSON.parse(fs.readFileSync(contributionsPath, "utf8"));

	contributionsData.forEach((contribution) => {
		contribution.id = convertToSlug(contribution["Title"]);
		const images = [];
		for (let i = 1; i <= 10; i++) {
			const key = `Image ${i}`;
			const folderName = `${key} (File responses)`;
			const captionKey = `${key} Caption`;
			const imageName = contribution[key];
			if (imageName) {
				const imageCaption = contribution[captionKey];
				const imagePath = path.join("public/images/contributions-images", folderName, imageName);
				try {
					let imageData = require("fs").readFileSync(imagePath);
					const { width, height } = probe.sync(imageData);
					images.push({ src: imagePath.replace("public/", ""), imageCaption, width, height });
				} catch (err) {
					console.log(contribution["Contribution ID"], contribution.id);
					console.log(imagePath);
					console.log(err);
				}
			}
			delete contribution[key];
			delete contribution[`${key} Caption`];
		}
		// Take only the first image for page /contributions
		contribution.image = images[0];

		contribution.authors = [];
		for (let i = 1; i <= 10; i++) {
			const key = `Author ${i}`;
			const nameSurname = contribution[`${key} Name and Surname`];
			const author = {};
			if (nameSurname) {
				author.id = convertToSlug(contribution["Contribution ID"] + "-" + nameSurname);
				author.nameSurname = nameSurname;
				contribution.authors.push(author);
			}
			delete contribution[`${key} Name and Surname`];
			delete contribution[`${key} Website`];
			delete contribution[`${key} Bio (max 600 characters)`];
			delete contribution[`${key} Image`];
		}
		delete contribution["Timestamp"];
		delete contribution["Artwork caption"];
	});

	return contributionsData;
}

function convertToSlug(Text) {
	return Text.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
}

export function getIds() {
	console.log("run getIds");
	const contributionsPath = path.join(dataDirectory, "contributions.json");
	const contributionsData = JSON.parse(fs.readFileSync(contributionsPath, "utf8"));
	return contributionsData.map((d) => {
		return {
			params: {
				id: convertToSlug(d["Title"]),
			},
		};
	});
}

export function getSingleData(id) {
	console.log("run getSingleData ", id);
	const contributionsPath = path.join(dataDirectory, "contributions.json");
	const contributionsData = JSON.parse(fs.readFileSync(contributionsPath, "utf8"));

	const contribution = contributionsData.find((d) => {
		d.id = convertToSlug(d["Title"]);
		return d.id.toString() === id.toString();
	});

	const index = contributionsData.indexOf(contribution);
	const prevIndex = index === 0 ? contributionsData.length - 1 : index - 1;
	const nextIndex = index === contributionsData.length - 1 ? 0 : index + 1;

	contribution.next = convertToSlug(contributionsData[nextIndex]["Title"]);
	contribution.prev = convertToSlug(contributionsData[prevIndex]["Title"]);

	const images = [];
	for (let i = 1; i <= 10; i++) {
		const key = `Image ${i}`;
		const folderName = `${key} (File responses)`;
		const captionKey = `${key} Caption`;
		const imageName = contribution[key];
		if (imageName) {
			const imageCaption = contribution[captionKey];
			const imagePath = path.join("public/images/contributions-images", folderName, imageName);
			try {
				let imageData = require("fs").readFileSync(imagePath);
				const { width, height } = probe.sync(imageData);
				images.push({ src: imagePath.replace("public/", ""), imageCaption, width, height });
			} catch (err) {
				console.log(contribution["Contribution ID"], contribution.id);
				console.log(imagePath);
				console.log(err);
			}
		}
		delete contribution[key];
		delete contribution[`${key} Caption`];
	}
	contribution.images = images;

	const authors = [];
	for (let i = 1; i <= 10; i++) {
		const key = `Author ${i}`;
		const nameSurname = contribution[`${key} Name and Surname`];
		const author = {};
		if (nameSurname) {
			author.id = convertToSlug(contribution["Contribution ID"] + "-" + nameSurname);
			author.nameSurname = nameSurname;
			author.website = contribution[`${key} Website`] || null;
			author.bio = contribution[`${key} Bio (max 600 characters)`] || null;

			const imageName = contribution[`${key} Image`];
			if (imageName) {
				const folderName = `${key} Image (File responses)`;
				const imagePath = path.join("public/images/contributions-images", folderName, imageName);
				let imageData = require("fs").readFileSync(imagePath);
				const { width, height } = probe.sync(imageData);
				author.image = { src: imagePath.replace("public/", ""), width, height };
			}
			authors.push(author);
		}
		delete contribution[`${key} Name and Surname`];
		delete contribution[`${key} Website`];
		delete contribution[`${key} Bio (max 600 characters)`];
		delete contribution[`${key} Image`];
	}
	contribution.authors = authors;
	delete contribution["Timestamp"];
	delete contribution["Artwork caption"];

	// singleData.images = singleData.images.split(";").map((d, i) => {
	// 	try {
	// 		const imagePath = path.join("public/images/contributions-media", singleData.pc_id, d);
	// 		const dimensions = sizeOf(imagePath);
	// 		return { src: d, width: dimensions.width, height: dimensions.height };
	// 	} catch (err) {
	// 		console.log(singleData.pc_id, d);
	// 		console.log(err);
	// 		return { src: d, width: 1, height: 1 };
	// 	}
	// });

	// let authors_ids = singleData.authors.split(";");
	// singleData.authors = authors_ids.map((id) => {
	// 	const author = authorsData.find((a) => a.id === id);
	// 	if (author.images) {
	// 		author.images = author.images.split(";").map((imageName, i) => {
	// 			const imagePath = path.join("public/images/contributions-media", singleData.pc_id, imageName);
	// 			const dimensions = sizeOf(imagePath);
	// 			return {
	// 				src: imageName,
	// 				width: dimensions.width,
	// 				height: dimensions.height,
	// 			};
	// 		});
	// 	}
	// 	return author;
	// });

	return contribution;
}
