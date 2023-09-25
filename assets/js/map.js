
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 56.946, lng: 24.106 },
    zoom: 12, 
  });
}

// Function to update the map based on the selected city
function updateMap(selectedCity) {
  const cityCoordinates = {
    Riga: { lat: 56.946, lng: 24.106 },
    Jelgava: { lat: 56.650, lng: 23.722 },
    Ogre: { lat: 56.820, lng: 24.615 },
  };

  // Check if the selected city exists in the coordinates object
  if (cityCoordinates[selectedCity]) {
    // Center map by city
    map.setCenter(cityCoordinates[selectedCity]);
    // Add marker to the selected city
    const marker = new google.maps.Marker({
      position: cityCoordinates[selectedCity],
      map: map,
      title: selectedCity,
    });
  }
}

const cityDropdown = document.getElementById('city-select');
const typeDropdown = document.getElementById('type-select');

cityDropdown.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    const selectedCity = e.target.getAttribute('data-value');
    console.log(selectedCity);
    updateMap(selectedCity);
  }
});

typeDropdown.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    const selectedType = e.target.getAttribute('data-value');
  }
});
