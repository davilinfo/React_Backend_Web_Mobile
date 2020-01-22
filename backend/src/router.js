const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Query params: request.query  (Filtos, ordenação, paginação)
//Routes params: request.params (identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

routes.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({message : 'Hello World'});
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;