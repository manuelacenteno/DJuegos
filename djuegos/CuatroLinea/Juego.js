let canvas = document.querySelector("#juego");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let radius = 15;
let cantFichas = 10;
let cajaFichasAzul = []; /*donde guardo mis fichas*/
let cajaFichasRoja = [];

let tablero = new Tablero(200, 0, 600, 500, '#ff0000', ctx);
tablero.draw();


function tableroJugador1() {

    let tableroFichasAzul = new Tablero(0, 0, 200, 500, '#ff0000', ctx);
    tableroFichasAzul.draw();
    addFichasAzul();
}

function tableroJugador2() {

    let tableroFichasRojas = new Tablero(800, 0, 200, 500, '#ff0000', ctx);
    tableroFichasRojas.draw();
    addFichasRoja();
}

/*function tableroCirculos() {
    let posY = Math.random() * 100;
    let posX = Math.random() * 200;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; i++) {
            let circulo = new Ficha(200 + posX, posY, '#ffffff', ctx);
            circulo.draw();
        }
    }
}*/



//AGREGO FICHAS 
function addFichasRoja() {
    for (let i = 0; i < cantFichas; i++) {
        let posY = Math.random() * 500;
        let posX = Math.random() * 200;

        let fichaJuegoRoja = new Ficha(posX, posY, '#ff0000', ctx);
        fichaJuegoRoja.draw();
        cajaFichasRoja.push(fichaJuegoRoja);
    }
}

function addFichasAzul() {
    for (let i = 0; i < cantFichas; i++) {
        let posY = Math.random() * 500;
        let posX = Math.random() * 200;

        let fichaJuegoAzul = new Ficha(800 + posX, posY, '#0000ff', ctx);
        fichaJuegoAzul.draw();
        cajaFichasAzul.push(fichaJuegoAzul);
    }
}

tableroJugador1();
tableroJugador2();