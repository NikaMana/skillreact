import express from 'express';
import ReactDOM from 'react-dom';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
})