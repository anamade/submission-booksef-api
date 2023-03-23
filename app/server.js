/* eslint-disable comma-dangle */
/* eslint-disable semi */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function init() {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log('Server berjalan pada port: %s', server.info.uri);
}

module.exports = init;
