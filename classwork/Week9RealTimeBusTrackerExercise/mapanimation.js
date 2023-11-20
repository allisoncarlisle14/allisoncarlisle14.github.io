async function run(){
    // get bus data    
  const locations = await getBusLocations();

  
  document.getElementById('busContainer').innerHTML = '';
  for (let i = 0; i < locations.length; i++) {
    // console.log(`There are ${locations.length} active buses`);
    console.log(`Bus ${locations[i].attributes.label} is at a position of ${locations[i].attributes.latitude} latitude and ${locations[i].attributes.longitude} longitude.`);
    document.getElementById('busContainer').innerHTML += `<gmp-advanced-marker position="${locations[i].attributes.latitude},${locations[i].attributes.longitude}"title="Bus ${locations[i].attributes.label}: ${locations[i].attributes.occupancy_status}"></gmp-advanced-marker>`;
  }

  // timer
  setTimeout(run, 15000);
  
}

// Request bus data from MBTA
async function getBusLocations(){
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const response = await fetch(url);
  const json     = await response.json();
  return json.data;
}

run();