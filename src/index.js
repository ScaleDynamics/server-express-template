const express = require('express');
const app = express();
const port = process.env.WARP_PORT ? process.env.WARP_PORT : 3000;

app.get('/hello', (req, res) => {
  res.send('Hello from ScaleDynamics');
});

app.listen(port, () => {
  console.log(`This app listen on the port ${port}`);
});
