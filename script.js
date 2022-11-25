const range = document.querySelector('input[type="range"]');
const label = document.querySelector('label[for="size"]');

const container = document.querySelector('.container');
createGrid(range.value);

range.addEventListener('input', onInputChange);

function onInputChange(e) {2
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
            `width: ${100 / size}%; height: ${100 / size}%; border: black solid 0.5px;`
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