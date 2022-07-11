const signupFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#fn-signup').value.trim();
    const last_name = document.querySelector('#ln-signup').value.trim();
    const date_of_birth = document.querySelector('#dob-signup').value.trim();
    const zip_code = document.querySelector('#zip-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ "username": username, "password": password, "email": email, "first_name": first_name, "last_name": last_name, "date_of_birth": date_of_birth, "zip_code": zip_code }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //now log in so the user doesn't have to repeat the process
            const andLogInResponse = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ "username": username, "password": password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (andLogInResponse.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to log in');
            };
        }
    };
};

// document.querySelector('#signup-submit').addEventListener('click', signupFormHandler);

