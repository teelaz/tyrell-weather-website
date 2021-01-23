const request = require('request');

const forecast = (latitude, longitude, preciseLocation, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=744d0006f75f280b9e25d9d3dffb4267&query=' +
    latitude +
    ',' +
    longitude;
  const location = preciseLocation;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location :(', undefined);
    } else {
      callback(
        undefined,
        `The weather in ${location}, is currently, ${body.current.weather_descriptions[0]}, with a temperature of ${body.current.temperature} degress, that feels like ${body.current.feelslike} degrees.`
      );
    }
  });
};

module.exports = forecast;
