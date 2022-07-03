let container = document.getElementById('container');

for(let i=1; i<=256; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add('grid', `${i}`);
    container.appendChild(newDiv);
}