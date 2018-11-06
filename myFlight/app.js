var Flight = require('./flightinfo');

var logger = require('./logger');

// logger.anicefunction('this is a message');
logger('this is a message');
var flightInfo1 = {
    number: 'AA1234',
    departure: 'LAX',
    arrival: 'NYC'
}

var instant = new Flight();

instant.fill(flightInfo1);

console.log(instant.getInfo());

instant.recordDepartureTime();

console.log(instant.data);
console.log(instant.getInfo());