import Route from './utils/route';
import {  login } from './controllers/userController';
const routes = new Route();
routes.get("/", async () => new Response("api接口管理"));
routes.get("/api/user", login);

export default routes;
