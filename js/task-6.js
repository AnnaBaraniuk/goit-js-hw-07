function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls input");
const divBox = document.querySelector("#boxes");

createBtn.addEventListener("click", handlerCreate);
destroyBtn.addEventListener("click", handlerDestroy);

function handlerDestroy() {
  destroyBoxes();
}

function handlerCreate() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return alert`Please enter number from 1 to 100`;
  }

  destroyBoxes();
  createBoxes(amount);
}

function createBoxes(amount) {
  const divArr = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";
    div.style.backgroundColor = getRandomHexColor();
    divArr.push(div);
  }
  divBox.append(...divArr);
}

function destroyBoxes() {
  divBox.innerHTML = "";
  input.value = "";
}
