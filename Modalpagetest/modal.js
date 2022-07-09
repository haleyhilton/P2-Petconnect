let dogButton = document.querySelectorAll('.dogNameOf')
let invisibleModal = document.querySelector('.blankModal')

// Let eventID = event.target.datatype
// Datatype will be {{userid}}?


function dogModal(){
invisibleModal.textContent = `<div>
<a class="nav-link conB" data-toggle="modal" data-target="#exampleModal"><button>Modal Click</button></a>
<div id="myModal" class="modal">
  <div class="modal-ccontent">
    <span class="close">&times;</span>
    <form class="formP">
      <fieldset>

        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">${{useriddogphoto}}</small>
        </div>

        <div class="form-group">
          <label for="exampleTextarea" class="form-label mt-4">${{dogdetail}}</label>
          <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>

</div>
</div>
<script src="modal.js"></script>`
}

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