const profilePicture = document.querySelector('#picture');
const dogPicture = document.querySelector('#dog-profile');

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

  const dogHandler = async () => {
    const fetchURL = "/api/media/dog"
    const response = await fetch(fetchURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      return response.json();
    }).then(response => {
      // console.log(response[0].picture_url)
      // const newImage = document.createElement('img');
      dogPicture.src = response[0].picture_url
      // profilePicture.appendChild(newImage)
      console.log(response[0].picture_url, "hello")
    });
  };

  dogHandler();