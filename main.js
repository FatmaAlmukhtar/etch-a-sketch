let container = document.getElementById('container');
let grid = document.querySelectorAll('grid');
let newGrid = document.querySelector('.btn.newGrid');
let btnColor = document.querySelector('.btn.color');
let colorPicker = document.querySelector('input');
let eraser = document.querySelector('.btn.eraser');
let rainbow = document.querySelector('.btn.rainbow');

let color = '#00FFD5';
let drag = false;
let rainbowActive = false;

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
            if (rainbowActive) {
                /* random RGB color
                r = Math.floor(Math.random() * 256);
                g = Math.floor(Math.random() * 256);
                b = Math.floor(Math.random() * 256);
                color = `rgb(${r},${g},${b})`; */

                /* random HSL(hue, saturation, lightness) color */
                h = Math.floor(Math.random() * 360);
                color = `hsl(${h}, 100%, 60%)`;
                
                /* random HEX color
                hex = Math.floor(Math.random() * 0xffffff);
                color = `#${hex.toString(16)}`;*/
            }
            if (drag) grid.item(i).style.backgroundColor = color;
        })
    }
}

newGrid.addEventListener('click', () => {
    size = prompt('Enter the grid size');
    if(size<=80 && size>=4) {
        generateGrid(size);
        activatePen();
    }
    else alert('Please choose a grid size 4 to 80 pixels'); 
})

colorPicker.addEventListener('input', () => {
    rainbowActive = false;
    color = colorPicker.value;
    btnColor.style.backgroundColor = color;
    colorPicker.style.backgroundColor = color;
    container.style.cursor = 'crosshair';
})

eraser.addEventListener('click', () => {
    color = '#fff';
    activatePen();
    container.style.cursor = 'cell';
})

rainbow.addEventListener('click', () => {
    rainbowActive = true;
})