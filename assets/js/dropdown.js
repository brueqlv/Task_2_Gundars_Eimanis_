const selectWrappers = document.querySelectorAll('.select-wrapper');

selectWrappers.forEach(selectWrapper => {
  const dropdown = selectWrapper.querySelector('.dropdown');
  const selectedValue = selectWrapper.querySelector('.selected-value');
  const defaultOption = selectWrapper.querySelector('.default');

  selectWrapper.addEventListener('click', function () {
    dropdown.classList.toggle('open');
    selectedValue.classList.toggle('no-border-radius', dropdown.classList.contains('open')); // Add or remove the class based on 'open' class
  });

  dropdown.addEventListener('click', function (e) {
    if (e.target !== defaultOption) {
      selectedValue.textContent = e.target.textContent;
      dropdown.classList.remove('open');
      selectedValue.classList.remove('no-border-radius'); 

      selectedValue.classList.add('selected');
      
      if (e.target.textContent !== 'Izvēlies') {
        selectedValue.classList.add('selected');
      } else {
        selectedValue.classList.remove('selected');
      }// Remove the class when closed
    }
  });

  // Close the dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!selectWrapper.contains(e.target)) {
      dropdown.classList.remove('open');
      selectedValue.classList.remove('no-border-radius'); // Remove the class when closed
    }
  });

});
