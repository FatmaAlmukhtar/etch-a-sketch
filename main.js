let container = document.getElementById('container');
let grid = document.querySelectorAll('grid');
let newGrid = document.querySelector('.btn.newGrid');
let btnColor = document.querySelector('.btn.color');
let colorPicker = document.querySelector('input');
let eraser = document.querySelector('.btn.eraser');
let color = 'red';
let drag = false;

container.addEventListener('mousedown', () => {
    drag = true;
});
container.addEventListener('mouseup', () => {
    drag = false;
});

window.addEventListener('load', () => {
    generateGrid(16);
    activatePen();
})

function generateGrid(size) {
    
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

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
            if (drag) grid.item(i).style.backgroundColor = color;
        })
    }
}

newGrid.addEventListener('click', () => {
    size = prompt('Enter the grid size');
    if(size<=80) {
        generateGrid(size);
        activatePen();
    }
    else alert('Please choose a grid size no larger than 80 pixels'); 
})

colorPicker.addEventListener('input', () => {
    color = colorPicker.value;
    btnColor.style.backgroundColor = color;
    btnColor.style.border = color;
    btnColor.style.boxShadow = `#fff 4px 4px 0 0, ${color} 4px 4px 0 1px`;
    colorPicker.style.backgroundColor = color;
    container.style.cursor = 'crosshair';
})

eraser.addEventListener('click', () => {
    color = '#fff';
    activatePen();
    container.style.cursor = 'cell';
})
