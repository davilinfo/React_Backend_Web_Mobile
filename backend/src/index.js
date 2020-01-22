const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./router');
const { setupWebsocket} = require('./websocket');

const app = express();
const server= http.Server(app);
setupWebsocket(server);

//MongoDB
mongoose.connect('mongodb://atlas:atlas2020@cluster0-shard-00-00-jfmgb.mongodb.net:27017,cluster0-shard-00-01-jfmgb.mongodb.net:27017,cluster0-shard-00-02-jfmgb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true    
 });

app.use(cors());
//registra em toda aplicação uso de json
app.use(express.json());
app.use(routes);

server.listen(3333);