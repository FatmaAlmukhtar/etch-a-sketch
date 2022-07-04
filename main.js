let container = document.getElementById('container');
let grid = document.querySelectorAll('grid');
let newGrid = document.querySelector('button');

window.addEventListener('load', () => {
    generateGrid(16);
    activatePen();
})

function generateGrid(size) {
    
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 10px)`;
    container.style.gridTemplateRows = `repeat(${size}, 10px)`;

    for(let i=1; i<=(size*size); i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('grid', `${i}`);
        container.appendChild(newDiv);
    }
    grid = document.getElementsByClassName('grid');
}

function activatePen() {
    for(let i=0; i<grid.length; i++) {
        grid.item(i).addEventListener('mouseover', () => {
            grid.item(i).style.backgroundColor = 'red';
        })
    }
}

newGrid.addEventListener('click', () => {
    size = prompt('Enter the grid size');
    if(size<=100) {
        generateGrid(size);
        activatePen();
    }
    else alert('Please choose a grid size no larger than 100 pixels'); 
})