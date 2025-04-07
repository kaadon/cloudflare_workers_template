export class RequestContext {
    constructor(request, env, cfCtx) {
      this.request = request;
      this.env = env;
      this.cfCtx = cfCtx;
      // 自定义可挂载的变量
      this.vars = {
        startTime: Date.now()
      };
    }
    set(key, value) {
      this.vars[key] = value;
    }
    get(key) {
      return this.vars[key];
    }
    waitUntil(promise) {
      this.cfCtx.waitUntil(promise);
    }
}
