import runApp from "./app/runApp";
import { config } from "dotenv";

config({
	path: "./.env",
});

runApp()
	.then(() => {
		console.log("App started!");
	})
	.catch((err: Error) => {
		console.error(err);
	});
