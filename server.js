const fastify = require('fastify')
const static = require('@fastify/static')

async function startServer() {
  const app = fastify()

  static(app, {
    root: __dirname,
  })

  const info = await app.listen({ port: 3000 }).catch((error) => {
    console.error(error)
    process.exit(1)
  })

  console.log(info)
}

startServer()
