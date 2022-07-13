const search = querySelector('#search-input').value;
const mySearchButton = querySelector('search-button');

const dogSearchURL = "/results"

async function dogSearch() {
    const dogSearch = await fetch(dogSearchURL, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => console.log(response));
}

mySearchButton.addEventLister("click", dogSearch);
