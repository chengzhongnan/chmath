'use strict';

const Router = require('koa-router');

const router = new Router();

let servercount = 0;

setInterval(() => {
    servercount += 1;
}, 1000);

router.get(/.*/, async (ctx, next) => {
    ctx.body = '当前计数是：' + servercount;
})

module.exports = router;