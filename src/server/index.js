import 'babel-polyfill';
import express from 'express';

import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import schema from './graphql/schema';

const app = express();
// set up middleware limits
app.use(bodyParser({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.use('/graphql', graphqlExpress((req) => {
  // Get the query, the same way express-graphql does it
  const query = req.query.query || req.body.query;
  if (query && query.length > 2000) {
    // None of our app's queries are this long
    // Probably indicates someone trying to send an overly expensive query
    throw new Error('Query too large.');
  }

  let user;
  if (req.user) {
    user = req.user;
  }

  return {
    schema,
    graphiql: process.env.NODE_ENV === 'development',
    context: {
      user,
    },
  };
}));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log('hello!'));
