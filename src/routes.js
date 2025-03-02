import Route from './utils/route';
const routes = new Route();
routes.get("/", async () => new Response("欢迎来到 Cloudflare Workers!"));
routes.get("/api/hello", sayHello);
routes.get("/api/user/([0-9]+)", getUser);
routes.post("/api/user", createUser);

export default routes;
