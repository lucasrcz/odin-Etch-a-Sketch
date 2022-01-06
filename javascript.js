//UI
const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
const reset = document.querySelector('#reset') 
const eraser = document.querySelector('#eraser') 
const rainbow = document.querySelector('#rainbow')
const black = document.querySelector('#black')

//Setamos o default da página para 16x16 e aplicamos o hoover
chooseGrid(16)
applyHover('black')

black.addEventListener('click', function(){
    applyHover('black')
})
rainbow.addEventListener('click', function(){
    let arrRainbow = ['#9400D3','#4B0082','#0000FF','#00FF00','#FFFF00',' #FF7F00','#FF0000']
    cell= document.querySelectorAll('.cell') 
    cell.forEach(function hoverEffect(cell){
        cell.addEventListener('mouseover', function(e){ 
        cell.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        });
    })
})
eraser.addEventListener('click', function(){ 
    applyHover('white')
})
reset.addEventListener('click', function(){ // Botão de reset funcao de click
    empty(container) // chama a função para remover todos os filhos do container para um novo grid seja lancado
    anwser = prompt('Choose a new dimension for the grid(max:100):',)
    Number(anwser)
    while(anwser>100){
        empty(container)
        anwser = prompt('Enter a valid dimension:',)
        Number(anwser)   
    }
    chooseGrid(anwser) 
    applyHover('black')
    
})
function applyHover(color){ //Com essa função reaplicamos o hover quando quisermos
    cells= document.querySelectorAll('.cell') 
    cells.forEach(function hoverEffect(cell){
        cell.addEventListener('mouseover', function(e){ 
        cell.style.backgroundColor = "" + color
        });
    })
}
function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
}
function chooseGrid(dimesion){
    createRows(dimesion)
    createColumn(dimesion)
}

function createRows(rowNum){
    for(let i = 0 ; i < rowNum ; i++){
        let row = document.createElement('div')
        container.appendChild(row).className = 'gridRow'
    }
}

function createColumn(cellNum){
    for(let i = 0 ; i < rows.length ; i++){
        for(let j = 0; j < cellNum ; j++ ){
        let newCell = document.createElement('div')
        rows[j].appendChild(newCell).className = 'cell'
        }
    }
}