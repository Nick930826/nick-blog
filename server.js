const Koa = require('koa')
const next = require('next')
const config = require('./utils/config')

const port = config.isDev ? 3008 : 3001
const app = next({ dev: config.isDev })
const handle = app.getRequestHandler()
app.prepare().then(() => {
  const server = new Koa()
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.listen(port, () => {
    console.log(`run at ${port}`)
  })
})
