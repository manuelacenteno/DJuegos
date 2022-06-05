import { Component, OnInit } from '@angular/core';
import { Juego } from './../juegos-list/juego';

@Component({
  selector: 'app-juegos-favoritos',
  templateUrl: './juegos-favoritos.component.html',
  styleUrls: ['./juegos-favoritos.component.scss']
})
export class JuegosFavoritosComponent implements OnInit {

  

  juegos: Juego[] = [
    {
      id: 1,
      nombre: "Las Aventuras de Pepito",
      imagen: "assets/img/juegoAccion3.jpg"
    },
    {
      id: 2,
      nombre: "Aventuras 2.0, la Venganza de los Sith",
      imagen: "assets/img/juegoAccion1.jpg"
    },
    {
      id: 3,
      nombre: "El señor de los Anillos: el retorno del Rey",
      imagen: "assets/img/juegoAccion2.webp"
    },
    {
      id: 4,
      nombre: "Age of Mitology: Las Eras de la Mitología",
      imagen: "assets/img/juegoAccion3.jpg"
    },
    {
      id: 5,
      nombre: "Age of Mitology: Las Eras de la Mitología",
      imagen: "assets/img/juegoAccion3.jpg"
    },
    {
      id: 6,
      nombre: "Diablo III",
      imagen: "assets/img/juegoAccion1.jpg"
    },
    {
      id: 7,
      nombre: "Age of Mitology: Las Eras de la Mitología",
      imagen: "assets/img/juegoAccion3.jpg"
    },
    {
      id: 8,
      nombre: "Diablo III",
      imagen: "assets/img/juegoAccion1.jpg"
    },
    {
      id: 9,
      nombre: "Age of Mitology: Las Eras de la Mitología",
      imagen: "assets/img/juegoAccion3.jpg"
    },
    {
      id: 10,
      nombre: "Diablo III",
      imagen: "assets/img/juegoAccion1.jpg"
    },
    {
      id: 11,
      nombre: "Age of Mitology: Las Eras de la Mitología",
      imagen: "assets/img/juegoAccion3.jpg"
    },
    {
      id: 12,
      nombre: "Diablo III",
      imagen: "assets/img/juegoAccion1.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
