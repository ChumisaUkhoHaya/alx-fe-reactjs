const express = require('express');
const cors = require('cors');
const app = express();

app.use(
  cors({
  origin: "http://localhost:3000"
}));

app.get('/example', (req, res) => {
  res.json({ message: 'CORS enabled!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
