import * as hello from './controllers/helloController';
import * as user from './controllers/userController';
import Route from './utils/route';


const routes = new Route();
routes.get("/", async () => new Response(index, {
    headers: {
        "Content-Type": "text/html; charset=utf-8"
    },
}));
//根据controller的方法,自动添加route
Object.getOwnPropertyNames(hello).forEach((method) => {
    if (method !== 'default') {
        routes.post(`/hello/${method}`, hello[method]);
    }
});

Object.getOwnPropertyNames(user).forEach((method) => {
    if (method !== 'default') {
        routes.post(`/api/user/${method}`, user[method]);
    }
});

export default routes;
