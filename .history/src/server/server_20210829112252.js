import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
})