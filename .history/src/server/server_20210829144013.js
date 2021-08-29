import express from 'express';
import ReactDOM from 'react-dom/server';
import { Header } from '../shared/Header';
import { indexTamlate } from './indexTamplate';

const app = express();

app.use('/static', express.static('.dist'))

app.get('/', (req, res) => {
  res.send(
    indexTamlate(ReactDOM.renderToString(Header())),
  );
});
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
})