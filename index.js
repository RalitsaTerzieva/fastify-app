const fastify = require('fastify')()

fastify.register(require('@fastify/nextjs'), { dev: true }).after(() => {
    // Serve Next.js pages directly
    fastify.get('/', async (req, reply) => {
      await reply.nextRender('/');
    });
  
    fastify.get('/about', async (req, reply) => {
      await reply.nextRender('/about');
    });
  
    fastify.get('/greet/:user', async (req, reply) => {
      // You can pass dynamic parameters like this
      await reply.nextRender('/greet/[user]');
    });
  
    // Define custom Fastify route
    fastify.get('/contacts', (req, reply) => {
      reply.type('html').send(`<h1>Contacts page</h1>`);
    });
  });

module.exports = function build() {
    return fastify;
  };

  fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});