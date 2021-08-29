import express from 'express';
import ReactDOM from 'react-dom/server';
import { Header } from '../shared/Header';


const app = express();

app.get('/', (req, res) => {
  res.send(
    ReactDOM.render
  );
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
})