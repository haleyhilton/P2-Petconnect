const profilePicture = document.querySelector('#picture');

const profileHandler = async () => {
    const response = await fetch('/api/media/user', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      return response.json();
    }).then(response => {
      // console.log(response[0].picture_url)
      // const newImage = document.createElement('img');
      profilePicture.src = response[0].picture_url
      // profilePicture.appendChild(newImage)
    });
  };

  profileHandler();