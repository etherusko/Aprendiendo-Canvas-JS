const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d',{alpha: false});
const cw = 500;
const ch = 500;
canvas.width = cw;
canvas.height = ch;
ctx.fillStyle = 'orange';
//ctx.fillRect(0,0,30,30);
//  dibujarRectangulo(50,50);
function dibujarRectangulo(x,y){
    ctx.fillRect(cw/2-x,ch/2-y,x,y);
}