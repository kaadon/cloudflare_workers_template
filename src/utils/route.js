class Route {
	constructor() {
		this.routes = [];
	}

	get(path, handler) {
		this.routes.push({ method: "GET", path: new RegExp(`^${path}$`), handler });
	}

	post(path, handler) {
		this.routes.push({ method: "POST", path: new RegExp(`^${path}$`), handler });
	}

	async handle(request) {
		const url = new URL(request.url);
		for (const route of this.routes) {
			if (route.method === request.method && route.path.test(url.pathname)) {
				return await route.handler(request, url);
			}
		}
		return new Response("404 Not Found", { status: 404 });
	}
}

export default Route;
