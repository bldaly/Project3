// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
        "name": "10 Barrel Brewing",
        "city": "Boise",
        "location": [43.617672,-116.202835]
    },
    {
        "name": "10 Barrel Brewing",
        "city": "Portland",
        "location": "[45.5259,-122.6856]"
    },
    {
        "name": "3 Sheeps Brewing Company",
        "city": "Sheboygan",
        "location": "[43.75947972,-87.7216719]"
    },
    {
        "name": "5 Seasons Brewing",
        "city": "Atlanta",
        "location": "[33.78434,-84.4191]"
    }
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3> " + city.city + "</h3>")
    .addTo(myMap);
}
