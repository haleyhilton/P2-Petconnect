
    console.log("im scary terry");
const filterFormHandler = (event) => {
    event.preventDefault();


    const age = document.querySelector('#age-filter').value.trim();
    const breed = document.querySelector('#breed-filter').value.trim();
    const size = document.querySelector('#size-filter').value.trim();
    const sex = document.querySelector('#sex-filter').value.trim();
    const color = document.querySelector('#color-filter').value.trim();

   if (age == "All") {
    age.toLowerCase();
   };
   if (breed == "All") {
    breed.toLowerCase();
   };
   if (size == "All") {
    size.toLowerCase();
   };
   if (sex == "All") {
    sex.toLowerCase();
   };
   if (color == "All") {
    color.toLowerCase();
   };

   const call = `/results/${age}-${breed}-${size}-${sex}-${color}`;
   console.log(call);

   document.location.assign(call);
};

/* document.querySelector('#filter-submit').addEventListener('submit', function(event) {
    event.preventDefault();
}); */

document.querySelector('#filter-form').addEventListener('submit', filterFormHandler);

