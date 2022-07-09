let dogButton = document.querySelectorAll('.dogNameOf')
let invisibleModal = document.querySelector('.blankModal')

// Let eventID = event.target.datatype
// Datatype will be {{userid}}? data attributes = userid
let media = urlsouce

function dogModal() {
  display.removeblock
  invisibleModal.textContent = `{{#each dog as |dog|}}
<div class="Center-Block Absolute-Center is-Fixed is-Variable Modal" id="Fixed-Modal">
<div class="Center-Content">
  <h4 class="Title"><img src {{media.picture_url}}></h4>
  <p>{{userdog.dog.description}}</p><br>
  <p><a href="#" class="button toggle-Modal toUppercase">Close</a></p>
</div>
</div>
<script src="modal.js"></script>`
}
// how do we get the proper information to display


// CODE FOR MODAL
let modal = document.querySelector('.modal')
let conB = document.querySelector('.conB')

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
conB.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Simple show/hide modal
$(".toggle-Modal").on("click", function (e) {
  $(".Modal-Background").toggleClass("is-Hidden");
  e.preventDefault();
  e.stopPropagation();
  return false;
});

