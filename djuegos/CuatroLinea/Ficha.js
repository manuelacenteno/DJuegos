class Ficha {

    constructor(posX, posY, color, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.ctx = ctx;
        this.radio = 15;
        let img = new Image();
        img.src = "Icono.png";

    }

    getPosX() {
        return this.posX;
    }

    setPosX(x) {
        this.posX = x;
    }

    getPosY() {
        return this.posY;
    }

    setPosY(y) {
        this.posY = y;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
    getPosicion() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        }
    }
    setPosicion(x, y) {
        this.posX = x;
        this.posY = y;
    }


    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);

        this.ctx.fillStyle = this.color;
        this.ctx.fill();

        /* img.onload = function() {
             this.ctx.drawImage(img, 50, 50);
         }
         img.src = "Icono.png";*/
    }

    isClickedCirculo(posicion) {
        if (Math.sqrt((posicion.x - this.posX) * (posicion.x - this.posX) + (posicion.y - this.posY) * (posicion.y - this.posY)) <=
            this.radio) {
            return true;
        } else {
            return false;
        }
    }

}