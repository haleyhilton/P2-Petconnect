const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('.login-container')
    .addEventListener('submit', loginFormHandler);
  

    // Linked signup button to go into sign up page
// to got to sign-up page when sign up button clicked
document.querySelector('#signUpBtn').addEventListener('click', function() {
  console.log("Ive been clicked")
  document.location.replace('signup');
})
  