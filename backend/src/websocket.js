const socketio = require('socket.io');
const parserStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections =[];

exports.setupWebsocket = (server) => {    
    io = socketio(server);

    io.on('connection', socket => {        
        const {latitude, longitude, techs} = socket.handshake.query;        

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),                
            },
            techs: parserStringAsArray(techs)
        })
    });
};

exports.findConnection =( coordinates, techs) =>{
    return connections.filter(connection =>{
        return calculateDistance(coordinates, connection.coordinates) < 30
            && connection.tech.some(item => techs.includes(item));
    })
}

exports.sendMessage = (to, message, data) =>{
    to.forEach(connetion => {
        io.to(connection.id).emit(message, data)
    });
}