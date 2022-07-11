let searchInput = document.querySelector('.form-control')
let searchButton = document.querySelector('.searchButton')



const searchAppear = async (event) => {

let search = searchInput.value 
// let result = await fetch('/results/' + search)
// let data = await result.json();
window.location.replace('/results/' + search)
// console.log(data)
}


// Enter key search
// 
searchButton
addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('hello')
    searchAppear();
});