function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const textColor = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

const changeColor = () => {
    textColor.textContent = getRandomHexColor();
    body.style.backgroundColor = textColor.textContent;
};

btnColor.addEventListener('click', changeColor);