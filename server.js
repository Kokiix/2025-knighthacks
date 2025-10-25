const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})
app.get('/abc', async (req, res) => {
    return res.status(400).send('URL is required');
});

app.listen(3001, () => {
  console.log(`Proxy server is running on port}`);
});