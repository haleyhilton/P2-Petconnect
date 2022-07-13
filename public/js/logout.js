const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);

 const profileImage = document.querySelector('#profile-image');
 
const profileUpperHandler = async () => {
  const response = await fetch('/api/media/user', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => {
    return response.json();
  }).then(response => {
    // console.log(response[0].picture_url)
    // const newImage = document.createElement('img');
    profileImage.src = response[0].picture_url
    // profilePicture.appendChild(newImage)
  });
};

profileUpperHandler();

  