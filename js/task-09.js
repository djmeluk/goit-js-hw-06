
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body")
const spanEl = document.querySelector(".color")
const buttonChangeColor = document.querySelector(".change-color")


buttonChangeColor.addEventListener("click",bodyChangeColor)
function bodyChangeColor() {
 const color = bodyEl.style.backgroundColor = getRandomHexColor()
  spanEl.textContent = color
}