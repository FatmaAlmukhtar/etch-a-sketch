const container = document.getElementById('container');
let grid = document.querySelectorAll('grid');
const btnColor = document.querySelector('.btn.color');
const colorPicker = document.querySelector('.colorPicker');
const eraser = document.querySelector('.btn.eraser');
const rainbow = document.querySelector('.btn.rainbow');
const slider = document.querySelector('.slider');
let currentSize = document.querySelector('span');

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

slider.addEventListener('input', () => {
    currentSize.textContent = slider.value + '×' + slider.value;
    
})

slider.addEventListener('mouseup', () => {
    size = slider.value
    generateGrid(size);
    activatePen();
})

colorPicker.addEventListener('input', () => {
    rainbowActive = false;
    if (colorPicker.value === '#ffffff') {
        color = colorPicker.value;
        btnColor.style.backgroundColor = color;
        colorPicker.style.backgroundColor = color;
        container.style.cursor = 'crosshair';
        btnColor.style.color = 'black';
        btnColor.style.boxShadow = "#000 4px 4px 0 0, #000 4px 4px 0 1px";
    }
    else {
        color = colorPicker.value;
        btnColor.style.backgroundColor = color;
        colorPicker.style.backgroundColor = color;
        container.style.cursor = 'crosshair';
        btnColor.style.color = 'white';
        btnColor.style.boxShadow = "#fff 4px 4px 0 0, #000 4px 4px 0 1px";
    }
    color = colorPicker.value;
    btnColor.style.backgroundColor = color;
    colorPicker.style.backgroundColor = color;
    container.style.cursor = 'crosshair';
})

colorPicker.addEventListener('click', () => {
    rainbowActive = false;
    color = colorPicker.value;
})

eraser.addEventListener('click', () => {
    rainbowActive = false;
    color = '#fff';
    activatePen();
    container.style.cursor = 'cell';
})

rainbow.addEventListener('click', () => {
    rainbowActive = true;
})