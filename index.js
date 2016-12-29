const express = require('express');
const { graphql } = require('graphql');
const bodyParser = require('body-parser');
const schema = require('./schema');

const app = express();
const PORT = 3000;

app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', async (req, res) => {
  const result = await graphql(schema, req.body);
  res.send(JSON.stringify(result, null, 2));
});


let server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server running at http://${host}:${port}`)
});


