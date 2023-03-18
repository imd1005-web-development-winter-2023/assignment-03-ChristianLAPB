//
// APP VARIABLES AND DOM ELEMENTS
//

// The ul for the list of pokemon
const pokeList = document.querySelector(".pokemon");
// The span message to display the index
const pokeMessage = document.querySelector(".message");

//
// FUNCTIONS
//

function listClickHander(event) {
  // Check if the click event is from a button or something else
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const indexFromDataAttribute = event.target.dataset.pokemon;

  pokeMessage.textContent = indexFromDataAttribute;
}

//
// EVENT LISTENERS AND INITIALISION
//

// Add the submit form handler
pokemon.addEventListener("click", listClickHander);