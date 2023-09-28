
let map;
let infoWindows = [];
const markers = [];

function extractCompanyData(companyElement) {
  const companyId = companyElement.getAttribute('data-company-id');
  const name = companyElement.querySelector('.name').textContent;
  const type = companyElement.querySelector('.type').textContent;
  const phoneNumber = companyElement.querySelector('.phone-number').textContent;
  const city = companyElement.querySelector('.city').textContent;
  const address = companyElement.querySelector('.address').textContent;

  return {
    id: companyId,
    name: name,
    type: type,
    phone: phoneNumber,
    city: city,
    address: address,
  };
}

//Makes cordinates from address
function geocodeCity(cityName, callback) {
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: cityName }, (results, status) => {
    if (status === 'OK' && results[0] && results[0].geometry) {
      const cityCoordinates = results[0].geometry.location;
      callback(cityCoordinates);
    }
  });
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 56.946, lng: 24.106 },
    zoom: 12,
    styles: grayscaleMapStyle,
    disableDefaultUI: true,
  });

  map.addListener('click', function(event) {
    event.stop(); 
  });

  // Create markers and InfoWindows for each company
  const companyContainers = document.querySelectorAll('.inner-container');
  companyContainers.forEach(companyElement => {
    const companyData = extractCompanyData(companyElement);

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: companyData.address }, (results, status) => {
      if (status === 'OK' && results[0] && results[0].geometry) {
        const companyCoordinates = results[0].geometry.location;

        const marker = new google.maps.Marker({
          position: companyCoordinates,
          map: map,
          title: companyData.name,
          icon: '/home/brueqlv/Task_2_Gundars_Eimanis_/assets/img/pin.svg',
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
          <div class="custom-info-window">
          <img class="logo" alt="${companyData.name} logo" src="${companyElement.querySelector('.logo').src}">
          <div>
            <h3>${companyData.name}</h3>
            <p>${companyData.phone} <br> ${companyData.address}</p>
           
          </div>
        </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindows.forEach(infoWin => {
            infoWin.close();
          });

          infoWindow.open(map, marker);
        });

        markers.push(marker);
        infoWindows.push(infoWindow);
      }
    });
  });
}

// Function to update the map based on the selected city and type
function updateMap(selectedCity, selectedType) {
  markers.forEach(marker => {
    marker.setMap(null);
  });

  if (selectedCity === "Izvēlies") {
    selectedCity = 'Rīga'; 
  }


  geocodeCity(selectedCity, (cityCoordinates) => {
    if (cityCoordinates) {

      map.setCenter(cityCoordinates);

      // Filter company data by city and type
      const companyContainers = document.querySelectorAll('.inner-container');
      companyContainers.forEach(companyElement => {
        const companyData = extractCompanyData(companyElement);

        
        companyElement.style.display = 'none';

        if ((((selectedType === "Izvēlies" || companyData.type === selectedType) &&
            companyData.city === selectedCity)) || (((selectedCity === "Izvēlies" || companyData.city === selectedCity) &&
            companyData.type === selectedType))){
          const geocoder = new google.maps.Geocoder();

          companyElement.style.display = 'flex';


          geocoder.geocode({ address: companyData.address }, (results, status) => {
            if (status === 'OK' && results[0] && results[0].geometry) {
              const companyCoordinates = results[0].geometry.location;

              const marker = new google.maps.Marker({
                position: companyCoordinates,
                map: map,
                title: companyData.name,
                icon: '/home/brueqlv/Task_2_Gundars_Eimanis_/assets/img/pin.svg',
              });

              const infoWindow = new google.maps.InfoWindow({
                content: `
                <div class="custom-info-window">
                <img class="logo" alt="${companyData.name} logo" src="${companyElement.querySelector('.logo').src}">
                <div>
                  <h3>${companyData.name}</h3>
                  <p>${companyData.phone} <br> ${companyData.address}</p>
                </div>
              </div>
                `,
              });
      
              marker.addListener('click', () => {
                infoWindows.forEach(infoWin => {
                  infoWin.close();
                });
      
                infoWindow.open(map, marker);
              });
      
              markers.push(marker);
              infoWindows.push(infoWindow);

            }
          });
        }
      });
    }
  });
}


const cityDropdown = document.getElementById('city-select');
const typeDropdown = document.getElementById('type-select');



cityDropdown.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    const selectedCity = e.target.textContent;
    const selectedType = typeDropdown.querySelector('.selected-value').textContent;
    console.log(selectedType);
    console.log(selectedCity);
    updateMap(selectedCity, selectedType);
  }
});

typeDropdown.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    const selectedType = e.target.textContent;
    const selectedCity = cityDropdown.querySelector('.selected-value').textContent; 

    console.log(selectedType);
    console.log(selectedCity);
    updateMap(selectedCity, selectedType);
  }
});


const grayscaleMapStyle = [
  {
    featureType: 'landscape',
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 65,
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        saturation: -100, 
      },
      {
        lightness: 50, 
      },
      {
        visibility: 'off',
      }
    ],
  },
  {
    featureType: 'road.highway',
    stylers: [
      {
        saturation: -100, 
      },
      {
        lightness: 75, 
      },
    ],
  },
  {
    featureType: 'road.arterial',
    stylers: [
      {
        saturation: -100, 
      },
      {
        lightness: 75,
      },
    ],
  },
  {
    featureType: 'road.local',
    stylers: [
      {
        saturation: -100, 
      },
      {
        lightness: 75, 
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        saturation: -100, 
      },
      {
        lightness: 10, 
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e', 
      },
    ],
  },
];



