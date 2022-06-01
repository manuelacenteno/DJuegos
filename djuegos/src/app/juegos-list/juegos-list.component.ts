import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { Lista } from './juego';

@Component({
  selector: 'app-juegos-list',
  templateUrl: './juegos-list.component.html',
  styleUrls: ['./juegos-list.component.scss']
})
export class JuegosListComponent implements OnInit {

 categorias: Lista[] = [{
  categoria: "Acción",
  juegos : [{
    id: 1,
    nombre: "Star Wars, el Despertar de la Fuerza",
    imagen: "assets/img/juegoAccion1.jpg"
  },
  {
    id: 2,
    nombre: "Star Wars, la Venganza de Mace Windu contra Obi Wan que no ví",
    imagen: "assets/img/juegoAccion2.webp"
  },
  {
    id: 3,
    nombre: "El señor de los Anillos",
    imagen: "assets/img/juegoAccion3.jpg"
  },
  {
    id: 4,
    nombre: "Roblox",
    imagen: "assets/img/juegoAccion1.jpg"
  },
  {
    id: 5,
    nombre: "Age of Empires",
    imagen: "assets/img/juegoAccion2.webp"
  },
  {
    id: 6,
    nombre: "World of Warcraft",
    imagen: "assets/img/juegoAccion3.jpg"
  },
  {
    id: 7,
    nombre: "Roblox 2, la venganza",
    imagen: "assets/img/juegoAccion1.jpg"
  }]
}, {
  categoria: "Aventuras",
  juegos : [{
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
  },
  {
    id: 12,
    nombre: "Diablo III",
    imagen: "assets/img/juegoAccion1.jpg"
  },
  {
    id: 13,
    nombre: "Pacman",
    imagen: "assets/img/juegoAccion3.jpg"
  }]
}, {
  categoria: "Multijugador",
  juegos : [{
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
  },
  {
    id: 12,
    nombre: "Diablo III",
    imagen: "assets/img/juegoAccion1.jpg"
  },
  {
    id: 13,
    nombre: "Pacman",
    imagen: "assets/img/juegoAccion3.jpg"
  }]
}, {
  categoria: "Clásicos",
  juegos : [{
    id: 8,
    nombre: "Los juegos clásicos más clásicos del mundo",
    imagen: "assets/img/juegoAccion3.jpg"
  },
  {
    id: 9,
    nombre: "Aventuras 2.0, la Venganza de los Sith",
    imagen: "assets/img/juegoAccion1.jpg"
  },
  {
    id: 10,
    nombre: "El Hobbit",
    imagen: "assets/img/juegoAccion2.webp"
  },
  {
    id: 11,
    nombre: "Minecraft",
    imagen: "assets/img/juegoAccion3.jpg"
  },
  {
    id: 12,
    nombre: "jahsdkahsdhakd",
    imagen: "assets/img/juegoAccion1.jpg"
  },
  {
    id: 13,
    nombre: "Pacman",
    imagen: "assets/img/juegoAccion3.jpg"
  }]
}];

  constructor() { }

  ngOnInit(): void {
  }

  getCategorias(): Lista[]{
    return this.categorias;
  }

}
