const profileImage = document.querySelector('#profile-image');
 
const profileUpperHandler = async () => {
  const newPicture = await fetch('/api/media/user', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => {
    return response.json();
  }).then(response => {
    console.log(response[0].picture_url)
    // const newImage = document.createElement('img');
    profileImage.src = response[0].picture_url
    // profilePicture.appendChild(newImage)
  });
};

profileUpperHandler();