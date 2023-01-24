export default async (ms: number) => {
	new Promise(() => {
		setTimeout(() => {}, ms);
	});
};
