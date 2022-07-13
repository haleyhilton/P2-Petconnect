const dogBreedList = [
  "labrador retriever",
  "french bulldog",
  "golden retriever",
  "german shepherd",
  "poodle",
  "bulldog",
  "beagle",
  "rottweiler",
  "german shorthaired pointer",
  "dachshund",
  "corgi",
  "australian shepherd",
  "yorkshire terrier",
  "boxer",
  "king charles spaniel",
  "doberman pinscher",
  "great dane",
  "miniature schnauzer",
  "siberian husky",
  "bernese mountain dog",
  "can corso",
  "shih tzu",
  "boston terrier",
  "pomeranian",
  "havanese",
  "english springer spaniel",
  "brittany",
  "shetland sheepdog",
  "cocker spaniel",
  "miniature american shepherd",
  "border collie",
  "vizsla",
  "pug",
  "bassett hound",
  "mastiff",
  "belgian malinois",
  "chihuahuas",
  "collie",
  "maltese",
  "weimaraner",
  "rhodesian ridgeback",
  "shiba inu",
  "english cocker spaniel",
  "portuguese water dog",
  "newfoundland",
  "west highland white terrier",
  "bichon frise",
  "chesapeake bay retriever",
  "dalmatians",
  "bloodhounds",
];

function dogSizes() {
  const ele = document.getElementsByName("dog-size");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      return ele[i].value;
    }
  }
}

function dogSex() {
  const ele = document.getElementsByName("dog-sex");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      return ele[i].value;
    }
  }
}


const dogFormHandler = async (event) => {
  event.preventDefault();

  const dogName = document.querySelector("#dog-name").value.trim();
  const dogAge = document.querySelector("#dog-age").value.trim();
  const dogBreed = document.querySelector("#dog-breed").value.trim();
  const dogSizeSmall = document.querySelector("#small");
  const dogSizeMedium = document.querySelector("#medium");
  const dogSizeLarge = document.querySelector("#large");
  const dogSexMale = document.querySelector("#male");
  const dogSexFemale = document.querySelector("#female");
  const dogColor = document.querySelector("#dog-color").value.trim();

  

  /* console.log(dogName, "Name");
  console.log(dogSizes(), "Sizes"); */
  let cUserId;

  const getUser = await fetch('/api/users/current/user', {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => cUserId = response.id);

const data = {
    name: dogName,
    age: dogAge,
    breed: dogBreed,
    size: dogSizes(),
    sex: dogSex(),
    color: dogColor,
    description: "Enter Description Here",
    for_sale: false,
    user_id: cUserId,
  };

  const fetchcall = await fetch("/api/dogs", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
  .then(document.location.assign('/profile'));
};

document.querySelector("#dog-submit").addEventListener("click", dogFormHandler);