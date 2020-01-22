const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    //buscar um dev num raio de 10 km
    //filtrar por tecnologia
    async index(request, response)  {                
        const { latitude, longitude, techs} = request.query;
        
        const techArrays = parseStringAsArray(techs);

        const devs = 
            await Dev.find({
                techs: { 
                    $in: techArrays
                },
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude]
                        },
                        $maxDistance: 2000000
                    }
                }
            });


        return response.json({ devs});
    }
}