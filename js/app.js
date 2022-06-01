const canvas = document.querySelector("#canvas");
const container = document.querySelector(".container");
const size = document.querySelector("#size");
const gridLength = 16;//default grid dimension

// Creating Grid
createGrid(gridLength);
//getting size of grid

size.addEventListener('click', ()=>{
        canvas.textContent = '';
        gridlength = prompt('Please enter size of the grid');
        createGrid(gridlength);
})

function createGrid(l){
    for(j=0; j<l; j++){
        const div = document.createElement('div');
        div.classList.add('width');
        for(i=0; i<l; i++){
            const childDiv = document.createElement('div');
            childDiv.classList.add('pixel');
            childDiv.setAttribute('id', `px-${j}${i}`);
            div.appendChild(childDiv);
        }
        canvas.appendChild(div);
    }
}


// coloring the grid
const pixel = document.querySelectorAll(".pixel");

pixel.forEach((pix)=>{
    pix.addEventListener('mouseover', (e)=>{
      console.log( e.target);
    });
});







