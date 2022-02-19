const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const { handleError } = require('./utils/error-handler');
const CharacterRouter = require('./routes/character-route');

const app = express();

app.use(helmet());

app.use(bodyParser.json({ limit: '1mb' }));

app.use('/character', CharacterRouter);

app.get('/', (req, res) => res.status(200).end());

app.get('*', (req, res) => res.status(404).send('Not Found!!'));

app.use((err, req, res, next) => {
    handleError(err, res);
});

module.exports = app;
