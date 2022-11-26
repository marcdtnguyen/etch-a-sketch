const range = document.querySelector('input[type="range"]');
const label = document.querySelector('label[for="size"]');

const container = document.querySelector('.container');
createGrid(range.value);

range.addEventListener('input', onInputChange);

const inks = Array.from(document.querySelectorAll('input[name="ink"]'));

function onInputChange(e) {
    const size = e.target.value;
    label.innerText = `${size} x ${size}`;
    container.removeChild(container.firstChild)
    createGrid(size)
}

function createGrid(size) {

    const board = createBoard();
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.cssText =
            `width: ${100 / size}%; height: ${100 / size}%; border: black solid 0.5px;`;
        square.addEventListener('mouseover', paint)
        board.appendChild(square);
    }
}

function createBoard() {
    const board = document.createElement('div');
    board.style.cssText =
        'width: 100%; height: 100%; display: flex; flex-wrap: wrap; border: black solid 0.5px;'
    container.appendChild(board);
    return board;
}

function paint(e) {
    const ink = getInk().value;
    switch (ink) {
        case 'black':
            e.target.style.backgroundColor = ink;
            break;
        case 'random':
            e.target.style.backgroundColor = getRandColor();
            break;
        case 'darken':
            if (e.target.style.backgroundColor == 'black') break;
            e.target.style.backgroundColor = getDarkenColor(e);
            break;
    }
}

function getInk() {
    return inks.find(ink => ink.checked);
}

function getRandColor() {
    return `rgb(${getRandNum(255)}, ${getRandNum(255)}, ${getRandNum(255)})`;
}

function getRandNum(lim) {
    return Math.floor(Math.random() * (lim + 1))
}

function getDarkenColor(e) {
    const DARKEN_BY = 255 / 10;
    const base = e.target.style.backgroundColor || 'rgb(255, 255, 255)';
    let rgbValues = base.replace('rgb(', '').replace(')', '').split(', ');
    const darkrgb = rgbValues.map(v => {
        if (v < DARKEN_BY) return 0;
        return v - DARKEN_BY;
    })
    return `rgb(${darkrgb})`
}   