let canvas = document.querySelector("#juego");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let radius = 15;
let cantFichas = 10;
let cajaFichas = []; /*donde guardo mis fichas*/
let isMouseDown = false;
let ultimaFichaClikeada = null;
let tablero = null;
let columna = 0;
let fila = 0;
let maxFila = 8;
let maxColumna = 8;
let circulo = null;
let turno = false;




//CREO EL TABLERO VACIO
function tableroVacio() {
    tablero = new Tablero(200, 0, 600, 500, '#ff0000', ctx);
    tablero.draw();

    let posY = 50;
    let posX = 50;
    for (let i = 0; i < maxFila; i++) {
        for (let j = 0; j < maxColumna; j++) {
            circulo = new Ficha(320 + posX * j, 70 + posY * i, '#000000', ctx);
            circulo.draw();
        }
    }
}
//CREO LAS CAJAS DE LAS FICHAS PARA CADA JUGADOR
function cajaFichasJugador1() {

    let cajaFichasAzul = new Tablero(0, 0, 200, 500, '#ff0000', ctx);
    cajaFichasAzul.draw(); /*DIBUJO LA CAJA DONDE VAN LAS FICHAS AZULES*/
    for (let i = 0; i < cantFichas; i++) {
        addFichaAzul();
    }
}

function cajaFichasJugador2() {

    let cajaFichasRojas = new Tablero(800, 0, 200, 500, '#ff0000', ctx);
    cajaFichasRojas.draw();
    for (let i = 0; i < cantFichas; i++) {
        addFichaRoja();
    }
}
//CREO LAS FICHAS
function addFichaRoja() {

    let posY = Math.round(Math.random() * 200);
    let posX = Math.round(Math.random() * 100);

    let fichaJuegoRoja = new Ficha(20 + posX, 20 + posY, '#ff0000', ctx);
    fichaJuegoRoja.draw();
    cajaFichas.push(fichaJuegoRoja);
}

function addFichaAzul() {

    let posY = Math.round(Math.random() * 200);
    let posX = Math.round(Math.random() * 100);

    let fichaJuegoAzul = new Ficha(850 + posX, 250 + posY, '#0000ff', ctx);
    fichaJuegoAzul.draw();
    cajaFichas.push(fichaJuegoAzul);
}
//BORRA EL CANVAS Y LO REDIBUJA TODO
function drawFichas() {
    limpiaCanvas();
    for (let i = 0; i < cajaFichas.length; i++) {
        cajaFichas[i].draw();
        tableroVacio();
    }
}

function limpiaCanvas() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

//EVENTOS DEL MOUSE
function onMouseDown(e) {
    isMouseDown = true;
    ultimaFichaClikeada = null;
    let clickFicha = fichaClikeada(e.layerX, e.layerY);
    if (clickFicha != null) {
        ultimaFichaClikeada = clickFicha;
    }
    drawFichas();
}

function onMouseMove(e) {
    if (isMouseDown && ultimaFichaClikeada != null) {
        ultimaFichaClikeada.setPosicion(e.layerX, e.layerY);
        drawFichas();
    }
}

function onMouseUp(e) {
    isMouseDown = false;
    drawFichas();
}

function fichaClikeada(x, y) {
    for (let i = 0; i < cajaFichas.length; i++) {
        const elemento = cajaFichas[i];
        if (elemento.isClickedCirculo(x, y)) {
            return elemento;
        }
    }
}


cajaFichasJugador1();
cajaFichasJugador2();
tableroVacio();

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);