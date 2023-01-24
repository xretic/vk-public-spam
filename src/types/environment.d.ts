export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			VK_TOKEN: string;
			MESSAGE: string;
			TIMER_MINUTES_DELAY: number;
		}
	}
}
