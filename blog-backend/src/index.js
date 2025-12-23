/* eslint-disable no-undef */
const Koa = require('Koa')

const app = new Koa()

app.use((ctx, next) => {
    console.log(ctx.url)
    console.log(1)
    next()
})