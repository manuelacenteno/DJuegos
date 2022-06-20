export class Ficha{

    posY: number;//posY?: number con el simbolo ? especifico que no tiene nada
    posX: number;
    color: string;
    ctx: CanvasRenderingContext2D;
    radio: number;

    constructor(posY:number,posX:number,color:string,ctx:CanvasRenderingContext2D){
        this.posY =posY;
        this.posX =posX;
        this.color= color;
        this.radio=15;
        this.ctx=ctx;
        
    }
    getPosY(){
        return this.posY;
    }
    getPosX(){
    return this.posX;
    }
    getColor(){
        return this.color;
    }
    getCtx(){
        return this.ctx;
    }
    getRadio(){
        this.radio;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);

        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    
    }
}