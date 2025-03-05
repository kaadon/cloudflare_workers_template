import routes from './routes';

export default {
	async fetch(request,env) {
		console.log(env)
		return await routes.handle(request);
	},
};
