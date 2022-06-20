export class Tablero{

    posY: number;
    posX: number;
    ctx: CanvasRenderingContext2D;
    width: number;
    height:number;

    constructor(posX:number, posY:number, width:number, height:number, ctx: CanvasRenderingContext2D) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
    }

    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }

    draw() {
        this.ctx.beginPath();
        //this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        this.ctx.strokeRect(this.posX, this.posY, this.width, this.height);
        //this.ctx.fillStyle = this.color;
        this.ctx.fill();



    }

}