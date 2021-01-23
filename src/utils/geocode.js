const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    address +
    '.json?access_token=pk.eyJ1IjoidHlyZWxsbGF6IiwiYSI6ImNranR4OXZkNzgwb3cyem5wNGg4N3dtdGwifQ.8bZz7OFdMKot10X0AX-z2w';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
        preciseLocation: body.features[0].text,
      });
    }
  });
};

module.exports = geocode;
