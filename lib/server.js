import express from 'express';
import config from './config';

const app = express();

// Everything in public directory served directly
app.use(express.static('public'));

// Render templates used EJs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // Render views/index.ejs template and pass variable to the template       
  res.render('index', { answer: 45 });
});

app.listen(config.port, () => {
  console.info(`Running on port: ${config.port}.`);
});
