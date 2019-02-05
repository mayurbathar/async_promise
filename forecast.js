const request = require('request');

var getWhether = (lat,lng,callback) =>{
    request({
        url: `https://api.forcast.io/`,
        json:true
    }, (error, response, callback) => {
        if(error){
            callback('Unble to connect forcast API');
        }else if(response.statusCode === 400){
            callback('Unble to reach weather');
        }
    });

}

module.exports.getWhether = getWhether;