export default async (ms: number): Promise<void> => {
	new Promise(() => {
		setTimeout(() => {}, ms);
	});
};
