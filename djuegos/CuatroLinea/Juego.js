let canvas = document.querySelector("#juego");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let radius = 15;
let cantFichas = 10;
let cajaFichas = []; /*donde guardo mis fichas*/
let isMouseDown = false;
let lastClikedFicha = null;


let tablero = new Tablero(200, 0, 600, 500, '#ff0000', ctx);
tablero.draw();

function cajaFichasJugador1() {

    let cajaFichasAzul = new Tablero(0, 0, 200, 500, '#ff0000', ctx);
    cajaFichasAzul.draw();
    for (let i = 0; i < cantFichas; i++) {
        addFichasAzul();
    }
}

function cajaFichasJugador2() {

    let cajaFichasRojas = new Tablero(800, 0, 200, 500, '#ff0000', ctx);
    cajaFichasRojas.draw();
    for (let i = 0; i < cantFichas; i++) {
        addFichasRoja();
    }
}
//creo el tablero
function tableroCirculos() {
    let posY = 50;
    let posX = 50;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {

            let circulo = new Ficha(250 + posX * j, 50 + posY * i, '#000000', ctx);
            circulo.draw();
        }
    }
}
tableroCirculos();




//AGREGO FICHAS 
function addFichasRoja() {

    let posY = Math.random() * 500;
    let posX = Math.random() * 200;

    let fichaJuegoRoja = new Ficha(posX, posY, '#ff0000', ctx);
    fichaJuegoRoja.draw();
    cajaFichas.push(fichaJuegoRoja);
}


function addFichasAzul() {

    let posY = Math.random() * 500;
    let posX = Math.random() * 200;

    let fichaJuegoAzul = new Ficha(800 + posX, posY, '#0000ff', ctx);
    fichaJuegoAzul.draw();
    cajaFichas.push(fichaJuegoAzul);
}


function findClikedFicha(x, y) {
    for (let i = 0; i < cajaFichas.length; i++) {
        const elemento = cajaFichas[i];
        if (elemento.isClickedCirculo(x, y)) {
            return elemento;
        }
    }

}

function onMouseDown(e) {
    isMouseDown = true;
    if (lastClikedFicha != null) {
        lastClikedFicha = null;
    }
    let clickFicha = findClikedFicha(e.layerX, e.layerY);
    if (clickFicha != null) {
        lastClikedFicha = clickFicha;
    }
    /*addFichasAzul();
    addFichasRoja();*/
    console.log("si");
}

function onMouseMove(e) {
    if (isMouseDown && lastClikedFicha != null) {
        lastClikedFicha.setPosicion(e.layerX, e.layerY);
    }
    /*addFichasAzul();
    addFichasRoja();*/
    console.log("no");
}

function onMouseUp(e) {
    isMouseDown = false;

}

cajaFichasJugador1();
cajaFichasJugador2();

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

/*setTimeout(() => {
    addFichasAzul();
    addFichasRoja();
}, 333);*/