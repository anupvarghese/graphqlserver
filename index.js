const express = require('express');

const app = express();
const PORT = 3000;

app.post('/graphql', (req, res) => {
  res.send('Hello from graphql');
});

let server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server running at http://${host}:${port}`)
});


