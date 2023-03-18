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

let poke1 = document.querySelector(".poke1");
let changebtn = document.querySelector(".changeBtn");

poke1.addEventListener("click", () => {
  poke1.classList.remove("poke1");
  poke1.classList.add("changeBtn");
});

changeBtn.addEventListener("click", () => {
  changeBtn.classList.remove("changeBtn");
  changeBtn.classList.add("poke1");
});
