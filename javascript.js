//UI
const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
const reset = document.querySelector('#reset') 
const eraser = document.querySelector('#eraser') 
const rainbow = document.querySelector('#rainbow')

//Setamos o default da página para 16x16 e aplicamos o hoover
chooseGrid(16)
applyHover('black')

rainbow.addEventListener('click', function(){
    let arrRainbow = ['#7734EA','#00A7EA','#8AE800','#FAF100','#FFAA00',' #FF0061']
    for(let i = 0 ; i<arrRainbow.length ; i++){
    let randomColor = Math.floor(Math.random()*6);
    let color = arrRainbow[randomColor];
    console.log(color);
    applyHover(color)}
})
eraser.addEventListener('click', function(){ 
    applyHover('white')
})
reset.addEventListener('click', function(){ // Botão de reset funcao de click
    empty(container) // chama a função para remover todos os filhos do container para um novo grid seja lancado
    anwser = prompt('Choose a new dimension for the grid(max:100):',)
    Number(anwser)
    if(anwser>100){
        empty(container)
        anwser = prompt('Enter a valid dimension:',)
        Number(anwser)   
    }
    chooseGrid(anwser) 
    applyHover()
    
})
function applyHover(color){ //Com essa função reaplicamos o hover quando quisermos
    cell= document.querySelectorAll('.cell') 
    cell.forEach(function hoverEffect(cell){
        cell.addEventListener('mouseover', function(e){ 
        cell.style.backgroundColor = ""+color
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
