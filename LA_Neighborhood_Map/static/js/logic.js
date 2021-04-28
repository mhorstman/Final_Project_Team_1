// Creating map object
var myMap = L.map("travelmap", {
  center: [34.100, -118.333],
  zoom: 12
});

// Define API Key for Mapbox
const API_KEY = "pk.eyJ1IjoibWhvcnN0bWFuIiwiYSI6ImNrbTE3czljajEwYXUycG1ydDc4MTVnc28ifQ.7ahduH_7wwawalS2_83XHg";

// Add a light and satelite tile layers
lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
});
streetsMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Link to LA neighborhood GeoJSON data
// const neighborhoodGeoJson = "http://s3-us-west-2.amazonaws.com/boundaries.latimes.com/archive/1.0/boundary-set/la-county-neighborhoods-current.geojson";
// ALTERNATE Link to LA neighborhood GeoJSON data; Run "python -m http.server" in terminal first
const neighborhoodGeoJson = "static/data/la-county-neighborhoods-current.geojson";
const neighborhoods = ["West Hollywood", "Hollywood Hills West", "Beverly Grove", "Hancock Park", "Hollywood Hills", "Hollywood", "Los Feliz"];

// Define overlay map layers
let neighborhoodOverlay = new L.layerGroup();
let overlayMaps = {
  "Neighborhoods": neighborhoodOverlay
};
let baseMaps = {
  "Light": lightMap,
  "Streets": streetsMap
};
L.control.layers(baseMaps, overlayMaps).addTo(myMap);

// Define function to specity color for matching destinations
function chooseStyle(name, fill){
  let matchStyle = {
    color: "black",
    fillColor: fill,
    fillOpacity: 0.5,
    weight: 2
  };
  let noMatchStyle = {
    color: "white",
    weight: 0.01
  };
  for (let neighborhood of neighborhoods) {
     if (neighborhood === name) {
       return matchStyle;
     }
   };
  return noMatchStyle;
  };

// Draw boundries of neighborhoods
d3.json(neighborhoodGeoJson, function(data) {
  console.log(data);
  L.geoJson(data, {
    style: function(feature) {
      return chooseStyle(feature.properties.name, "#fdffd1")
    },
    onEachFeature: function(feature, layer) {
      layer.on(
        {
          click: function(event){
            myMap.fitBounds(event.target.getBounds());
          }
        })
      .bindPopup(feature.properties.name);
      }
  }).addTo(neighborhoodOverlay);
});
neighborhoodOverlay.addTo(myMap); 


// Draw city markers
// var pinIcon = L.icon({
//   iconUrl: 'static/data/pin-paper.png',
//   iconSize: [20, 20],
//   iconAnchor: [10, 20]
//   });

// destinationsData.forEach(function(destination) {
//   destination.cities.forEach(function(city) {
//     L.marker([city.lat, city.lng], {icon: pinIcon})
//     .bindPopup("<h6>"+city.name+"</h6>")
//     .addTo(citiesOverlay);
//   });
// });
// citiesOverlay.addTo(myMap);
