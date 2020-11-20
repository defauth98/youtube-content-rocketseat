const express = require('express');
const { v4: uuid } = require('uuid');
const Sonic = require('sonic-channel');

const app = express();

app.use(express.json());

const SonicChannelIngest = new Sonic.Ingest({
  host: 'localhost',
  port: 1491,
  auth: '1cf9fdde0297de748364468b878fd0392905e25d',
});

SonicChannelIngest.connect({ connected: () => console.log('connected 1') });

const SonicChannelSearch = new Sonic.Search({
  host: 'localhost',
  port: 1491,
  auth: '1cf9fdde0297de748364468b878fd0392905e25d',
});

SonicChannelSearch.connect({ connected: () => console.log('connected 2') });

app.post('/pages', async (req, res) => {
  const { title, content } = req.body;
  const id = uuid();

  // Cadastra no banco
  await SonicChannelIngest.push(
    'pages',
    'default',
    `page:${id}`,
    `${title} ${content}`,
    {
      lang: 'por',
    }
  );

  return res.status(201).send();
});

app.get('/search', async (req, res) => {
  const { q } = req.query;

  const results = await SonicChannelSearch.query('pages', 'default', q, {
    lang: 'por',
  });

  return res.json(results);
});

app.get('/sugest', async (req, res) => {
  const { q } = req.query;

  const results = await SonicChannelSearch.suggest('pages', 'default', q, {
    limit: 5,
  });

  return res.status(200).json(results);
});

app.listen(3000);
