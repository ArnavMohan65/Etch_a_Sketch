let color = 'black';
function populateBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let amount  = size * size;
    for(let i = 0; i < amount;i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover',colorsquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend",square);
    }
}

populateBoard(16);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeSize(num){
    if(num >=2 || num <=100){
        populateBoard(num);
    }else{
        alert('Value is too high');
    }
}

function colorsquare(){
    if(color === 'random'){
        this.style.backgroundColor = getRandomColor();    
    }else{
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}