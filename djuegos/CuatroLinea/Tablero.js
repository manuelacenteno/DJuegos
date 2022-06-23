class Tablero {

    constructor(posX, posY, width, height, color, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = ctx;
        /*this.resaltado = resaltado;
        this.resaltadoEstilo = '#000000';*/

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

    setResaltado(resaltado) {
        this.resaltado = resaltado;
    }

    draw() {
        this.ctx.beginPath();

        this.ctx.strokeRect(this.posX, this.posY, this.width, this.height);
        //this.ctx.fillStyle = this.color;


        /* if (resaltado === true) {
             this.ctx.strokeStyle = this.resaltadoEstilo;
             this.ctx.lineWidth = 3;
             this.ctx.strokeRect(this.posX, this.posY, this.width, this.height);
         }*/



    }

}