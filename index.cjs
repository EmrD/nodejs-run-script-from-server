const express = require('express');
const app = express();
const port = 5000;

app.get('/api/message', (req, res) => {
  res.json({ message: 'const a = 20 ; const b = 30 ; console.log(a+b);'}); //example code to run remote
});

app.listen(port, () => {
  console.log(`API server is running at http://localhost:${port}`);
});
