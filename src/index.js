// Cloudflare Workers 入口
import routes from './routes';
import { RequestContext } from './utils/request-context';
export default {
	async fetch(request, env, ctx) {
		return await routes.handle(new RequestContext(request, env, ctx));
	},
};
