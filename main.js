
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d',{alpha: false});
const cw = 500;
const ch = 500;
canvas.width = cw;
canvas.height = ch;
/*Botones*/
const btnRect = document.getElementById("B-rectangulo");
const btnRectStroke = document.getElementById("B-rectanguloStroke");
const btnClean = document.getElementById("B-borrar");
const btnArc = document.getElementById("B-arc");
const btnRectFull = document.getElementById("B-rectangulo-full");

btnRect.addEventListener("click",() => drawRectArea(50,50));
btnRectStroke.addEventListener("click",() => drawRectStroke(50,50));
btnClean.addEventListener("click",limpiarCanvas);
btnArc.addEventListener("click",() => drawArc(30));
btnRectFull.addEventListener("click",() => drawRectAreaFull());

/*Inputs*/
const inputX = document.getElementById("fillRect-x-input");
const inputY = document.getElementById("fillRect-y-input");
const inputW = document.getElementById("fillRect-width-input");
const inputH = document.getElementById("fillRect-height-input");

inputX.addEventListener("input",() => drawRectAreaFull());
inputY.addEventListener("input",() => drawRectAreaFull());
inputW.addEventListener("input",() => drawRectAreaFull());
inputH.addEventListener("input",() => drawRectAreaFull());


function drawRectArea(x,y){
    limpiarCanvas();
    ctx.fillStyle = document.getElementById("color-selector-fill").value;
    ctx.fillRect((cw-x)/2,(ch-y)/2,x,y);
}
function drawRectStroke(x,y){
    limpiarCanvas();
    ctx.strokeStyle = document.getElementById("color-selector-stroke").value;
    ctx.strokeRect((cw-x)/2,(ch-y)/2,x,y);
}
function limpiarCanvas(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
}
function drawArc(x){
    limpiarCanvas();
    ctx.fillStyle = document.getElementById("color-selector-fill").value;
    ctx.strokeStyle = document.getElementById("color-selector-stroke").value;
    ctx.beginPath();
    ctx.arc(cw/2,ch/2,x,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();
}

function drawRectAreaFull(){
    limpiarCanvas();
    ctx.fillStyle = document.getElementById("color-selector-fill").value;
    ctx.fillRect(inputX.value,
                 inputY.value,
                 inputW.value,
                 inputH.value);
}
