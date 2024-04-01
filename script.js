document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();
  
    const name = document.getElementById('name').value.trim();
    const yearOfBirth = parseInt(document.getElementById('year-of-birth').value);
    const usCitizen = document.getElementById('us-citizen').checked;
    const zipcode = document.getElementById('zipcode').value.trim();
    const password = document.getElementById('password').value.trim();
    const pizzaType = document.getElementById('pizza-type').value;
  
    let valid = true;
  
    if (name.length < 3) {
      showError('name-error', 'Name must be at least 3 characters');
      valid = false;
    }
  
    if (isNaN(yearOfBirth) || yearOfBirth < 1901 || yearOfBirth > 2099) {
      showError('year-of-birth-error', 'Please enter a valid year of birth');
      valid = false;
    }
  
    if (usCitizen && (zipcode.length !== 5 || isNaN(zipcode))) {
      showError('zipcode-error', 'Please enter a valid 5-digit zipcode');
      valid = false;
    }
  
    if (password.length < 8) {
      showError('password-error', 'Password must be at least 8 characters');
      valid = false;
    }
  
    if (!pizzaType) {
      showError('pizza-type-error', 'Please select your preferred type of pizza');
      valid = false;
    }
  
    if (valid) {
      showSuccess('success-message', 'Registration Accepted!');
      // Here you would typically send the form data to a server
    }
  });
  
  function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
  }
  
  function showSuccess(id, message) {
    const successElement = document.getElementById(id);
    successElement.innerText = message;
  }
  
  function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.innerText = '');
    document.getElementById('success-message').innerText = '';
  }
  