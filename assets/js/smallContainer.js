//Function for '99 Iedvesmas stasti' pages small container content display

const innerContainers = document.querySelectorAll('.inner-container');

innerContainers.forEach(container => {
  const photo = container.querySelector('.photo');
  const name = container.querySelector('.name');
  const text = container.querySelector('.text');

  // Check if there's a photo and hide name and text
  if (photo.getAttribute('src')) {
    console.log(1);
    name.style.display = 'none'; 
    text.style.display = 'none'; 
  }
  // Check if there's a name and hide photo and text
  else if (name.textContent.trim() !== '') {
    console.log(2);
    photo.style.display = 'none'; 
    text.style.display = 'none'; 
  }
  // Check if there's text and hide photo and name
  else if (text && text.textContent.trim() !== '') {
    console.log(3);
    photo.style.display = 'none'; 
    name.style.display = 'none'; 
  }
  // If none of the above, hide all
  else {
    console.log(4);
    photo.style.display = 'none'; 
    name.style.display = 'none'; 
    text.style.display = 'none'; 
  }
});


//Function for hidding containers on smaller screens
// Get the button and all the inner containers
const button = document.querySelector('button');

// Function to update visibility of inner containers based on screen size
function updateVisibility() {
    const screenWidth = window.innerWidth;

    // Show all inner containers on larger screens
    if (screenWidth >= 991) {
        innerContainers.forEach(container => {
            container.style.display = 'block';
        });
        button.textContent = 'Skatīt mazāk';
    } else {
        // Show only the first 20 on smaller screens
        for (let i = 0; i < innerContainers.length; i++) {
            if (i < 20) {
                innerContainers[i].style.display = 'block';
            } else {
                innerContainers[i].style.display = 'none';
            }
        }
        button.textContent = 'Skatīt vairāk';
    }
}

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Toggle visibility of the remaining inner containers
    for (let i = 20; i < innerContainers.length; i++) {
        if (innerContainers[i].style.display === 'none' || innerContainers[i].style.display === '') {
            innerContainers[i].style.display = 'block';
            button.textContent = 'Skatīt mazāk';
        } else {
            innerContainers[i].style.display = 'none';
            button.textContent = 'Skatīt vairāk';
        }
    }
});

// Call the updateVisibility function when the page loads
updateVisibility();

// Listen for window resize events to update visibility
window.addEventListener('resize', updateVisibility);
