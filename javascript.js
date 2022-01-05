const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');



chooseGrid()

let cell= document.querySelectorAll('.cell') //Chama uma lista estática de node da classe .cell para trabalhar com ForEach 
cell.forEach(function(cellHover){ // Aplica a função de EventListener com o forEach para cada elemento da classe .cell
cellHover.addEventListener('mouseover', function(e){ // Adiciona um eventlistener para cada cell da grid
cellHover.style.backgroundColor = 'black'
});
})
function chooseGrid(){
    createRows(64)
    createColumn(64)
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
