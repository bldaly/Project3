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
var cities = 
[
  {
    "name": "10 Barrel Brewing",
    "city": "Boise",
    "province": "ID",
    "location": [43.617672,-116.202835]
  },
  {
    "name": "10 Barrel Brewing",
    "city": "Portland",
    "province": "OR",
    "location": [45.5259,-122.6856]
  },
  {
    "name": "3 Sheeps Brewing Company",
    "city": "Sheboygan",
    "province": "WI",
    "location": [43.75947972,-87.7216719]
  },
  {
    "name": "5 Seasons Brewing",
    "city": "Atlanta",
    "province": "GA",
    "location": [33.78434,-84.4191]
  },
  {
    "name": "5 Seasons Brewing Llc",
    "city": "Alpharetta",
    "province": "GA",
    "location": [34.0638,-84.2533]
  },
  {
    "name": "512 Brewing Company",
    "city": "Austin",
    "province": "TX",
    "location": [30.2234,-97.76974]
  },
  {
    "name": "603 Brewery",
    "city": "Londonderry",
    "province": "NH",
    "location": [42.9164,-71.3629]
  },
  {
    "name": "8-bit Aleworks",
    "city": "Avondale",
    "province": "AZ",
    "location": [33.45448735,-112.3263172]
  },
  {
    "name": "Aardwolf Brewing Company",
    "city": "Jacksonville",
    "province": "FL",
    "location": [30.31072728,-81.65454165]
  },
  {
    "name": "Alameda Brewhouse",
    "city": "Portland",
    "province": "OR",
    "location": [45.5485,-122.6136]
  },
  {
    "name": "Ale Asylum",
    "city": "Madison",
    "province": "WI",
    "location": [43.120481,-89.354343]
  },
  {
    "name": "Alehouse On Winslow",
    "city": "Bainbridge Island",
    "province": "WA",
    "location": [47.6246,-122.5138]
  },
  {
    "name": "All About Brewing",
    "city": "El Cajon",
    "province": "CA",
    "location": [32.804488,-116.971242]
  },
  {
    "name": "Altamont Brewery",
    "city": "Asheville",
    "province": "NC",
    "location": [35.58159263,-82.60428517]
  },
  {
    "name": "American Fresh Brewhouse Beer Garden",
    "city": "Somerville",
    "province": "MA",
    "location": [42.39387423,-71.08039825]
  },
  {
    "name": "Amplified Ale Works",
    "city": "San Diego",
    "province": "CA",
    "location": [32.7912903,-117.2544098]
  },
  {
    "name": "Anderson Valley Brewing Company",
    "city": "Boonville",
    "province": "CA",
    "location": [39.00074292,-123.3567667]
  },
  {
    "name": "Argilla Brewing Company",
    "city": "Newark",
    "province": "DE",
    "location": [39.707405,-75.6842]
  },
  {
    "name": "Atlas Brew Works",
    "city": "Washington",
    "province": "DC",
    "location": [38.9149,-76.9814]
  },
  {
    "name": "Atwater Brewery",
    "city": "Detroit",
    "province": "MI",
    "location": [42.33716188,-83.01855308]
  },
  {
    "name": "Austin Street Brewery",
    "city": "Portland",
    "province": "ME",
    "location": [43.70274921,-70.32015343]
  },
  {
    "name": "BJ'S Restaurant & Brewhouse",
    "city": "College Station",
    "province": "TX",
    "location": [30.6278,-96.3043]
  },
  {
    "name": "BJ'S Restaurant & Brewhouse",
    "city": "Fort Worth",
    "province": "TX",
    "location": [32.9099,-97.316]
  },
  {
    "name": "BJ's Restaurant & Brewhouse",
    "city": "West Covina",
    "province": "CA",
    "location": [34.07299,-117.88683]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Allen",
    "province": "TX",
    "location": [33.12741173,-96.66023355]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Broomfield",
    "province": "CO",
    "location": [39.888157,-105.074265]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Chandler",
    "province": "AZ",
    "location": [33.3055925,-111.8968812]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Chino Hills",
    "province": "CA",
    "location": [33.9808,-117.7018]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Corona",
    "province": "CA",
    "location": [33.8244,-117.5172]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Elk Grove",
    "province": "CA",
    "location": [38.4195,-121.3969]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Escondido",
    "province": "CA",
    "location": [33.069057,-117.06838]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Frederick",
    "province": "MD",
    "location": [39.383755,-77.402943]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Gainesville",
    "province": "FL",
    "location": [29.6596,-82.4135]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Glendale",
    "province": "CA",
    "location": [34.146404,-118.255104]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Huntington Beach",
    "province": "CA",
    "location": [33.658108,-118.000946]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Las Vegas",
    "province": "NV",
    "location": [36.015797,-115.118004]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Las Vegas",
    "province": "NV",
    "location": [36.26974225,-115.261461]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Miamisburg",
    "province": "OH",
    "location": [39.59796,-84.23268]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "New Braunfels",
    "province": "TX",
    "location": [29.72967,-98.07594]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Orlando",
    "province": "FL",
    "location": [28.37549264,-81.50220168]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Pearland",
    "province": "TX",
    "location": [29.555548,-95.393452]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "San Antonio",
    "province": "TX",
    "location": [29.607653,-98.6011]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Tucson",
    "province": "AZ",
    "location": [32.2214,-110.8746]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Valencia",
    "province": "CA",
    "location": [34.41742048,-118.5616153]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Webster",
    "province": "TX",
    "location": [29.545121,-95.132374]
  },
  {
    "name": "BJ's Restaurant and Brewhouse",
    "city": "Wichita",
    "province": "KS",
    "location": [37.6797,-97.2087]
  },
  {
    "name": "Bad Tom Smith Brewing",
    "city": "Cincinnati",
    "province": "OH",
    "location": [39.11976,-84.41839]
  },
  {
    "name": "Barebottle Brewing Company",
    "city": "San Francisco",
    "province": "CA",
    "location": [37.7401129,-122.409035]
  },
  {
    "name": "Barley And Hops Grill & Microbrewery",
    "city": "Frederick",
    "province": "MD",
    "location": [39.382034,-77.39959]
  },
  {
    "name": "Barley Island Brewing Company",
    "city": "Noblesville",
    "province": "IN",
    "location": [40.045274,-86.015334]
  },
  {
    "name": "Barrel Head Brewhouse",
    "city": "San Francisco",
    "province": "CA",
    "location": [37.775757,-122.446098]
  },
  {
    "name": "Bartlett Hall",
    "city": "San Francisco",
    "province": "CA",
    "location": [37.786354,-122.40912]
  },
  {
    "name": "Bastone Brewery",
    "city": "Royal Oak",
    "province": "MI",
    "location": [42.4866,-83.144]
  },
  {
    "name": "Bauhaus Brew Labs",
    "city": "Minneapolis",
    "province": "MN",
    "location": [45.000889,-93.24494224]
  },
  {
    "name": "Bayne Brewing Company",
    "city": "Cornelius",
    "province": "NC",
    "location": [35.478436,-80.89096]
  },
  {
    "name": "Bayou Teche Brewing",
    "city": "Arnaudville",
    "province": "LA",
    "location": [30.38991,-91.92611]
  },
  {
    "name": "Beach City Brewery",
    "city": "Huntington Beach",
    "province": "CA",
    "location": [33.704205,-117.99508]
  },
  {
    "name": "Bear Republic Brewery",
    "city": "Healdsburg",
    "province": "CA",
    "location": [38.61107363,-122.8713542]
  },
  {
    "name": "Beer Belly's Beverage",
    "city": "State College",
    "province": "PA",
    "location": [40.787525,-77.857124]
  },
  {
    "name": "Bel Lago Vineyards & Winery",
    "city": "Cedar",
    "province": "MI",
    "location": [44.884,-85.7248]
  },
  {
    "name": "Bell's Brewery Inc",
    "city": "Galesburg",
    "province": "MI",
    "location": [42.2843,-85.4539]
  },
  {
    "name": "BevMo!",
    "city": "Escondido",
    "province": "CA",
    "location": [33.1125,-117.1024]
  },
  {
    "name": "BevMo!",
    "city": "San Jose",
    "province": "CA",
    "location": [37.307797,-121.900794]
  },
  {
    "name": "BevMo!",
    "city": "San Luis Obispo",
    "province": "CA",
    "location": [35.2524,-120.6878]
  },
  {
    "name": "Bevmo",
    "city": "Antioch",
    "province": "CA",
    "location": [37.96173,-121.73561]
  },
  {
    "name": "Bevmo",
    "city": "Ventura",
    "province": "CA",
    "location": [34.2723,-119.2476]
  },
  {
    "name": "Big Al Brewing",
    "city": "Seattle",
    "province": "WA",
    "location": [47.51445567,-122.3526385]
  },
  {
    "name": "Big Bear Brewing Co.",
    "city": "Pompano Beach",
    "province": "FL",
    "location": [26.2538,-80.2541]
  },
  {
    "name": "Big Beaver Brewing Co",
    "city": "Loveland",
    "province": "CO",
    "location": [40.4077239,-105.1144095]
  },
  {
    "name": "Big Choice Brewing",
    "city": "Broomfield",
    "province": "CO",
    "location": [39.9104,-105.07845]
  },
  {
    "name": "Big Dog's Draft House",
    "city": "Las Vegas",
    "province": "NV",
    "location": [36.24262,-115.235886]
  },
  {
    "name": "Big Grove Brewery",
    "city": "Solon",
    "province": "IA",
    "location": [41.8069,-91.4955]
  },
  {
    "name": "Birdsong Brewing",
    "city": "Charlotte",
    "province": "NC",
    "location": [35.2407,-80.8144]
  },
  {
    "name": "Bitter Brothers Brewing Co.",
    "city": "San Diego",
    "province": "CA",
    "location": [32.8028741,-117.2121683]
  },
  {
    "name": "Bj's Restaurant & Brewhouse",
    "city": "Arlington",
    "province": "TX",
    "location": [32.67922647,-97.11079359]
  },
  {
    "name": "Bj's Restaurant & Brewhouse",
    "city": "Mcallen",
    "province": "TX",
    "location": [26.195129,-98.25944]
  },
  {
    "name": "Bj's Restaurant & Brewhouse",
    "city": "Mesquite",
    "province": "TX",
    "location": [32.809719,-96.62306]
  },
  {
    "name": "Bj's Restaurant and Brewhouse",
    "city": "Phoenix",
    "province": "AZ",
    "location": [33.67719348,-111.9765937]
  },
  {
    "name": "Bj's Restaurant and Brewhouse",
    "city": "Temple",
    "province": "TX",
    "location": [31.09187671,-97.38579597]
  },
  {
    "name": "Bj's Restaurant and Brewhouse - Mesa",
    "city": "Mesa",
    "province": "AZ",
    "location": [33.3848762,-111.6908199]
  },
  {
    "name": "Black Cloister Brewing Company",
    "city": "Toledo",
    "province": "OH",
    "location": [41.6499,-83.5401]
  },
  {
    "name": "Black Sands Brewery",
    "city": "San Francisco",
    "province": "CA",
    "location": [37.771455,-122.433855]
  },
  {
    "name": "Blind Onion Pizza and Pub",
    "city": "Portland",
    "province": "OR",
    "location": [45.53537,-122.62979]
  },
  {
    "name": "Bloodhound Brew",
    "city": "Orlando",
    "province": "FL",
    "location": [28.49397,-81.45925]
  },
  {
    "name": "Blue Bee Cider LLC",
    "city": "Richmond",
    "province": "VA",
    "location": [37.5256,-77.4414]
  },
  {
    "name": "Blue Palms Brewhouse",
    "city": "Los Angeles",
    "province": "CA",
    "location": [34.101624,-118.32295]
  },
  {
    "name": "Blue Tarp Brewing Co",
    "city": "Decatur",
    "province": "GA",
    "location": [33.77379,-84.28353]
  },
  {
    "name": "Bns Brewing & Distillery",
    "city": "Santee",
    "province": "CA",
    "location": [32.84627942,-116.9582416]
  },
  {
    "name": "Bon March\u00e9 Brasserie & Bar",
    "city": "San Francisco",
    "province": "CA",
    "location": [37.776778,-122.41688]
  },
  {
    "name": "Bonfire Brewing",
    "city": "Eagle",
    "province": "CO",
    "location": [39.65533268,-106.8287319]
  },
  {
    "name": "Bootlegger's Homemade Wine",
    "city": "Gatlinburg",
    "province": "TN",
    "location": [35.71148,-83.51991]
  },
  {
    "name": "Borderlands Brewing Company",
    "city": "Tucson",
    "province": "AZ",
    "location": [32.225517,-110.97023]
  },
  {
    "name": "Boulevard Brewing Co",
    "city": "Kansas City",
    "province": "MO",
    "location": [39.0821,-94.5965]
  },
  {
    "name": "Bozeman Brewing Company",
    "city": "Bozeman",
    "province": "MT",
    "location": [45.684788,-111.024]
  },
  {
    "name": "Breckenridge Brewery & Pub",
    "city": "Breckenridge",
    "province": "CO",
    "location": [39.4792,-106.0457]
  },
  {
    "name": "Brewer's Cask",
    "city": "Baltimore",
    "province": "MD",
    "location": [39.27518204,-76.61217116]
  },
  {
    "name": "Brewery Bar III",
    "city": "Lone Tree",
    "province": "CO",
    "location": [39.554344,-104.8831]
  },
  {
    "name": "Brewery Terra Firma",
    "city": "Traverse City",
    "province": "MI",
    "location": [44.71511826,-85.63491321]
  },
  {
    "name": "Brick & Barrel",
    "city": "Cleveland",
    "province": "OH",
    "location": [41.48949,-81.700787]
  },
  {
    "name": "Brix City Brewing",
    "city": "Little Ferry",
    "province": "NJ",
    "location": [40.85639,-74.0431]
  },
  {
    "name": "Broadway Grill & Brewery",
    "city": "Portland",
    "province": "OR",
    "location": [45.5348,-122.64815]
  },
  {
    "name": "Buckeye Beer Engine",
    "city": "Lakewood",
    "province": "OH",
    "location": [41.47709,-81.80415]
  },
  {
    "name": "Bugnutty Brewing Company",
    "city": "Merritt Island",
    "province": "FL",
    "location": [28.36932,-80.70044]
  },
  {
    "name": "Bull City Burger and Brewery",
    "city": "Durham",
    "province": "NC",
    "location": [35.99553937,-78.89989499]
  },
  {
    "name": "Burial Beer Co.",
    "city": "Asheville",
    "province": "NC",
    "location": [35.588,-82.5538]
  },
  {
    "name": "Bushwhacker Cider - Brooklyn",
    "city": "Portland",
    "province": "OR",
    "location": [45.500323,-122.652954]
  },
  {
    "name": "Calistoga Inn Restaurant Brewery",
    "city": "Calistoga",
    "province": "CA",
    "location": [38.57666,-122.57979]
  },
  {
    "name": "Cannon Brew Pub",
    "city": "Columbus",
    "province": "GA",
    "location": [32.4664,-84.9935]
  },
  {
    "name": "Carmody Irish Pub and Brewing",
    "city": "Duluth",
    "province": "MN",
    "location": [46.78997367,-92.09406017]
  },
  {
    "name": "Carolina Brewing Company",
    "city": "Holly Springs",
    "province": "NC",
    "location": [35.655663,-78.85283]
  },
  {
    "name": "Cartel Coffee Lab",
    "city": "Scottsdale",
    "province": "AZ",
    "location": [33.49834,-111.92758]
  },
  {
    "name": "Cask & Larder",
    "city": "Winter Park",
    "province": "FL",
    "location": [28.5934,-81.3561]
  },
  {
    "name": "Cellar 3",
    "city": "Poway",
    "province": "CA",
    "location": [32.94044,-117.03436]
  },
  {
    "name": "Center of the Universe Brewing Company",
    "city": "Ashland",
    "province": "VA",
    "location": [37.70885566,-77.4469105]
  },
  {
    "name": "Central Standard Brewing",
    "city": "Wichita",
    "province": "KS",
    "location": [37.6847,-97.3184]
  },
  {
    "name": "Chatty Monks Brewing Company",
    "city": "Reading",
    "province": "PA",
    "location": [40.335606,-75.95019]
  },
  {
    "name": "Chino Valley Brewery",
    "city": "Ontario",
    "province": "CA",
    "location": [34.04127,-117.61754]
  },
  {
    "name": "Chuck's Cafe",
    "city": "Syracuse",
    "province": "NY",
    "location": [43.04206,-76.13652]
  },
  {
    "name": "City Steam Brewery",
    "city": "Hartford",
    "province": "CT",
    "location": [41.768112,-72.673065]
  },
  {
    "name": "Clayton Brewing Company",
    "city": "San Dimas",
    "province": "CA",
    "location": [34.10608,-117.81773]
  },
  {
    "name": "Cloudburst Brewing",
    "city": "Seattle",
    "province": "WA",
    "location": [47.611705,-122.345117]
  },
  {
    "name": "Concrete Beach Brewery",
    "city": "Lutz",
    "province": "FL",
    "location": [25.80017911,-80.20075968]
  },
  {
    "name": "Connolly's On Fifth",
    "city": "Charlotte",
    "province": "NC",
    "location": [35.2277,-80.8415]
  },
  {
    "name": "Cool Springs Brewery",
    "city": "Franklin",
    "province": "TN",
    "location": [35.9443,-86.81992]
  },
  {
    "name": "Copious",
    "city": "Columbus",
    "province": "OH",
    "location": [39.95147,-82.99834]
  },
  {
    "name": "Copperpoint Brewing Company",
    "city": "Boynton Beach",
    "province": "FL",
    "location": [26.559551,-80.07302]
  },
  {
    "name": "Coppertail Brewing Company",
    "city": "Tampa",
    "province": "FL",
    "location": [27.95607195,-82.43028689]
  },
  {
    "name": "Corcoran Brewing Company",
    "city": "Purcellville",
    "province": "VA",
    "location": [39.14342025,-77.71259305]
  },
  {
    "name": "Corsair Artisan Distillery & Taproom",
    "city": "Nashville",
    "province": "TN",
    "location": [36.16501,-86.79527]
  },
  {
    "name": "Court Avenue Restaurant & Brewing Company",
    "city": "Des Moines",
    "province": "IA",
    "location": [41.58541709,-93.62106538]
  },
  {
    "name": "Courtyard Brewery",
    "city": "New Orleans",
    "province": "LA",
    "location": [29.939,-90.0701]
  },
  {
    "name": "Coventry Kitchens, Inc.",
    "city": "Malvern",
    "province": "PA",
    "location": [40.036598,-75.563778]
  },
  {
    "name": "Cranker's Restaurant & Brewery - Mount Pleasant",
    "city": "Mount Pleasant",
    "province": "MI",
    "location": [43.61218873,-84.76272556]
  },
  {
    "name": "Crux Fermentation Project",
    "city": "Bend",
    "province": "OR",
    "location": [44.05054,-121.30782]
  },
  {
    "name": "Culmination Brewing",
    "city": "Portland",
    "province": "OR",
    "location": [45.52894,-122.64396]
  },
  {
    "name": "Dangerous Man Brewing Co",
    "city": "Minneapolis",
    "province": "MN",
    "location": [45.00100202,-93.26619963]
  },
  {
    "name": "De La Vega's Pecan Grill and Brewery",
    "city": "Las Cruces",
    "province": "NM",
    "location": [32.31473412,-106.744547]
  },
  {
    "name": "Deep Ellum Brewing Co",
    "city": "Dallas",
    "province": "TX",
    "location": [32.780614,-96.781678]
  },
  {
    "name": "Denver Beer Co.",
    "city": "Denver",
    "province": "CO",
    "location": [39.758293,-105.007188]
  },
  {
    "name": "Denver Chop House & Brewery",
    "city": "Denver",
    "province": "CO",
    "location": [39.85380962,-104.6738076]
  },
  {
    "name": "Devil's Canyon Brewing Company",
    "city": "San Carlos",
    "province": "CA",
    "location": [37.49845,-122.243632]
  },
  {
    "name": "Diving Dog Brewhouse",
    "city": "Oakland",
    "province": "CA",
    "location": [37.80769756,-122.2697725]
  },
  {
    "name": "Dos Desperados Brewery",
    "city": "San Marcos",
    "province": "CA",
    "location": [33.137132,-117.193487]
  },
  {
    "name": "Double Shift Brewing Co",
    "city": "Kansas City",
    "province": "MO",
    "location": [39.0916,-94.5786]
  },
  {
    "name": "Downeast Cider House",
    "city": "Charlestown",
    "province": "MA",
    "location": [42.38269985,-71.05047226]
  },
  {
    "name": "Draught House Pub & Brewery",
    "city": "Austin",
    "province": "TX",
    "location": [30.310074,-97.742758]
  },
  {
    "name": "Druthers Brew Pub",
    "city": "Saratoga Springs",
    "province": "NY",
    "location": [43.08091327,-73.78625449]
  },
  {
    "name": "Dry Dock Brewing Co - South Dock",
    "city": "Aurora",
    "province": "CO",
    "location": [39.653,-104.8119]
  },
  {
    "name": "Dryhop Brewers",
    "city": "Chicago",
    "province": "IL",
    "location": [41.93938,-87.64401]
  },
  {
    "name": "Duck Rabbit Craft Brewery",
    "city": "Farmville",
    "province": "NC",
    "location": [35.600414,-77.59628]
  },
  {
    "name": "Earth Bread & Brewery",
    "city": "Philadelphia",
    "province": "PA",
    "location": [40.059185,-75.19041]
  },
  {
    "name": "Egan & Son's",
    "city": "Montclair",
    "province": "NJ",
    "location": [40.8176,-74.2118]
  },
  {
    "name": "Elephant & Castle",
    "city": "Chicago",
    "province": "IL",
    "location": [41.879234,-87.63126]
  },
  {
    "name": "Emmett's Brewing Company",
    "city": "Wheaton",
    "province": "IL",
    "location": [41.865105,-88.10773]
  },
  {
    "name": "Empirical Brewery",
    "city": "Chicago",
    "province": "IL",
    "location": [41.975968,-87.675137]
  },
  {
    "name": "Engrained Brewing Company",
    "city": "Springfield",
    "province": "IL",
    "location": [39.76,-89.7178]
  },
  {
    "name": "Epidemic Ales",
    "city": "Concord",
    "province": "CA",
    "location": [38.009935,-122.038984]
  },
  {
    "name": "Escutcheon Brewing Co.",
    "city": "Winchester",
    "province": "VA",
    "location": [39.19538,-78.16305]
  },
  {
    "name": "Evil Czech Brewery",
    "city": "Mishawaka",
    "province": "IN",
    "location": [41.69397,-86.18279]
  },
  {
    "name": "Fall Brewing Co.",
    "city": "San Diego",
    "province": "CA",
    "location": [32.75998009,-117.1302984]
  },
  {
    "name": "Falling Sky Brewing",
    "city": "Eugene",
    "province": "OR",
    "location": [44.0451,-123.0921]
  },
  {
    "name": "Fat Head's Brewery & Saloon",
    "city": "North Olmsted",
    "province": "OH",
    "location": [41.4263,-81.8942]
  },
  {
    "name": "Fat Point Brewing",
    "city": "Punta Gorda",
    "province": "FL",
    "location": [26.942034,-82.02922]
  },
  {
    "name": "Fate Brewing Company",
    "city": "Boulder",
    "province": "CO",
    "location": [40.015041,-105.246272]
  },
  {
    "name": "Fegley's Allentown Brew Works",
    "city": "Allentown",
    "province": "PA",
    "location": [40.6013926,-75.47421813]
  },
  {
    "name": "Fenton Winery & Brewery",
    "city": "Fenton",
    "province": "MI",
    "location": [42.852455,-83.70322]
  },
  {
    "name": "Fiction Beer Company",
    "city": "Denver",
    "province": "CO",
    "location": [39.74032636,-104.9056578]
  },
  {
    "name": "Figueroa Mountain Brewing Company",
    "city": "Santa Barbara",
    "province": "CA",
    "location": [34.41457978,-119.6908621]
  },
  {
    "name": "Fire Station 1 Restaurant & Brewing Co.",
    "city": "Silver Spring",
    "province": "MD",
    "location": [38.99161405,-77.02628521]
  },
  {
    "name": "Firetrucker Brewery",
    "city": "Ankeny",
    "province": "IA",
    "location": [41.73002,-93.60989]
  },
  {
    "name": "Flagstaff Brewing Company",
    "city": "Flagstaff",
    "province": "AZ",
    "location": [35.19755788,-111.6484685]
  },
  {
    "name": "Flix Brewhouse",
    "city": "Round Rock",
    "province": "TX",
    "location": [30.4887,-97.6799]
  },
  {
    "name": "Flossmoor Station Restaurant & Brewery",
    "city": "Flossmoor",
    "province": "IL",
    "location": [41.54341748,-87.67874049]
  },
  {
    "name": "Flying Goose Brew Pub & Grille",
    "city": "New London",
    "province": "NH",
    "location": [43.39957495,-71.9602896]
  },
  {
    "name": "Fogbelt Brewing Company",
    "city": "Santa Rosa",
    "province": "CA",
    "location": [38.449013,-122.72667]
  },
  {
    "name": "Foothills Brewing",
    "city": "Winston Salem",
    "province": "NC",
    "location": [36.09752626,-80.25093734]
  },
  {
    "name": "Foppiano Vineyards",
    "city": "Healdsburg",
    "province": "CA",
    "location": [38.589035,-122.84981]
  },
  {
    "name": "Fordham Brewing Co.",
    "city": "Dover",
    "province": "DE",
    "location": [39.154007,-75.48836]
  },
  {
    "name": "Fortside Brewing Company",
    "city": "Vancouver",
    "province": "WA",
    "location": [45.63834,-122.60109]
  },
  {
    "name": "Founders Brewing Co.",
    "city": "Grand Rapids",
    "province": "MI",
    "location": [42.958393,-85.673706]
  },
  {
    "name": "Fox Brewing",
    "city": "West Des Moines",
    "province": "IA",
    "location": [41.568626,-93.71905]
  },
  {
    "name": "Fox and Hound English Pub",
    "city": "Lubbock",
    "province": "TX",
    "location": [33.52071643,-101.9017878]
  },
  {
    "name": "Free State Brewing Company",
    "city": "Lawrence",
    "province": "KS",
    "location": [38.97170321,-95.23576524]
  },
  {
    "name": "Fry's Marketplace",
    "city": "Phoenix",
    "province": "AZ",
    "location": [33.30389,-111.99888]
  },
  {
    "name": "Fry's Marketplace",
    "city": "Phoenix",
    "province": "AZ",
    "location": [33.58129,-111.97913]
  },
  {
    "name": "Fuddruckers",
    "city": "Fairfield",
    "province": "CA",
    "location": [38.258827,-122.05986]
  },
  {
    "name": "Funky Buddha Brewery And Lounge",
    "city": "Boca Raton",
    "province": "FL",
    "location": [26.37512163,-80.07667454]
  },
  {
    "name": "Garage Brewing Co",
    "city": "Temecula",
    "province": "CA",
    "location": [33.486077,-117.144504]
  },
  {
    "name": "Gillette Brewing Company",
    "city": "Gillette",
    "province": "WY",
    "location": [44.292183,-105.50401]
  },
  {
    "name": "Gizmo Brew Works",
    "city": "Raleigh",
    "province": "NC",
    "location": [35.89589,-78.74511]
  },
  {
    "name": "Glacier Brewhouse",
    "city": "Anchorage",
    "province": "AK",
    "location": [61.217567,-149.89629]
  },
  {
    "name": "Goodlife Brewing Co",
    "city": "Bend",
    "province": "OR",
    "location": [44.0506,-121.3305]
  },
  {
    "name": "Goose Island Brewery Restaurant",
    "city": "Chicago",
    "province": "IL",
    "location": [41.97683224,-87.89725542]
  },
  {
    "name": "Gordon Biersch",
    "city": "Myrtle Beach",
    "province": "SC",
    "location": [33.6686265,-78.93937318]
  },
  {
    "name": "Gordon Biersch Brewery Restaurant",
    "city": "Atlanta",
    "province": "GA",
    "location": [33.843385,-84.372368]
  },
  {
    "name": "Gordon Biersch Brewery Restaurant",
    "city": "Bolingbrook",
    "province": "IL",
    "location": [41.71863909,-88.04074287]
  },
  {
    "name": "Gordon Biersch Brewery Restaurant",
    "city": "Broomfield",
    "province": "CO",
    "location": [39.93066919,-105.1352119]
  },
  {
    "name": "Gordon Biersch Brewery Restaurant",
    "city": "Kansas City",
    "province": "MO",
    "location": [39.097344,-94.58298]
  },
  {
    "name": "Gordon Biersch Brewery Restaurant",
    "city": "Phoenix",
    "province": "AZ",
    "location": [33.65442339,-111.9290972]
  },
  {
    "name": "Gordon Biersch Brewery Restaurant",
    "city": "Seattle",
    "province": "WA",
    "location": [47.61275608,-122.3348397]
  },
  {
    "name": "Gordon Biersch Brewery Restaurant",
    "city": "Virginia Beach",
    "province": "VA",
    "location": [36.8433,-76.1347]
  },
  {
    "name": "Granite City",
    "city": "Lincoln",
    "province": "NE",
    "location": [40.81458671,-96.63502067]
  },
  {
    "name": "Granite City Food & Brewery",
    "city": "Fort Wayne",
    "province": "IN",
    "location": [41.1114,-85.13592]
  },
  {
    "name": "Granite City Food & Brewery",
    "city": "Franklin",
    "province": "TN",
    "location": [35.933685,-86.82152]
  },
  {
    "name": "Granite City Food & Brewery",
    "city": "Kansas City",
    "province": "KS",
    "location": [39.123824,-94.825226]
  },
  {
    "name": "Granite City Food & Brewery",
    "city": "Naperville",
    "province": "IL",
    "location": [41.8029,-88.129329]
  },
  {
    "name": "Granite City Food & Brewery",
    "city": "Northville",
    "province": "MI",
    "location": [42.423885,-83.43549]
  },
  {
    "name": "Granite City Food & Brewery",
    "city": "Wichita",
    "province": "KS",
    "location": [37.7308,-97.4632]
  },
  {
    "name": "Gravity Brewing",
    "city": "Louisville",
    "province": "CO",
    "location": [39.977,-105.1292]
  },
  {
    "name": "Greenbush Brewing Company",
    "city": "Sawyer",
    "province": "MI",
    "location": [41.885659,-86.594577]
  },
  {
    "name": "Greenpoint Beer and Ale Company",
    "city": "Brooklyn",
    "province": "NY",
    "location": [40.72495778,-73.95725727]
  },
  {
    "name": "Gresso's Restaurant & Bar",
    "city": "Columbus",
    "province": "OH",
    "location": [39.94243031,-82.99705188]
  },
  {
    "name": "Grist Iron Brewing Company",
    "city": "Burdett",
    "province": "NY",
    "location": [42.47092786,-76.86581548]
  },
  {
    "name": "Grizzly Peak Brewing Co",
    "city": "Ann Arbor",
    "province": "MI",
    "location": [42.28055,-83.7488]
  },
  {
    "name": "Hailey's Harp Pub",
    "city": "Metuchen",
    "province": "NJ",
    "location": [40.54121601,-74.36098337]
  },
  {
    "name": "Hamburger Mary's",
    "city": "Chicago",
    "province": "IL",
    "location": [41.97997,-87.66856]
  },
  {
    "name": "Hangar 24 Craft Brewery",
    "city": "Redlands",
    "province": "CA",
    "location": [34.0831,-117.142]
  },
  {
    "name": "Harmon Tap Room",
    "city": "Tacoma",
    "province": "WA",
    "location": [47.26204115,-122.4458349]
  },
  {
    "name": "Harmonic Brewing",
    "city": "San Francisco",
    "province": "CA",
    "location": [37.7516236,-122.3900315]
  },
  {
    "name": "Hifi Homebrew and Bbq Supply",
    "city": "Clearwater",
    "province": "FL",
    "location": [27.981428,-82.754754]
  },
  {
    "name": "Highland Water",
    "city": "Denver",
    "province": "CO",
    "location": [39.692422,-104.891554]
  },
  {
    "name": "Hop Valley Brewing Co.",
    "city": "Eugene",
    "province": "OR",
    "location": [44.05819,-123.10751]
  },
  {
    "name": "HopFusion Ale Works",
    "city": "Fort Worth",
    "province": "TX",
    "location": [32.74157,-97.32472]
  },
  {
    "name": "Hope Valley Brewing Co",
    "city": "Durham",
    "province": "NC",
    "location": [35.9205,-78.9595]
  },
  {
    "name": "Hopping Gnome Brewing Company",
    "city": "Wichita",
    "province": "KS",
    "location": [37.68624845,-97.31676826]
  },
  {
    "name": "Hops Haven",
    "city": "Sheboygan",
    "province": "WI",
    "location": [43.75886,-87.72299]
  },
  {
    "name": "Hurry Back",
    "city": "Nashville",
    "province": "TN",
    "location": [36.15117618,-86.80452485]
  },
  {
    "name": "Indeed Brewing Company",
    "city": "Minneapolis",
    "province": "MN",
    "location": [45.00332792,-93.25146792]
  },
  {
    "name": "Intrinsic Smokehouse & Brewery",
    "city": "Garland",
    "province": "TX",
    "location": [32.913612,-96.637024]
  },
  {
    "name": "Irish Bred Pub",
    "city": "Opelika",
    "province": "AL",
    "location": [32.647247,-85.38011]
  },
  {
    "name": "Iron Hill Brewery & Restaurant",
    "city": "Phoenixville",
    "province": "PA",
    "location": [40.13398,-75.51377]
  },
  {
    "name": "Iron Horse Brewery",
    "city": "Ellensburg",
    "province": "WA",
    "location": [46.99611386,-120.5485016]
  },
  {
    "name": "Iron Springs Pub & Brewery",
    "city": "Fairfax",
    "province": "CA",
    "location": [37.98617,-122.58404]
  },
  {
    "name": "Jackalope Brewing Company",
    "city": "Nashville",
    "province": "TN",
    "location": [36.15035077,-86.7793107]
  },
  {
    "name": "Jailbreak Brewing Company",
    "city": "Laurel",
    "province": "MD",
    "location": [39.12405088,-76.82314061]
  },
  {
    "name": "Jamba Juice",
    "city": "Golden",
    "province": "CO",
    "location": [39.73696,-105.160425]
  },
  {
    "name": "Jc's Kitchen",
    "city": "Durham",
    "province": "NC",
    "location": [35.99034,-78.89252]
  },
  {
    "name": "Jekyll Brewing",
    "city": "Alpharetta",
    "province": "GA",
    "location": [34.08836,-84.24685]
  },
  {
    "name": "Justice Brewing",
    "city": "Everett",
    "province": "WA",
    "location": [47.98507,-122.18844]
  },
  {
    "name": "Kroger",
    "city": "Houston",
    "province": "TX",
    "location": [29.748711,-95.500832]
  },
  {
    "name": "Kroger",
    "city": "Houston",
    "province": "TX",
    "location": [29.753689,-95.604916]
  },
  {
    "name": "Kroger",
    "city": "Houston",
    "province": "TX",
    "location": [29.770344,-95.599036]
  },
  {
    "name": "Kroger",
    "city": "Houston",
    "province": "TX",
    "location": [29.977857,-95.490986]
  },
  {
    "name": "Kroger",
    "city": "Mesquite",
    "province": "TX",
    "location": [32.81378817,-96.63404703]
  },
  {
    "name": "La Legendaria",
    "city": "San Antonio",
    "province": "TX",
    "location": [22.13076115,-101.0190167]
  },
  {
    "name": "Lagerhead's Smokehouse",
    "city": "Medina",
    "province": "OH",
    "location": [41.19722,-81.88717]
  },
  {
    "name": "Lake Anne Brew House",
    "city": "Reston",
    "province": "VA",
    "location": [38.96795,-77.34198]
  },
  {
    "name": "Lakefront Brewery",
    "city": "Milwaukee",
    "province": "WI",
    "location": [43.05487205,-87.90517087]
  },
  {
    "name": "Leesburg Brewing Company",
    "city": "Leesburg",
    "province": "VA",
    "location": [39.11439,-77.56541]
  },
  {
    "name": "Left Hand Brewing Co",
    "city": "Longmont",
    "province": "CO",
    "location": [40.1586,-105.1155]
  },
  {
    "name": "Legends Craft Brewery",
    "city": "Anaheim",
    "province": "CA",
    "location": [33.815952,-117.89795]
  },
  {
    "name": "Lennie's  (Bloomington Brewing Company)",
    "city": "Bloomington",
    "province": "IN",
    "location": [39.17169277,-86.5113176]
  },
  {
    "name": "Lone Tree Brewery Co.",
    "city": "Lone Tree",
    "province": "CO",
    "location": [39.56258375,-104.8928082]
  },
  {
    "name": "Loowit Brewing Company",
    "city": "Vancouver",
    "province": "WA",
    "location": [45.625195,-122.67368]
  },
  {
    "name": "Lost Rhino Brewing Company",
    "city": "Ashburn",
    "province": "VA",
    "location": [39.01601,-77.47567]
  },
  {
    "name": "Loveland Aleworks",
    "city": "Loveland",
    "province": "CO",
    "location": [40.3955,-105.0775]
  },
  {
    "name": "Mad Fox Brewing Company",
    "city": "Falls Church",
    "province": "VA",
    "location": [38.88636,-77.17721]
  },
  {
    "name": "Magnolia Gastropub & Brewery",
    "city": "San Francisco",
    "province": "CA",
    "location": [37.770223,-122.445354]
  },
  {
    "name": "Main Street Station Casino, Brewery & Hotel",
    "city": "Las Vegas",
    "province": "NV",
    "location": [36.174527,-115.144582]
  },
  {
    "name": "Mainstreet Pub",
    "city": "Melbourne",
    "province": "FL",
    "location": [28.0784,-80.6091]
  },
  {
    "name": "Manayunk Brewery and Restaurant",
    "city": "Philadelphia",
    "province": "PA",
    "location": [40.022568,-75.21874]
  },
  {
    "name": "Marble Brewery",
    "city": "Albuquerque",
    "province": "NM",
    "location": [35.0928,-106.6467]
  },
  {
    "name": "Marinades Pizza Bistro",
    "city": "Rockford",
    "province": "MI",
    "location": [43.1209,-85.5585]
  },
  {
    "name": "Maui Brewing Co. Brewery",
    "city": "Lahaina",
    "province": "HI",
    "location": [20.88026521,-156.6781282]
  },
  {
    "name": "Max's Fanno Creek Brew Pub",
    "city": "Portland",
    "province": "OR",
    "location": [45.42904102,-122.7739566]
  },
  {
    "name": "Mayflower Brewing Company",
    "city": "Plymouth",
    "province": "MA",
    "location": [41.94919,-70.711544]
  },
  {
    "name": "Mayo Family Winery",
    "city": "Glen Ellen",
    "province": "CA",
    "location": [38.3705194,-122.5171231]
  },
  {
    "name": "McKenzie Brew House",
    "city": "Malvern",
    "province": "PA",
    "location": [40.0399,-75.543]
  },
  {
    "name": "McMenamins Mill Creek",
    "city": "Bothell",
    "province": "WA",
    "location": [47.876667,-122.212327]
  },
  {
    "name": "McMenamins Queen Anne",
    "city": "Seattle",
    "province": "WA",
    "location": [47.6257,-122.35213]
  },
  {
    "name": "McMenamins Raleigh Hills Pub",
    "city": "Portland",
    "province": "OR",
    "location": [45.4874,-122.74751]
  },
  {
    "name": "Middle Ages Brewing Company",
    "city": "Syracuse",
    "province": "NY",
    "location": [43.05102913,-76.16199431]
  },
  {
    "name": "Midnight Brewery",
    "city": "Rockville",
    "province": "VA",
    "location": [37.69892,-77.66573]
  },
  {
    "name": "Mike Hess Brewing",
    "city": "San Diego",
    "province": "CA",
    "location": [32.747669,-117.128426]
  },
  {
    "name": "Milwaukee Ale House",
    "city": "Milwaukee",
    "province": "WI",
    "location": [43.03351,-87.9097]
  },
  {
    "name": "Milwaukee Brewing Company",
    "city": "Milwaukee",
    "province": "WI",
    "location": [43.024912,-87.91285499]
  },
  {
    "name": "Minneapolis Town Hall Brewery",
    "city": "Minneapolis",
    "province": "MN",
    "location": [44.973194,-93.2478]
  },
  {
    "name": "Montauk Brewing Company",
    "city": "Montauk",
    "province": "NY",
    "location": [41.03671015,-71.94402705]
  },
  {
    "name": "Moosejaw Pizza & Dells Brewing Co",
    "city": "Wisconsin Dells",
    "province": "WI",
    "location": [43.5888,-89.7918]
  },
  {
    "name": "Mother Earth Brew Co.",
    "city": "Vista",
    "province": "CA",
    "location": [33.20242453,-117.2423704]
  },
  {
    "name": "Mother Road Brewing Company",
    "city": "Flagstaff",
    "province": "AZ",
    "location": [35.19693,-111.65228]
  },
  {
    "name": "Mother's Brewing Company",
    "city": "Springfield",
    "province": "MO",
    "location": [37.20754199,-93.29898171]
  },
  {
    "name": "Mugshots Burger N' Brew",
    "city": "Bellevue",
    "province": "WA",
    "location": [47.6226,-122.1323]
  },
  {
    "name": "Napa Smith Brewery & Winery",
    "city": "Napa",
    "province": "CA",
    "location": [38.2243,-122.2568]
  },
  {
    "name": "Natty Greene's Pub & Brewing Co.",
    "city": "Greensboro",
    "province": "NC",
    "location": [36.06943,-79.7905]
  },
  {
    "name": "Nebraska Brewing Company",
    "city": "Papillion",
    "province": "NE",
    "location": [41.13448407,-96.02715969]
  },
  {
    "name": "Nectar Wine Lounge (reported Closed)",
    "city": "Burlingame",
    "province": "CA",
    "location": [37.579006,-122.345822]
  },
  {
    "name": "Nevin's Brewing Company",
    "city": "Plainfield",
    "province": "IL",
    "location": [41.65755,-88.20254]
  },
  {
    "name": "New England Brewing Company",
    "city": "Woodbridge",
    "province": "CT",
    "location": [41.33920684,-72.97987027]
  },
  {
    "name": "New Glarus Brewing Company",
    "city": "New Glarus",
    "province": "WI",
    "location": [42.79571556,-89.62972641]
  },
  {
    "name": "New Hope Winery",
    "city": "New Hope",
    "province": "PA",
    "location": [40.350922,-75.012533]
  },
  {
    "name": "Newport Beach Brewing Co.",
    "city": "Newport Beach",
    "province": "CA",
    "location": [33.614117,-117.92985]
  },
  {
    "name": "Night Shift Brewing",
    "city": "Everett",
    "province": "MA",
    "location": [42.40498,-71.06851]
  },
  {
    "name": "North Mountain Brewing Company",
    "city": "Phoenix",
    "province": "AZ",
    "location": [33.567978,-112.066376]
  },
  {
    "name": "Nosh On Seventh",
    "city": "Portland",
    "province": "OR",
    "location": [45.508,-122.6586]
  },
  {
    "name": "O.H.S.O. Eatery + Distillery",
    "city": "Scottsdale",
    "province": "AZ",
    "location": [33.6276,-111.89348]
  },
  {
    "name": "Oak City Brewing",
    "city": "Knightdale",
    "province": "NC",
    "location": [35.79379229,-78.47663467]
  },
  {
    "name": "Oceanside Ale Works",
    "city": "Oceanside",
    "province": "CA",
    "location": [33.21166604,-117.2727525]
  },
  {
    "name": "Offbeat Brewing Company",
    "city": "Escondido",
    "province": "CA",
    "location": [33.10856433,-117.116704]
  },
  {
    "name": "Oggi's Pizza & Brewing Co",
    "city": "Orange",
    "province": "CA",
    "location": [33.827366,-117.8378]
  },
  {
    "name": "Oggis Pizza & Brewing Co",
    "city": "Apple Valley",
    "province": "CA",
    "location": [34.471004,-117.24479]
  },
  {
    "name": "Oggis Pizza & Brewing Co",
    "city": "Tustin",
    "province": "CA",
    "location": [33.742405,-117.81726]
  },
  {
    "name": "Old Ivy Brewery and Taproom",
    "city": "Vancouver",
    "province": "WA",
    "location": [45.62901,-122.67225]
  },
  {
    "name": "Old Market Pub & Brewery",
    "city": "Portland",
    "province": "OR",
    "location": [45.465916,-122.748024]
  },
  {
    "name": "Old Ox Brewery",
    "city": "Ashburn",
    "province": "VA",
    "location": [39.02376615,-77.45480491]
  },
  {
    "name": "On The Tracks Brewery",
    "city": "Carlsbad",
    "province": "CA",
    "location": [33.13867788,-117.2735811]
  },
  {
    "name": "Our Mutual Friend Brewing Company",
    "city": "Denver",
    "province": "CO",
    "location": [39.76060651,-104.9825338]
  },
  {
    "name": "Outer Banks Brewing Station",
    "city": "Kill Devil Hills",
    "province": "NC",
    "location": [36.00948,-75.65945]
  },
  {
    "name": "PA Wine & Spirits",
    "city": "Hatfield",
    "province": "PA",
    "location": [40.29092518,-75.26610413]
  },
  {
    "name": "Pacific Beach AleHouse",
    "city": "San Diego",
    "province": "CA",
    "location": [32.79425,-117.25526]
  },
  {
    "name": "Pacific Coast Brewing-oakland",
    "city": "Oakland",
    "province": "CA",
    "location": [37.801439,-122.27432]
  },
  {
    "name": "Pale Fire Brewing Co.",
    "city": "Harrisonburg",
    "province": "VA",
    "location": [38.44707325,-78.87199368]
  },
  {
    "name": "Palmaz Vineyards",
    "city": "Napa",
    "province": "CA",
    "location": [38.3232,-122.2244]
  },
  {
    "name": "Pearl Brewery",
    "city": "San Antonio",
    "province": "TX",
    "location": [29.443813,-98.47995]
  },
  {
    "name": "People's Brewing Company",
    "city": "Lafayette",
    "province": "IN",
    "location": [40.43762132,-86.88658209]
  },
  {
    "name": "Perennial Artisan Ales",
    "city": "Saint Louis",
    "province": "MO",
    "location": [38.545544,-90.26534]
  },
  {
    "name": "Perry Street Brewing",
    "city": "Spokane",
    "province": "WA",
    "location": [47.646243,-117.389928]
  },
  {
    "name": "Petaluma Hills Brewing Company",
    "city": "Petaluma",
    "province": "CA",
    "location": [38.27209893,-122.663877]
  },
  {
    "name": "Pinthouse Pizza",
    "city": "Austin",
    "province": "TX",
    "location": [30.236082,-97.795906]
  },
  {
    "name": "Pisgah Brewing Company",
    "city": "Black Mountain",
    "province": "NC",
    "location": [35.60766154,-82.35853672]
  },
  {
    "name": "Pismo Brewing Company",
    "city": "Pismo Beach",
    "province": "CA",
    "location": [35.14149,-120.640594]
  },
  {
    "name": "Pizza Box",
    "city": "Portland",
    "province": "OR",
    "location": [45.5199111,-122.6564392]
  },
  {
    "name": "Platform Brewhouse",
    "city": "Cleveland",
    "province": "OH",
    "location": [41.47992098,-81.71400137]
  },
  {
    "name": "Porch Swing Pub",
    "city": "Houston",
    "province": "TX",
    "location": [29.770039,-95.397675]
  },
  {
    "name": "Portsmouth Brewery",
    "city": "Portsmouth",
    "province": "NH",
    "location": [43.078007,-70.757599]
  },
  {
    "name": "Powerhouse Brewing Company",
    "city": "Columbus",
    "province": "IN",
    "location": [39.20251003,-85.92170119]
  },
  {
    "name": "Prairie Street Brewhouse",
    "city": "Rockford",
    "province": "IL",
    "location": [42.27329,-89.08717]
  },
  {
    "name": "Pranksters Too",
    "city": "Scottsdale",
    "province": "AZ",
    "location": [33.47895458,-111.9110298]
  },
  {
    "name": "Pratt Street Ale House",
    "city": "Baltimore",
    "province": "MD",
    "location": [39.2866,-76.618154]
  },
  {
    "name": "Prescott Brewing Company",
    "city": "Prescott",
    "province": "AZ",
    "location": [34.5419,-112.4715]
  },
  {
    "name": "Preyer Brewing Company",
    "city": "Greensboro",
    "province": "NC",
    "location": [36.07939157,-79.79394234]
  },
  {
    "name": "Project Pie",
    "city": "Chula Vista",
    "province": "CA",
    "location": [32.63060682,-117.0869671]
  },
  {
    "name": "Prost Brewing",
    "city": "Denver",
    "province": "CO",
    "location": [39.76138,-105.00667]
  },
  {
    "name": "Pyramid Alehouse",
    "city": "Seattle",
    "province": "WA",
    "location": [47.59157826,-122.3343515]
  },
  {
    "name": "Pyramid Alehouse",
    "city": "Walnut Creek",
    "province": "CA",
    "location": [37.89925,-122.061844]
  },
  {
    "name": "Radius Brewing Company",
    "city": "Emporia",
    "province": "KS",
    "location": [38.40537942,-96.18131161]
  },
  {
    "name": "Rahr & Sons Brewing Co.",
    "city": "Fort Worth",
    "province": "TX",
    "location": [32.7368,-97.3276]
  },
  {
    "name": "Ram Restaurant & Brewery",
    "city": "Puyallup",
    "province": "WA",
    "location": [47.115047,-122.290318]
  },
  {
    "name": "Ram Restaurant & Brewery",
    "city": "Seattle",
    "province": "WA",
    "location": [47.66412289,-122.2980666]
  },
  {
    "name": "Ram Restaurant & Brewery - Tacoma",
    "city": "Tacoma",
    "province": "WA",
    "location": [47.2793478,-122.475373]
  },
  {
    "name": "Ramblin Road Craft Brewery",
    "city": "Spokane",
    "province": "WA",
    "location": [47.66405,-117.39479]
  },
  {
    "name": "Realerevival Brewing",
    "city": "Cambridge",
    "province": "MD",
    "location": [38.57023838,-76.07758641]
  },
  {
    "name": "Reaver Beach Brewing Company",
    "city": "Virginia Beach",
    "province": "VA",
    "location": [36.78814335,-76.06032153]
  },
  {
    "name": "Red Brick Station Restaurant & Brew Pub",
    "city": "Nottingham",
    "province": "MD",
    "location": [39.372063,-76.46448]
  },
  {
    "name": "Red Clay Ciderworks",
    "city": "Charlotte",
    "province": "NC",
    "location": [35.19456,-80.87482]
  },
  {
    "name": "Red Cypress Brewery LLC",
    "city": "Winter Springs",
    "province": "FL",
    "location": [28.7049,-81.281]
  },
  {
    "name": "Red Horn Coffee House & Brewing Co",
    "city": "Cedar Park",
    "province": "TX",
    "location": [30.53396191,-97.7809602]
  },
  {
    "name": "Redhook Brewery",
    "city": "Portsmouth",
    "province": "NH",
    "location": [43.08790761,-70.80425765]
  },
  {
    "name": "Redhook Brewery",
    "city": "Woodinville",
    "province": "WA",
    "location": [47.7329,-122.1499]
  },
  {
    "name": "Relic Brewing",
    "city": "Plainville",
    "province": "CT",
    "location": [41.66653538,-72.86782597]
  },
  {
    "name": "Reverend Nat's Hard Cider",
    "city": "Portland",
    "province": "OR",
    "location": [45.53599,-122.66411]
  },
  {
    "name": "Revolver Brewery",
    "city": "Granbury",
    "province": "TX",
    "location": [32.417637,-97.67024]
  },
  {
    "name": "Robert Mondavi Winery",
    "city": "Oakville",
    "province": "CA",
    "location": [38.5132,-122.4366]
  },
  {
    "name": "Rochester Mills Beer Company",
    "city": "Rochester",
    "province": "MI",
    "location": [42.6802,-83.1314]
  },
  {
    "name": "Rock Bottom Brewery",
    "city": "Broomfield",
    "province": "CO",
    "location": [39.88925351,-105.0693297]
  },
  {
    "name": "Rock Bottom Brewery",
    "city": "Denver",
    "province": "CO",
    "location": [39.7474795,-104.994972]
  },
  {
    "name": "Rock Bottom Restaurant & Brewery",
    "city": "Seattle",
    "province": "WA",
    "location": [47.6091,-122.3342]
  },
  {
    "name": "Rock Bottom Restaurant & Brwry",
    "city": "Cincinnati",
    "province": "OH",
    "location": [39.103198,-84.506489]
  },
  {
    "name": "Rocket Republic Brewing Company, Inc.",
    "city": "Madison",
    "province": "AL",
    "location": [34.6731,-86.7735]
  },
  {
    "name": "Rogue Ales Public House",
    "city": "Astoria",
    "province": "OR",
    "location": [46.1967,-123.7973]
  },
  {
    "name": "Rooftop Brewing Company",
    "city": "Seattle",
    "province": "WA",
    "location": [47.65576655,-122.3730073]
  },
  {
    "name": "Rusty Nickel Brewing",
    "city": "Buffalo",
    "province": "NY",
    "location": [42.8324,-78.7422]
  },
  {
    "name": "Saint Archer Brewing Company",
    "city": "San Diego",
    "province": "CA",
    "location": [32.88051394,-117.1631384]
  },
  {
    "name": "Samuel Adams Brewery",
    "city": "Jamaica Plain",
    "province": "MA",
    "location": [42.31451355,-71.10318078]
  },
  {
    "name": "Sbc Restaurant & Brewery",
    "city": "Southport",
    "province": "CT",
    "location": [41.13948,-73.277596]
  },
  {
    "name": "Schram Vineyards",
    "city": "Waconia",
    "province": "MN",
    "location": [44.84318145,-93.74558687]
  },
  {
    "name": "Scotty's Brewhouse",
    "city": "Fort Wayne",
    "province": "IN",
    "location": [41.058647,-85.22204]
  },
  {
    "name": "Sequoia Brewing Company",
    "city": "Fresno",
    "province": "CA",
    "location": [36.757757,-119.802251]
  },
  {
    "name": "Seven Bridges Grille & Brewery",
    "city": "Jacksonville",
    "province": "FL",
    "location": [30.261524,-81.553796]
  },
  {
    "name": "Sin City Brewing Co.",
    "city": "Las Vegas",
    "province": "NV",
    "location": [36.1088524,-115.1696777]
  },
  {
    "name": "Sin City Brewing Company",
    "city": "Las Vegas",
    "province": "NV",
    "location": [36.1087032,-115.1724238]
  },
  {
    "name": "Sketchbook Brewing Co.",
    "city": "Evanston",
    "province": "IL",
    "location": [42.03292054,-87.67903358]
  },
  {
    "name": "Slanted Rock Brewing Co",
    "city": "Meridian",
    "province": "ID",
    "location": [43.59133291,-116.3666511]
  },
  {
    "name": "Small Batch Beer Co",
    "city": "Winston Salem",
    "province": "NC",
    "location": [36.0997,-80.2471]
  },
  {
    "name": "Smoky Mountain Brewery",
    "city": "Gatlinburg",
    "province": "TN",
    "location": [35.70754,-83.52044]
  },
  {
    "name": "Smoky Mountain Brewery",
    "city": "Pigeon Forge",
    "province": "TN",
    "location": [35.80689,-83.57754]
  },
  {
    "name": "Some Brewing Company",
    "city": "York",
    "province": "ME",
    "location": [43.15059686,-70.66592932]
  },
  {
    "name": "Southern Brewing",
    "city": "Tampa",
    "province": "FL",
    "location": [27.98616652,-82.45157221]
  },
  {
    "name": "Southern Brewing Company",
    "city": "Athens",
    "province": "GA",
    "location": [33.98343851,-83.34810019]
  },
  {
    "name": "Speakeasy Ales & Lagers",
    "city": "San Francisco",
    "province": "CA",
    "location": [37.73838696,-122.3809036]
  },
  {
    "name": "Spyhouse Coffee",
    "city": "Minneapolis",
    "province": "MN",
    "location": [44.99888899,-93.2463878]
  },
  {
    "name": "Starr Hill Brewery",
    "city": "Crozet",
    "province": "VA",
    "location": [38.069092,-78.68753672]
  },
  {
    "name": "Stem Ciders",
    "city": "Denver",
    "province": "CO",
    "location": [39.761694,-104.98384]
  },
  {
    "name": "Stickman Brews",
    "city": "Royersford",
    "province": "PA",
    "location": [40.19566,-75.5337]
  },
  {
    "name": "Stone Cellar Brewpub",
    "city": "Appleton",
    "province": "WI",
    "location": [44.2532,-88.4034]
  },
  {
    "name": "Strangeways Brewing",
    "city": "Richmond",
    "province": "VA",
    "location": [37.5864,-77.4832]
  },
  {
    "name": "Subway",
    "city": "Milwaukee",
    "province": "WI",
    "location": [43.059647,-87.914116]
  },
  {
    "name": "Sufferfest Beer Co",
    "city": "San Jose",
    "province": "CA",
    "location": [37.315174,-121.866429]
  },
  {
    "name": "Summit Brewing Company",
    "city": "Saint Paul",
    "province": "MN",
    "location": [44.9143,-93.1404]
  },
  {
    "name": "Sun King Tap Room and Small-Batch Brewery",
    "city": "Fishers",
    "province": "IN",
    "location": [39.928238,-86.02452]
  },
  {
    "name": "Swamp Head Brewery",
    "city": "Gainesville",
    "province": "FL",
    "location": [29.62488,-82.38912]
  },
  {
    "name": "Sweetwater Tavern",
    "city": "Centreville",
    "province": "VA",
    "location": [38.829315,-77.43901]
  },
  {
    "name": "Ten 10 Brewing Company",
    "city": "Orlando",
    "province": "FL",
    "location": [28.563698,-81.36597]
  },
  {
    "name": "Tenacity Brewing",
    "city": "Flint",
    "province": "MI",
    "location": [43.01534,-83.69711]
  },
  {
    "name": "The Abner Ale House",
    "city": "Norman",
    "province": "OK",
    "location": [35.22138872,-97.44292873]
  },
  {
    "name": "The Answer Brewpub Co",
    "city": "Richmond",
    "province": "VA",
    "location": [37.59358,-77.50793]
  },
  {
    "name": "The Bakers' Brewery LLC",
    "city": "Silverthorne",
    "province": "CO",
    "location": [39.629753,-106.06746]
  },
  {
    "name": "The Brewer's Art",
    "city": "Baltimore",
    "province": "MD",
    "location": [39.30277,-76.61637]
  },
  {
    "name": "The Brewer's Cabinet",
    "city": "Reno",
    "province": "NV",
    "location": [39.52055,-119.81728]
  },
  {
    "name": "The Brewery",
    "city": "Louisville",
    "province": "KY",
    "location": [38.24821076,-85.73074981]
  },
  {
    "name": "The Bronx Brewery",
    "city": "Bronx",
    "province": "NY",
    "location": [40.801727,-73.910149]
  },
  {
    "name": "The Cork and Craft",
    "city": "San Diego",
    "province": "CA",
    "location": [33.02385,-117.08575]
  },
  {
    "name": "The Craft Bar",
    "city": "Destin",
    "province": "FL",
    "location": [30.223373,-85.8668]
  },
  {
    "name": "The Dew Drop Inn DC",
    "city": "Washington",
    "province": "D.C.",
    "location": [38.92601596,-76.99492133]
  },
  {
    "name": "The Draught Haus",
    "city": "Columbus",
    "province": "OH",
    "location": [40.104404,-83.09119]
  },
  {
    "name": "The Genesee Brew House",
    "city": "Rochester",
    "province": "NY",
    "location": [43.1636,-77.6149]
  },
  {
    "name": "The Grumpy Troll Brew Pub and Pizzeria",
    "city": "Mount Horeb",
    "province": "WI",
    "location": [43.00811841,-89.73821353]
  },
  {
    "name": "The Homebrewer",
    "city": "San Diego",
    "province": "CA",
    "location": [32.755108,-117.13119]
  },
  {
    "name": "The Hoppy Brewer",
    "city": "Gresham",
    "province": "OR",
    "location": [45.49994,-122.43068]
  },
  {
    "name": "The Lone Girl Brewing Company",
    "city": "Waunakee",
    "province": "WI",
    "location": [43.19179,-89.45434]
  },
  {
    "name": "The Oregon Public House",
    "city": "Portland",
    "province": "OR",
    "location": [45.57153,-122.65816]
  },
  {
    "name": "The Phoenix Ale Brewery",
    "city": "Phoenix",
    "province": "AZ",
    "location": [33.44864,-112.016716]
  },
  {
    "name": "The Post Brewing Company",
    "city": "Lafayette",
    "province": "CO",
    "location": [39.994526,-105.091286]
  },
  {
    "name": "The Rams Head",
    "city": "Portland",
    "province": "OR",
    "location": [45.52691,-122.69844]
  },
  {
    "name": "The Unknown Brewery",
    "city": "Charlotte",
    "province": "NC",
    "location": [35.220505,-80.85754]
  },
  {
    "name": "Third Base Brewing Company",
    "city": "Cedar Rapids",
    "province": "IA",
    "location": [42.03506216,-91.63978457]
  },
  {
    "name": "Thirsty Dog Brewing Company",
    "city": "Akron",
    "province": "OH",
    "location": [41.06884456,-81.51766397]
  },
  {
    "name": "Three Floyds Brewery & Pub",
    "city": "Munster",
    "province": "IN",
    "location": [41.53537437,-87.51645416]
  },
  {
    "name": "Three Four Beer",
    "city": "Fort Collins",
    "province": "CO",
    "location": [40.57601,-105.096046]
  },
  {
    "name": "Three Notch'd Brewing Company",
    "city": "Charlottesville",
    "province": "VA",
    "location": [38.03767,-78.49114]
  },
  {
    "name": "Three Notch'd Brewing Company",
    "city": "Harrisonburg",
    "province": "VA",
    "location": [38.44874,-78.86577]
  },
  {
    "name": "Thunder Canyon Brewery",
    "city": "Tucson",
    "province": "AZ",
    "location": [32.3405,-111.0127]
  },
  {
    "name": "Tired Hands Brewing Company",
    "city": "Ardmore",
    "province": "PA",
    "location": [40.00852,-75.29362]
  },
  {
    "name": "Tommyknocker Brewery & Pub",
    "city": "Idaho Springs",
    "province": "CO",
    "location": [39.7418,-105.5178]
  },
  {
    "name": "Torched Hop Brewing Company",
    "city": "Atlanta",
    "province": "GA",
    "location": [33.772327,-84.37923]
  },
  {
    "name": "Torn Label Brewing Company",
    "city": "Kansas City",
    "province": "MO",
    "location": [39.092512,-94.573292]
  },
  {
    "name": "Total Wine & More",
    "city": "Altamonte Springs",
    "province": "FL",
    "location": [28.661719,-81.385296]
  },
  {
    "name": "Total Wine & More",
    "city": "Atlanta",
    "province": "GA",
    "location": [33.927508,-84.344618]
  },
  {
    "name": "Total Wine & More",
    "city": "Bellevue",
    "province": "WA",
    "location": [47.618561,-122.179574]
  },
  {
    "name": "Total Wine & More",
    "city": "Brookfield",
    "province": "WI",
    "location": [43.036555,-88.128037]
  },
  {
    "name": "Total Wine & More",
    "city": "Burnsville",
    "province": "MN",
    "location": [44.74665,-93.28977]
  },
  {
    "name": "Total Wine & More",
    "city": "Charlotte",
    "province": "NC",
    "location": [35.302614,-80.748495]
  },
  {
    "name": "Total Wine & More",
    "city": "Chesapeake",
    "province": "VA",
    "location": [36.7782,-76.2326]
  },
  {
    "name": "Total Wine & More",
    "city": "Columbia",
    "province": "SC",
    "location": [34.0742,-81.1601]
  },
  {
    "name": "Total Wine & More",
    "city": "Dallas",
    "province": "TX",
    "location": [32.875763,-96.769597]
  },
  {
    "name": "Total Wine & More",
    "city": "Fremont",
    "province": "CA",
    "location": [37.503025,-121.97528]
  },
  {
    "name": "Total Wine & More",
    "city": "Henderson",
    "province": "NV",
    "location": [36.056609,-115.048332]
  },
  {
    "name": "Total Wine & More",
    "city": "Las Vegas",
    "province": "NV",
    "location": [36.1631,-115.2885]
  },
  {
    "name": "Total Wine & More",
    "city": "Lynnwood",
    "province": "WA",
    "location": [47.831968,-122.269871]
  },
  {
    "name": "Total Wine & More",
    "city": "Mc Lean",
    "province": "VA",
    "location": [38.931152,-77.179294]
  },
  {
    "name": "Total Wine & More",
    "city": "Naples",
    "province": "FL",
    "location": [26.209177,-81.768152]
  },
  {
    "name": "Total Wine & More",
    "city": "Olympia",
    "province": "WA",
    "location": [47.040651,-122.930972]
  },
  {
    "name": "Total Wine & More",
    "city": "Paradise Valley",
    "province": "AZ",
    "location": [33.580005,-111.926293]
  },
  {
    "name": "Total Wine & More",
    "city": "Sacramento",
    "province": "CA",
    "location": [38.59629,-121.41646]
  },
  {
    "name": "Total Wine & More",
    "city": "Stuart",
    "province": "FL",
    "location": [27.235792,-80.270372]
  },
  {
    "name": "Total Wine & More",
    "city": "Vancouver",
    "province": "WA",
    "location": [45.65761,-122.58897]
  },
  {
    "name": "Total Wine More",
    "city": "Boynton Beach",
    "province": "FL",
    "location": [26.53532,-80.09047]
  },
  {
    "name": "Total Wine More",
    "city": "Gilbert",
    "province": "AZ",
    "location": [33.30696,-111.74324]
  },
  {
    "name": "Total Wine More",
    "city": "Goodyear",
    "province": "AZ",
    "location": [33.46237,-112.35832]
  },
  {
    "name": "Total Wine More",
    "city": "Orlando",
    "province": "FL",
    "location": [28.49666,-81.42882]
  },
  {
    "name": "Total Wine More",
    "city": "Raleigh",
    "province": "NC",
    "location": [35.90748,-78.78551]
  },
  {
    "name": "Total Wine More",
    "city": "Redondo Beach",
    "province": "CA",
    "location": [33.86776,-118.35284]
  },
  {
    "name": "Total Wine More",
    "city": "Spokane",
    "province": "WA",
    "location": [47.74748,-117.40382]
  },
  {
    "name": "Total Wine and More",
    "city": "San Antonio",
    "province": "TX",
    "location": [29.609572,-98.595519]
  },
  {
    "name": "Track 7 Brewing Co",
    "city": "Sacramento",
    "province": "CA",
    "location": [38.538878,-121.482026]
  },
  {
    "name": "Triple Rock Brewery-Ale House",
    "city": "Berkeley",
    "province": "CA",
    "location": [37.873527,-122.268766]
  },
  {
    "name": "Triple Voodoo Brewery & Tap Room",
    "city": "San Francisco",
    "province": "CA",
    "location": [37.76119,-122.388537]
  },
  {
    "name": "Trve Brewing Co.",
    "city": "Denver",
    "province": "CO",
    "location": [39.71993776,-104.9876958]
  },
  {
    "name": "Tuckerman Brewing Co",
    "city": "Conway",
    "province": "NH",
    "location": [43.9752,-71.1296]
  },
  {
    "name": "Twin Peaks",
    "city": "Phoenix",
    "province": "AZ",
    "location": [33.5091,-112.0359367]
  },
  {
    "name": "Twisted Pine Brewing Company",
    "city": "Boulder",
    "province": "CO",
    "location": [40.02061,-105.25113]
  },
  {
    "name": "Two22 Brew",
    "city": "Aurora",
    "province": "CO",
    "location": [39.635204,-104.75914]
  },
  {
    "name": "TwoDEEP Brewing Co.",
    "city": "Indianapolis",
    "province": "IN",
    "location": [39.777147,-86.161506]
  },
  {
    "name": "Uberbrew",
    "city": "Billings",
    "province": "MT",
    "location": [45.78425,-108.49936]
  },
  {
    "name": "United Way of Greater Milwaukee",
    "city": "Milwaukee",
    "province": "WI",
    "location": [43.05308479,-87.91315556]
  },
  {
    "name": "Uptown Market",
    "city": "Portland",
    "province": "OR",
    "location": [45.47245,-122.77138]
  },
  {
    "name": "Urban Chestnut Brewing Company",
    "city": "Saint Louis",
    "province": "MO",
    "location": [38.63774588,-90.22558603]
  },
  {
    "name": "Urban Growler Brewing Company",
    "city": "Saint Paul",
    "province": "MN",
    "location": [44.97037,-93.19323]
  },
  {
    "name": "Ursula Brewery",
    "city": "Aurora",
    "province": "CO",
    "location": [39.74794063,-104.8372883]
  },
  {
    "name": "Van Dyck",
    "city": "Schenectady",
    "province": "NY",
    "location": [42.8165101,-73.94317775]
  },
  {
    "name": "Verboten Brewing",
    "city": "Loveland",
    "province": "CO",
    "location": [40.3966,-105.0755]
  },
  {
    "name": "Veterans United Craft Brewery",
    "city": "Jacksonville",
    "province": "FL",
    "location": [30.2012,-81.5569]
  },
  {
    "name": "Vine and Brew",
    "city": "Okemos",
    "province": "MI",
    "location": [42.68242,-84.43542]
  },
  {
    "name": "Wanderlust Brewing Company",
    "city": "Flagstaff",
    "province": "AZ",
    "location": [35.20238,-111.618256]
  },
  {
    "name": "Wapiti Colorado Pub",
    "city": "Estes Park",
    "province": "CO",
    "location": [40.37633418,-105.5259991]
  },
  {
    "name": "Wasserhund Brewing Company",
    "city": "Virginia Beach",
    "province": "VA",
    "location": [36.8494,-76.0283]
  },
  {
    "name": "Water Street Brewery",
    "city": "Grafton",
    "province": "WI",
    "location": [43.318462,-87.918816]
  },
  {
    "name": "West Sixth Brewing Company",
    "city": "Lexington",
    "province": "KY",
    "location": [38.0594455,-84.49198723]
  },
  {
    "name": "Whip In Convenience Store & Pub",
    "city": "Austin",
    "province": "TX",
    "location": [30.23795672,-97.73943965]
  },
  {
    "name": "White Flame Brewing",
    "city": "Hudsonville",
    "province": "MI",
    "location": [42.864382,-85.870885]
  },
  {
    "name": "White Star Ale House",
    "city": "Cedar Rapids",
    "province": "IA",
    "location": [41.978546,-91.66631]
  },
  {
    "name": "Wichita Brewing Company & Pizzeria",
    "city": "Wichita",
    "province": "KS",
    "location": [37.69527,-97.26341]
  },
  {
    "name": "Wicked Weed Brewing",
    "city": "Asheville",
    "province": "NC",
    "location": [35.5917,-82.5511]
  },
  {
    "name": "Widmer Brothers Brewing Company",
    "city": "Portland",
    "province": "OR",
    "location": [45.54106084,-122.6769239]
  },
  {
    "name": "Wilson Winery",
    "city": "Healdsburg",
    "province": "CA",
    "location": [38.63925652,-122.9010508]
  },
  {
    "name": "Wing Nutz",
    "city": "Orem",
    "province": "UT",
    "location": [40.2779,-111.6773]
  },
  {
    "name": "Wing Nutz",
    "city": "South Jordan",
    "province": "UT",
    "location": [40.54126672,-111.980719]
  },
  {
    "name": "Wingman Brewers",
    "city": "Tacoma",
    "province": "WA",
    "location": [47.240946,-122.427718]
  },
  {
    "name": "Woodland Empire Ale Craft",
    "city": "Boise",
    "province": "ID",
    "location": [43.616471,-116.208927]
  },
  {
    "name": "Woods Bar and Brewery",
    "city": "Oakland",
    "province": "CA",
    "location": [37.807009,-122.270489]
  },
  {
    "name": "World of Beer",
    "city": "Denver",
    "province": "CO",
    "location": [39.750288,-104.999768]
  },
  {
    "name": "World of Beer",
    "city": "Orlando",
    "province": "FL",
    "location": [28.542401,-81.372239]
  },
  {
    "name": "World of Beer",
    "city": "Tampa",
    "province": "FL",
    "location": [28.0433,-82.5922]
  },
  {
    "name": "Zero One Ale House",
    "city": "San Angelo",
    "province": "TX",
    "location": [31.46244547,-100.4376887]
  },
  {
    "name": "coop ale works",
    "city": "Oklahoma City",
    "province": "OK",
    "location": [35.523353,-97.53115698]
  },
  {
    "name": "in.gredients",
    "city": "Austin",
    "province": "TX",
    "location": [30.285122,-97.714821]
  }
]



// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3> " + city.city + " , " + city.province +"</h3>")
    .addTo(myMap);
}
