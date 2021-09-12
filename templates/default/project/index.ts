// See docs for more info on https://burdy.io/docs

import Hooks from 'burdy/src/shared/features/hooks';
import asyncMiddleware from 'burdy/src/server/middleware/async.middleware';

Hooks.addAction('api/init', async (app) => {
  // Access via http://localhost:4000/api/hello
  app.get('/hello', asyncMiddleware(async (req, res) => {
    res.send('Hello World!');
  }))
});
