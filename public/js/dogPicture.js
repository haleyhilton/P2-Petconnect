const dogPicture = document.querySelector('#dog-profile');

 const dogHandler = async () => {
    const fetchURL = "/api/media/doggie"
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