

let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let radius = 15;
let array = [];
let contadorRojo = 0;
let contadorAzul = 0;
let cantFichas = 10;

document.querySelector("#reiniciar").addEventListener("click",iniciarJuego);


for (let i = 0; i < cantFichas; i++){
    let fichaJuegoRoja = new Ficha(10+radius,radius + 2*radius*i,'#ff0000',ctx, radius);
    let fichaJuegoAzul = new Ficha(50+radius,radius + 2*radius*i,'#0000ff',ctx, radius);
    fichaJuegoRoja.draw(canvas.width);
    fichaJuegoAzul.draw(canvas.width);
    array.push(fichaJuegoRoja);
    array.push(fichaJuegoAzul);
}

canvas.addEventListener("click", function(event){
    for (let i=0; i<array.length; i++){
        if (array[i].isClickedCirculo(getMousePos(canvas, event))){
            if (array[i].color == '#ff0000'){
                contadorRojo++;
            }else{
                contadorAzul++;
            }
            console.log("ROJO: " + contadorRojo + " - AZUL: " + contadorAzul);
            verificarContador();
        }
    }
})

function getMousePos(canvas, evt) {
    let ClientRect = canvas.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top)
    }
}

function verificarContador(){
    if(contadorRojo == 3){
        alert("GANO EL EQUIPO ROJO");
    }else if(contadorAzul == 3){
        alert("GANO EL EQUIPO AZUL");
    }
}

function iniciarJuego(){
    contadorRojo = 0;
    contadorAzul = 0;
}
