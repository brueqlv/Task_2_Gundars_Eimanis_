const selectWrappers = document.querySelectorAll('.select-wrapper');

selectWrappers.forEach(selectWrapper => {
  const dropdown = selectWrapper.querySelector('.dropdown');
  const selectedValue = selectWrapper.querySelector('.selected-value');
  const defaultOption = selectWrapper.querySelector('.default');

  // Keep track of the currently selected option and dropdown state
  let currentSelection = null;
  let isDropdownOpen = false;

  selectWrapper.addEventListener('click', function () {
    dropdown.classList.toggle('open');
    selectedValue.classList.toggle('no-border-radius', dropdown.classList.contains('open'));
    isDropdownOpen = !isDropdownOpen; // Toggle the dropdown state

    if (isDropdownOpen) {
      selectedValue.classList.add('border-line');
    }
  });

  dropdown.addEventListener('click', function (e) {
    if (e.target !== defaultOption) {
      if (currentSelection) {
        currentSelection.style.display = 'block'; // Make the previous selection visible
      }

      selectedValue.textContent = e.target.textContent;
      dropdown.classList.remove('open');
      selectedValue.classList.remove('no-border-radius');

      // Hide the selected item in the dropdown
      e.target.style.display = 'none';
      currentSelection = e.target;

      // Remove 'selected' class from other options
      const allOptions = dropdown.querySelectorAll('li');
      allOptions.forEach(option => {
        if (option !== e.target) {
          option.classList.remove('selected');
        }
      });

      selectedValue.classList.add('selected');

      
    }
  });

  // Close the dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!selectWrapper.contains(e.target)) {
      dropdown.classList.remove('open');
      selectedValue.classList.remove('no-border-radius');
      isDropdownOpen = false; // Update the dropdown state when closing
      selectedValue.classList.remove('border-line'); // Remove the class when closing
    }
  });
});


// Initialize the map
let map;

function initMap() {
  // Replace 'YOUR_MAP_CONTAINER_ID' with the actual ID of your map container
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 56.946, lng: 24.106 },
    zoom: 12, // You can adjust the initial zoom level
  });
}

// Function to update the map based on the selected city
function updateMap(selectedCity) {
  // You can define the latitude and longitude coordinates for each city
  const cityCoordinates = {
    Riga: { lat: 56.946, lng: 24.106 },
    Jelgava: { lat: 56.650, lng: 23.722 },
    Ogre: { lat: 56.820, lng: 24.615 },
    // Add more cities as needed
  };

  // Check if the selected city exists in the coordinates object
  if (cityCoordinates[selectedCity]) {
    // Update the map center to the selected city
    map.setCenter(cityCoordinates[selectedCity]);
    // You can also add a marker to the selected city if needed
    const marker = new google.maps.Marker({
      position: cityCoordinates[selectedCity],
      map: map,
      title: selectedCity,
    });
  }
}
// Add event listeners to the custom dropdowns within the loop
selectWrappers.forEach(selectWrapper => {
    const dropdown = selectWrapper.querySelector('.dropdown');
  
    dropdown.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
        const selectedCity = e.target.getAttribute('data-value');
        console.log(selectedCity);
        updateMap(selectedCity);
      }
    });
  });
  

