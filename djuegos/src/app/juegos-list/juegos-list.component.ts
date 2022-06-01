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
  }]
}, {
  categoria: "Aventuras",
  juegos : [{
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
    nombre: "Diablo III",
    imagen: "assets/img/juegoAccion1.jpg"
  }]
}];

  constructor() { }

  ngOnInit(): void {
  }

  getCategorias(): Lista[]{
    return this.categorias;
  }
}
