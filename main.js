
const canvas = document.getElementById('canvas')

const ctx = canvas.getContext('2d',{alpha: false});
const cw = 500;
const ch = 500;
canvas.width = cw;
canvas.height = ch;

const btnRect = document.getElementById("B-rectangulo");
const btnClean = document.getElementById("B-borrar");
btnRect.addEventListener("click",() => dibujarRectangulo(50,50));
btnClean.addEventListener("click",limpiarCanvas);

ctx.strokeStyle = 'orange';
ctx.strokeRect(0,0,25,52);

function dibujarRectangulo(x,y){
    ctx.fillStyle = 'orange';
    ctx.fillRect((cw-x)/2,(ch-y)/2,x,y);
}
function limpiarCanvas(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
}
