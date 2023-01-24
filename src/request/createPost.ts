import axios from "axios";

export default async (publicId: number): Promise<void> => {
	await axios
		.post(
			encodeURI(
				`https://api.vk.com/method/wall.post?v=5.62&owner_id=-${publicId}&message=${process.env.MESSAGE}&access_token=${process.env.VK_TOKEN}`
			),
			{
				headers: {
					Authorization: `Bearer ${process.env.VK_TOKEN}`,
				},
			}
		)
		.catch((err: Error) => {
			console.error(err);
		});

	console.log(
		`Пост успешно отправлен в сообщество https://vk.com/public${publicId}`
	);
};
