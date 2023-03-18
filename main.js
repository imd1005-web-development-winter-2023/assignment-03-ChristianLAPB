const pokeList = document.querySelector(".pokemon");
const pokeMessage = document.querySelector(".message");

function listClickHander(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const indexFromDataAttribute = event.target.dataset.pokemon;

  pokeMessage.textContent = indexFromDataAttribute;
}

pokeList.addEventListener("click", listClickHander);