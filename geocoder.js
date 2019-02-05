const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);

    request({
         url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json:true
    } , (error, response, body) =>{
        if(error){
            console.log('Unable to connect google server');
        }else if(body.status == 'ZERO_RESULTS'){
            console.log('Unble to find address');
        }else if(body.status == 'OK'){
         console.log(`${body.results}`);   
       // console.log(`Address :${body}`); 
         console.log(`Address :${body.results[0].formatted_address}`); 
        }else{
            console.log(`${body.status}`);   
        }
    }
    );
}

module.exports.geocodeAddress = geocodeAddress;