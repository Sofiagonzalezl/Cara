let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getcontext ("2d");
class personaje {
    constructor(Jx,y,angle,r){
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.r = r;
    }
    dibujarse ( ){
    ctx.translate (this.x), this.y;
    ctx.arc(0,0,this.r, 0.25 * math.PI, 0.75 * Math.PI)
    ctx.baginPath();
    ctx.stroke();
    ctx.rotate(-this.angle)
    ctx.translate(-this.x,-this.y);
let happy = new personaje(200,100,0,50);
happy.dibujarse();
let Santi = new personaje(200,250,0,30);
Santi.dibujarse();
    }
}