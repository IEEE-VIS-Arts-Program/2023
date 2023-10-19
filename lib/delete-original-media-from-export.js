const fs = require("fs");
const path = require("path");

console.log("Delete copies of uncompressed images from exported site");

const mediaFolder = path.join("out/images/contributions-images");

let deletedCount = 0;
let problems = 0;
for (let i = 1; i <= 10; i++) {
	const folderAuthor = path.join(mediaFolder, `Author ${i} Image (File responses)`);
	if (fs.existsSync(folderAuthor)) {
		console.log(folderAuthor);
		const images = fs.readdirSync(folderAuthor).filter((file) => {
			const is_jpg = path.extname(file).toLowerCase() === ".jpg";
			const is_jpeg = path.extname(file).toLowerCase() === ".jpeg";
			const is_png = path.extname(file).toLowerCase() === ".png";
			return is_jpg || is_jpeg || is_png;
		});
		images.forEach((image) => {
			try {
				fs.unlinkSync(path.join(folderAuthor, image));
				deletedCount++;
			} catch (err) {
				console.log("Cant delete", image);
				console.error(err);
			}
		});
	}

	const folderImages = path.join(mediaFolder, `Image ${i} (File responses)`);
	if (fs.existsSync(folderImages)) {
		console.log(folderImages);
		const images = fs.readdirSync(folderImages).filter((file) => {
			const is_jpg = path.extname(file).toLowerCase() === ".jpg";
			const is_jpeg = path.extname(file).toLowerCase() === ".jpeg";
			const is_png = path.extname(file).toLowerCase() === ".png";
			return is_jpg || is_jpeg || is_png;
		});
		images.forEach((image) => {
			try {
				fs.unlinkSync(path.join(folderImages, image));
				deletedCount++;
			} catch (err) {
				console.log("Cant delete", image);
				console.error(err);
			}
		});
	}
}

console.log("Deleted images:", deletedCount, " Problems:", problems);
