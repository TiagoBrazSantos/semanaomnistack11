const express = require('express');
const routes = express.Router();

/**
 * Controllers
 */
const OngController = require('./controllers/OngControlle');
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

const IncidentController = require('./controllers/IncidentController');
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/incidents/listarPorOngId', IncidentController.listarPorOngId);

const SessionController = require('./controllers/SessionController');
routes.post('/sessions', SessionController.index);


module.exports = routes;