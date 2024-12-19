const numbersEl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const hexBtnEl = document.querySelector('.hexBtn')
const hexEl = document.querySelector('.hex');
const bodyEl = document.querySelector('body');

hexBtnEl.addEventListener('click', getHex)

function getHex() {
    let hexCol = "#";
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * numbersEl.length);
        hexCol += numbersEl[random];
    }
bodyEl.style.backgroundColor = hexCol;
hexEl.innerHTML = hexCol;
}