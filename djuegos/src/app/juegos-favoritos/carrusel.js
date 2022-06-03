'use strict'

const grande = document.querySelector('.grande')
const boton = document.querySelectorAll('.boton')


boton.addEventListener('click', () => {

    // Guardar la posición de ese PUNTO
    let posicion = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
    let operacion = posicion * -50

    // MOVEMOS el grand
    listaCard.style.transform = `translateX(${ operacion }%)`

})