import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import { data } from 'testData';

const app = express();

// Everything in public directory served directly
app.use(express.static('public'));

// Render templates used EJs
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await serverRender();

  // Render views/index.ejs template and initialMarkup and initialData       
  res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});



app.listen(config.port, () => {
  console.info(`Running on port: ${config.port}.`);
});
