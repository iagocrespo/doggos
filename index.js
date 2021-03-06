start();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
  document
    .querySelector(".add-list-breeds")
    .addEventListener("click", onClickBreeds);
}

function onClick(_event) {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

  fetch(RANDOM_DOG_URL)
    .then(toJson)
    .then(appendImgToDOM);
}

function onClickBreeds(_event) {
  const LIST_BREEDS = "https://dog.ceo/api/breeds/list/all";

  fetch(LIST_BREEDS)
    .then(toJson)
    .then(function(jsonResponse) {
      const list = jsonResponse.message;
      console.log(list);

      //👉 TO DO -> Extraer createLabel function 👈//

      const label = document.createElement("label");
      label.htmlFor = "breed-select";
      label.innerText = "Choose a Breed:";
      document.querySelector(".breed-container").appendChild(label);

      const select = document.createElement("select");
      select.id = "breed-select";
      select.innerText = "Breeds";
      document.querySelector(".breed-container").appendChild(select);

      const option = document.createElement("option");
      option.value = "";
      option.innerText = "🐶 Please choose an option 🐶";
      document.querySelector("#breed-select").appendChild(option);

      const razas = Object.keys(list);
      const option2 = document.createElement("option");
      option2.value = razas[76];
      option2.innerText = razas[76];
      document.querySelector("#breed-select").appendChild(option2);
    });
}

function toJson(apiResponse) {
  return apiResponse.json();
}

function createImage(dogUrl) {
  const image = document.createElement("img");
  image.alt = "Perrito bonito!";
  image.src = dogUrl;
  return image;
}

function appendImgToDOM(jsonResponse) {
  const img = createImage(jsonResponse.message);
  document.querySelector(".doggos").appendChild(img);
}

// El HTML //
/*
<div>
    <label for="pet-select">Choose a Breed:</label>
    <select name="breeds" id="Breeds">
      <option value="">Please choose an option</option>
      <option value="greyhound">Greyhound</option>
    </select>
  </div>
  */
