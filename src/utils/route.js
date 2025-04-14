class Route {
	constructor() {
		this.routes = [];
	}

	get(path, handler) {
		this.routes.push({ method: 'GET', path: new RegExp(`^${path}$`), handler });
	}

	post(path, handler) {
		this.routes.push({ method: 'POST', path: new RegExp(`^${path}$`), handler });
	}


	handleResult(data) {
		const result = {
			code: 200,
			message: 'success',
			data: data
		};
		return new Response(JSON.stringify(result), { status: 200 });
	}

	handleError(error) {
		const result = {
			code: 201,
			message: 'error',
			error: error?.message || 'error'
		};
		return new Response(JSON.stringify(result), { status: 201 });
	}

	handleNotFound() {
		const result = {
			code: 500,
			message: 'path not found'
		};
		return new Response(JSON.stringify(result), { status: 500 });
	}

	async handle(ctx) {
		try {
			const url = new URL(ctx.request.url);
			const route = this.routes.find(route => route.method === ctx.request.method && route.path.test(url.pathname));
			if (!route) {
				return this.handleNotFound(ctx);
			}
			if (route.method === 'GET') return route.handler(ctx);
			const data = await route.handler(ctx);
			return this.handleResult(data);
		} catch (error) {
			return this.handleError(error);
		}
	}

}

export default Route;
