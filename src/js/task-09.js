function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorNameLabel = document.querySelector('.color');
const chngColorBtn = document.querySelector('.change-color');

function onBtnClk(event) {
  const bgColor = getRandomHexColor();
  document.body.style.backgroundColor = bgColor;
  colorNameLabel.textContent = bgColor;
}

chngColorBtn.addEventListener('click', onBtnClk);