const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/example', (req, res) => {
  res.json({ message: 'CORS enabled!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
