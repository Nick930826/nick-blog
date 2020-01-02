const Koa = require('koa')
const next = require('next')
const config = require('./utils/config')

const port = config.isDev ? 3001 : 3001
const app = next({ dev: config.isDev })
const handle = app.getRequestHandler()
let assetPrefix = ''
if (process.env.isBeta) {
  assetPrefix = '//s.weituibao.com/beta/Ariel'
} else if (process.env.NODE_ENV == 'production') {
  assetPrefix = '//s.weituibao.com/release/Ariel'
}
app.prepare().then(() => {
  const server = new Koa()
  server.use(async (ctx, next) => {
    ctx.req.koaContext = ctx
    await handle(ctx.req, ctx.res)
    app.setAssetPrefix(assetPrefix)
    ctx.respond = false
  })
  server.listen(port, () => {
    console.log(`run at ${port}`)
  })
})
