import fs from "fs";
import createPost from "../request/createPost";
import timer from "../utils/timer";

export default async () => {
	const publicIds = fs.readFileSync("./publicIds.txt").toString().split("\n");

	for (const publicId of publicIds) {
		await timer(2000);
		await createPost(Number(publicId));
	}
};
