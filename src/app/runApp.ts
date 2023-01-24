import sendTick from "./sendTick";

export default async (): Promise<void> => {
	await sendTick();
	setInterval(
		async () => {
			await sendTick();
		},
		1000 * 60 * Number(process.env.TIMER_MINUTES_DELAY),
		true
	);
};
