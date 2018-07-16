'use strict';

const Router = require('koa-router');

const router = new Router();

router.get(/.*/, async (ctx, next) => {
    console.log(`[${(new Date).toLocaleString()}][GET][${ctx.ip}]:${ctx.req.url}`);
    await next();
})

module.exports = router;