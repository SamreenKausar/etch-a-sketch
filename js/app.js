const canvas = document.querySelector("#canvas");
const container = document.querySelector(".container");
const random = document.querySelector("#random");
const size = document.querySelector("#size");
let gridLength = 16;//default grid dimension

// Creating Grid
createGrid(gridLength);
let pixel = document.querySelectorAll(".pixel");
paint(pixel);
//getting size of grid

size.addEventListener('click', ()=>{
        canvas.textContent = '';
        gridlength = prompt('Please enter size of the grid');
        createGrid(gridlength);
        pixel = document.querySelectorAll(".pixel");
        paint(pixel);
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
function paint (pixel){
    pixel.forEach(pix => {
        pix.addEventListener('mouseover', (e)=>{
           
            e.target.classList.add('brush'); 
            e.target.style.backgroundColor = random_rgba();          
        });
    });
}

function random_rgba() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return`rgb(${r},${g},${b})`;

}







