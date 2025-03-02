// Cloudflare Workers 入口
import routes from './routes';

export default {
	async fetch(request) {
		return await routes.handle(request);
	},
};
