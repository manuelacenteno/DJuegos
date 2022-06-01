import { Component, OnInit } from '@angular/core';
import { Juego, Lista } from './../juegos-list/juego';
import { JuegosListComponent } from '../juegos-list/juegos-list.component';

@Component({
  selector: 'app-juegos-similares',
  templateUrl: './juegos-similares.component.html',
  styleUrls: ['./juegos-similares.component.scss']
})
export class JuegosSimilaresComponent implements OnInit {

  juegos: Juego[] = [
    {
      id: 8,
      nombre: "Las Aventuras de Pepito",
      imagen: "assets/img/juegoAccion3.jpg"
    },
    {
      id: 9,
      nombre: "Aventuras 2.0, la Venganza de los Sith",
      imagen: "assets/img/juegoAccion1.jpg"
    },
    {
      id: 10,
      nombre: "El señor de los Anillos: el retorno del Rey",
      imagen: "assets/img/juegoAccion2.webp"
    },
    {
      id: 11,
      nombre: "Age of Mitology: Las Eras de la Mitología",
      imagen: "assets/img/juegoAccion3.jpg"
    },{
      id: 11,
      nombre: "Age of Mitology: Las Eras de la Mitología",
      imagen: "assets/img/juegoAccion3.jpg"
    },
    {
      id: 12,
      nombre: "Diablo III",
      imagen: "assets/img/juegoAccion1.jpg"
    }
  ]

  constructor() {
   }

  ngOnInit(): void {
  }

}
