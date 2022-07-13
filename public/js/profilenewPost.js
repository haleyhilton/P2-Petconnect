// This will be where we fetch the Post methods and replace (dynamiclly) the sections of the page
// that need to be replaced. 

// To access modal
const newPostModal = document.querySelector('.newPostModal')
// access the button that will open the modal for user to input information
const newPostBtn = document.querySelector('#newPostBtn');
// Access to the span element that will give the user the option to close the modal
const closeSpan = document.querySelector('.close');

newPostBtn.addEventListener('click', function() {
    newPostModal.style.display = "block"
});

// to either close modal or click out of modal to close it
closeSpan.addEventListener('click', function() {
     newPostModal.style.display = "none"
});

window.addEventListener('click', function(e) {
    if(e.target == newPostModal) {
        newPostModal.style.display = "none"
    }
})

// // TODO: need help figuring out syntax to get inputs to post in my friends section of profile page
// const newDogPost = async (data) => {

//     const dogName = document.querySelector('#DogsName').value.trim();
//     const dogDob = document.querySelector('#dob').value.trim();
//     const dogBreed = document.querySelector('#breed').value.trim();
//     const dogSex = document.querySelectorAll('input[name="dogSex"]:checked').value;

// }

