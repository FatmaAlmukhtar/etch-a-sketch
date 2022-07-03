let container = document.getElementById('container');
let grid = document.getElementsByClassName('grid');

for(let i=1; i<=256; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add('grid', `${i}`);
    container.appendChild(newDiv);
}

for(let i=0; i<grid.length; i++) {
    grid.item(i).addEventListener('mouseover', () => {
        grid.item(i).style.backgroundColor = 'red';
    })
}
