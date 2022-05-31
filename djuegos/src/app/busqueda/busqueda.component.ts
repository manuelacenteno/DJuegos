import { Component, OnInit } from '@angular/core';
import {Juego} from './juego';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  juegos: Juego [] =
  [{
    id: 1,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 2,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 3,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 4,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 5,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 6,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 7,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 8,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 9,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 10,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 11,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
