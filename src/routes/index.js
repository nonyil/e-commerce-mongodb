const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => { res.send('hello word')});

module.exports = routes;