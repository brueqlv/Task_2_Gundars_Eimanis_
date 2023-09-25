
let selectedCity = null;
let selectedType = null;

// Function handles clicks on dropdown
function handleDropdownClick(dropdownId, e) {
    const dropdown = document.getElementById(dropdownId);
    const selectedValue = dropdown.querySelector('.selected-value');
    const defaultOption = dropdown.querySelector('.default');

    let currentSelection = null;
    let isDropdownOpen = false;

    dropdown.addEventListener('click', function () {
        dropdown.querySelector('.dropdown').classList.toggle('open');
        selectedValue.classList.toggle('no-border-radius', dropdown.querySelector('.dropdown').classList.contains('open'));
        isDropdownOpen = !isDropdownOpen;

        if (isDropdownOpen) {
            selectedValue.classList.add('border-line');
        }
    });

    dropdown.querySelector('.dropdown').addEventListener('click', function (e) {
        if (e.target !== defaultOption) {
            if (currentSelection) {
                currentSelection.style.display = 'block'; 
            }

            selectedValue.textContent = e.target.textContent;
            dropdown.querySelector('.dropdown').classList.remove('open');
            selectedValue.classList.remove('no-border-radius');

            // Hide the selected item in the dropdown
            e.target.style.display = 'none';
            currentSelection = e.target;

            const allOptions = dropdown.querySelectorAll('.dropdown li');
            allOptions.forEach(option => {
                if (option !== e.target) {
                    option.classList.remove('selected');
                }
            });

            selectedValue.classList.add('selected');

            if (dropdownId === 'city-select') {
                selectedCity = e.target.getAttribute('data-value');
            } else if (dropdownId === 'type-select') {
                selectedType = e.target.getAttribute('data-value');
            }

            checkAndDisplayCompany();
        }
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.querySelector('.dropdown').classList.remove('open');
            selectedValue.classList.remove('no-border-radius');
            isDropdownOpen = false; 
            selectedValue.classList.remove('border-line');
        }
    });
}

handleDropdownClick('city-select');
handleDropdownClick('type-select');

// Function to check selected values and update .company-container display
function checkAndDisplayCompany() {
    const showCompany = selectedCity === 'Riga' && selectedType === 'Edinasana';
    const companyContainer = document.querySelector('.company-container');

    if (showCompany) {
        companyContainer.style.display = 'block';
    } else {
        companyContainer.style.display = 'none';
    }
}

