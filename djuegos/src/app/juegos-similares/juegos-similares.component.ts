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
      id: 1,
      nombre: "Pac-Man 3D RTX",
      imagen: "assets/img/JuegosPacMan/Pac-Man3DRtx.png"
    },
    {
      id: 2,
      nombre: "Pac-Xon",
      imagen: "assets/img/JuegosPacMan/Pac-Xon.jpg"
    },
    {
      id: 3,
      nombre: "PacmanSky",
      imagen: "assets/img/JuegosPacMan/PacManSky.webp"
    },
    {
      id: 4,
      nombre: "Pac-Xon Deluxe",
      imagen: "assets/img/JuegosPacMan/Pac-XonDeluxe.webp"
    },{
      id: 5,
      nombre: "PacMan Collection",
      imagen: "assets/img/JuegosPacMan/PacManCollection.webp"
    },
    {
      id: 6,
      nombre: "Pac-Man-io",
      imagen: "assets/img/JuegosPacMan/Pac-Man-io.jpg"
    }
  ]

  constructor() {
   }

  ngOnInit(): void {
  }

}
