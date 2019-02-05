const geocoder = require('./geocoder.js');
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
    a : {
        demand: true,
        alias: 'address',
        describe: 'Fetch Address',
        string:true

    }
}).help()
.alias('help','h')
.argv;

geocoder.geocodeAddress(argv.address);

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://mapsgoogleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unble to find address');
    }else{
        console.log(response.data);
    }
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect google server');
    }else{
        console.log(e);
    }
});



