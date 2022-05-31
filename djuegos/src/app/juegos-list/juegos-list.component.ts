import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';

@Component({
  selector: 'app-juegos-list',
  templateUrl: './juegos-list.component.html',
  styleUrls: ['./juegos-list.component.scss']
})
export class JuegosListComponent implements OnInit {

  juegos: Juego[] = [{
    id: 1,
    nombre: "Roblox",
    tipo: " Aventura",
    calificacion:3,
    imagen: "assets/img/juegoAventura1.jpg"
  },
  {
    id: 2,
    nombre: "Roblox",
    tipo: " Accion",
    calificacion:2,
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
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
